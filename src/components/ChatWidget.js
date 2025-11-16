import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { 
  sendChatMessage, 
  submitChatClientData, 
  scheduleChatCall, 
  markChatMessagesAsRead, 
  closeChatSession,
  chatHelpers 
} from '../chatApiServices';
import './ChatWidget.css';


// Environment-based Socket.IO configuration
const getSocketConfig = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (isLocalhost) {
    // LOCAL DEVELOPMENT - Use HTTP (not HTTPS)
    return {
      url: 'http://localhost:8000',  // Note: HTTP not HTTPS
      options: {
        transports: ['websocket', 'polling'],
        path: '/socket.io',
        pingTimeout: 60000,
        pingInterval: 25000,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        timeout: 20000,
        forceNew: true
      }
    };
  } else {
    // PRODUCTION
    return {
      url: 'https://www.wayuptechn.com',  // ADD "url: " here
      options: {
        transports: ['websocket', 'polling'],
        path: '/socket.io',
        pingTimeout: 60000,
        pingInterval: 25000,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        timeout: 20000,
        forceNew: true
      }
    };
  }
};

// Initialize Socket.IO connection
const { url, options } = getSocketConfig();
console.log('💬 Connecting to Socket.IO:', url);
const socket = io(url, options);


// const SOCKET_URL = window.location.hostname === 'localhost'
//   ? 'https://localhost:8000'
//   : 'https://wayuptechn.com';    


// const socket = io(SOCKET_URL, {
//   transports: ['websocket', 'polling'],
//   path: '/socket.io',
//   pingTimeout: 60000,
//   pingInterval: 25000,
//   reconnection: true,
//   reconnectionDelay: 1000,
//   reconnectionAttempts: 5
// });

const ChatWidget = () => {
  // Generate unique session ID for this chat instance
  const [sessionId] = useState(() => chatHelpers.generateSessionId());
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  // Add welcome message only once
  useEffect(() => {
    const welcomeMessage = {
      id: `msg_${Date.now()}_welcome`,
      type: 'system',
      content: 'Hello! Welcome to WayUP Technology. How can we help you today?',
      timestamp: new Date(),
      sender: 'Support Team'
    };
    
    setMessages(prev => {
      // Only add if no messages exist yet
      if (prev.length === 0) {
        return [welcomeMessage];
      }
      return prev;
    });
  }, []);
  
  // Enhanced client data collection with session tracking
  const [clientData, setClientData] = useState({
    sessionId: sessionId,
    type: 'chat_widget',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    source: 'chat_widget',
    priority: 'normal'
  });
  
  const [currentMessage, setCurrentMessage] = useState('');
  const [showClientForm, setShowClientForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [unreadCount, setUnreadCount] = useState(0);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [submissionPending, setSubmissionPending] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);
  
  const messagesEndRef = useRef(null);
  const messageInputRef = useRef(null);
  const messageIdCounter = useRef(1);

  // Generate unique message ID
  const generateMessageId = () => {
    messageIdCounter.current += 1;
    return `msg_${sessionId}_${messageIdCounter.current}_${Date.now()}`;
  };

  // Reset submission function
  const resetSubmission = () => {
    setDataSubmitted(false);
    setSubmissionPending(false);
    setFormStep(1);
    
    const resetMessage = {
      id: generateMessageId(),
      type: 'system',
      content: '🔄 Form reset. You can now submit your information again.',
      timestamp: new Date(),
      sender: 'System',
      sessionId: sessionId
    };
    setMessages(prev => [...prev, resetMessage]);
  };

  // Socket connection and event handling
  useEffect(() => {
    socket.removeAllListeners();
    
    socket.on('connect', () => {
      console.log('💬 Chat Widget Connected with Socket ID:', socket.id);
      console.log('💬 Chat Session ID:', sessionId);
      setConnectionStatus('connected');
      
      // Register this chat session with the server
      socket.emit('register chat session', {
        sessionId: sessionId,
        type: 'chat_widget',
        socketId: socket.id,
        timestamp: new Date().toISOString()
      });
    });
    
    socket.on('disconnect', (reason) => {
      console.log('💬 Chat Widget Disconnected:', reason);
      setConnectionStatus('disconnected');
      if (reason === 'io server disconnect') {
        setTimeout(() => socket.connect(), 1000);
      }
    });
    
    socket.on('connect_error', (error) => {
      console.error('💬 Chat Widget Connection error:', error.message);
      setConnectionStatus('error');
      setTimeout(() => socket.connect(), 5000);
    });

    socket.on('chat message', (data) => {
      // Ensure this message is for our session
      if (data.sessionId && data.sessionId !== sessionId) {
        console.log('💬 Ignoring message for different session:', data.sessionId);
        return;
      }
      
      const newMessage = {
        id: generateMessageId(),
        type: 'received',
        content: data.message || data,
        timestamp: new Date(),
        sender: data.sender || 'Support Team',
        sessionId: sessionId
      };
      
      setMessages(prev => {
        // Prevent duplicate messages
        const isDuplicate = prev.some(msg => 
          msg.content === newMessage.content && 
          msg.sender === newMessage.sender &&
          Math.abs(new Date(msg.timestamp) - new Date(newMessage.timestamp)) < 1000
        );
        
        if (isDuplicate) {
          console.log('💬 Duplicate message prevented:', newMessage.content);
          return prev;
        }
        
        return [...prev, newMessage];
      });
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    });

    socket.on('agent typing', (data) => {
      if (data.sessionId === sessionId) {
        setIsTyping(true);
      }
    });
    
    socket.on('agent stop typing', (data) => {
      if (data.sessionId === sessionId) {
        setIsTyping(false);
      }
    });

    // REMOVED: socket.on('client data received') - preventing duplicate messages

    socket.on('call scheduled', (response) => {
      // Ensure this response is for our session
      if (response.sessionId !== sessionId) {
        return;
      }
      
      const message = {
        id: generateMessageId(),
        type: 'system',
        content: response.success 
          ? '📞 Call scheduled successfully! We\'ll contact you soon.' 
          : `❌ Failed to schedule call: ${response.error}`,
        timestamp: new Date(),
        sender: 'System',
        sessionId: sessionId
      };
      
      setMessages(prev => [...prev, message]);
    });

    socket.on('chat session registered', (response) => {
      console.log('💬 Chat session registered:', response);
    });

    if (socket.disconnected) {
      socket.connect();
    }

    return () => {
      socket.removeAllListeners();
    };
  }, [sessionId, isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && messageInputRef.current && !showClientForm) {
      setTimeout(() => messageInputRef.current.focus(), 100);
    }
    if (isOpen) {
      setUnreadCount(0);
      // Mark messages as read when chat opens
      markChatMessagesAsRead(sessionId).catch(console.error);
    }
  }, [isOpen, showClientForm, sessionId]);

  // FIXED handleSendMessage function
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!currentMessage.trim() || connectionStatus !== 'connected') return;

    const messageId = generateMessageId();
    const userMessage = {
      id: messageId,
      type: 'sent',
      content: currentMessage.trim(),
      timestamp: new Date(),
      sender: clientData.name || 'You',
      sessionId: sessionId
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Send via Socket.IO (real-time) - FIXED
    const socketMessageData = chatHelpers.formatChatMessage({
      message: currentMessage.trim(),
      sender: clientData.name || 'User',
      sessionId: sessionId,
      messageType: 'user'
    });

    console.log('💬 Sending chat message via Socket.IO:', socketMessageData);
    socket.emit('chat message', socketMessageData);

    // Also send via HTTP as fallback
    try {
      const httpMessageData = {
        sessionId: sessionId,
        message: currentMessage.trim(),
        sender: clientData.name || 'User',
        messageType: 'user',
        clientData: clientData
      };

      console.log('💬 Sending chat message via HTTP fallback:', httpMessageData);
      await sendChatMessage(httpMessageData);
    } catch (error) {
      console.error('💬 HTTP fallback failed:', error);
    }

    setCurrentMessage('');
  };

  const handleClientDataChange = (field, value) => {
    setClientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // FIXED handleClientFormSubmit function - UPDATED WITH BETTER DUPLICATE HANDLING
  const handleClientFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields based on step
    if (formStep === 1) {
      if (!clientData.name || !clientData.email) return;
      setFormStep(2);
      return;
    }
    
    if (formStep === 2) {
      if (!clientData.projectType) return;
      setFormStep(3);
      return;
    }
    
    // IMPROVED: Better duplicate submission handling
    if (submissionPending) {
      console.log('💬 Submission already in progress');
      
      // Show user-friendly message instead of error
      const message = {
        id: generateMessageId(),
        type: 'system',
        content: '⏳ Your submission is being processed. Please wait...',
        timestamp: new Date(),
        sender: 'System',
        sessionId: sessionId
      };
      setMessages(prev => [...prev, message]);
      return;
    }
    
    if (dataSubmitted) {
      console.log('💬 Data already submitted');
      
      // Show helpful message instead of error
      const message = {
        id: generateMessageId(),
        type: 'system',
        content: '✅ You have already submitted your information. Our team will contact you within 24 hours!',
        timestamp: new Date(),
        sender: 'System',
        sessionId: sessionId
      };
      setMessages(prev => [...prev, message]);
      
      setShowClientForm(false);
      return;
    }
    
    setSubmissionPending(true);
    
    try {
      // Format data using chat helpers
      const formattedData = chatHelpers.formatChatClientData({
        ...clientData,
        sessionId: sessionId
      });
      
      // ONLY submit via HTTP (remove duplicate Socket.IO submission)
      console.log('💬 Submitting client data via HTTP:', formattedData);
      const result = await submitChatClientData(formattedData);
      
      if (result.success) {
        console.log('✅ Chat client data submitted successfully');
        setDataSubmitted(true);
        
        // Show success message
        const successMessage = {
          id: generateMessageId(),
          type: 'system',
          content: '✅ Thank you! Your information has been received. Our team will contact you within 24 hours.',
          timestamp: new Date(),
          sender: 'System',
          sessionId: sessionId
        };
        setMessages(prev => [...prev, successMessage]);
        
      } else {
        console.error('❌ Chat client data submission failed:', result.message);
        
        // Show specific error message
        const errorMessage = {
          id: generateMessageId(),
          type: 'system',
          content: `❌ Submission failed: ${result.message || 'Please try again'}`,
          timestamp: new Date(),
          sender: 'System',
          sessionId: sessionId
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('💬 Client data submission error:', error);
      
      // Show user-friendly error message
      const errorMessage = {
        id: generateMessageId(),
        type: 'system',
        content: '❌ Something went wrong. Please try again or contact support.',
        timestamp: new Date(),
        sender: 'System',
        sessionId: sessionId
      };
      setMessages(prev => [...prev, errorMessage]);
      
      setSubmissionPending(false);
    }

    setShowClientForm(false);
    setShowQuickActions(false);
    
    const welcomeMessage = {
      id: generateMessageId(),
      type: 'system',
      content: `Thank you ${clientData.name}! I've received your project details. Let me connect you with the right specialist for ${clientData.projectType}.`,
      timestamp: new Date(),
      sender: 'Support Team',
      sessionId: sessionId
    };
    setMessages(prev => [...prev, welcomeMessage]);
  };

  // UPDATED startClientForm function with reset option
  const startClientForm = () => {
    if (dataSubmitted) {
      const message = {
        id: generateMessageId(),
        type: 'system',
        content: (
          <div>
            You have already submitted your information. Our team will contact you soon!
            <br />
            <button 
              onClick={resetSubmission}
              style={{
                marginTop: '10px',
                padding: '8px 15px',
                background: '#ff8c00',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              Submit Different Information
            </button>
          </div>
        ),
        timestamp: new Date(),
        sender: 'System',
        sessionId: sessionId
      };
      setMessages(prev => [...prev, message]);
      return;
    }
    
    setShowClientForm(true);
    setFormStep(1);
  };

  // FIXED scheduleCall function
  const scheduleCall = async () => {
    if (!clientData.name || !clientData.email) {
      startClientForm();
      return;
    }

    try {
      // Format call request - FIXED (create data manually)
      const callData = {
        sessionId: sessionId,
        clientData: clientData,
        preferredTime: 'ASAP',
        notes: 'Call requested from chat widget'
      };

      console.log('💬 Scheduling call via Socket.IO:', callData);
      socket.emit('schedule call', callData);

      // Also schedule via HTTP as fallback
      console.log('💬 Scheduling call via HTTP fallback:', callData);
      const result = await scheduleChatCall(callData);
      
      if (result.success) {
        console.log('✅ Call scheduled successfully');
      } else {
        console.error('❌ Call scheduling failed:', result.message);
      }
    } catch (error) {
      console.error('💬 Call scheduling error:', error);
    }

    const callMessage = {
      id: generateMessageId(),
      type: 'sent',
      content: '📞 I\'d like to schedule a consultation call',
      timestamp: new Date(),
      sender: clientData.name,
      sessionId: sessionId
    };
    setMessages(prev => [...prev, callMessage]);
  };

  const askQuestion = () => {
    const questionMessage = {
      id: generateMessageId(),
      type: 'system',
      content: 'What would you like to know about our services? Feel free to ask about web design, mobile apps, digital marketing, or any other technology solutions.',
      timestamp: new Date(),
      sender: 'Support Team',
      sessionId: sessionId
    };
    setMessages(prev => [...prev, questionMessage]);
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = async () => {
    try {
      // Close chat session on server
      await closeChatSession(sessionId, 'User closed chat');
      console.log('💬 Chat session closed');
    } catch (error) {
      console.error('💬 Error closing chat session:', error);
    }
    
    setIsOpen(false);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getConnectionStatusText = () => {
    switch(connectionStatus) {
      case 'connected': return 'connected';
      case 'connecting': return 'connecting...';
      case 'disconnected': return 'reconnecting...';
      case 'error': return 'connection error';
      default: return 'offline';
    }
  };

  const projectTypes = [
    'Web Design & Development',
    'Mobile App Development', 
    'Digital Marketing',
    'E-commerce Solutions',
    'Website Hosting',
    'Graphics & Logo Design',
    'WordPress Development',
    'Project Management',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  const timelineOptions = [
    'ASAP (1-2 weeks)',
    '1 Month',
    '2-3 Months',
    '3-6 Months',
    '6+ Months',
    'Flexible'
  ];

  return (
    <div className="chat-widget">
      {/* Debug info in development */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(255,140,0,0.9)', // Orange background for chat widget
          color: 'white',
          padding: '8px',
          fontSize: '11px',
          zIndex: 10000,
          borderRadius: '4px'
        }}>
          💬 Chat Session: {sessionId.substring(0, 20)}...
          <br />
          Socket: {socket.id || 'disconnected'}
          <br />
          Status: {connectionStatus}
          <br />
          Type: chat_widget
        </div>
      )}
       */}
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
      >
        {isOpen ? (
          <span className="close-icon">×</span>
        ) : (
          <>
            <span className="chat-icon">💬</span>
            <span className="chat-text">Need help?</span>
            {unreadCount > 0 && (
              <span className="unread-badge">{unreadCount}</span>
            )}
          </>
        )}
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <h3>Chat Support?</h3>
              <span className={`connection-status ${connectionStatus}`}>
                <span className="status-dot"></span>
                {getConnectionStatusText()}
              </span>
            </div>
            <button 
              className="close-btn"
              onClick={closeChat}
            >
              Close Chat
            </button>
          </div>

          {/* Client Data Form */}
          {showClientForm && (
            <div className="client-form-overlay">
              <form onSubmit={handleClientFormSubmit} className="client-form">
                {formStep === 1 && (
                  <>
                    <h4>Let's get to know you</h4>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={clientData.name}
                        onChange={(e) => handleClientDataChange('name', e.target.value)}
                        required
                        autoFocus
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={clientData.email}
                        onChange={(e) => handleClientDataChange('email', e.target.value)}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={clientData.phone}
                        onChange={(e) => handleClientDataChange('phone', e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={clientData.company}
                        onChange={(e) => handleClientDataChange('company', e.target.value)}
                        autoComplete="organization"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={!clientData.name || !clientData.email || submissionPending}
                    >
                      {submissionPending ? 'Processing...' : 'Next Step →'}
                    </button>
                  </>
                )}

                {formStep === 2 && (
                  <>
                    <h4>Tell us about your project</h4>
                    <div className="form-row">
                      <select
                        value={clientData.projectType}
                        onChange={(e) => handleClientDataChange('projectType', e.target.value)}
                        required
                      >
                        <option value="">Select Service Type *</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-row">
                      <select
                        value={clientData.budget}
                        onChange={(e) => handleClientDataChange('budget', e.target.value)}
                      >
                        <option value="">Budget Range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-row">
                      <select
                        value={clientData.timeline}
                        onChange={(e) => handleClientDataChange('timeline', e.target.value)}
                      >
                        <option value="">Project Timeline</option>
                        {timelineOptions.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={() => setFormStep(1)} className="btn-secondary">
                        ← Back
                      </button>
                      <button 
                        type="submit" 
                        disabled={!clientData.projectType || submissionPending}
                      >
                        {submissionPending ? 'Processing...' : 'Next Step →'}
                      </button>
                    </div>
                  </>
                )}

                {formStep === 3 && (
                  <>
                    <h4>Additional details</h4>
                    <div className="form-row">
                      <input
                        type="url"
                        placeholder="Current Website (if any)"
                        value={clientData.website}
                        onChange={(e) => handleClientDataChange('website', e.target.value)}
                        autoComplete="url"
                      />
                    </div>
                    <div className="form-row">
                      <textarea
                        placeholder="Project Description & Requirements"
                        value={clientData.description}
                        onChange={(e) => handleClientDataChange('description', e.target.value)}
                        rows="3"
                      />
                    </div>
                    <div className="form-row">
                      <select
                        value={clientData.source}
                        onChange={(e) => handleClientDataChange('source', e.target.value)}
                      >
                        <option value="">How did you hear about us?</option>
                        <option value="google">Google Search</option>
                        <option value="social_media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={() => setFormStep(2)} className="btn-secondary">
                        ← Back
                      </button>
                      <button 
                        type="submit"
                        disabled={submissionPending}
                      >
                        {submissionPending ? 'Submitting...' : 'Start Chat 🚀'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          )}

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.type}`}>
                <div className="message-content">
                  <div className="message-text">{msg.content}</div>
                  <div className="message-meta">
                    <span className="time">{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message received">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="message-meta">
                    <span className="typing-text">Support team is typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions - UPDATED */}
          {showQuickActions && (
            <div className="quick-actions">
              <button 
                onClick={startClientForm}
                className="quick-action-btn primary"
                disabled={submissionPending}
              >
                {submissionPending ? 'Processing...' : dataSubmitted ? 'Update Info' : 'Get Started'}
              </button>
              <button 
                onClick={scheduleCall}
                className="quick-action-btn"
              >
                Schedule a Call
              </button>
              <button 
                onClick={askQuestion}
                className="quick-action-btn"
              >
                Ask a Question
              </button>
            </div>
          )}

          {/* Message Input */}
          <div className="chat-input-section">
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                ref={messageInputRef}
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type a message..."
                className="message-input"
                disabled={connectionStatus !== 'connected' || showClientForm}
                autoComplete="off"
              />
              <button 
                type="submit" 
                className="send-btn"
                disabled={!currentMessage.trim() || connectionStatus !== 'connected' || showClientForm}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
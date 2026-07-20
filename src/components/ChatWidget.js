import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import {
  submitChatClientData,
  scheduleChatCall,
  markChatMessagesAsRead,
  closeChatSession,
  chatHelpers
} from '../chatApiServices';
import './ChatWidget.css';

// Socket configuration
const getSocketConfig = () => {
  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  if (isLocalhost) {
    return {
      url: 'http://localhost:8000',
      options: {
        transports: ['websocket', 'polling'],
        path: '/socket.io',
        pingTimeout: 60000,
        pingInterval: 25000,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        timeout: 20000,
        forceNew: false
      }
    };
  }

  return {
    url:
      process.env.REACT_APP_SOCKET_URL ||
      'https://wayup-backend-production.up.railway.app',
    options: {
      transports: ['websocket', 'polling'],
      path: '/socket.io',
      pingTimeout: 60000,
      pingInterval: 25000,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 20000,
      forceNew: false
    }
  };
};

const ChatWidget = () => {
  const socketRef = useRef(null);

  // Persistent session — survives page refresh
  const getSessionId = () => {
    let id = localStorage.getItem('wayup_chat_session_id');
    if (!id) {
      id = chatHelpers.generateSessionId();
      localStorage.setItem('wayup_chat_session_id', id);
    }
    return id;
  };

  const [sessionId] = useState(getSessionId);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [clientData, setClientData] = useState({
    sessionId,
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

  const generateMessageId = () => {
    messageIdCounter.current += 1;
    return `msg_${sessionId}_${messageIdCounter.current}_${Date.now()}`;
  };

  // Welcome message — only once
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 0) {
        return [{
          id: `msg_${Date.now()}_welcome`,
          type: 'system',
          content: 'Hi 👋 Looking for a website, e-commerce store, or custom software? Tell us what you need and we\'ll connect you with the right specialist.',
          timestamp: new Date(),
          sender: 'Support Team'
        }];
      }
      return prev;
    });
  }, []);

  // Socket.IO connection and event handling
  useEffect(() => {
    const { url, options } = getSocketConfig();

    if (!socketRef.current) {
      console.log('💬 Initializing Socket.IO:', url);
      socketRef.current = io(url, options);
    }

    const socket = socketRef.current;

    const handleConnect = () => {
      console.log('💬 Socket connected:', socket.id);
      setConnectionStatus('connected');
      socket.emit('register chat session', {
        sessionId,
        type: 'chat_widget',
        socketId: socket.id,
        timestamp: new Date().toISOString()
      });
    };

    const handleDisconnect = (reason) => {
      console.log('💬 Socket disconnected:', reason);
      setConnectionStatus('disconnected');
    };

    const handleConnectError = (error) => {
      console.error('💬 Socket error:', error.message);
      setConnectionStatus('error');
    };

    const handleChatMessage = (data) => {
      if (data.sessionId && data.sessionId !== sessionId) return;

      const newMessage = {
        id: generateMessageId(),
        type: 'received',
        content: data.message || data,
        timestamp: new Date(),
        sender: data.sender || 'Support Team',
        sessionId
      };

      setMessages(previous => {
        const duplicate = previous.some(
          msg =>
            msg.content === newMessage.content &&
            msg.sender === newMessage.sender
        );
        if (duplicate) return previous;
        return [...previous, newMessage];
      });

      if (!isOpen) {
        setUnreadCount(count => count + 1);
      }
    };

    const handleAgentTyping = (data) => {
      if (data.sessionId === sessionId) setIsTyping(true);
    };

    const handleAgentStopTyping = (data) => {
      if (data.sessionId === sessionId) setIsTyping(false);
    };

    const handleCallScheduled = (response) => {
      if (response.sessionId !== sessionId) return;
      setMessages(previous => [
        ...previous,
        {
          id: generateMessageId(),
          type: 'system',
          content: response.success
            ? '📞 Call scheduled successfully! We will contact you soon.'
            : `❌ Failed to schedule call: ${response.error}`,
          timestamp: new Date(),
          sender: 'System',
          sessionId
        }
      ]);
    };

    const handleSessionRegistered = (response) => {
      console.log('💬 Chat session registered:', response);
    };

    // Register targeted listeners
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('chat message', handleChatMessage);
    socket.on('agent typing', handleAgentTyping);
    socket.on('agent stop typing', handleAgentStopTyping);
    socket.on('call scheduled', handleCallScheduled);
    socket.on('chat session registered', handleSessionRegistered);

    if (socket.disconnected) socket.connect();

    // Remove only our listeners on cleanup
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.off('chat message', handleChatMessage);
      socket.off('agent typing', handleAgentTyping);
      socket.off('agent stop typing', handleAgentStopTyping);
      socket.off('call scheduled', handleCallScheduled);
      socket.off('chat session registered', handleSessionRegistered);
    };
  }, [sessionId, isOpen]);

  // Disconnect socket on unmount
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && messageInputRef.current && !showClientForm) {
      setTimeout(() => messageInputRef.current.focus(), 100);
    }
    if (isOpen) {
      setUnreadCount(0);
      markChatMessagesAsRead(sessionId).catch(console.error);
    }
  }, [isOpen, showClientForm, sessionId]);

  // Send chat message — Socket.IO only (backend handles persistence)
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!currentMessage.trim() || connectionStatus !== 'connected') return;

    const messageText = currentMessage.trim();

    setMessages(previous => [
      ...previous,
      {
        id: generateMessageId(),
        type: 'sent',
        content: messageText,
        timestamp: new Date(),
        sender: clientData.name || 'You',
        sessionId
      }
    ]);

    socketRef.current?.emit('chat message', {
      message: messageText,
      sender: clientData.name || 'User',
      sessionId,
      messageType: 'user'
    });

    socketRef.current?.emit('user stop typing', { sessionId });

    setCurrentMessage('');
  };

  const handleClientDataChange = (field, value) => {
    setClientData(prev => ({ ...prev, [field]: value }));
  };

  // Submit lead form
  const handleClientFormSubmit = async (e) => {
    e.preventDefault();

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

    if (submissionPending) return;

    if (dataSubmitted) {
      setMessages(previous => [
        ...previous,
        {
          id: generateMessageId(),
          type: 'system',
          content: '✅ Your information has already been submitted. Our team will contact you soon.',
          timestamp: new Date(),
          sender: 'System',
          sessionId
        }
      ]);
      setShowClientForm(false);
      return;
    }

    setSubmissionPending(true);

    try {
      const formattedData = chatHelpers.formatChatClientData({
        ...clientData,
        sessionId
      });

      const result = await submitChatClientData(formattedData);

      if (result.success) {
        setDataSubmitted(true);
        setMessages(previous => [
          ...previous,
          {
            id: generateMessageId(),
            type: 'system',
            content: '✅ Thank you! Your project details have been received. Our team will contact you within 24 hours.',
            timestamp: new Date(),
            sender: 'System',
            sessionId
          }
        ]);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      setMessages(previous => [
        ...previous,
        {
          id: generateMessageId(),
          type: 'system',
          content: '❌ Unable to submit your information. Please try again.',
          timestamp: new Date(),
          sender: 'System',
          sessionId
        }
      ]);
    } finally {
      setSubmissionPending(false);
      setShowClientForm(false);
      setShowQuickActions(false);
    }
  };

  const startClientForm = () => {
    if (dataSubmitted) {
      setMessages(previous => [
        ...previous,
        {
          id: generateMessageId(),
          type: 'system',
          content: '✅ Your information has already been submitted. Our team will contact you within 24 hours.',
          timestamp: new Date(),
          sender: 'System',
          sessionId
        }
      ]);
      return;
    }
    setShowClientForm(true);
    setFormStep(1);
  };

  const scheduleCall = async () => {
    if (!clientData.name || !clientData.email) {
      startClientForm();
      return;
    }

    try {
      const callData = {
        sessionId,
        clientData,
        preferredTime: 'ASAP',
        notes: 'Call requested from chat widget'
      };
      await scheduleChatCall(callData);
      setMessages(previous => [
        ...previous,
        {
          id: generateMessageId(),
          type: 'system',
          content: '📞 Consultation request received. We will contact you shortly.',
          timestamp: new Date(),
          sender: 'System',
          sessionId
        }
      ]);
    } catch (error) {
      console.error('Call scheduling error:', error);
    }
  };

  const askQuestion = () => {
    setMessages(previous => [
      ...previous,
      {
        id: generateMessageId(),
        type: 'system',
        content: 'What would you like to know? Feel free to ask about websites, e-commerce, mobile apps, automation, or any other software solution.',
        timestamp: new Date(),
        sender: 'Support Team',
        sessionId
      }
    ]);
    if (messageInputRef.current) messageInputRef.current.focus();
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const closeChat = async () => {
    try {
      await closeChatSession(sessionId, 'User closed chat');
    } catch (error) {
      console.error('Error closing chat session:', error);
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
    switch (connectionStatus) {
      case 'connected': return 'connected';
      case 'connecting': return 'connecting...';
      case 'disconnected': return 'reconnecting...';
      case 'error': return 'connection error';
      default: return 'offline';
    }
  };

  const projectTypes = [
    'Website Design & Development',
    'E-Commerce Store',
    'Mobile App Development',
    'Business Automation',
    'Custom Software',
    'Digital Marketing',
    'Cloud & Infrastructure',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,299',
    '$1,299 - $2,999',
    '$2,999 - $4,999',
    '$4,999 - $10,000',
    'Over $10,000',
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
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Open chat support"
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
              <h3>Chat Support</h3>
              <span className={`connection-status ${connectionStatus}`}>
                <span className="status-dot"></span>
                {getConnectionStatusText()}
              </span>
            </div>
            <button className="close-btn" onClick={closeChat}>
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
                        aria-label="Your name"
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
                        aria-label="Email address"
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={clientData.phone}
                        onChange={(e) => handleClientDataChange('phone', e.target.value)}
                        autoComplete="tel"
                        aria-label="Phone number"
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="Business Name"
                        value={clientData.company}
                        onChange={(e) => handleClientDataChange('company', e.target.value)}
                        autoComplete="organization"
                        aria-label="Business name"
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
                        aria-label="Service type"
                      >
                        <option value="">What do you need? *</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-row">
                      <select
                        value={clientData.budget}
                        onChange={(e) => handleClientDataChange('budget', e.target.value)}
                        aria-label="Budget range"
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
                        aria-label="Project timeline"
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
                    <h4>Almost done</h4>
                    <div className="form-row">
                      <input
                        type="url"
                        placeholder="Current Website (if any)"
                        value={clientData.website}
                        onChange={(e) => handleClientDataChange('website', e.target.value)}
                        autoComplete="url"
                        aria-label="Current website"
                      />
                    </div>
                    <div className="form-row">
                      <textarea
                        placeholder="Briefly describe what you need"
                        value={clientData.description}
                        onChange={(e) => handleClientDataChange('description', e.target.value)}
                        rows="3"
                        aria-label="Project description"
                      />
                    </div>
                    <div className="form-row">
                      <select
                        value={clientData.source}
                        onChange={(e) => handleClientDataChange('source', e.target.value)}
                        aria-label="How did you hear about us"
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
                      <button type="submit" disabled={submissionPending}>
                        {submissionPending ? 'Submitting...' : 'Start Chat 🚀'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          )}

          {/* Messages */}
          <div className="chat-messages" role="log" aria-label="Chat messages">
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

          {/* Quick Actions */}
          {showQuickActions && (
            <div className="quick-actions">
              <button
                onClick={startClientForm}
                className="quick-action-btn primary"
                disabled={submissionPending}
              >
                {submissionPending ? 'Processing...' : dataSubmitted ? 'Info Submitted ✅' : '🚀 Get Started'}
              </button>
              <button onClick={scheduleCall} className="quick-action-btn">
                📞 Book a Call
              </button>
              <button onClick={askQuestion} className="quick-action-btn">
                💬 Ask a Question
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
                onChange={(e) => {
                  setCurrentMessage(e.target.value);
                  socketRef.current?.emit('user typing', { sessionId });
                }}
                placeholder="Type a message..."
                className="message-input"
                disabled={connectionStatus !== 'connected' || showClientForm}
                autoComplete="off"
                aria-label="Chat message input"
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
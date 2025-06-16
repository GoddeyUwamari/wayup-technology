// chatApiServices.js - CHAT WIDGET ONLY (NO CONTACT FORMS)
import axios from 'axios';
import io from 'socket.io-client';


const API_URL = process.env.NODE_ENV === 'production' 
  ? 'http://162.0.233.208:8000/api'  // Remove || fallback  
  : 'http://localhost:8000/api';

const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? 'http://162.0.233.208:8000'      // Remove || fallback
  : 'http://localhost:8000';

  
console.log('=== CHAT WIDGET API Configuration ===');
console.log('API_URL:', API_URL);
console.log('SOCKET_URL:', SOCKET_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Chat Widget Socket.IO connection
let socket = null;

// Socket connection manager
const socketManager = {
  connect: (sessionId) => {
    if (!socket || !socket.connected) {
      console.log('💬 Connecting to Socket.IO:', SOCKET_URL);
      socket = io(SOCKET_URL, {
        transports: ['websocket', 'polling'],
        timeout: 10000,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
      });
      
      socket.on('connect', () => {
        console.log('💬 Socket.IO connected:', socket.id);
        if (sessionId) {
          socket.emit('join_session', sessionId);
          console.log('💬 Joined chat session:', sessionId);
        }
      });
      
      socket.on('disconnect', () => {
        console.log('💬 Socket.IO disconnected');
      });
      
      socket.on('connect_error', (error) => {
        console.error('💬 Socket.IO connection error:', error);
      });
    }
    return socket;
  },
  
  disconnect: () => {
    if (socket) {
      socket.disconnect();
      socket = null;
      console.log('💬 Socket.IO manually disconnected');
    }
  },
  
  joinSession: (sessionId) => {
    if (socket && socket.connected) {
      socket.emit('join_session', sessionId);
      console.log('💬 Joined chat session:', sessionId);
    }
  },
  
  leaveSession: (sessionId) => {
    if (socket && socket.connected) {
      socket.emit('leave_session', sessionId);
      console.log('💬 Left chat session:', sessionId);
    }
  },
  
  on: (event, callback) => {
    if (socket) {
      socket.on(event, callback);
    }
  },
  
  off: (event, callback) => {
    if (socket) {
      socket.off(event, callback);
    }
  },
  
  emit: (event, data) => {
    if (socket && socket.connected) {
      socket.emit(event, data);
    }
  },
  
  getSocket: () => socket
};

// Add request interceptor for chat widget requests
api.interceptors.request.use(
  (config) => {
    // Chat widget only logging
    console.log('💬 CHAT WIDGET API Request:', config.baseURL + config.url);
    console.log('💬 Request data:', config.data);
    return config;
  },
  (error) => {
    console.error('💬 Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('💬 CHAT WIDGET Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('💬 Chat Widget API Response error:', error);
    console.error('💬 Error details:', {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url
    });
    return Promise.reject(error);
  }
);

// Enhanced error handler
const handleApiError = (error, context = '') => {
  const prefix = context ? `[${context}] ` : '';
  
  if (error.response) {
    return {
      success: false,
      message: prefix + (error.response.data?.message || error.response.data?.error || `Server error: ${error.response.status}`),
      status: error.response.status,
      data: error.response.data,
      details: error.response.data?.details
    };
  } else if (error.request) {
    return {
      success: false,
      message: prefix + 'Network error - please check your connection',
      status: null
    };
  } else {
    return {
      success: false,
      message: prefix + 'An unexpected error occurred',
      status: null
    };
  }
};

// ======================
// CHAT WIDGET SYSTEM ONLY (💬 HTTP + Socket.IO)
// ======================

// Send chat message
export const sendChatMessage = async (messageData) => {
  try {
    console.log('💬 Sending chat message:', messageData);
    
    // Ensure proper chat widget structure
    const chatMessageData = {
      ...messageData,
      source: 'chat_widget',
      messageType: messageData.messageType || 'user',
      // Ensure sessionId has chat prefix
      sessionId: messageData.sessionId?.startsWith('chat_') 
        ? messageData.sessionId 
        : `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    
    console.log('💬 Final chat message data:', chatMessageData);
    
    const response = await api.post('/chat/send', chatMessageData);
    return {
      success: true,
      data: response.data,
      message: response.data.message || 'Message sent successfully'
    };
  } catch (error) {
    console.error('💬 Chat message send error:', error);
    return handleApiError(error, 'Chat Message');
  }
};

// Submit client data from chat widget
export const submitChatClientData = async (clientData) => {
  try {
    console.log('💬 Submitting chat client data:', clientData);
    
    // Ensure proper chat widget client data structure
    const chatClientData = {
      ...clientData,
      source: 'chat_widget',
      type: 'chat_client_data',
      // Ensure sessionId has chat prefix
      sessionId: clientData.sessionId?.startsWith('chat_') 
        ? clientData.sessionId 
        : `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    
    console.log('💬 Final chat client data:', chatClientData);
    
    const response = await api.post('/chat/client-data', chatClientData);
    return {
      success: true,
      data: response.data,
      message: response.data.message || 'Client data submitted successfully'
    };
  } catch (error) {
    console.error('💬 Chat client data submission error:', error);
    return handleApiError(error, 'Chat Client Data');
  }
};

// Get chat history
export const getChatHistory = async (sessionId, limit = 50) => {
  try {
    // Validate chat session ID
    if (!sessionId.startsWith('chat_')) {
      throw new Error('Invalid chat widget session ID');
    }
    
    const response = await api.get(`/chat/history/${sessionId}`, {
      params: { limit }
    });
    return {
      success: true,
      data: response.data,
      message: 'Chat history retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Chat History');
  }
};

// Get all chat sessions
export const getAllChatSessions = async (params = {}) => {
  try {
    const response = await api.get('/chat/sessions', { params });
    return {
      success: true,
      data: response.data,
      message: 'Chat sessions retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Chat Sessions');
  }
};

// Get chat statistics
export const getChatStats = async () => {
  try {
    const response = await api.get('/chat/stats');
    return {
      success: true,
      data: response.data,
      message: 'Chat statistics retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Chat Stats');
  }
};

// Mark chat messages as read
export const markChatMessagesAsRead = async (sessionId) => {
  try {
    // Validate chat session ID
    if (!sessionId.startsWith('chat_')) {
      throw new Error('Invalid chat widget session ID');
    }
    
    const response = await api.put(`/chat/read/${sessionId}`);
    return {
      success: true,
      data: response.data,
      message: 'Messages marked as read successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Mark as Read');
  }
};

// Close chat session
export const closeChatSession = async (sessionId, reason = 'Session ended') => {
  try {
    // Validate chat session ID
    if (!sessionId.startsWith('chat_')) {
      throw new Error('Invalid chat widget session ID');
    }
    
    const response = await api.put(`/chat/close/${sessionId}`, { reason });
    return {
      success: true,
      data: response.data,
      message: 'Chat session closed successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Close Session');
  }
};

// Send agent response
export const sendAgentResponse = async (responseData) => {
  try {
    console.log('💬 Sending agent response:', responseData);
    
    const response = await api.post('/chat/agent-response', responseData);
    return {
      success: true,
      data: response.data,
      message: 'Agent response sent successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Agent Response');
  }
};

// Schedule call from chat widget
export const scheduleChatCall = async (callData) => {
  try {
    console.log('💬 Scheduling call from chat:', callData);
    
    // Validate chat session ID
    if (!callData.sessionId.startsWith('chat_')) {
      throw new Error('Invalid chat widget session ID');
    }
    
    const response = await api.post('/chat/schedule-call', callData);
    return {
      success: true,
      data: response.data,
      message: 'Call scheduled successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Schedule Call');
  }
};

// ======================
// CHAT WIDGET HELPERS
// ======================

// Chat widget utilities
export const chatHelpers = {
  // Generate chat session ID
  generateSessionId: () => {
    return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Validate chat message data
  validateChatMessage: (messageData) => {
    const errors = [];
    
    if (!messageData.message || messageData.message.trim().length === 0) {
      errors.push('Message cannot be empty');
    }
    
    if (messageData.message && messageData.message.length > 5000) {
      errors.push('Message too long (maximum 5000 characters)');
    }
    
    if (!messageData.sessionId || !messageData.sessionId.startsWith('chat_')) {
      errors.push('Invalid chat session ID');
    }
    
    if (messageData.messageType && !['user', 'agent', 'system'].includes(messageData.messageType)) {
      errors.push('Invalid message type');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },
  
  // Validate chat client data
  validateChatClientData: (clientData) => {
    const errors = [];
    
    if (!clientData.name || clientData.name.trim().length < 2) {
      errors.push('Name is required (minimum 2 characters)');
    }
    
    if (!clientData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientData.email)) {
      errors.push('Valid email address is required');
    }
    
    if (!clientData.sessionId || !clientData.sessionId.startsWith('chat_')) {
      errors.push('Invalid chat session ID');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },
  
  // Format chat message data
  formatChatMessage: (messageData) => {
    return {
      sessionId: messageData.sessionId || chatHelpers.generateSessionId(),
      message: messageData.message?.trim(),
      sender: messageData.sender?.trim() || 'User',
      messageType: messageData.messageType || 'user',
      source: 'chat_widget',
      timestamp: new Date().toISOString()
    };
  },
  
  // Format chat client data
  formatChatClientData: (clientData) => {
    return {
      sessionId: clientData.sessionId || chatHelpers.generateSessionId(),
      type: 'chat_client_data',
      source: 'chat_widget',
      name: clientData.name?.trim(),
      email: clientData.email?.trim().toLowerCase(),
      phone: clientData.phone?.trim() || '',
      company: clientData.company?.trim() || '',
      projectType: clientData.projectType || '',
      description: clientData.description?.trim() || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      pageUrl: window.location.href
    };
  },
  
  // Check if session ID is valid for chat widget
  isValidChatSession: (sessionId) => {
    return sessionId && typeof sessionId === 'string' && sessionId.startsWith('chat_');
  }
};

// ======================
// SYSTEM UTILITIES
// ======================

// Test chat widget connection
export const testChatConnection = async () => {
  try {
    console.log('🔧 Testing chat widget connection to:', API_URL + '/chat/health');
    const response = await api.get('/chat/health');
    console.log('💬 Chat connection test successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('💬 Chat connection test failed:', error);
    return { success: false, error: error.message };
  }
};

// Health check for chat widget
export const chatHealthCheck = async () => {
  try {
    const response = await api.get('/chat/health');
    return {
      success: true,
      data: response.data,
      message: 'Chat widget API is healthy'
    };
  } catch (error) {
    return handleApiError(error, 'Chat Health Check');
  }
};

// Export socket manager
export { socketManager };

// Default export with chat widget functions only
export default {
  // Chat Widget System Only
  chat: {
    sendMessage: sendChatMessage,
    submitClientData: submitChatClientData,
    getHistory: getChatHistory,
    getSessions: getAllChatSessions,
    getStats: getChatStats,
    markAsRead: markChatMessagesAsRead,
    closeSession: closeChatSession,
    sendAgentResponse: sendAgentResponse,
    scheduleCall: scheduleChatCall
  },
  
  // Socket.IO Management
  socket: socketManager,
  
  // Chat Widget Utilities
  chatHelpers,
  
  // System Utilities
  system: {
    healthCheck: chatHealthCheck,
    testConnection: testChatConnection
  }
};
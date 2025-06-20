// contactApiServices.js - CONTACT FORMS ONLY (NO CHAT WIDGET)
import axios from 'axios';

// AFTER (✅ HTTPS)
const API_URL = window.location.hostname === 'localhost'
  ? 'https://localhost:8000/api'
  : 'https://wayuptechn.com/api';  // ✅ Use domain instead of IP

console.log('=== CONTACT FORM API Configuration ===');
console.log('API_URL:', API_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Current window location:', window.location.origin);
const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Token management utilities
const tokenManager = {
  get: () => localStorage.getItem('authToken'),
  set: (token) => localStorage.setItem('authToken', token),
  remove: () => localStorage.removeItem('authToken'),
  isValid: (token) => {
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }
};

// Add request interceptor for debugging and auth
api.interceptors.request.use(
  (config) => {
    const token = tokenManager.get();
    if (token && tokenManager.isValid(token)) {
      config.headers['x-auth-token'] = token;
    }
    
    // Contact form only logging
    console.log('📝 CONTACT FORM API Request:', config.baseURL + config.url);
    console.log('📝 Request data:', config.data);
    return config;
  },
  (error) => {
    console.error('📝 Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('📝 CONTACT FORM Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('📝 Contact Form API Response error:', error);
    console.error('📝 Error details:', {
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
// CONTACT FORM SYSTEM ONLY (📝 HTTP only)
// ======================

// Submit contact form (website forms)
export const submitContactForm = async (formData) => {
  try {
    console.log('📝 Submitting contact form:', formData);
    
    // Ensure proper contact form structure
    const contactFormData = {
      ...formData,
      source: 'contact_form',
      type: 'contact_form',
      // Ensure sessionId has contact prefix
      sessionId: formData.sessionId?.startsWith('contact_') 
        ? formData.sessionId 
        : `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    
    console.log('📝 Final contact form data:', contactFormData);
    
    const response = await api.post('/contact/submit', contactFormData);
    return {
      success: true,
      data: response.data,
      message: response.data.message || 'Contact form submitted successfully'
    };
  } catch (error) {
    console.error('📝 Contact form submission error:', error);
    return handleApiError(error, 'Contact Form');
  }
};

// Get all contacts (admin function)
export const getAllContacts = async (params = {}) => {
  try {
    const response = await api.get('/contact/all', { params });
    return {
      success: true,
      data: response.data,
      message: 'Contacts retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Get Contacts');
  }
};

// Get contact statistics
export const getContactStats = async () => {
  try {
    const response = await api.get('/contact/stats');
    return {
      success: true,
      data: response.data,
      message: 'Contact statistics retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Contact Stats');
  }
};

// Update contact (admin function)
export const updateContact = async (contactId, updateData) => {
  try {
    const response = await api.put(`/contact/update/${contactId}`, updateData);
    return {
      success: true,
      data: response.data,
      message: 'Contact updated successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Update Contact');
  }
};

// Delete contact (admin function)
export const deleteContact = async (contactId) => {
  try {
    const response = await api.delete(`/contact/delete/${contactId}`);
    return {
      success: true,
      data: response.data,
      message: 'Contact deleted successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Delete Contact');
  }
};

// Get single contact by ID
export const getContactById = async (contactId) => {
  try {
    const response = await api.get(`/contact/${contactId}`);
    return {
      success: true,
      data: response.data,
      message: 'Contact retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'Get Contact');
  }
};

// ======================
// USER SYSTEM
// ======================

// User registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return {
      success: true,
      data: response.data,
      message: 'User registered successfully'
    };
  } catch (error) {
    return handleApiError(error, 'User Registration');
  }
};

// User login
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/users/login', userData);
    
    // Store token if login successful
    if (response.data.token) {
      tokenManager.set(response.data.token);
    }
    
    return {
      success: true,
      data: response.data,
      message: 'Login successful'
    };
  } catch (error) {
    return handleApiError(error, 'User Login');
  }
};

// Update user
export const updateUser = async (userData) => {
  try {
    const response = await api.put('/users/update', userData);
    return {
      success: true,
      data: response.data,
      message: 'User updated successfully'
    };
  } catch (error) {
    return handleApiError(error, 'User Update');
  }
};

// Delete user
export const deleteUser = async () => {
  try {
    const response = await api.delete('/users/delete');
    
    // Remove token after successful deletion
    tokenManager.remove();
    
    return {
      success: true,
      data: response.data,
      message: 'User deleted successfully'
    };
  } catch (error) {
    return handleApiError(error, 'User Deletion');
  }
};

// Logout user
export const logoutUser = () => {
  tokenManager.remove();
  return {
    success: true,
    message: 'Logged out successfully'
  };
};

// ======================
// SYSTEM UTILITIES
// ======================

// Test function
export const testConnection = async () => {
  try {
    console.log('🔧 Testing connection to:', API_URL + '/health');
    const response = await api.get('/health');
    console.log('📝 Connection test successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('📝 Connection test failed:', error);
    return { success: false, error: error.message };
  }
};

// Health check function
export const healthCheck = async () => {
  try {
    const response = await api.get('/health');
    return {
      success: true,
      data: response.data,
      message: 'API is healthy'
    };
  } catch (error) {
    return handleApiError(error, 'Health Check');
  }
};

// ======================
// CONTACT FORM HELPERS
// ======================

// Contact form utilities
export const contactHelpers = {
  // Generate contact session ID
  generateSessionId: () => {
    return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Validate contact form data
  validateContactForm: (formData) => {
    const errors = [];
    
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.push('Full name is required (minimum 2 characters)');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Valid email address is required');
    }
    
    if (!formData.phoneNumber || formData.phoneNumber.trim().length < 10) {
      errors.push('Valid phone number is required');
    }
    
    if (!formData.projectType) {
      errors.push('Project type is required');
    }
    
    if (!formData.description || formData.description.trim().length < 10) {
      errors.push('Project description is required (minimum 10 characters)');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },
  
  // Format contact form data for submission
  formatContactFormData: (formData) => {
    return {
      sessionId: formData.sessionId || contactHelpers.generateSessionId(),
      type: 'contact_form',
      source: 'contact_form',
      fullName: formData.fullName?.trim(),
      email: formData.email?.trim().toLowerCase(),
      phoneNumber: formData.phoneNumber?.trim(),
      company: formData.company?.trim() || '',
      projectType: formData.projectType,
      description: formData.description?.trim(),
      howCanWeHelp: formData.howCanWeHelp?.trim() || formData.description?.trim(),
      budget: formData.budget || '',
      timeline: formData.timeline || '',
      referralSource: formData.referralSource || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      pageUrl: window.location.href
    };
  }
};

// Export utilities
export { tokenManager };

// Default export with contact form functions only
export default {
  // Contact Form System Only
  contact: {
    submit: submitContactForm,
    getAll: getAllContacts,
    getStats: getContactStats,
    update: updateContact,
    delete: deleteContact,
    getById: getContactById
  },
  
  // User System
  user: {
    register: registerUser,
    login: loginUser,
    update: updateUser,
    delete: deleteUser,
    logout: logoutUser
  },
  
  // System Utilities
  system: {
    healthCheck,
    testConnection
  },
  
  // Contact Form Utilities
  contactHelpers,
  tokenManager
};
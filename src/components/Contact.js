import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Printer, Phone, MapPin } from 'lucide-react';
import { submitContactForm, testConnection, contactHelpers } from '../ContactApiServices'; 
import Checkout from './Checkout';
import './Contact.css';

const Contact = () => {
  // Generate unique session ID for this contact form instance
  const [sessionId] = useState(() => contactHelpers.generateSessionId());
  
  const [expandedSection, setExpandedSection] = useState('HEADQUARTERS');
  const [formData, setFormData] = useState({
    sessionId: sessionId,
    type: 'contact_form',
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    howCanWeHelp: '',
    seenAtTradeshow: null,
    source: 'contact_form'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // Test connection when component mounts
  useEffect(() => {
    const testAPI = async () => {
      console.log('📝 Testing Contact Form API connection...');
      const result = await testConnection();
      console.log('📝 Connection test result:', result);
    };
    testAPI();
  }, []);
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };
  
  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      seenAtTradeshow: value
    });
    // Clear error when user makes selection
    if (error) setError(null);
  };
  
  const validateForm = () => {
    // Use the contact helpers validation
    const validation = contactHelpers.validateContactForm({
      ...formData,
      description: formData.howCanWeHelp // Map howCanWeHelp to description for validation
    });
    
    if (!validation.isValid) {
      setError(validation.errors[0]); // Show first error
      return false;
    }
    
    // Additional validation for tradeshow question
    if (formData.seenAtTradeshow === null) {
      setError('Please answer the tradeshow question');
      return false;
    }
    
    return true;
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    
    console.log('=== CONTACT FORM SUBMISSION START ===');
    console.log('📝 Session ID:', sessionId);
    console.log('📝 Form data:', formData);
    
    // Client-side validation
    if (!validateForm()) {
      console.log('📝 Form validation failed');
      return;
    }
    
    setSubmitting(true);
    setError(null);
    
    try {
      console.log('📝 Calling submitContactForm...');
      
      // Format form data using contact helpers
      const formattedData = contactHelpers.formatContactFormData({
        ...formData,
        description: formData.howCanWeHelp, // Map howCanWeHelp to description
        projectType: 'General Inquiry' // Default project type
      });
      
      // Add unique request ID for duplicate prevention
      const submissionData = {
        ...formattedData,
        id: `submission_${sessionId}_${Date.now()}`,
        seenAtTradeshow: formData.seenAtTradeshow,
        timestamp: new Date().toISOString()
      };
      
      console.log('📝 Enhanced submission data:', submissionData);
      
      // Submit form using contact-only API service
      const result = await submitContactForm(submissionData);
      
      console.log('=== CONTACT FORM API RESPONSE ===');
      console.log('📝 Result:', result);
      
      if (result.success) {
        console.log('✅ Contact form submitted successfully!');
        // Success - reset form and show success message
        const newSessionId = contactHelpers.generateSessionId();
        setFormData({
          sessionId: newSessionId,
          type: 'contact_form',
          fullName: '',
          email: '',
          phoneNumber: '',
          company: '',
          howCanWeHelp: '',
          seenAtTradeshow: null,
          source: 'contact_form'
        });
        setFormSubmitted(true);
      } else {
        console.log('❌ Contact form submission failed:', result.message);
        // Error - show error message
        setError(result.message || 'There was an error submitting your form. Please try again.');
      }
    } catch (err) {
      console.error('❌ Unexpected error during contact form submission:', err);
      setError('An unexpected error occurred. Please try again.');
    }
    
    setSubmitting(false);
    console.log('=== CONTACT FORM SUBMISSION END ===');
  };
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  // Enhanced reset form function
  const handleSendAnother = () => {
    const newSessionId = contactHelpers.generateSessionId();
    
    console.log('📝 Creating new contact form session:', newSessionId);
    
    setFormSubmitted(false);
    setError(null);
    setFormData({
      sessionId: newSessionId,
      type: 'contact_form',
      fullName: '',
      email: '',
      phoneNumber: '',
      company: '',
      howCanWeHelp: '',
      seenAtTradeshow: null,
      source: 'contact_form'
    });
    
    // Scroll back to top of form for better UX
    document.querySelector('.form-container')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  
  // Keep the old resetForm for backward compatibility
  const resetForm = () => {
    handleSendAnother();
  };
  
  // Test function for debugging
  const handleTestConnection = async () => {
    console.log('📝 Manual connection test...');
    const result = await testConnection();
    console.log('📝 Manual test result:', result);
    alert(`Contact Form API Connection: ${result.success ? 'SUCCESS' : 'FAILED'}\nCheck console for details.`);
  };

  // Location image placeholder component
  const LocationImagePlaceholder = ({ location }) => (
    <div 
      className="location-image-placeholder" 
      style={{
        width: '100px',
        height: '80px',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        fontSize: '10px',
        textAlign: 'center'
      }}
    >
      <span style={{ fontSize: '20px', marginBottom: '4px' }}>🏢</span>
      <span>{location}</span>
    </div>
  );
  
  return (
    <>
      
      {/* {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'rgba(0,128,0,0.8)', 
          color: 'white',
          padding: '8px',
          fontSize: '11px',
          zIndex: 10000,
          borderRadius: '4px'
        }}>
          📝 Contact Form Session: {sessionId.substring(0, 25)}...
          <br />
          Type: contact_form
          <br />
          Status: contact-only (no chat widget)
          <br />
          <button 
            onClick={handleTestConnection}
            style={{
              background: 'white',
              color: 'green',
              border: 'none',
              padding: '2px 6px',
              fontSize: '10px',
              borderRadius: '2px',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Test API
          </button>
        </div>
      )} */}

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left side - Contact Form */}
          <div>
            <h1>CONTACT US</h1>
            <p className="form-intro">Fill out our form and a software expert will contact you within 24hrs.</p>
            
            {formSubmitted ? (
              // Enhanced success message
              <div className="success-message">
                <div className="checkmark"></div>
                <div className="success-content">
                  <h3>Thank you for contacting us!</h3>
                  <p>We've received your inquiry and will get back to you within 24 hours.</p>
                  <p className="success-details">
                    Your submission has been recorded with session ID: <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      {sessionId}
                    </code>
                  </p>
                  <button 
                    className="send-another-button"
                    onClick={handleSendAnother}
                    type="button"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="form-container" onSubmit={onSubmit} noValidate>
                <div>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={onChange}
                    placeholder="FULL NAME *" 
                    className={`input-field ${error && !formData.fullName.trim() ? 'error' : ''}`}
                    required
                    autoComplete="name"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="EMAIL *" 
                    className={`input-field ${error && (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) ? 'error' : ''}`}
                    required
                    autoComplete="email"
                  />
                </div>
                
                <div className="input-grid">
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={onChange}
                    placeholder="PHONE *" 
                    className={`input-field ${error && !formData.phoneNumber.trim() ? 'error' : ''}`}
                    required
                    autoComplete="tel"
                  />
                  
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    placeholder="COMPANY (OPTIONAL)" 
                    className="input-field"
                    autoComplete="organization"
                  />
                </div>
                
<div>
  <select 
    name="projectType"
    value={formData.projectType || ''}
    onChange={onChange}
    className="input-field"
    required
  >
   <option value="">SELECT PROJECT TYPE *</option>
<option value="Website Development">Website Development</option>
<option value="Mobile App Development">Mobile App Development</option>
<option value="Custom Software Development">Custom Software Development</option>
<option value="E-commerce Development">E-commerce Development</option>
<option value="Enterprise Software">Enterprise Software</option>
<option value="Cloud Solutions">Cloud Solutions</option>
<option value="API Development">API Development</option>
<option value="Database Solutions">Database Solutions</option>
<option value="AI/ML Integration">AI/ML Integration</option>
<option value="System Integration">System Integration</option>
<option value="Legacy Modernization">Legacy Modernization</option>
<option value="Technical Consulting">Technical Consulting</option>
<option value="General Inquiry">General Inquiry</option>
  </select>
</div>

                <div>
                  <input 
                    type="text" 
                    name="howCanWeHelp"
                    value={formData.howCanWeHelp}
                    onChange={onChange}
                    placeholder="HOW CAN WE HELP YOU? *" 
                    className={`input-field ${error && !formData.howCanWeHelp.trim() ? 'error' : ''}`}
                    required
                  />
                </div>
                
                <div>
                  <p>Have you seen us at any tradeshow? *</p>
                  <div className="radio-group" style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                    <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input 
                        type="radio" 
                        name="seenAtTradeshow"
                        checked={formData.seenAtTradeshow === true}
                        onChange={() => handleRadioChange(true)}
                        style={{ accentColor: '#f97316' }}
                        required
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input 
                        type="radio" 
                        name="seenAtTradeshow"
                        checked={formData.seenAtTradeshow === false}
                        onChange={() => handleRadioChange(false)}
                        style={{ accentColor: '#f97316' }}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                
                {error && (
                  <div className="error-message" role="alert">
                    {error}
                  </div>
                )}
                
                <div>
                  <button 
                    type="submit"
                    className="submit-button"
                    disabled={submitting}
                    aria-label={submitting ? 'Submitting form' : 'Submit contact form'}
                  >
                    {submitting ? (
                      <>
                        <span>SUBMITTING...</span>
                        <span className="loading-spinner" style={{
                          display: 'inline-block',
                          width: '14px',
                          height: '14px',
                          border: '2px solid #ffffff40',
                          borderTop: '2px solid #ffffff',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                          marginLeft: '8px'
                        }}></span>
                      </>
                    ) : (
                      'SPEAK TO A SOFTWARE PRO'
                    )}
                  </button>
                </div>
                
                <div className="legal-text">
                  <p>* By requesting a consult you agree to the terms of WayUP Technology's 
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> privacy policy</a>.
                    This site is protected by reCAPTCHA and the Google 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and 
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
                  </p>
                </div>
              </form>
            )}
          </div>
          
          {/* Right side - Contact Info & Locations */}
          <div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon-container">
                  <Phone size={20} color="#f97316" />
                </div>
                <div>
                  <a href="tel:8482289890" className="contact-text">Phone: 848 228 9890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <Phone size={20} color="#f97316" />
                </div>
                <div>
                  <a href="tel:+18482289890" className="contact-text">International: +1848-228-9890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <Mail size={20} className="mail-icon" />
                </div>
                <div>
                  <a href="mailto:positiveimpactmakers@yahoo.com" className="contact-link">positiveimpactmakers@yahoo.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <Printer size={20} className="print-icon" />
                </div>
                <div>
                  <span className="contact-text">Fax: (848) 228 9890</span>
                </div>
              </div>
            </div>
            
            <div className="locations-container">
              <h2>LOCATIONS</h2>
              
              {/* Headquarters Section */}
              <div className="location-section">
                <div 
                  className="location-header"
                  onClick={() => toggleSection('HEADQUARTERS')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleSection('HEADQUARTERS');
                    }
                  }}
                >
                  <h3>GLOBAL HEADQUARTER</h3>
                  <ChevronDown 
                    size={22}
                    className={`chevron-icon ${expandedSection === 'HEADQUARTERS' ? 'chevron-rotated' : ''}`} 
                  />
                </div>
                
                {expandedSection === 'HEADQUARTERS' && (
                  <div className="location-content">
                    <div>
                      <p className="bold-text">Headquarters & Delivery Center</p>
                      <p><MapPin size={16} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />116 E 124th St</p>
                      <p>Cellar Level New York</p>
                      <p>NY 10035, USA</p>
                    </div>
                    <div className="york-image">
  <img src='images/York.png' alt="" />
</div>
                  </div>
                )}
              </div>
              
              {/* United States Section */}
              <div className="location-section">
                <div 
                  className="location-header"
                  onClick={() => toggleSection('UNITED STATES')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleSection('UNITED STATES');
                    }
                  }}
                >
                  <h3>UNITED STATES</h3>
                  <ChevronDown 
                    size={22}
                    className={`chevron-icon ${expandedSection === 'UNITED STATES' ? 'chevron-rotated' : ''}`} 
                  />
                </div>
                
                {expandedSection === 'UNITED STATES' && (
                  <div className="location-content">
                    <div>
                      <p className="bold-text">New Jersey Office</p>
                      <p><MapPin size={16} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />20 Stahuber Street</p>
                      <p>Union, New Jersey 07083</p>
                    </div>
                   <div className="york-image">
  <img src='images/York.png' alt="" />
</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Component */}
      <Checkout />
      
      {/* Add loading spinner CSS */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;
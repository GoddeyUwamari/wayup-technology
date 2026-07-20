import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Printer, Phone, MapPin } from 'lucide-react';
import { submitContactForm, testConnection, contactHelpers } from '../ContactApiServices';
import { useLocation } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  const [sessionId, setSessionId] = useState(
    () => contactHelpers.generateSessionId()
  );

  const [expandedSection, setExpandedSection] = useState('HEADQUARTERS');

  const [formData, setFormData] = useState({
    sessionId,
    type: 'contact_form',
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    projectType: '',
    howCanWeHelp: '',
    source: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Prevent body scroll when success modal is open
  useEffect(() => {
    if (formSubmitted) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [formSubmitted]);

  // Only test connection in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const testAPI = async () => {
        console.log('📝 Testing Contact Form API connection...');
        const result = await testConnection();
        console.log('📝 Connection test result:', result);
      };
      testAPI();
    }
  }, []);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return false;
    }

    if (!formData.projectType) {
      setError('Please select a project type');
      return false;
    }

    if (!formData.howCanWeHelp.trim()) {
      setError('Please tell us how we can help you');
      return false;
    }

    if (!formData.source) {
      setError('Please let us know how you heard about us');
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    setError(null);

    try {
      const formattedData = contactHelpers.formatContactFormData({
        ...formData,
        description: formData.howCanWeHelp,
        projectType: formData.projectType || 'General Inquiry',
      });

      const submissionData = {
        ...formattedData,
        id: `submission_${sessionId}_${Date.now()}`,
        timestamp: new Date().toISOString(),
      };

      const result = await submitContactForm(submissionData);

      if (result.success) {
        const newSessionId = contactHelpers.generateSessionId();
        setSessionId(newSessionId);
        setFormData({
          sessionId: newSessionId,
          type: 'contact_form',
          fullName: '',
          email: '',
          phoneNumber: '',
          company: '',
          projectType: '',
          howCanWeHelp: '',
          source: '',
        });
        setFormSubmitted(true);
      } else {
        setError(result.message || 'There was an error submitting your form. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleSendAnother = () => {
    const newSessionId = contactHelpers.generateSessionId();
    setSessionId(newSessionId);
    setFormSubmitted(false);
    setError(null);
    setFormData({
      sessionId: newSessionId,
      type: 'contact_form',
      fullName: '',
      email: '',
      phoneNumber: '',
      company: '',
      projectType: '',
      howCanWeHelp: '',
      source: '',
    });
    document.querySelector('.form-container')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectTypes = [
    'Website Design & Development',
    'E-Commerce Store',
    'Mobile App Development',
    'Business Automation',
    'Custom Software Development',
    'Digital Marketing',
    'Cloud & Infrastructure',
    'Technical Consulting',
    'General Inquiry',
  ];

  const sourceOptions = [
    'Google Search',
    'Social Media',
    'Referral from a friend',
    'LinkedIn',
    'Facebook',
    'Advertisement',
    'Other',
  ];

  return (
    <>
      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left side - Contact Form */}
          <div>
            <h1>CONTACT US</h1>
            <p className="form-intro">
              Tell us what you're building. A software expert will review your project and contact you within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="success-message">
                <div className="success-content">
                  <div className="checkmark"></div>
                  <h3>Thank you for reaching out!</h3>
                  <p>We've received your inquiry and will get back to you within 24 hours.</p>
                  <div className="success-details">
                    <p>Your submission has been recorded with session ID:</p>
                    <code>{sessionId}</code>
                  </div>
                  <button
                    className="send-another-button"
                    onClick={handleSendAnother}
                    type="button"
                    aria-label="Send another inquiry"
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
                    aria-label="Full name"
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
                    aria-label="Email address"
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
                    aria-label="Phone number"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    placeholder="BUSINESS NAME (OPTIONAL)"
                    className="input-field"
                    autoComplete="organization"
                    aria-label="Business name"
                  />
                </div>

                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={onChange}
                    className={`input-field ${error && !formData.projectType ? 'error' : ''}`}
                    required
                    aria-label="Project type"
                  >
                    <option value="">WHAT DO YOU NEED? *</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="howCanWeHelp"
                    value={formData.howCanWeHelp}
                    onChange={onChange}
                    placeholder="BRIEFLY DESCRIBE YOUR PROJECT *"
                    className={`input-field ${error && !formData.howCanWeHelp.trim() ? 'error' : ''}`}
                    required
                    aria-label="Project description"
                  />
                </div>

                <div>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={onChange}
                    className={`input-field ${error && !formData.source ? 'error' : ''}`}
                    required
                    aria-label="How did you hear about us"
                  >
                    <option value="">HOW DID YOU HEAR ABOUT US? *</option>
                    {sourceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
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
                        <span
                          className="loading-spinner"
                          style={{
                            display: 'inline-block',
                            width: '14px',
                            height: '14px',
                            border: '2px solid #ffffff40',
                            borderTop: '2px solid #ffffff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            marginLeft: '8px',
                          }}
                        ></span>
                      </>
                    ) : (
                      'SPEAK TO A SOFTWARE EXPERT'
                    )}
                  </button>
                </div>

                <div className="legal-text">
                  <p>
                    * By submitting this form you agree to WayUP Technology's{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      privacy policy
                    </a>.
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
                  <a href="tel:8482289890" className="contact-text">
                    Phone: 848 228 9890
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-container">
                  <Phone size={20} color="#f97316" />
                </div>
                <div>
                  <a href="tel:+18482289890" className="contact-text">
                    International: +1 848-228-9890
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-container">
                  <Mail size={20} className="mail-icon" />
                </div>
                <div>
                  <a href="mailto:projectmanager@wayuptechn.com" className="contact-link">
                    projectmanager@wayuptechn.com
                  </a>
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
                      <p>
                        <MapPin size={16} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />
                        852 S 20th Street
                      </p>
                      <p>Newark</p>
                      <p>NJ 07108, USA</p>
                    </div>
                    <div className="york-image">
                      <img src="images/York.png" alt="Newark NJ office location" />
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
                      <p>
                        <MapPin size={16} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />
                        852 S 20th Street, Newark, NJ 07108
                      </p>
                    </div>
                    <div className="york-image">
                      <img src="images/York.png" alt="New Jersey office location" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spinner keyframe — add @keyframes spin to Contact.css */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;
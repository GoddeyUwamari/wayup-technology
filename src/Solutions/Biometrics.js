import React, { useEffect } from 'react';
import { Fingerprint, Eye, Scan, Lock, Shield, UserCheck, Server, Zap, Clock, CheckCircle, AlertTriangle, Users, Building2, Award } from 'lucide-react';
import './Biometrics.css';

const Biometrics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const biometricTypes = [
    {
      icon: <Fingerprint className="bio-type-icon" />,
      title: 'Fingerprint Recognition',
      description: 'Fast, accurate fingerprint scanning with industry-leading accuracy rates and anti-spoofing technology.',
      accuracy: '99.8%'
    },
    {
      icon: <Eye className="bio-type-icon" />,
      title: 'Iris & Retina Scanning',
      description: 'Non-invasive, highly secure iris and retina scanning for maximum security applications.',
      accuracy: '99.9%'
    },
    {
      icon: <Scan className="bio-type-icon" />,
      title: 'Facial Recognition',
      description: 'AI-powered facial recognition with live detection to prevent spoofing and ensure authenticity.',
      accuracy: '99.7%'
    },
    {
      icon: <UserCheck className="bio-type-icon" />,
      title: 'Multi-Modal Systems',
      description: 'Combine multiple biometric factors for enhanced security and seamless user verification.',
      accuracy: '99.95%'
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="usecase-icon" />,
      title: 'Physical Access Control',
      description: 'Secure building entry, restricted areas, and sensitive facilities with contactless biometric authentication.',
      features: ['Door Access Systems', 'Turnstile Integration', 'Visitor Management']
    },
    {
      icon: <Lock className="usecase-icon" />,
      title: 'Identity Verification',
      description: 'Prevent fraud and ensure authentic user identity for onboarding, KYC compliance, and authentication.',
      features: ['Customer Onboarding', 'Account Recovery', 'Transaction Approval']
    },
    {
      icon: <Clock className="usecase-icon" />,
      title: 'Time & Attendance',
      description: 'Eliminate buddy punching and time theft with accurate employee time tracking and attendance management.',
      features: ['Clock In/Out', 'Shift Management', 'Payroll Integration']
    },
    {
      icon: <Server className="usecase-icon" />,
      title: 'Data & Network Security',
      description: 'Protect sensitive systems, data centers, and network resources with biometric authentication.',
      features: ['Server Room Access', 'Workstation Login', 'VPN Authentication']
    }
  ];

  const advantages = [
    {
      icon: <Shield className="adv-icon" />,
      title: 'Unparalleled Security',
      description: 'Biometric traits cannot be stolen, forgotten, or shared like passwords or access cards.'
    },
    {
      icon: <Zap className="adv-icon" />,
      title: 'Lightning Fast',
      description: 'Authentication in under 1 second for seamless user experience and high throughput.'
    },
    {
      icon: <CheckCircle className="adv-icon" />,
      title: 'Highly Accurate',
      description: 'Advanced algorithms deliver accuracy rates exceeding 99% with minimal false positives.'
    },
    {
      icon: <Users className="adv-icon" />,
      title: 'Scalable Solutions',
      description: 'From small offices to enterprise deployments supporting millions of users.'
    }
  ];

  const securityFeatures = [
    { label: 'AES-256 Encryption', icon: <Lock size={18} /> },
    { label: 'Anti-Spoofing Detection', icon: <AlertTriangle size={18} /> },
    { label: 'GDPR Compliant', icon: <Shield size={18} /> },
    { label: 'Local Template Storage', icon: <Server size={18} /> },
    { label: 'Audit Trail Logging', icon: <CheckCircle size={18} /> },
    { label: 'Multi-Factor Auth', icon: <UserCheck size={18} /> }
  ];

  const stats = [
    { value: '99.9%', label: 'Accuracy Rate', sublabel: 'Industry-leading precision' },
    { value: '<1s', label: 'Recognition Time', sublabel: 'Lightning-fast authentication' },
    { value: '50M+', label: 'Users Secured', sublabel: 'Worldwide deployments' },
    { value: '24/7', label: 'Support', sublabel: 'Expert assistance available' }
  ];

  const caseStudy = {
    company: 'Global Financial Institution',
    industry: 'Banking & Finance',
    challenge: 'Required secure, compliant authentication for 15,000+ employees across 200 branches while meeting strict regulatory requirements and preventing unauthorized access to sensitive financial systems.',
    solution: 'Deployed comprehensive biometric access control system with facial recognition and fingerprint scanning, integrated with existing security infrastructure and identity management systems.',
    results: [
      { metric: '100%', label: 'Security Compliance', description: 'Full regulatory adherence' },
      { metric: '0', label: 'Security Breaches', description: 'Since implementation' },
      { metric: '75%', label: 'Faster Access', description: 'Average entry time reduction' },
      { metric: '$1.2M', label: 'Annual Savings', description: 'From eliminated badges' }
    ]
  };

  return (
    <div className="biometrics">
      {/* Hero Section */}
      <section className="bio-hero">
        <div className="bio-hero-bg">
          <div className="bio-hero-pattern"></div>
        </div>
        <div className="bio-container">
          <div className="bio-hero-content">
            <div className="bio-hero-badge">
              <Shield size={16} />
              <span>Next-Generation Security</span>
            </div>
            <h1 className="bio-hero-title">
              Biometric Authentication<br />
              <span className="bio-hero-highlight">Beyond Passwords</span>
            </h1>
            <p className="bio-hero-subtitle">
              Secure your organization with cutting-edge biometric solutions that deliver
              unmatched accuracy, speed, and reliability for identity verification and access control.
            </p>
            <div className="bio-hero-buttons">
              <button className="bio-btn bio-btn-primary">
                <span>Request Demo</span>
                <Fingerprint size={20} />
              </button>
              <button className="bio-btn bio-btn-outline">
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="bio-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="bio-hero-stat-card">
                  <div className="bio-stat-value">{stat.value}</div>
                  <div className="bio-stat-label">{stat.label}</div>
                  <div className="bio-stat-sublabel">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bio-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80"
              alt="Advanced biometric fingerprint scanner with glowing blue interface"
              className="bio-hero-image"
            />
            <div className="bio-hero-float-badge">
              <div className="bio-float-icon">
                <Fingerprint size={32} />
              </div>
              <div className="bio-float-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Biometric Types Section */}
      <section className="bio-types">
        <div className="bio-container">
          <div className="bio-section-header">
            <span className="bio-section-label">Biometric Technologies</span>
            <h2 className="bio-section-title">Advanced Recognition Systems</h2>
            <p className="bio-section-subtitle">
              Multiple biometric modalities to meet your specific security requirements
            </p>
          </div>

          <div className="bio-types-grid">
            {biometricTypes.map((type, index) => (
              <div key={index} className="bio-type-card">
                <div className="bio-type-icon-wrapper">
                  {type.icon}
                  <div className="bio-type-accuracy">{type.accuracy}</div>
                </div>
                <h3 className="bio-type-title">{type.title}</h3>
                <p className="bio-type-description">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bio-usecases">
        <div className="bio-container">
          <div className="bio-section-header">
            <span className="bio-section-label">Applications</span>
            <h2 className="bio-section-title">Comprehensive Use Cases</h2>
          </div>

          <div className="bio-usecases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="bio-usecase-card">
                <div className="bio-usecase-icon-bg">
                  {useCase.icon}
                </div>
                <h3 className="bio-usecase-title">{useCase.title}</h3>
                <p className="bio-usecase-description">{useCase.description}</p>
                <div className="bio-usecase-features">
                  {useCase.features.map((feature, fIndex) => (
                    <div key={fIndex} className="bio-feature-tag">
                      <CheckCircle size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bio-advantages">
        <div className="bio-container">
          <div className="bio-advantages-layout">
            <div className="bio-advantages-content">
              <span className="bio-section-label bio-label-light">Why Biometrics?</span>
              <h2 className="bio-section-title bio-title-light">
                The Future of<br />
                Secure Authentication
              </h2>
              <p className="bio-advantages-text">
                Traditional authentication methods like passwords, PINs, and access cards are
                vulnerable to theft, loss, and unauthorized sharing. Biometric authentication
                leverages unique physical characteristics that cannot be replicated, providing
                the highest level of security and user convenience.
              </p>

              {/* Security Features Grid */}
              <div className="bio-security-features">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="bio-security-feature">
                    {feature.icon}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bio-advantages-cards">
              {advantages.map((advantage, index) => (
                <div key={index} className="bio-advantage-card">
                  <div className="bio-advantage-icon-wrapper">
                    {advantage.icon}
                  </div>
                  <h4 className="bio-advantage-title">{advantage.title}</h4>
                  <p className="bio-advantage-description">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bio-case-study">
        <div className="bio-container">
          <div className="bio-section-header">
            <span className="bio-section-label">Success Story</span>
            <h2 className="bio-section-title">Transforming Enterprise Security</h2>
          </div>

          <div className="bio-case-wrapper">
            <div className="bio-case-header-section">
              <div className="bio-case-company-badge">
                <Award size={28} />
              </div>
              <div className="bio-case-company-info">
                <h3 className="bio-case-company-name">{caseStudy.company}</h3>
                <p className="bio-case-industry">{caseStudy.industry}</p>
              </div>
            </div>

            <div className="bio-case-content-grid">
              <div className="bio-case-challenge-solution">
                <div className="bio-case-block">
                  <h4 className="bio-case-block-title">Challenge</h4>
                  <p className="bio-case-block-text">{caseStudy.challenge}</p>
                </div>

                <div className="bio-case-block">
                  <h4 className="bio-case-block-title">Solution</h4>
                  <p className="bio-case-block-text">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="bio-case-results-section">
                <h4 className="bio-case-results-title">Results & Impact</h4>
                <div className="bio-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bio-case-result">
                      <div className="bio-result-metric">{result.metric}</div>
                      <div className="bio-result-label">{result.label}</div>
                      <div className="bio-result-description">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bio-cta">
        <div className="bio-container">
          <div className="bio-cta-content">
            <div className="bio-cta-icon-wrapper">
              <Fingerprint size={56} />
              <div className="bio-cta-icon-glow"></div>
            </div>
            <h2 className="bio-cta-title">Ready to Enhance Your Security?</h2>
            <p className="bio-cta-text">
              Discover how biometric authentication can transform your organization's
              security posture. Schedule a personalized demo with our experts today.
            </p>
            <button className="bio-btn bio-btn-cta">
              <span>Schedule Demo</span>
              <Fingerprint size={20} />
            </button>
            <div className="bio-cta-footer">
              <div className="bio-cta-footer-item">
                <CheckCircle size={18} />
                <span>Free Consultation</span>
              </div>
              <div className="bio-cta-footer-item">
                <CheckCircle size={18} />
                <span>Custom Solution Design</span>
              </div>
              <div className="bio-cta-footer-item">
                <CheckCircle size={18} />
                <span>ROI Analysis Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biometrics;

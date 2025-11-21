import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Package, Radio, Smartphone, BarChart3, Clock, Shield, TrendingUp, CheckCircle2, Truck, Warehouse, Tag } from 'lucide-react';
import './AssetTracking.css';

const AssetTracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MapPin className="feature-icon" />,
      title: 'Real-Time GPS Tracking',
      description: 'Track assets anywhere in the world with precise GPS location data updated in real-time.',
      color: '#FF6B35'
    },
    {
      icon: <Radio className="feature-icon" />,
      title: 'RFID & Barcode Scanning',
      description: 'Quickly identify and track assets using RFID tags or barcode scanning technology.',
      color: '#004E89'
    },
    {
      icon: <Smartphone className="feature-icon" />,
      title: 'Mobile Access',
      description: 'Manage and monitor your assets on-the-go with our powerful mobile applications.',
      color: '#7C3AED'
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: 'Analytics & Reporting',
      description: 'Gain insights with comprehensive reports and data visualization dashboards.',
      color: '#00A878'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="benefit-icon" />,
      title: 'Reduce Asset Loss',
      stat: '95%',
      description: 'Reduction in lost or misplaced assets'
    },
    {
      icon: <Clock className="benefit-icon" />,
      title: 'Save Time',
      stat: '60%',
      description: 'Faster asset location and retrieval'
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: 'Improve Compliance',
      stat: '100%',
      description: 'Audit trail for regulatory compliance'
    }
  ];

  const industries = [
    {
      icon: <Warehouse className="industry-icon" />,
      name: 'Warehousing & Logistics',
      description: 'Track inventory, shipments, and equipment across multiple facilities with real-time visibility into your supply chain operations.'
    },
    {
      icon: <Truck className="industry-icon" />,
      name: 'Transportation & Fleet',
      description: 'Monitor vehicle locations, optimize routes, and manage maintenance schedules for your entire fleet in one centralized platform.'
    },
    {
      icon: <Package className="industry-icon" />,
      name: 'Manufacturing',
      description: 'Track raw materials, work-in-progress, and finished goods throughout your production process to improve efficiency.'
    },
    {
      icon: <Tag className="industry-icon" />,
      name: 'Retail & E-Commerce',
      description: 'Manage inventory across stores and warehouses, prevent stockouts, and streamline order fulfillment operations.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Tag Your Assets',
      description: 'Attach GPS trackers, RFID tags, or barcode labels to your assets. Our team helps with implementation and setup.',
      icon: <Tag className="step-icon" />
    },
    {
      step: '02',
      title: 'Monitor in Real-Time',
      description: 'Access live location data, movement history, and status updates through our intuitive dashboard or mobile app.',
      icon: <MapPin className="step-icon" />
    },
    {
      step: '03',
      title: 'Receive Alerts',
      description: 'Get instant notifications for unauthorized movements, geofence breaches, maintenance schedules, and more.',
      icon: <Radio className="step-icon" />
    },
    {
      step: '04',
      title: 'Optimize Operations',
      description: 'Analyze data insights to improve asset utilization, reduce costs, and make informed business decisions.',
      icon: <BarChart3 className="step-icon" />
    }
  ];

  const caseStudy = {
    company: 'National Logistics Company',
    challenge: 'Managing 5,000+ assets across 50 locations with frequent losses and no visibility into asset locations or utilization rates.',
    solution: 'Implemented comprehensive asset tracking system with GPS trackers, RFID tags, and centralized management platform.',
    results: [
      { label: 'Asset Recovery', value: '98%', description: 'Increase in asset recovery rate' },
      { label: 'Cost Savings', value: '$2.8M', description: 'Annual savings from reduced losses' },
      { label: 'Efficiency Gain', value: '45%', description: 'Improvement in asset utilization' }
    ]
  };

  return (
    <div className="asset-tracking">
      {/* Hero Section */}
      <section className="at-hero">
        <div className="at-hero-content">
          <div className="at-container">
            <div className="at-hero-text">
              <span className="at-hero-label">Smart Asset Management</span>
              <h1 className="at-hero-title">
                Never Lose Track of<br />
                <span className="at-hero-gradient">Your Valuable Assets</span>
              </h1>
              <p className="at-hero-description">
                Real-time tracking and monitoring solutions that give you complete visibility
                and control over your assets, anywhere in the world.
              </p>
              <div className="at-hero-buttons">
                <Link to="/contact" state={{ scrollToTop: true }} className="at-btn at-btn-primary">
                  <span>Get Started</span>
                  <CheckCircle2 size={20} />
                </Link>
                <Link to="/portfolio/work" state={{ scrollToTop: true }} className="at-btn at-btn-secondary">
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
            <div className="at-hero-visual">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Modern warehouse with advanced asset tracking and inventory management systems"
                className="at-hero-image"
              />
              <div className="at-hero-badge">
                <MapPin size={24} className="at-badge-icon" />
                <div className="at-badge-content">
                  <span className="at-badge-label">Real-Time Tracking</span>
                  <span className="at-badge-value">5,000+ Assets Monitored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="at-features">
        <div className="at-container">
          <div className="at-section-header">
            <span className="at-section-label">Key Features</span>
            <h2 className="at-section-title">Powerful Tracking Capabilities</h2>
            <p className="at-section-subtitle">
              Everything you need to track, manage, and optimize your assets in one comprehensive platform
            </p>
          </div>

          <div className="at-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="at-feature-card" style={{'--feature-color': feature.color}}>
                <div className="at-feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="at-feature-title">{feature.title}</h3>
                <p className="at-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="at-benefits">
        <div className="at-container">
          <div className="at-benefits-content">
            <div className="at-benefits-text">
              <span className="at-section-label at-label-light">Why Choose Us</span>
              <h2 className="at-section-title at-title-light">
                Measurable Results<br />
                That Drive ROI
              </h2>
              <p className="at-benefits-description">
                Our asset tracking solutions deliver tangible business value from day one.
                Companies using our platform see immediate improvements in asset visibility,
                operational efficiency, and bottom-line savings.
              </p>
              <div className="at-benefits-list">
                <div className="at-benefit-item">
                  <CheckCircle2 className="at-check-icon" />
                  <span>Real-time location tracking with 99.9% accuracy</span>
                </div>
                <div className="at-benefit-item">
                  <CheckCircle2 className="at-check-icon" />
                  <span>Automated alerts and notifications</span>
                </div>
                <div className="at-benefit-item">
                  <CheckCircle2 className="at-check-icon" />
                  <span>Comprehensive audit trails for compliance</span>
                </div>
                <div className="at-benefit-item">
                  <CheckCircle2 className="at-check-icon" />
                  <span>Seamless integration with existing systems</span>
                </div>
              </div>
            </div>

            <div className="at-benefits-stats">
              {benefits.map((benefit, index) => (
                <div key={index} className="at-benefit-card">
                  <div className="at-benefit-icon-bg">
                    {benefit.icon}
                  </div>
                  <div className="at-benefit-stat">{benefit.stat}</div>
                  <h4 className="at-benefit-title">{benefit.title}</h4>
                  <p className="at-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="at-how-it-works">
        <div className="at-container">
          <div className="at-section-header">
            <span className="at-section-label">How It Works</span>
            <h2 className="at-section-title">Simple Setup, Powerful Results</h2>
            <p className="at-section-subtitle">
              Get started with asset tracking in four easy steps
            </p>
          </div>

          <div className="at-steps-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="at-step-card">
                <div className="at-step-number">{item.step}</div>
                <div className="at-step-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="at-step-title">{item.title}</h3>
                <p className="at-step-description">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="at-step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="at-industries">
        <div className="at-container">
          <div className="at-section-header">
            <span className="at-section-label">Industries We Serve</span>
            <h2 className="at-section-title">Trusted Across Multiple Sectors</h2>
          </div>

          <div className="at-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="at-industry-card">
                <div className="at-industry-icon-wrapper">
                  {industry.icon}
                </div>
                <h3 className="at-industry-name">{industry.name}</h3>
                <p className="at-industry-description">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="at-case-study">
        <div className="at-container">
          <div className="at-case-header">
            <span className="at-section-label">Success Story</span>
            <h2 className="at-section-title">Real Results from Real Customers</h2>
          </div>

          <div className="at-case-content">
            <div className="at-case-info">
              <div className="at-case-company">
                <div className="at-case-company-icon">
                  <Truck size={32} />
                </div>
                <div>
                  <h3 className="at-case-company-name">{caseStudy.company}</h3>
                  <p className="at-case-company-type">Logistics & Distribution</p>
                </div>
              </div>

              <div className="at-case-details">
                <div className="at-case-section">
                  <h4 className="at-case-label">Challenge</h4>
                  <p className="at-case-text">{caseStudy.challenge}</p>
                </div>

                <div className="at-case-section">
                  <h4 className="at-case-label">Solution</h4>
                  <p className="at-case-text">{caseStudy.solution}</p>
                </div>
              </div>
            </div>

            <div className="at-case-results">
              <h4 className="at-case-results-title">Impact & Results</h4>
              <div className="at-case-results-grid">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="at-case-result-card">
                    <div className="at-case-result-value">{result.value}</div>
                    <div className="at-case-result-label">{result.label}</div>
                    <p className="at-case-result-description">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="at-cta">
        <div className="at-container">
          <div className="at-cta-content">
            <h2 className="at-cta-title">Ready to Transform Your Asset Management?</h2>
            <p className="at-cta-text">
              Join hundreds of companies that trust WayUP Technology for their asset tracking needs
            </p>
            <Link to="/contact" state={{ scrollToTop: true }} className="at-btn at-btn-cta">
              <span>Start Free Trial</span>
              <CheckCircle2 size={20} />
            </Link>
            <p className="at-cta-note">No credit card required • 30-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetTracking;

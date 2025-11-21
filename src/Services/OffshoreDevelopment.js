import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Users,
  DollarSign,
  Clock,
  Shield,
  Zap,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Settings,
  Target,
  Award,
  Code,
  Briefcase,
  MapPin,
  BarChart3,
  Rocket,
  HeadphonesIcon
} from 'lucide-react';
import './OffshoreDevelopment.css';
import Checkout from '../components/Checkout';

const OffshoreDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '500+', label: 'Projects Delivered', icon: <Briefcase /> },
    { value: '60%', label: 'Cost Savings', icon: <DollarSign /> },
    { value: '150+', label: 'Expert Developers', icon: <Users /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Award /> }
  ];

  const advantages = [
    {
      icon: <DollarSign />,
      title: 'Cost Optimization',
      description: 'Reduce development costs by 40-60% without compromising quality',
      metric: '60% Savings',
      color: 'orange'
    },
    {
      icon: <Users />,
      title: 'Global Talent Pool',
      description: 'Access to world-class developers and specialized expertise',
      metric: '150+ Experts',
      color: 'navy'
    },
    {
      icon: <Clock />,
      title: 'Faster Delivery',
      description: '24/7 development cycle with overlapping time zones',
      metric: '3x Faster',
      color: 'orange'
    },
    {
      icon: <Zap />,
      title: 'Scalability',
      description: 'Quickly scale teams up or down based on project needs',
      metric: 'On-Demand',
      color: 'navy'
    },
    {
      icon: <Shield />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code review processes',
      metric: '99.9% Quality',
      color: 'orange'
    },
    {
      icon: <Target />,
      title: 'Focused Delivery',
      description: 'Dedicated teams aligned with your business goals',
      metric: '100% Focus',
      color: 'navy'
    }
  ];

  const services = [
    {
      icon: <Code />,
      title: 'Custom Software Development',
      description: 'End-to-end development of web, mobile, and enterprise applications with modern tech stacks.'
    },
    {
      icon: <Globe />,
      title: 'Web Development',
      description: 'Responsive, scalable web applications using React, Angular, Vue.js, and Node.js frameworks.'
    },
    {
      icon: <Settings />,
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation, CI/CD pipelines, and cloud migration services for AWS, Azure, GCP.'
    },
    {
      icon: <BarChart3 />,
      title: 'AI & Analytics',
      description: 'Machine learning, data analytics, and business intelligence solutions for data-driven decisions.'
    }
  ];

  const locations = [
    { name: 'India', developers: '80+', icon: '🇮🇳' },
    { name: 'Eastern Europe', developers: '40+', icon: '🇺🇦' },
    { name: 'Latin America', developers: '30+', icon: '🇧🇷' }
  ];

  const engagementModels = [
    {
      title: 'Dedicated Team',
      description: 'Full-time dedicated developers working exclusively on your project',
      features: ['Exclusive team members', 'Direct communication', 'Flexible scaling', 'Monthly billing'],
      icon: <Users />,
      recommended: true
    },
    {
      title: 'Project-Based',
      description: 'Fixed scope, timeline, and budget for defined project requirements',
      features: ['Fixed pricing', 'Defined deliverables', 'Milestone payments', 'Project management'],
      icon: <Target />
    },
    {
      title: 'Time & Material',
      description: 'Flexible engagement with pay-as-you-go for evolving requirements',
      features: ['Hourly rates', 'Flexible scope', 'Weekly reporting', 'Easy adjustments'],
      icon: <Clock />
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Understanding your project goals, technical needs, and team requirements'
    },
    {
      step: '02',
      title: 'Team Assembly',
      description: 'Handpicking developers matching your technology stack and expertise level'
    },
    {
      step: '03',
      title: 'Onboarding & Setup',
      description: 'Setting up communication channels, tools, and project infrastructure'
    },
    {
      step: '04',
      title: 'Development & Delivery',
      description: 'Agile development with regular sprints, demos, and continuous feedback'
    }
  ];

  return (
    <div className="offshore-development-page">
      {/* Hero Section - Unique Asymmetric Layout */}
      <section className="offshore-hero">
        <div className="offshore-hero-container">
          <div className="offshore-hero-content">
            <div className="offshore-badge">
              <Globe size={18} />
              <span>Global Development Excellence</span>
            </div>
            <h1 className="offshore-hero-title">
              Scale Your Team with
              <span className="offshore-gradient-text"> World-Class Offshore Talent</span>
            </h1>
            <p className="offshore-hero-desc">
              Access top-tier developers, reduce costs by 60%, and accelerate delivery with our proven
              offshore development model. Build exceptional products with dedicated teams working 24/7.
            </p>

            {/* Key Benefits Row */}
            <div className="offshore-hero-benefits">
              <div className="offshore-benefit-item">
                <CheckCircle size={20} />
                <span>60% Cost Reduction</span>
              </div>
              <div className="offshore-benefit-item">
                <CheckCircle size={20} />
                <span>24/7 Development</span>
              </div>
              <div className="offshore-benefit-item">
                <CheckCircle size={20} />
                <span>Expert Teams</span>
              </div>
            </div>

            <div className="offshore-hero-actions">
              <Link to="/contact" className="offshore-btn-primary">
                <span>Build Your Team</span>
                <ArrowRight />
              </Link>
              <Link to="/contact" className="offshore-btn-secondary">
                <MessageCircle />
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Hero Stats - Compact Grid */}
            <div className="offshore-hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="offshore-stat-card">
                  <div className="offshore-stat-icon">{stat.icon}</div>
                  <div className="offshore-stat-content">
                    <div className="offshore-stat-value">{stat.value}</div>
                    <div className="offshore-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Diagonal Split */}
          <div className="offshore-hero-visual">
            <div className="offshore-hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Global offshore development team collaboration"
                className="offshore-hero-img"
              />
              <div className="offshore-diagonal-overlay"></div>
            </div>

            {/* Floating Location Badge */}
            <div className="offshore-location-badge">
              <MapPin size={18} />
              <div>
                <div className="location-count">15+</div>
                <div className="location-label">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid - Unique 3-Column Alternating Colors */}
      <section className="offshore-advantages">
        <div className="offshore-container">
          <div className="offshore-section-header">
            <span className="offshore-label">Why Choose Us</span>
            <h2 className="offshore-section-title">Offshore Development Advantages</h2>
            <p className="offshore-section-subtitle">
              Strategic benefits that accelerate growth and maximize ROI
            </p>
          </div>

          <div className="offshore-advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className={`offshore-advantage-card ${advantage.color}`}>
                <div className="advantage-icon-wrapper">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
                <div className="advantage-metric">{advantage.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Horizontal Scroll Cards */}
      <section className="offshore-services">
        <div className="offshore-container">
          <div className="offshore-section-header">
            <span className="offshore-label">Our Expertise</span>
            <h2 className="offshore-section-title">Offshore Development Services</h2>
          </div>

          <div className="offshore-services-grid">
            {services.map((service, index) => (
              <div key={index} className="offshore-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations - Visual Map Style */}
      <section className="offshore-locations">
        <div className="offshore-container">
          <div className="offshore-section-header">
            <span className="offshore-label">Global Presence</span>
            <h2 className="offshore-section-title">Development Centers Worldwide</h2>
            <p className="offshore-section-subtitle">
              Strategic locations ensuring 24/7 coverage and cultural alignment
            </p>
          </div>

          <div className="offshore-locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="offshore-location-card">
                <div className="location-flag">{location.icon}</div>
                <h3>{location.name}</h3>
                <div className="location-developers">{location.developers} Developers</div>
                <div className="location-bar">
                  <div className="location-bar-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models - Premium Cards with Highlight */}
      <section className="offshore-engagement">
        <div className="offshore-container">
          <div className="offshore-section-header">
            <span className="offshore-label">Flexible Partnerships</span>
            <h2 className="offshore-section-title">Engagement Models</h2>
            <p className="offshore-section-subtitle">
              Choose the model that best fits your project requirements and budget
            </p>
          </div>

          <div className="offshore-engagement-grid">
            {engagementModels.map((model, index) => (
              <div key={index} className={`offshore-engagement-card ${model.recommended ? 'recommended' : ''}`}>
                {model.recommended && (
                  <div className="recommended-badge">
                    <Award size={16} />
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="engagement-icon">{model.icon}</div>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <ul className="engagement-features">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="engagement-btn">Select Model</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline with Connecting Lines */}
      <section className="offshore-process">
        <div className="offshore-container">
          <div className="offshore-section-header">
            <span className="offshore-label">How It Works</span>
            <h2 className="offshore-section-title">Seamless Onboarding Process</h2>
          </div>

          <div className="offshore-process-timeline">
            {process.map((item, index) => (
              <div key={index} className="offshore-process-step">
                <div className="process-step-number">{item.step}</div>
                <div className="process-step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {index < process.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Large Quote Style */}
      <section className="offshore-testimonial">
        <div className="offshore-testimonial-container">
          <div className="testimonial-content">
            <div className="testimonial-quote">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 28C12 23.5817 15.5817 20 20 20V16C13.3726 16 8 21.3726 8 28V36H20V28H12ZM32 28C32 23.5817 35.5817 20 40 20V16C33.3726 16 28 21.3726 28 28V36H40V28H32Z" fill="currentColor"/>
              </svg>
            </div>
            <blockquote>
              "Working with their offshore team has been transformative for our business. We reduced costs
              by 55% while actually improving code quality. The team integrated seamlessly with our processes
              and delivered a complex SaaS platform 3 months ahead of schedule."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">Michael Chen</div>
                <div className="author-role">CTO, TechVentures Inc.</div>
              </div>
              <div className="author-company">Fortune 500 Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Split Design */}
      <section className="offshore-cta">
        <div className="offshore-cta-container">
          <div className="offshore-cta-content">
            <div className="cta-left">
              <h2>Ready to Scale Your Development?</h2>
              <p>
                Get matched with expert developers in 48 hours. Start with a risk-free
                2-week trial to experience the quality and efficiency firsthand.
              </p>
              <ul className="cta-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>No upfront commitment</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>2-week risk-free trial</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="offshore-cta-btn" onClick={() => window.scrollTo(0, 0)}>
                <span>Start Your Trial</span>
                <Rocket size={20} />
              </Link>
              <Link to="/contact" className="offshore-cta-secondary" onClick={() => window.scrollTo(0, 0)}>
                <HeadphonesIcon size={20} />
                <span>Talk to an Expert</span>
              </Link>
              <div className="cta-trust">
                <div className="trust-item">
                  <Award size={18} />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="trust-item">
                  <Shield size={18} />
                  <span>NDA Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <Checkout />
    </div>
  );
};

export default OffshoreDevelopment;

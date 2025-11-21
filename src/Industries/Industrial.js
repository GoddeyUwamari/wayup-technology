import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Wrench, Zap, Settings, BarChart3, Cog, CheckCircle, ArrowRight, TrendingUp, Shield, Boxes, Radio, Award, Target } from 'lucide-react';
import './Industrial.css';

const Industrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '500+', label: 'Industrial Sites', icon: <Factory /> },
    { value: '99.7%', label: 'System Uptime', icon: <Target /> },
    { value: '60%', label: 'Cost Reduction', icon: <TrendingUp /> },
    { value: '25+', label: 'Years Experience', icon: <Award /> }
  ];

  const solutions = [
    {
      icon: <Factory />,
      title: 'Smart Factory Solutions',
      description: 'Transform traditional facilities into intelligent, connected operations with IIoT sensors, edge computing, and AI-driven analytics.',
      features: ['Digital Twin Technology', 'Real-time Dashboards', 'Predictive Analytics']
    },
    {
      icon: <Cog />,
      title: 'Asset Performance Management',
      description: 'Maximize equipment effectiveness with condition monitoring, predictive maintenance, and comprehensive asset lifecycle management.',
      features: ['Vibration Analysis', 'Thermal Imaging', 'Oil Analysis Integration']
    },
    {
      icon: <Zap />,
      title: 'Energy Management Systems',
      description: 'Reduce energy costs and carbon footprint with real-time monitoring, demand forecasting, and automated optimization.',
      features: ['ISO 50001 Compliance', 'Peak Demand Reduction', 'Renewable Integration']
    },
    {
      icon: <Shield />,
      title: 'Safety & Compliance',
      description: 'Ensure worker safety and regulatory compliance with environmental monitoring, incident tracking, and automated reporting.',
      features: ['OSHA Compliance', 'Gas Detection Systems', 'Emergency Response']
    },
    {
      icon: <Boxes />,
      title: 'Inventory & Warehouse Automation',
      description: 'Optimize material flow and storage with automated guided vehicles, robotic picking, and intelligent inventory systems.',
      features: ['AGV/AMR Integration', 'RFID Tracking', 'Warehouse Management']
    },
    {
      icon: <BarChart3 />,
      title: 'OEE & Production Analytics',
      description: 'Maximize Overall Equipment Effectiveness with real-time production tracking, downtime analysis, and performance KPIs.',
      features: ['OEE Monitoring', 'Root Cause Analysis', 'Shift Performance']
    }
  ];

  const industries = [
    { name: 'Mining & Metals', icon: '⛏️', projects: '120+' },
    { name: 'Oil & Gas', icon: '🛢️', projects: '85+' },
    { name: 'Chemical Processing', icon: '⚗️', projects: '95+' },
    { name: 'Power & Utilities', icon: '⚡', projects: '140+' },
    { name: 'Food & Beverage', icon: '🏭', projects: '110+' },
    { name: 'Automotive', icon: '🚗', projects: '75+' }
  ];

  const implementationSteps = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Assessment',
      duration: '2-4 weeks',
      activities: ['Site surveys', 'Process mapping', 'Technology audit', 'ROI analysis']
    },
    {
      phase: 'Phase 2',
      title: 'Design & Engineering',
      duration: '4-8 weeks',
      activities: ['System architecture', 'Network design', 'Integration planning', 'Security protocols']
    },
    {
      phase: 'Phase 3',
      title: 'Deployment & Testing',
      duration: '8-12 weeks',
      activities: ['Hardware installation', 'Software configuration', 'System testing', 'User training']
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Support',
      duration: 'Ongoing',
      activities: ['Performance tuning', '24/7 monitoring', 'Continuous improvement', 'Quarterly reviews']
    }
  ];

  const technologies = [
    'Siemens SCADA', 'Rockwell Automation', 'Schneider Electric', 'Wonderware',
    'GE Digital Proficy', 'Honeywell DCS', 'ABB System 800xA', 'Emerson DeltaV',
    'OSIsoft PI System', 'AVEVA', 'Inductive Automation', 'Kepware'
  ];

  return (
    <div className="industrial-page">
      {/* Hero Section - Split Grid Layout */}
      <section className="industrial-hero">
        <div className="industrial-hero-grid">
          <div className="industrial-hero-content">
            <div className="hero-badge">
              <Factory size={18} />
              <span>Industrial Automation & Control Systems</span>
            </div>
            <h1 className="industrial-hero-title">
              Heavy Industry
              <span className="industrial-gradient-text"> Automation Excellence</span>
            </h1>
            <p className="industrial-hero-desc">
              Mission-critical SCADA, DCS, and IIoT solutions engineered for mining, oil & gas, chemical processing, and heavy manufacturing. Built for extreme environments, 24/7 reliability.
            </p>
            <div className="hero-actions">
              <Link to="/contact" state={{ scrollToTop: true }} className="industrial-btn-primary">
                <span>Request Site Assessment</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/contact" state={{ scrollToTop: true }} className="industrial-btn-secondary">
                <Radio className="btn-icon-left" />
                <span>Live Demo</span>
              </Link>
            </div>

            {/* Hero Stats Grid */}
            <div className="hero-stats-grid">
              {heroStats.map((stat, index) => (
                <div key={index} className="hero-stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="industrial-hero-visual">
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Large industrial facility with automated systems and machinery"
                className="industrial-hero-img"
              />
              <div className="hero-image-gradient"></div>
            </div>
            {/* Floating Metric Cards */}
            <div className="hero-floating-metrics">
              <div className="floating-metric floating-metric-1">
                <Shield size={20} />
                <div>
                  <div className="metric-value">Zero</div>
                  <div className="metric-label">Safety Incidents</div>
                </div>
              </div>
              <div className="floating-metric floating-metric-2">
                <Zap size={20} />
                <div>
                  <div className="metric-value">24/7</div>
                  <div className="metric-label">Remote Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industrial-industries">
        <div className="industrial-container">
          <div className="industries-header">
            <span className="section-label">Industries</span>
            <h3 className="industries-title">Proven Across Critical Sectors</h3>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <div className="industry-name">{industry.name}</div>
                <div className="industry-projects">{industry.projects} Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="industrial-solutions">
        <div className="industrial-container">
          <div className="solutions-header">
            <span className="section-label">Our Solutions</span>
            <h2 className="industrial-section-title">
              Complete Industrial Automation Platform
            </h2>
            <p className="industrial-section-subtitle">
              From plant floor to top floor—integrated systems driving operational excellence
            </p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-card-header">
                  <div className="solution-icon-wrapper">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Full Width Design */}
      <section className="industrial-case-study">
        <div className="case-study-container">
          <div className="case-study-content">
            <div className="case-study-badge">CASE STUDY</div>
            <h2 className="case-study-title">
              Global Mining Operation: 24/7 Remote Monitoring & Control
            </h2>
            <div className="case-study-body">
              <div className="case-study-challenge">
                <h4>
                  <Shield className="section-icon" />
                  The Challenge
                </h4>
                <p>
                  A multinational mining corporation operating 12 remote sites across harsh climates needed centralized monitoring, predictive maintenance, and compliance tracking for critical equipment valued at $2.4B, while reducing operational costs by 40%.
                </p>
              </div>
              <div className="case-study-solution">
                <h4>
                  <Settings className="section-icon" />
                  Our Solution
                </h4>
                <p>
                  WayUP deployed a comprehensive Siemens SCADA system with satellite connectivity, edge analytics, AI-powered predictive maintenance, and integrated safety systems across all sites with centralized control room operations.
                </p>
              </div>
            </div>
            <div className="case-study-results">
              <div className="result-metric">
                <TrendingUp className="result-icon" />
                <div className="result-value">$127M</div>
                <div className="result-label">Annual Cost Savings</div>
              </div>
              <div className="result-metric">
                <Zap className="result-icon" />
                <div className="result-value">99.8%</div>
                <div className="result-label">Equipment Uptime</div>
              </div>
              <div className="result-metric">
                <BarChart3 className="result-icon" />
                <div className="result-value">73%</div>
                <div className="result-label">Faster Issue Resolution</div>
              </div>
              <div className="result-metric">
                <CheckCircle className="result-icon" />
                <div className="result-value">Zero</div>
                <div className="result-label">Safety Incidents</div>
              </div>
            </div>
          </div>
          <div className="case-study-image">
            <img
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80"
              alt="Mining control room with multiple monitoring screens"
            />
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="industrial-implementation">
        <div className="industrial-container">
          <div className="implementation-header">
            <span className="section-label">Implementation</span>
            <h2 className="industrial-section-title">4-Phase Deployment Process</h2>
            <p className="industrial-section-subtitle">
              Zero-downtime methodology ensuring seamless integration with existing operations
            </p>
          </div>
          <div className="implementation-timeline">
            {implementationSteps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="timeline-marker">
                  <div className="timeline-number">{index + 1}</div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-phase">{step.phase}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <div className="timeline-duration">{step.duration}</div>
                  <ul className="timeline-activities">
                    {step.activities.map((activity, aIndex) => (
                      <li key={aIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="industrial-tech-partners">
        <div className="industrial-container">
          <div className="tech-partners-header">
            <span className="section-label">Technology Stack</span>
            <h2 className="industrial-section-title">Certified Automation Partners</h2>
            <p className="industrial-section-subtitle">
              Authorized integrators for industry-leading industrial control platforms
            </p>
          </div>
          <div className="tech-partners-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-partner-badge">
                <CheckCircle className="tech-badge-icon" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Different Layout */}
      <section className="industrial-cta">
        <div className="industrial-container">
          <div className="cta-wrapper">
            <div className="cta-icon-section">
              <Factory className="cta-large-icon" />
            </div>
            <div className="cta-text-section">
              <h2>Ready to Transform Your Industrial Operations?</h2>
              <p>
                Connect with our industrial automation experts to discuss your specific challenges and explore how our proven solutions can optimize your operations, reduce costs, and improve safety.
              </p>
              <div className="cta-actions">
                <Link to="/contact" state={{ scrollToTop: true }} className="cta-primary-btn">
                  Schedule Free Consultation
                  <ArrowRight className="btn-arrow" />
                </Link>
                <div className="cta-contact-info">
                  <div className="contact-item">
                    <CheckCircle className="contact-icon" />
                    <span>Free on-site assessment</span>
                  </div>
                  <div className="contact-item">
                    <CheckCircle className="contact-icon" />
                    <span>No-obligation proposal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-badge-section">
              <div className="cta-trust-badge">
                <div className="badge-number">500+</div>
                <div className="badge-text">Industrial Sites Deployed</div>
              </div>
              <div className="cta-trust-badge">
                <div className="badge-number">25+</div>
                <div className="badge-text">Years Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrial;

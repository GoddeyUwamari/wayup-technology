import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, TrendingUp, Package, CheckCircle, Calendar, BarChart, ArrowRight, Target, Zap, ClipboardCheck, Factory, Gauge, Shield, Award } from 'lucide-react';
import './Manufacturing.css';

const Manufacturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: <Cpu />,
      title: 'IoT & Sensor Integration',
      description: 'Connect machines, sensors, and equipment for real-time data collection and intelligent automation across your entire production line.'
    },
    {
      icon: <TrendingUp />,
      title: 'Predictive Maintenance AI',
      description: 'Machine learning models predict equipment failures before they happen, preventing costly downtime and extending asset lifespan.'
    },
    {
      icon: <Package />,
      title: 'Supply Chain Optimization',
      description: 'End-to-end visibility and intelligent forecasting to reduce inventory costs, prevent stockouts, and streamline logistics.'
    },
    {
      icon: <CheckCircle />,
      title: 'Quality Control Automation',
      description: 'Computer vision and AI-powered inspection systems detect defects instantly, ensuring consistent product quality at scale.'
    },
    {
      icon: <Calendar />,
      title: 'Production Planning Systems',
      description: 'Advanced scheduling algorithms optimize production sequences, minimize changeovers, and maximize throughput efficiency.'
    },
    {
      icon: <BarChart />,
      title: 'Real-time Monitoring Dashboards',
      description: 'Unified visibility into KPIs, OEE metrics, and production status across all facilities with customizable analytics dashboards.'
    }
  ];

  const techStack = [
    {
      category: 'IoT Platforms',
      technologies: ['AWS IoT Core', 'Azure IoT Hub', 'ThingWorx', 'Google Cloud IoT']
    },
    {
      category: 'Industrial Systems',
      technologies: ['SCADA Integration', 'MES Platforms', 'PLC Connectivity', 'OPC UA']
    },
    {
      category: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark']
    },
    {
      category: 'Databases',
      technologies: ['InfluxDB', 'TimescaleDB', 'PostgreSQL', 'MongoDB']
    }
  ];

  const processSteps = [
    {
      icon: <Target />,
      title: 'Assessment & Planning',
      description: 'Comprehensive facility audit, pain point identification, and ROI-focused roadmap development tailored to your operations.'
    },
    {
      icon: <Zap />,
      title: 'System Integration',
      description: 'Seamless connection of legacy equipment with modern IoT infrastructure, ensuring zero disruption to ongoing production.'
    },
    {
      icon: <ClipboardCheck />,
      title: 'Implementation & Testing',
      description: 'Phased rollout with rigorous testing protocols, operator training, and validation of all performance benchmarks.'
    },
    {
      icon: <BarChart />,
      title: 'Monitoring & Optimization',
      description: 'Continuous performance tracking, AI model refinement, and iterative improvements to maximize long-term value.'
    }
  ];

  const heroStats = [
    { value: '200+', label: 'Factories Optimized' },
    { value: '85%', label: 'Avg. Downtime Reduction' },
    { value: '98%', label: 'Uptime Achieved' },
    { value: '$2.3B', label: 'Cost Savings Delivered' }
  ];

  const painPoints = [
    {
      title: 'Unplanned Downtime',
      description: 'Equipment failures cost manufacturers an average of $260,000 per hour. Our predictive systems identify issues before they cause shutdowns.'
    },
    {
      title: 'Production Inefficiency',
      description: 'Manual processes and disconnected systems waste time and resources. We automate workflows and integrate data for peak efficiency.'
    },
    {
      title: 'Quality Control Issues',
      description: 'Human inspection misses defects and slows production. AI-powered quality systems catch 99.8% of defects in real-time.'
    }
  ];

  return (
    <div className="manufacturing-page">
      {/* Hero Section */}
      <section className="manufacturing-hero">
        <div className="manufacturing-hero-grid">
          <div className="manufacturing-hero-content">
            <div className="manufacturing-hero-badge">
              <Factory size={18} />
              <span>Industry 4.0 Digital Transformation</span>
            </div>
            <h1 className="manufacturing-hero-title">
              Smart Manufacturing
              <span className="manufacturing-gradient-text"> That Delivers Results</span>
            </h1>
            <p className="manufacturing-hero-subtitle">
              Transform production with IoT sensors, predictive AI, and real-time analytics that eliminate downtime, optimize efficiency, and drive measurable ROI.
            </p>
            <div className="manufacturing-hero-buttons">
              <Link to="/contact" state={{ scrollToTop: true }} className="manufacturing-btn-primary">
                <span>Start Digital Transformation</span>
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/portfolio/work" state={{ scrollToTop: true }} className="manufacturing-btn-secondary">
                <span>View Case Studies</span>
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="manufacturing-hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="hero-stat-item">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="manufacturing-hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                alt="Smart factory with automated production lines and IoT sensors"
                className="manufacturing-hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            {/* Floating Elements */}
            <div className="hero-floating-elements">
              <div className="floating-card floating-card-1">
                <Gauge size={24} />
                <div className="floating-card-text">
                  <div className="floating-card-title">98% Uptime</div>
                  <div className="floating-card-desc">Industry Leading</div>
                </div>
              </div>
              <div className="floating-card floating-card-2">
                <Award size={24} />
                <div className="floating-card-text">
                  <div className="floating-card-title">85% Less Downtime</div>
                  <div className="floating-card-desc">Average Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="manufacturing-pain-section">
        <div className="manufacturing-container">
          <div className="manufacturing-section-header">
            <span className="section-label">Critical Challenges</span>
            <h2 className="manufacturing-section-title">Manufacturing Problems We Solve</h2>
          </div>
          <div className="manufacturing-pain-grid">
            {painPoints.map((point, index) => (
              <div key={index} className="manufacturing-pain-card">
                <div className="pain-card-number">0{index + 1}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="manufacturing-solutions">
        <div className="manufacturing-container">
          <div className="manufacturing-section-header">
            <span className="section-label">Our Solutions</span>
            <h2 className="manufacturing-section-title">Comprehensive Industry 4.0 Platform</h2>
          </div>
          <div className="manufacturing-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="manufacturing-solution-card">
                <div className="manufacturing-solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="manufacturing-tech-stack">
        <div className="manufacturing-container">
          <div className="manufacturing-section-header">
            <span className="section-label section-label-light">Technology Stack</span>
            <h2 className="manufacturing-section-title">Enterprise-Grade Platforms</h2>
          </div>
          <div className="manufacturing-tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="manufacturing-tech-category">
                <h3>{stack.category}</h3>
                <ul>
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <CheckCircle size={14} />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section className="manufacturing-process">
        <div className="manufacturing-container">
          <div className="manufacturing-section-header">
            <span className="section-label">Implementation</span>
            <h2 className="manufacturing-section-title">Proven 4-Step Process</h2>
          </div>
          <div className="manufacturing-process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="manufacturing-process-step">
                <div className="manufacturing-process-icon">{step.icon}</div>
                <div className="manufacturing-process-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="manufacturing-case-study">
        <div className="manufacturing-container">
          <span className="manufacturing-case-study-label">Success Story</span>
          <div className="manufacturing-case-study-content">
            <div className="manufacturing-case-study-image">
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80"
                alt="Modern factory floor with workers monitoring automated systems"
              />
              <div className="case-image-badge">
                <Shield size={28} />
                <div>
                  <div className="badge-title">Tier-1 Automotive</div>
                  <div className="badge-subtitle">12 Production Lines</div>
                </div>
              </div>
            </div>
            <div className="manufacturing-case-study-text">
              <h2>Global Auto Parts Manufacturer</h2>
              <div className="manufacturing-case-study-details">
                <div className="manufacturing-case-detail">
                  <h4>Challenge</h4>
                  <p>Chronic equipment downtime across 12 production lines causing $500K monthly losses, missed deadlines, and deteriorating customer relationships.</p>
                </div>
                <div className="manufacturing-case-detail">
                  <h4>Solution</h4>
                  <p>AI-powered predictive maintenance with 500+ IoT sensors, real-time analytics, and automated work order generation.</p>
                </div>
                <div className="manufacturing-case-detail">
                  <h4>Results & Impact</h4>
                  <div className="manufacturing-results-stats">
                    <div className="manufacturing-stat">
                      <span className="manufacturing-stat-number">85%</span>
                      <span className="manufacturing-stat-label">Downtime Reduction</span>
                    </div>
                    <div className="manufacturing-stat">
                      <span className="manufacturing-stat-number">$6M</span>
                      <span className="manufacturing-stat-label">Annual Savings</span>
                    </div>
                    <div className="manufacturing-stat">
                      <span className="manufacturing-stat-number">99.2%</span>
                      <span className="manufacturing-stat-label">Prediction Accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="manufacturing-cta">
        <div className="manufacturing-container">
          <div className="manufacturing-cta-content">
            <div className="cta-icon-wrapper">
              <Factory size={56} />
              <div className="cta-glow"></div>
            </div>
            <h2>Ready to Transform Your Factory?</h2>
            <p>Join 200+ manufacturers achieving 98% uptime and $2.3B in cost savings</p>
            <Link to="/contact" className="manufacturing-btn-primary-large" onClick={() => window.scrollTo(0, 0)}>
              <span>Schedule Free Assessment</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <div className="manufacturing-cta-features">
              <div className="cta-feature">
                <CheckCircle size={18} />
                <span>Zero-Disruption Implementation</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={18} />
                <span>ROI Guarantee</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={18} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;

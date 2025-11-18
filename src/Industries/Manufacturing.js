import { useEffect } from 'react';
import { Cpu, TrendingUp, Package, CheckCircle, Calendar, BarChart, ArrowRight, Users, Target, Zap, ClipboardCheck } from 'lucide-react';
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
        <div className="manufacturing-hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
          alt="Smart factory with automated production lines and IoT sensors"
          className="manufacturing-hero-image"
        />
        <div className="manufacturing-hero-content">
          <h1 className="manufacturing-hero-title">Manufacturing & Industrial Solutions</h1>
          <p className="manufacturing-hero-subtitle">Transform your factory floor with IoT, automation, and predictive maintenance</p>
          <div className="manufacturing-hero-buttons">
            <button className="manufacturing-btn-primary">
              Start Your Digital Transformation
              <ArrowRight className="btn-icon" />
            </button>
            <button className="manufacturing-btn-secondary">View Case Studies</button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="manufacturing-overview">
        <div className="manufacturing-container">
          <div className="manufacturing-overview-content">
            <div className="manufacturing-overview-text">
              <h2 className="manufacturing-section-title">Overcome Manufacturing's Biggest Challenges</h2>
              <p className="manufacturing-overview-intro">
                Today's manufacturers face unprecedented pressure to reduce costs, improve quality, and accelerate production—all while managing aging infrastructure and skilled labor shortages. WayUP Technology delivers proven digital transformation solutions that turn these challenges into competitive advantages.
              </p>
              <div className="manufacturing-pain-points">
                {painPoints.map((point, index) => (
                  <div key={index} className="manufacturing-pain-point">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="manufacturing-overview-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Industrial robots working on automated assembly line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="manufacturing-solutions">
        <div className="manufacturing-container">
          <h2 className="manufacturing-section-title">Comprehensive Manufacturing Solutions</h2>
          <p className="manufacturing-section-subtitle">
            End-to-end technology stack designed for Industry 4.0 transformation
          </p>
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
          <h2 className="manufacturing-section-title">Enterprise-Grade Technology Stack</h2>
          <p className="manufacturing-section-subtitle">
            Industry-leading platforms and frameworks proven in Fortune 500 manufacturing environments
          </p>
          <div className="manufacturing-tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="manufacturing-tech-category">
                <h3>{stack.category}</h3>
                <ul>
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
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
          <h2 className="manufacturing-section-title">Our Proven Implementation Process</h2>
          <p className="manufacturing-section-subtitle">
            Structured methodology ensures on-time, on-budget delivery with measurable ROI
          </p>
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
          <div className="manufacturing-case-study-content">
            <div className="manufacturing-case-study-text">
              <span className="manufacturing-case-study-label">Success Story</span>
              <h2>Global Auto Parts Manufacturer</h2>
              <div className="manufacturing-case-study-details">
                <div className="manufacturing-case-detail">
                  <h4>Challenge</h4>
                  <p>A tier-1 automotive supplier faced chronic equipment downtime across 12 production lines, resulting in $500,000 monthly losses, missed delivery deadlines, and deteriorating customer relationships.</p>
                </div>
                <div className="manufacturing-case-detail">
                  <h4>Solution</h4>
                  <p>WayUP deployed an AI-powered predictive maintenance system with 500+ IoT sensors, real-time analytics dashboards, and automated work order generation integrated with their existing CMMS.</p>
                </div>
                <div className="manufacturing-case-detail">
                  <h4>Results</h4>
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
            <div className="manufacturing-case-study-image">
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80"
                alt="Modern factory floor with workers monitoring automated systems"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="manufacturing-cta">
        <div className="manufacturing-container">
          <h2>Ready to Modernize Your Manufacturing?</h2>
          <p>Join 200+ factories achieving 98% uptime with WayUP's Industry 4.0 solutions</p>
          <div className="manufacturing-cta-content">
            <button className="manufacturing-btn-primary-large">
              Schedule Your Free Assessment
              <ArrowRight className="btn-icon" />
            </button>
            <div className="manufacturing-trust-signals">
              <div className="manufacturing-trust-signal">
                <Users className="trust-icon" />
                <div>
                  <strong>200+</strong>
                  <span>Factories Optimized</span>
                </div>
              </div>
              <div className="manufacturing-trust-signal">
                <TrendingUp className="trust-icon" />
                <div>
                  <strong>98%</strong>
                  <span>Uptime Achieved</span>
                </div>
              </div>
              <div className="manufacturing-trust-signal">
                <CheckCircle className="trust-icon" />
                <div>
                  <strong>$2.3B</strong>
                  <span>Cost Savings Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;

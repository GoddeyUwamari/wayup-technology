import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, Gauge, Wifi, Shield, Cpu, Eye, Zap, Radio, Smartphone, Database, CheckCircle, ArrowRight, TrendingUp, Clock, Users, Target } from 'lucide-react';
import './Automotive.css';

const Automotive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: <Cpu />,
      title: 'Connected Vehicle Platform',
      description: 'Cloud-based telematics, V2X communication, and real-time vehicle diagnostics for next-generation automotive experiences.',
      stats: '50M+ vehicles connected'
    },
    {
      icon: <Eye />,
      title: 'ADAS & Autonomous Systems',
      description: 'Advanced driver assistance, sensor fusion, computer vision, and AI algorithms for autonomous driving capabilities.',
      stats: 'Level 2-4 autonomy supported'
    },
    {
      icon: <Gauge />,
      title: 'Digital Cockpit & Infotainment',
      description: 'Advanced HMI, multi-screen displays, voice control, AR navigation, and seamless smartphone integration.',
      stats: '4K displays & 5G connectivity'
    },
    {
      icon: <Zap />,
      title: 'EV Charging Infrastructure',
      description: 'Charge point management, smart grid integration, billing systems, and mobile apps for electric vehicle ecosystems.',
      stats: 'DC fast charging up to 350kW'
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity Solutions',
      description: 'ISO 21434 compliant security, intrusion detection, secure OTA updates, and vehicle security operations centers.',
      stats: 'Zero-trust architecture'
    },
    {
      icon: <Database />,
      title: 'Manufacturing Execution',
      description: 'Industry 4.0 smart factories, robotics integration, quality control systems, and production line optimization.',
      stats: '99.5% defect detection rate'
    }
  ];

  const technologies = [
    { name: 'AutoSAR', category: 'Embedded' },
    { name: 'ROS 2', category: 'Robotics' },
    { name: 'NVIDIA DRIVE', category: 'AI Platform' },
    { name: 'Qt Automotive', category: 'HMI' },
    { name: 'Android Automotive', category: 'OS' },
    { name: 'OCPP 2.0', category: 'Charging' },
    { name: 'CAN/Ethernet', category: 'Networking' },
    { name: 'ISO 26262', category: 'Safety' }
  ];

  const capabilities = [
    { icon: <Radio />, title: 'V2X Communication', description: 'Vehicle-to-everything connectivity' },
    { icon: <Smartphone />, title: 'Digital Key', description: 'Smartphone-based vehicle access' },
    { icon: <Wifi />, title: '5G Integration', description: 'Ultra-low latency connectivity' },
    { icon: <Target />, title: 'Precision Mapping', description: 'HD maps & localization' }
  ];

  const metrics = [
    { value: '45%', label: 'Faster Development', icon: <Clock /> },
    { value: '99.9%', label: 'System Reliability', icon: <Shield /> },
    { value: '60%', label: 'Cost Reduction', icon: <TrendingUp /> },
    { value: '35+', label: 'OEM Partnerships', icon: <Users /> }
  ];

  return (
    <div className="automotive-page">
      {/* Hero Section - Video Background Style */}
      <section className="auto-hero">
        <div className="auto-hero-video-bg">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80"
            alt="Modern electric vehicle with advanced technology dashboard"
            className="auto-hero-bg-image"
          />
          <div className="auto-hero-gradient-overlay"></div>
        </div>
        <div className="auto-hero-content">
          <div className="auto-hero-label">
            <Car className="label-icon" />
            <span>Automotive Software & Electronics Engineering</span>
          </div>
          <h1 className="auto-hero-title">
            Accelerating the Future of Mobility
          </h1>
          <p className="auto-hero-description">
            From connected vehicles to autonomous driving, we deliver software-defined automotive solutions that power the next generation of transportation. Partner with WayUP to drive innovation across EV, ADAS, infotainment, and manufacturing.
          </p>
          <div className="auto-hero-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="auto-hero-metric">
                <div className="metric-icon-wrapper">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="auto-hero-buttons">
            <Link to="/contact" state={{ scrollToTop: true }} className="auto-btn-primary">
              Explore Our Solutions
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" state={{ scrollToTop: true }} className="auto-btn-ghost">Download Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid - Card Showcase */}
      <section className="auto-solutions">
        <div className="auto-container">
          <div className="auto-section-header">
            <h2 className="auto-section-title">End-to-End Automotive Solutions</h2>
            <p className="auto-section-subtitle">
              Complete technology stack for software-defined vehicles and smart manufacturing
            </p>
          </div>
          <div className="auto-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="auto-solution-card">
                <div className="solution-card-top">
                  <div className="solution-icon-box">{solution.icon}</div>
                  <div className="solution-stats-badge">{solution.stats}</div>
                </div>
                <h3 className="solution-card-title">{solution.title}</h3>
                <p className="solution-card-description">{solution.description}</p>
                <Link to="/contact" state={{ scrollToTop: true }} className="solution-learn-btn">
                  Learn More <ArrowRight className="learn-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Bar */}
      <section className="auto-capabilities">
        <div className="auto-container">
          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-item">
                <div className="capability-icon">{cap.icon}</div>
                <div className="capability-content">
                  <h4>{cap.title}</h4>
                  <p>{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Badge Grid */}
      <section className="auto-tech-stack">
        <div className="auto-container">
          <h2 className="auto-section-title">Certified Technology Stack</h2>
          <p className="auto-section-subtitle">
            Industry-standard platforms and frameworks for automotive software development
          </p>
          <div className="tech-stack-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-stack-badge">
                <div className="tech-badge-name">{tech.name}</div>
                <div className="tech-badge-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Feature Story */}
      <section className="auto-case-study">
        <div className="auto-container">
          <div className="case-study-wrapper">
            <div className="case-study-left">
              <span className="case-study-tag">TIER-1 SUPPLIER SUCCESS</span>
              <h2 className="case-study-heading">
                Bosch Mobility Solutions: ADAS Platform Development
              </h2>
              <div className="case-study-narrative">
                <div className="narrative-section">
                  <h4>The Challenge</h4>
                  <p>
                    A leading Tier-1 automotive supplier needed to develop a scalable ADAS platform supporting Level 2+ autonomous features across multiple OEM customers, with strict ISO 26262 ASIL-D safety requirements and aggressive 18-month timeline.
                  </p>
                </div>
                <div className="narrative-section">
                  <h4>Our Solution</h4>
                  <p>
                    WayUP deployed a 50-engineer team specializing in sensor fusion (camera, radar, LiDAR), real-time embedded software, functional safety, and AUTOSAR Classic/Adaptive platforms. We implemented a modular architecture enabling rapid OEM customization.
                  </p>
                </div>
                <div className="narrative-section">
                  <h4>Key Results</h4>
                  <div className="case-results-grid">
                    <div className="case-result">
                      <div className="result-number">5 months</div>
                      <div className="result-text">Ahead of schedule</div>
                    </div>
                    <div className="case-result">
                      <div className="result-number">30%</div>
                      <div className="result-text">Cost savings vs budget</div>
                    </div>
                    <div className="case-result">
                      <div className="result-number">ASIL-D</div>
                      <div className="result-text">Safety certification</div>
                    </div>
                    <div className="case-result">
                      <div className="result-number">3 OEMs</div>
                      <div className="result-text">Production deployments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-right">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Automotive engineer testing ADAS system in vehicle"
                className="case-study-image"
              />
              <div className="case-study-highlights">
                <h5>Project Highlights</h5>
                <ul>
                  <li>
                    <CheckCircle className="highlight-check" />
                    <span>Multi-sensor fusion (6 cameras, 5 radars, 2 LiDAR)</span>
                  </li>
                  <li>
                    <CheckCircle className="highlight-check" />
                    <span>Real-time object detection & path planning</span>
                  </li>
                  <li>
                    <CheckCircle className="highlight-check" />
                    <span>Adaptive cruise control & lane keeping assist</span>
                  </li>
                  <li>
                    <CheckCircle className="highlight-check" />
                    <span>OTA update capability & cloud backend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Card Design */}
      <section className="auto-cta">
        <div className="auto-container">
          <div className="auto-cta-card">
            <div className="cta-card-content">
              <h2>Accelerate Your Automotive Innovation</h2>
              <p>
                Partner with WayUP's automotive engineering experts to bring cutting-edge software-defined vehicle features to market faster and more cost-effectively.
              </p>
              <ul className="cta-benefits">
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>Dedicated automotive software engineering teams</span>
                </li>
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>ISO 26262, ASPICE, and cybersecurity expertise</span>
                </li>
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>Proven track record with global OEMs and Tier-1s</span>
                </li>
              </ul>
              <div className="cta-actions">
                <Link to="/contact" state={{ scrollToTop: true }} className="auto-cta-primary">
                  Schedule Technical Consultation
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link to="/contact" state={{ scrollToTop: true }} className="auto-cta-secondary">Download Capabilities Deck</Link>
              </div>
            </div>
            <div className="cta-card-stats">
              <div className="cta-stat-item">
                <Car className="cta-stat-icon" />
                <div className="cta-stat-value">50M+</div>
                <div className="cta-stat-label">Connected Vehicles</div>
              </div>
              <div className="cta-stat-item">
                <Shield className="cta-stat-icon" />
                <div className="cta-stat-value">100%</div>
                <div className="cta-stat-label">Safety Compliance</div>
              </div>
              <div className="cta-stat-item">
                <Users className="cta-stat-icon" />
                <div className="cta-stat-value">35+</div>
                <div className="cta-stat-label">OEM Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automotive;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Microscope, FileText, Database, Activity, Lock, CheckCircle2, Users2, Pill, Beaker, ClipboardList, Gauge, ArrowRight, Zap } from 'lucide-react';
import './Pharmaceutical.css';

const Pharmaceutical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: <Shield />,
      title: 'Regulatory Compliance Management',
      description: 'FDA 21 CFR Part 11, EMA, and global regulatory compliance tracking with automated audit trails and validation protocols.'
    },
    {
      icon: <Microscope />,
      title: 'R&D Data Management',
      description: 'Electronic lab notebooks, clinical trial data systems, and research collaboration platforms with version control.'
    },
    {
      icon: <FileText />,
      title: 'Document Control Systems',
      description: 'eDMS solutions for SOPs, batch records, and quality documentation with electronic signatures and change control.'
    },
    {
      icon: <Database />,
      title: 'Clinical Trial Management',
      description: 'CTMS platforms, ePRO systems, and patient data management compliant with ICH-GCP and HIPAA regulations.'
    },
    {
      icon: <Activity />,
      title: 'Manufacturing Execution (MES)',
      description: 'GMP-compliant MES for pharmaceutical production with real-time batch tracking and deviation management.'
    },
    {
      icon: <Lock />,
      title: 'Data Integrity & Security',
      description: 'ALCOA+ principles implementation, data governance frameworks, and cybersecurity for sensitive pharma data.'
    }
  ];

  const complianceStandards = [
    { name: 'FDA 21 CFR Part 11', icon: <Shield /> },
    { name: 'EU GMP Annex 11', icon: <FileText /> },
    { name: 'ICH Guidelines', icon: <Microscope /> },
    { name: 'HIPAA & GDPR', icon: <Lock /> },
    { name: 'ISO 13485', icon: <CheckCircle2 /> },
    { name: 'GAMP 5', icon: <Database /> }
  ];

  const techStack = [
    {
      category: 'LIMS & Laboratory',
      technologies: ['LabWare LIMS', 'Thermo Fisher', 'PerkinElmer', 'Waters Empower']
    },
    {
      category: 'Quality Management',
      technologies: ['Veeva Vault QMS', 'MasterControl', 'TrackWise', 'ETQ Reliance']
    },
    {
      category: 'Clinical Systems',
      technologies: ['Medidata Rave', 'Oracle Siebel CTMS', 'Veeva Vault CTMS', 'EDC Solutions']
    },
    {
      category: 'Manufacturing',
      technologies: ['Syncade MES', 'SAP Pharma', 'DeltaV', 'Rockwell FactoryTalk']
    }
  ];

  const benefits = [
    {
      icon: <Gauge />,
      title: 'Accelerated Drug Development',
      stat: '40%',
      description: 'Faster time-to-market through streamlined R&D workflows and automated data analysis'
    },
    {
      icon: <CheckCircle2 />,
      title: 'Compliance Assurance',
      stat: '100%',
      description: 'Zero critical audit findings with built-in regulatory compliance and validation support'
    },
    {
      icon: <Activity />,
      title: 'Operational Excellence',
      stat: '35%',
      description: 'Reduction in manufacturing deviations and improved batch release times'
    },
    {
      icon: <Lock />,
      title: 'Data Integrity',
      stat: '99.9%',
      description: 'Data accuracy with ALCOA+ compliant systems and comprehensive audit trails'
    }
  ];

  const heroStats = [
    { value: '50+', label: 'FDA-Regulated Projects' },
    { value: '15+', label: 'Years Expertise' },
    { value: '100%', label: 'Audit Success' },
    { value: '24/7', label: 'GxP Support' }
  ];

  return (
    <div className="pharmaceutical-page">
      {/* New Hero Section - Split Layout with Stats */}
      <section className="pharma-hero">
        <div className="pharma-hero-grid">
          <div className="pharma-hero-content">
            <div className="pharma-hero-badge">
              <Pill className="badge-icon" />
              <span>Life Sciences & Pharmaceutical IT</span>
            </div>
            <h1 className="pharma-hero-title">
              Compliant Digital Solutions for
              <span className="pharma-gradient-text"> Pharmaceutical Innovation</span>
            </h1>
            <p className="pharma-hero-subtitle">
              FDA-validated systems, clinical trial platforms, and GMP-compliant manufacturing solutions
              that accelerate drug development while ensuring regulatory excellence
            </p>
            <div className="pharma-hero-buttons">
              <Link to="/contact" state={{ scrollToTop: true }} className="pharma-btn-primary">
                <span>Request Compliance Assessment</span>
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/portfolio/work" state={{ scrollToTop: true }} className="pharma-btn-outline">
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="pharma-hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="hero-stat-item">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pharma-hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
                alt="Pharmaceutical laboratory with advanced equipment and research scientists"
                className="pharma-hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            {/* Floating Elements */}
            <div className="hero-floating-elements">
              <div className="floating-card floating-card-1">
                <Shield size={24} />
                <div className="floating-card-text">
                  <div className="floating-card-title">FDA Validated</div>
                  <div className="floating-card-desc">21 CFR Part 11</div>
                </div>
              </div>
              <div className="floating-card floating-card-2">
                <Zap size={24} />
                <div className="floating-card-text">
                  <div className="floating-card-title">40% Faster</div>
                  <div className="floating-card-desc">Time to Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards Banner */}
      <section className="pharma-compliance-banner">
        <div className="pharma-container">
          <p className="compliance-banner-text">Certified & Validated For:</p>
          <div className="compliance-standards-grid">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="compliance-standard-item">
                <div className="compliance-icon">{standard.icon}</div>
                <span>{standard.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Unique Layout */}
      <section className="pharma-benefits">
        <div className="pharma-container">
          <div className="pharma-section-header">
            <h2 className="pharma-section-title">Measurable Impact Across Your Value Chain</h2>
            <p className="pharma-section-intro">
              From discovery to commercialization, our validated solutions deliver quantifiable results
            </p>
          </div>
          <div className="pharma-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="pharma-benefit-card">
                <div className="benefit-icon-wrapper">{benefit.icon}</div>
                <div className="benefit-stat">{benefit.stat}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Alternating Layout */}
      <section className="pharma-solutions">
        <div className="pharma-container">
          <div className="pharma-section-header-center">
            <h2 className="pharma-section-title">End-to-End Pharmaceutical IT Solutions</h2>
            <p className="pharma-section-intro">
              Validated, compliant, and scalable systems designed specifically for life sciences
            </p>
          </div>
          <div className="pharma-solutions-list">
            {solutions.map((solution, index) => (
              <div key={index} className={`pharma-solution-row ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="solution-icon-box">
                  {solution.icon}
                </div>
                <div className="solution-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <Link to="/contact" state={{ scrollToTop: true }} className="solution-learn-more">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Different Style */}
      <section className="pharma-tech-stack">
        <div className="pharma-container">
          <div className="tech-stack-header">
            <Beaker className="tech-stack-icon" />
            <h2 className="pharma-section-title">Validated Technology Ecosystem</h2>
            <p className="pharma-section-intro">
              Partnerships with leading pharmaceutical software providers
            </p>
          </div>
          <div className="pharma-tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="pharma-tech-card">
                <div className="tech-card-header">
                  <h3>{stack.category}</h3>
                </div>
                <ul className="tech-card-list">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <CheckCircle2 className="tech-check-icon" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Card Style */}
      <section className="pharma-case-study">
        <div className="pharma-container">
          <div className="case-study-card">
            <div className="case-study-header">
              <span className="case-study-label">SUCCESS STORY</span>
              <h2>Global Biotech Company: Clinical Trial Acceleration</h2>
            </div>
            <div className="case-study-grid">
              <div className="case-study-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80"
                  alt="Scientists working in pharmaceutical research laboratory"
                />
              </div>
              <div className="case-study-content">
                <div className="case-study-section">
                  <h4>
                    <ClipboardList className="section-icon" />
                    Challenge
                  </h4>
                  <p>A mid-sized biotech firm conducting Phase III trials across 200+ sites faced critical data management issues, regulatory compliance risks, and delayed patient enrollment threatening $800M in potential revenue.</p>
                </div>
                <div className="case-study-section">
                  <h4>
                    <Users2 className="section-icon" />
                    Solution
                  </h4>
                  <p>WayUP implemented an integrated CTMS/EDC platform with real-time data monitoring, automated compliance checks, patient recruitment analytics, and seamless EMA/FDA submission integration.</p>
                </div>
                <div className="case-study-section">
                  <h4>
                    <Gauge className="section-icon" />
                    Results
                  </h4>
                  <div className="case-study-metrics">
                    <div className="metric-box">
                      <span className="metric-value">6 months</span>
                      <span className="metric-label">Earlier Trial Completion</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-value">92%</span>
                      <span className="metric-label">Data Quality Score</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-value">Zero</span>
                      <span className="metric-label">Regulatory Findings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Different Design */}
      <section className="pharma-cta">
        <div className="pharma-container">
          <div className="pharma-cta-grid">
            <div className="cta-content">
              <h2>Ready to Validate Your Digital Transformation?</h2>
              <p>Partner with WayUP's pharmaceutical IT experts to ensure compliant, validated systems that accelerate innovation and satisfy regulatory requirements.</p>
              <ul className="cta-features">
                <li>
                  <CheckCircle2 className="feature-icon" />
                  <span>Pre-validated solutions (IQ/OQ/PQ documentation)</span>
                </li>
                <li>
                  <CheckCircle2 className="feature-icon" />
                  <span>Regulatory audit support and remediation</span>
                </li>
                <li>
                  <CheckCircle2 className="feature-icon" />
                  <span>24/7 GxP-critical system support</span>
                </li>
              </ul>
              <Link to="/contact" state={{ scrollToTop: true }} className="pharma-cta-button">
                Schedule Validation Consultation
                <Shield className="btn-icon" />
              </Link>
            </div>
            <div className="cta-stats">
              <div className="cta-stat-card">
                <Activity className="stat-icon" />
                <div className="stat-number">50+</div>
                <div className="stat-text">FDA-Regulated Implementations</div>
              </div>
              <div className="cta-stat-card">
                <Microscope className="stat-icon" />
                <div className="stat-number">15+</div>
                <div className="stat-text">Years Pharma IT Expertise</div>
              </div>
              <div className="cta-stat-card">
                <CheckCircle2 className="stat-icon" />
                <div className="stat-number">100%</div>
                <div className="stat-text">Successful Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmaceutical;

import { useEffect } from 'react';
import { HardHat, Ruler, Building2, Wrench, Calendar, Users, TrendingUp, Shield, Clock, FileText, Smartphone, MapPin, CheckCircle, ArrowRight, Hammer, Layers, ClipboardList } from 'lucide-react';
import './Construction.css';

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Building2 />,
      title: 'Project Management Software',
      description: 'Complete construction project management with scheduling, budgeting, resource allocation, and real-time collaboration tools.',
      features: ['Gantt Charts', 'Cost Tracking', 'Document Management']
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Field Apps',
      description: 'iOS and Android apps for on-site teams with offline capability, photo documentation, time tracking, and safety checklists.',
      features: ['Offline Mode', 'Daily Reports', 'Safety Forms']
    },
    {
      icon: <FileText />,
      title: 'Estimating & Bidding',
      description: 'Accurate cost estimation, material takeoff, subcontractor management, and automated proposal generation.',
      features: ['Material Takeoff', 'Bid Management', 'Cost Analysis']
    },
    {
      icon: <Calendar />,
      title: 'Scheduling & Planning',
      description: 'Critical path method scheduling, resource leveling, look-ahead planning, and automated progress tracking.',
      features: ['CPM Scheduling', 'Resource Planning', 'Progress Tracking']
    },
    {
      icon: <Shield />,
      title: 'Safety & Compliance',
      description: 'OSHA compliance tracking, safety incident reporting, toolbox talks, training records, and inspection management.',
      features: ['OSHA Compliance', 'Incident Reports', 'Training Logs']
    },
    {
      icon: <Layers />,
      title: 'BIM Integration',
      description: 'Building Information Modeling integration with Revit, AutoCAD, clash detection, and 3D model collaboration.',
      features: ['Revit Integration', 'Clash Detection', '3D Visualization']
    }
  ];

  const metrics = [
    { icon: <TrendingUp />, value: '30%', label: 'Faster Project Delivery' },
    { icon: <Clock />, value: '45%', label: 'Time Savings on Admin' },
    { icon: <Shield />, value: '60%', label: 'Fewer Safety Incidents' },
    { icon: <Users />, value: '1,200+', label: 'Contractors Using Platform' }
  ];

  const projectTypes = [
    { icon: '🏗️', name: 'Commercial Construction', examples: 'Offices, Retail, Hotels' },
    { icon: '🏠', name: 'Residential Projects', examples: 'Single-Family, Multi-Family' },
    { icon: '🏭', name: 'Industrial Facilities', examples: 'Warehouses, Manufacturing' },
    { icon: '🛣️', name: 'Infrastructure', examples: 'Roads, Bridges, Utilities' }
  ];

  const benefits = [
    'Centralized project documentation and version control',
    'Real-time budget tracking with cost variance alerts',
    'Automated RFI and submittal workflows',
    'Mobile punch lists with photo documentation',
    'Subcontractor portal for coordination',
    'Equipment tracking and maintenance scheduling'
  ];

  return (
    <div className="construction-page">
      {/* Hero Section - Overlay with Image */}
      <section className="cons-hero">
        <div className="cons-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
            alt="Construction site with modern equipment and workers"
            className="cons-hero-img"
          />
          <div className="cons-hero-overlay"></div>
        </div>
        <div className="cons-hero-content">
          <div className="cons-hero-badge">
            <HardHat className="badge-icon" />
            <span>Construction Technology Solutions</span>
          </div>
          <h1 className="cons-hero-title">
            Build Smarter, Faster, Safer
          </h1>
          <p className="cons-hero-subtitle">
            All-in-one construction management software for general contractors, subcontractors, and project owners. From preconstruction to closeout, manage every phase with powerful tools built for the job site.
          </p>
          <div className="cons-hero-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="cons-metric-item">
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="cons-hero-actions">
            <button className="cons-btn-primary">
              Start Free Trial
              <ArrowRight className="btn-icon" />
            </button>
            <button className="cons-btn-ghost">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Project Types - 4 Column Grid */}
      <section className="cons-project-types">
        <div className="cons-container">
          <h2 className="cons-section-title">Built for Every Construction Project Type</h2>
          <div className="project-types-grid">
            {projectTypes.map((project, index) => (
              <div key={index} className="project-type-card">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.name}</h3>
                <p>{project.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 3 Column Grid */}
      <section className="cons-services">
        <div className="cons-container">
          <div className="cons-section-header">
            <h2 className="cons-section-title">Complete Construction Management Platform</h2>
            <p className="cons-section-subtitle">
              Everything you need to manage construction projects from bid to completion
            </p>
          </div>
          <div className="cons-services-grid">
            {services.map((service, index) => (
              <div key={index} className="cons-service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="feature-badge">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column Layout */}
      <section className="cons-benefits">
        <div className="cons-container">
          <div className="cons-benefits-layout">
            <div className="benefits-left">
              <h2>Why Construction Teams Choose WayUP</h2>
              <p className="benefits-intro">
                Our platform reduces project delays, eliminates paperwork, improves communication, and keeps projects on budget. Built by construction professionals for construction professionals.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <CheckCircle className="benefit-check" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="cons-benefits-btn">
                Explore All Features
                <ArrowRight className="btn-icon" />
              </button>
            </div>
            <div className="benefits-right">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Construction team reviewing plans on tablet"
                className="benefits-image"
              />
              <div className="benefits-stat-box">
                <Hammer className="stat-box-icon" />
                <div className="stat-box-value">25,000+</div>
                <div className="stat-box-label">Projects Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Dark Background Panel */}
      <section className="cons-case-study">
        <div className="cons-container">
          <div className="case-study-badge">CUSTOMER SUCCESS</div>
          <h2 className="case-study-heading">How Apex Construction Reduced Project Costs by 22%</h2>

          <div className="case-study-content">
            <div className="case-study-story">
              <div className="story-block">
                <h4>The Challenge</h4>
                <p>
                  Apex Construction, a mid-sized general contractor managing 15-20 concurrent projects, was drowning in paperwork and spreadsheets. Delays from miscommunication cost them $400K annually, and they had no real-time visibility into project status or budgets.
                </p>
              </div>
              <div className="story-block">
                <h4>The WayUP Solution</h4>
                <p>
                  We implemented our complete construction management platform including project scheduling, budget tracking, mobile field apps for 45 field personnel, subcontractor portal, and automated daily reporting. The system integrated with their existing accounting software.
                </p>
              </div>
              <div className="story-block">
                <h4>Implementation</h4>
                <p>
                  2-week deployment with comprehensive training for office and field teams. Our customer success team provided on-site support during the first two projects to ensure smooth adoption.
                </p>
              </div>
            </div>

            <div className="case-study-results-panel">
              <h4>Results After 12 Months</h4>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">22%</div>
                  <div className="result-text">Cost Reduction</div>
                </div>
                <div className="result-card">
                  <div className="result-number">35%</div>
                  <div className="result-text">Faster Completion</div>
                </div>
                <div className="result-card">
                  <div className="result-number">90%</div>
                  <div className="result-text">Paperwork Eliminated</div>
                </div>
                <div className="result-card">
                  <div className="result-number">$1.2M</div>
                  <div className="result-text">Annual Savings</div>
                </div>
              </div>
              <div className="case-highlights">
                <div className="highlight-item">
                  <CheckCircle className="highlight-check" />
                  <span>All 45 field workers adopted mobile app within 2 weeks</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-check" />
                  <span>Zero safety incidents due to improved tracking</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-check" />
                  <span>Client satisfaction scores increased by 40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered Card */}
      <section className="cons-cta">
        <div className="cons-container">
          <div className="cons-cta-card">
            <div className="cta-card-icon">
              <ClipboardList className="clipboard-icon" />
            </div>
            <h2>Ready to Transform Your Construction Projects?</h2>
            <p>
              Join 1,200+ construction companies using WayUP to deliver projects on time and under budget. Start your free 30-day trial today—no credit card required.
            </p>
            <div className="cta-features-row">
              <div className="cta-feature">
                <CheckCircle className="cta-feature-check" />
                <span>Free 30-day trial, no credit card</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-feature-check" />
                <span>Dedicated onboarding & training</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-feature-check" />
                <span>Mobile apps for iOS & Android</span>
              </div>
            </div>
            <div className="cta-buttons-group">
              <button className="cons-cta-primary">
                Start Free Trial
                <ArrowRight className="btn-icon" />
              </button>
              <button className="cons-cta-secondary">Talk to Sales</button>
            </div>
            <div className="cta-trust">
              <Shield className="trust-icon" />
              <span>Trusted by over 1,200 construction companies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;

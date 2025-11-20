import { useEffect } from 'react';
import {
  Zap,
  Globe,
  Shield,
  Code,
  Database,
  CloudLightning,
  CheckCircle,
  ArrowRight,
  Lock,
  RefreshCw,
  Settings,
  Layers,
  TrendingUp,
  Award,
  Target,
  Rocket,
  Users,
  GitBranch,
  Server
} from 'lucide-react';
import './APIIntegration.css';
import Checkout from '../components/Checkout';

const APIIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '1,000+', label: 'APIs Integrated', icon: <GitBranch /> },
    { value: '99.99%', label: 'Uptime SLA', icon: <Server /> },
    { value: '500M+', label: 'API Calls/Month', icon: <TrendingUp /> },
    { value: '100+', label: 'Enterprise Clients', icon: <Award /> }
  ];

  const solutions = [
    {
      icon: <Code />,
      title: 'RESTful API Development',
      description: 'Design and build scalable RESTful APIs with proper HTTP methods, status codes, and resource-based architecture for efficient data exchange.',
      features: ['OpenAPI Specification', 'Versioning Strategy', 'HATEOAS Implementation']
    },
    {
      icon: <Database />,
      title: 'GraphQL Implementation',
      description: 'Flexible GraphQL APIs allowing clients to request exactly the data they need, reducing over-fetching and improving performance.',
      features: ['Schema Design', 'Query Optimization', 'Real-time Subscriptions']
    },
    {
      icon: <CloudLightning />,
      title: 'Cloud Services Integration',
      description: 'Seamless integration with AWS, Azure, Google Cloud services including storage, messaging, AI/ML, and serverless functions.',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud APIs']
    },
    {
      icon: <Shield />,
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with Stripe, PayPal, Square, and other providers, ensuring PCI compliance and seamless transactions.',
      features: ['Stripe & PayPal', 'PCI Compliance', 'Webhook Handling']
    },
    {
      icon: <Lock />,
      title: 'Security & Authentication',
      description: 'Enterprise-grade security with OAuth 2.0, JWT tokens, API keys, and role-based access control for comprehensive protection.',
      features: ['OAuth 2.0 & JWT', 'RBAC & Permissions', 'API Key Management']
    },
    {
      icon: <RefreshCw />,
      title: 'Real-time Synchronization',
      description: 'WebSocket and Server-Sent Events implementation for real-time data sync, live updates, and bidirectional communication.',
      features: ['WebSocket Protocol', 'Event-Driven Architecture', 'Live Data Streaming']
    }
  ];

  const industries = [
    { name: 'FinTech', icon: '💳', projects: '200+' },
    { name: 'E-commerce', icon: '🛒', projects: '180+' },
    { name: 'Healthcare', icon: '⚕️', projects: '120+' },
    { name: 'SaaS Platforms', icon: '☁️', projects: '250+' },
    { name: 'IoT & Devices', icon: '🔌', projects: '90+' },
    { name: 'Logistics', icon: '🚚', projects: '110+' }
  ];

  const methodologies = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      activities: ['API requirements analysis', 'Data model design', 'Security assessment', 'Integration roadmap']
    },
    {
      phase: 'Phase 2',
      title: 'Architecture & Design',
      duration: '2-3 weeks',
      activities: ['API architecture design', 'Authentication strategy', 'Documentation planning', 'Performance benchmarking']
    },
    {
      phase: 'Phase 3',
      title: 'Development & Testing',
      duration: '6-12 weeks',
      activities: ['API development', 'Security implementation', 'Load testing', 'Integration testing']
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Monitoring',
      duration: 'Ongoing',
      activities: ['Production deployment', 'API monitoring', 'Performance optimization', 'Version management']
    }
  ];

  const technologies = [
    'REST', 'GraphQL', 'Node.js', 'Python',
    'AWS Lambda', 'Docker', 'Kubernetes', 'Redis',
    'OAuth 2.0', 'JWT', 'Swagger', 'Postman'
  ];

  return (
    <div className="api-integration-page">
      {/* Hero Section - Split Grid Layout */}
      <section className="api-integration-hero">
        <div className="api-integration-hero-grid">
          <div className="api-integration-hero-content">
            <div className="api-hero-badge">
              <Layers size={18} />
              <span>Enterprise-Grade Integration Solutions</span>
            </div>
            <h1 className="api-integration-hero-title">
              API Integrations That
              <span className="api-integration-gradient-text"> Power Growth</span>
            </h1>
            <p className="api-integration-hero-desc">
              Build secure, scalable, and reliable API solutions that seamlessly connect your systems,
              streamline workflows, and enable real-time data exchange across your entire tech ecosystem.
            </p>
            <div className="api-hero-actions">
              <button className="api-integration-btn-primary">
                <span>Start Integration</span>
                <ArrowRight className="btn-arrow" />
              </button>
              <button className="api-integration-btn-secondary">
                <CloudLightning className="btn-icon-left" />
                <span>View Documentation</span>
              </button>
            </div>

            {/* Hero Stats Grid */}
            <div className="api-hero-stats-grid">
              {heroStats.map((stat, index) => (
                <div key={index} className="api-hero-stat-card">
                  <div className="api-stat-icon">{stat.icon}</div>
                  <div className="api-stat-value">{stat.value}</div>
                  <div className="api-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="api-integration-hero-visual">
            <div className="api-hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="API integration dashboard with real-time data synchronization"
                className="api-integration-hero-img"
              />
              <div className="api-hero-image-gradient"></div>
            </div>
            {/* Floating Metric Cards */}
            <div className="api-hero-floating-metrics">
              <div className="api-floating-metric api-floating-metric-1">
                <Zap size={20} />
                <div>
                  <div className="api-metric-value">&lt;50ms</div>
                  <div className="api-metric-label">Response Time</div>
                </div>
              </div>
              <div className="api-floating-metric api-floating-metric-2">
                <Users size={20} />
                <div>
                  <div className="api-metric-value">24/7</div>
                  <div className="api-metric-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="api-integration-industries">
        <div className="api-integration-container">
          <div className="api-industries-header">
            <span className="api-section-label">Proven Integration Experience</span>
            <h3 className="api-industries-title">Connecting Systems Across Industries</h3>
          </div>
          <div className="api-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="api-industry-card">
                <div className="api-industry-icon">{industry.icon}</div>
                <div className="api-industry-name">{industry.name}</div>
                <div className="api-industry-projects">{industry.projects} Integrations</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="api-integration-solutions">
        <div className="api-integration-container">
          <div className="api-solutions-header">
            <span className="api-section-label">Our Capabilities</span>
            <h2 className="api-integration-section-title">
              Comprehensive API Integration Services
            </h2>
            <p className="api-integration-section-subtitle">
              From design to deployment—complete solutions for seamless system connectivity
            </p>
          </div>
          <div className="api-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="api-solution-card">
                <div className="api-solution-card-header">
                  <div className="api-solution-icon-wrapper">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p className="api-solution-description">{solution.description}</p>
                <ul className="api-solution-features">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle className="api-feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="api-integration-case-study">
        <div className="api-case-study-container">
          <div className="api-case-study-content">
            <div className="api-case-study-badge">SUCCESS STORY</div>
            <h2 className="api-case-study-title">
              PaymentFlow: Processing $2B+ in Annual Transactions
            </h2>
            <div className="api-case-study-body">
              <div className="api-case-study-challenge">
                <h4>
                  <Target className="api-section-icon" />
                  The Challenge
                </h4>
                <p>
                  A rapidly growing fintech startup needed to integrate 15+ payment gateways, banking APIs,
                  and fraud detection services while maintaining PCI compliance, handling 10K+ transactions per
                  minute, and ensuring 99.99% uptime with real-time transaction monitoring.
                </p>
              </div>
              <div className="api-case-study-solution">
                <h4>
                  <Rocket className="api-section-icon" />
                  Our Solution
                </h4>
                <p>
                  Built a microservices-based API gateway using Node.js and Redis for caching, implemented
                  OAuth 2.0 authentication, created unified API layer abstracting payment providers, deployed
                  on AWS with auto-scaling, and integrated real-time monitoring with automated alerting.
                </p>
              </div>
            </div>
            <div className="api-case-study-results">
              <div className="api-result-card">
                <div className="api-result-value">$2B+</div>
                <div className="api-result-label">Annual Volume</div>
              </div>
              <div className="api-result-card">
                <div className="api-result-value">99.99%</div>
                <div className="api-result-label">Uptime SLA</div>
              </div>
              <div className="api-result-card">
                <div className="api-result-value">45ms</div>
                <div className="api-result-label">Avg Response</div>
              </div>
              <div className="api-result-card">
                <div className="api-result-value">15+</div>
                <div className="api-result-label">Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="api-integration-methodology">
        <div className="api-integration-container">
          <div className="api-methodology-header">
            <span className="api-section-label">Our Process</span>
            <h2 className="api-integration-section-title">Proven Integration Methodology</h2>
            <p className="api-integration-section-subtitle">
              Systematic approach ensuring secure, scalable, and maintainable API integrations
            </p>
          </div>
          <div className="api-methodology-timeline">
            {methodologies.map((method, index) => (
              <div key={index} className="api-methodology-step">
                <div className="api-step-number">{method.phase}</div>
                <div className="api-step-content">
                  <h3>{method.title}</h3>
                  <div className="api-step-duration">{method.duration}</div>
                  <ul className="api-step-activities">
                    {method.activities.map((activity, aIndex) => (
                      <li key={aIndex}>
                        <CheckCircle size={16} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="api-integration-technologies">
        <div className="api-integration-container">
          <h3 className="api-tech-title">Technologies & Protocols We Implement</h3>
          <div className="api-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="api-tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="api-integration-cta">
        <div className="api-integration-container">
          <div className="api-cta-content">
            <h2>Ready to Connect Your Systems?</h2>
            <p>
              Transform your business operations with seamless API integrations. Get expert consultation
              and a custom integration strategy tailored to your technical requirements.
            </p>
            <button className="api-integration-btn-cta">
              <span>Get Integration Consultation</span>
              <ArrowRight size={20} />
            </button>
            <div className="api-cta-features">
              <div className="api-cta-feature">
                <CheckCircle size={18} />
                <span>Free Architecture Review</span>
              </div>
              <div className="api-cta-feature">
                <CheckCircle size={18} />
                <span>Custom Integration Plan</span>
              </div>
              <div className="api-cta-feature">
                <CheckCircle size={18} />
                <span>24/7 Support Available</span>
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

export default APIIntegration;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Rocket,
  Code,
  Layers,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  TrendingUp,
  Wrench,
  Package,
  Cpu,
  ShieldCheck,
  LineChart
} from 'lucide-react';
import './CustomProductDevelopment.css';
import Checkout from '../components/Checkout';

const CustomProductDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '200+', label: 'Products Launched', icon: <Rocket /> },
    { value: '95%', label: 'Success Rate', icon: <Target /> },
    { value: '$50M+', label: 'Revenue Generated', icon: <TrendingUp /> },
    { value: '50+', label: 'Industries Served', icon: <Award /> }
  ];

  const solutions = [
    {
      icon: <Lightbulb />,
      title: 'Product Strategy',
      description: 'Strategic product roadmapping, market validation, competitive analysis, and business model development for sustainable growth.',
      features: ['Market Research', 'Product Roadmap', 'Business Model Canvas']
    },
    {
      icon: <Code />,
      title: 'Full-Stack Development',
      description: 'End-to-end custom software development using modern frameworks, cloud architecture, and scalable infrastructure.',
      features: ['React/Node.js', 'Cloud Native', 'Microservices']
    },
    {
      icon: <Layers />,
      title: 'UX/UI Design',
      description: 'User-centered design process creating intuitive, beautiful interfaces that drive engagement and conversion.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Cpu />,
      title: 'AI & Machine Learning',
      description: 'Integrate cutting-edge AI/ML capabilities to automate processes, predict outcomes, and enhance user experiences.',
      features: ['Predictive Analytics', 'NLP Integration', 'Computer Vision']
    },
    {
      icon: <ShieldCheck />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies ensuring reliability, security, and performance across all platforms.',
      features: ['Automated Testing', 'Security Audits', 'Performance Testing']
    },
    {
      icon: <Package />,
      title: 'Launch & Scale',
      description: 'Go-to-market strategy, deployment automation, monitoring, and continuous improvement for long-term success.',
      features: ['DevOps Pipeline', 'Analytics Setup', 'Growth Strategy']
    }
  ];

  const industries = [
    { name: 'SaaS Platforms', icon: '☁️', projects: '75+' },
    { name: 'E-commerce', icon: '🛒', projects: '50+' },
    { name: 'HealthTech', icon: '⚕️', projects: '35+' },
    { name: 'FinTech', icon: '💰', projects: '40+' },
    { name: 'EdTech', icon: '📚', projects: '30+' },
    { name: 'IoT Solutions', icon: '🔌', projects: '25+' }
  ];

  const methodologies = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Research',
      duration: '2-3 weeks',
      activities: ['Stakeholder workshops', 'Market analysis', 'User research', 'Technical feasibility']
    },
    {
      phase: 'Phase 2',
      title: 'Design & Prototyping',
      duration: '3-4 weeks',
      activities: ['Architecture design', 'UI/UX prototypes', 'Technology stack', 'MVP definition']
    },
    {
      phase: 'Phase 3',
      title: 'Development & Testing',
      duration: '12-20 weeks',
      activities: ['Agile development', 'Continuous integration', 'QA testing', 'Security review']
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Growth',
      duration: 'Ongoing',
      activities: ['Production deployment', 'User onboarding', 'Performance optimization', 'Feature iteration']
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'AWS',
    'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'TensorFlow', 'Stripe', 'Twilio'
  ];

  return (
    <div className="custom-product-page">
      {/* Hero Section - Split Grid Layout */}
      <section className="custom-product-hero">
        <div className="custom-product-hero-grid">
          <div className="custom-product-hero-content">
            <div className="cp-hero-badge">
              <Package size={18} />
              <span>End-to-End Product Development</span>
            </div>
            <h1 className="custom-product-hero-title">
              Build Products That
              <span className="custom-product-gradient-text"> Scale & Succeed</span>
            </h1>
            <p className="custom-product-hero-desc">
              From MVP to market leader—we design, develop, and launch custom products that solve real problems,
              delight users, and drive business growth. Full ownership from concept to continuous improvement.
            </p>
            <div className="cp-hero-actions">
              <Link to="/contact" className="custom-product-btn-primary">
                <span>Start Your Project</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/portfolio/work" className="custom-product-btn-secondary">
                <LineChart className="btn-icon-left" />
                <span>See Case Studies</span>
              </Link>
            </div>

            {/* Hero Stats Grid */}
            <div className="cp-hero-stats-grid">
              {heroStats.map((stat, index) => (
                <div key={index} className="cp-hero-stat-card">
                  <div className="cp-stat-icon">{stat.icon}</div>
                  <div className="cp-stat-value">{stat.value}</div>
                  <div className="cp-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="custom-product-hero-visual">
            <div className="cp-hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Custom product development workspace with innovative solutions"
                className="custom-product-hero-img"
              />
              <div className="cp-hero-image-gradient"></div>
            </div>
            {/* Floating Metric Cards */}
            <div className="cp-hero-floating-metrics">
              <div className="cp-floating-metric cp-floating-metric-1">
                <Zap size={20} />
                <div>
                  <div className="cp-metric-value">6x</div>
                  <div className="cp-metric-label">Faster to Market</div>
                </div>
              </div>
              <div className="cp-floating-metric cp-floating-metric-2">
                <Users size={20} />
                <div>
                  <div className="cp-metric-value">100K+</div>
                  <div className="cp-metric-label">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="custom-product-industries">
        <div className="custom-product-container">
          <div className="cp-industries-header">
            <span className="cp-section-label">Our Expertise</span>
            <h3 className="cp-industries-title">Products Built Across Industries</h3>
          </div>
          <div className="cp-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="cp-industry-card">
                <div className="cp-industry-icon">{industry.icon}</div>
                <div className="cp-industry-name">{industry.name}</div>
                <div className="cp-industry-projects">{industry.projects} Products</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="custom-product-solutions">
        <div className="custom-product-container">
          <div className="cp-solutions-header">
            <span className="cp-section-label">What We Do</span>
            <h2 className="custom-product-section-title">
              Complete Product Development Services
            </h2>
            <p className="custom-product-section-subtitle">
              Everything you need to bring your product vision to life and beyond
            </p>
          </div>
          <div className="cp-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="cp-solution-card">
                <div className="cp-solution-card-header">
                  <div className="cp-solution-icon-wrapper">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p className="cp-solution-description">{solution.description}</p>
                <ul className="cp-solution-features">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle className="cp-feature-check" />
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
      <section className="custom-product-case-study">
        <div className="cp-case-study-container">
          <div className="cp-case-study-content">
            <div className="cp-case-study-badge">CLIENT SUCCESS</div>
            <h2 className="cp-case-study-title">
              PropertyHub: SaaS Platform Serving 50K+ Real Estate Professionals
            </h2>
            <div className="cp-case-study-body">
              <div className="cp-case-study-challenge">
                <h4>
                  <Target className="cp-section-icon" />
                  The Challenge
                </h4>
                <p>
                  A real estate startup needed a comprehensive property management SaaS platform to compete
                  in a crowded market. Required multi-tenant architecture, real-time collaboration, payment
                  processing, and mobile apps—all within a 6-month timeline and limited budget.
                </p>
              </div>
              <div className="cp-case-study-solution">
                <h4>
                  <Rocket className="cp-section-icon" />
                  Our Solution
                </h4>
                <p>
                  Delivered a cloud-native platform using React, Node.js, and AWS with real-time WebSocket
                  communication, Stripe integration, automated workflows, and native mobile apps. Implemented
                  CI/CD pipeline for continuous delivery and scalable infrastructure handling 10K+ concurrent users.
                </p>
              </div>
            </div>
            <div className="cp-case-study-results">
              <div className="cp-result-card">
                <div className="cp-result-value">50K+</div>
                <div className="cp-result-label">Active Users</div>
              </div>
              <div className="cp-result-card">
                <div className="cp-result-value">$8M</div>
                <div className="cp-result-label">ARR Achieved</div>
              </div>
              <div className="cp-result-card">
                <div className="cp-result-value">99.9%</div>
                <div className="cp-result-label">Uptime SLA</div>
              </div>
              <div className="cp-result-card">
                <div className="cp-result-value">5 mo</div>
                <div className="cp-result-label">Time to Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="custom-product-methodology">
        <div className="custom-product-container">
          <div className="cp-methodology-header">
            <span className="cp-section-label">Our Approach</span>
            <h2 className="custom-product-section-title">Agile Product Development Process</h2>
            <p className="custom-product-section-subtitle">
              Proven methodology delivering exceptional products on time and within budget
            </p>
          </div>
          <div className="cp-methodology-timeline">
            {methodologies.map((method, index) => (
              <div key={index} className="cp-methodology-step">
                <div className="cp-step-number">{method.phase}</div>
                <div className="cp-step-content">
                  <h3>{method.title}</h3>
                  <div className="cp-step-duration">{method.duration}</div>
                  <ul className="cp-step-activities">
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
      <section className="custom-product-technologies">
        <div className="custom-product-container">
          <h3 className="cp-tech-title">Technologies & Platforms We Use</h3>
          <div className="cp-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="cp-tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="custom-product-cta">
        <div className="custom-product-container">
          <div className="cp-cta-content">
            <h2>Ready to Build Your Next Great Product?</h2>
            <p>
              Let's transform your vision into a successful product that users love and investors fund.
              Schedule a free consultation to discuss your project requirements and goals.
            </p>
            <Link to="/contact" className="custom-product-btn-cta" onClick={() => window.scrollTo(0, 0)}>
              <span>Get Free Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <div className="cp-cta-features">
              <div className="cp-cta-feature">
                <CheckCircle size={18} />
                <span>Free Product Strategy Session</span>
              </div>
              <div className="cp-cta-feature">
                <CheckCircle size={18} />
                <span>Custom Development Plan</span>
              </div>
              <div className="cp-cta-feature">
                <CheckCircle size={18} />
                <span>Transparent Pricing</span>
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

export default CustomProductDevelopment;

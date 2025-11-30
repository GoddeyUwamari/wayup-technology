import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Eye,
  Users,
  Smartphone,
  Monitor,
  Layers,
  Zap,
  Target,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Figma,
  Grid,
  MousePointer,
  Layout,
  Accessibility,
  BarChart3,
  PenTool,
  Rocket,
  Shield,
  Globe,
  Award
} from 'lucide-react';
import './UIUXDesign.css';
import Checkout from '../components/Checkout';

const UIUXDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '500+', label: 'Designs Delivered', icon: <Award /> },
    { value: '4.9★', label: 'Average Rating', icon: <Heart /> },
    { value: '95%', label: 'Client Satisfaction', icon: <Target /> },
    { value: '12+', label: 'Years Experience', icon: <TrendingUp /> }
  ];

  const capabilities = [
    {
      icon: <Palette />,
      title: 'Visual Design',
      description: 'Stunning visual interfaces that capture attention and reflect your brand identity',
      tech: ['Design Systems', 'Brand Guidelines', 'Typography'],
      color: 'navy'
    },
    {
      icon: <Users />,
      title: 'User Research',
      description: 'Deep user insights through comprehensive research and behavioral analysis',
      tech: ['User Interviews', 'Surveys', 'Analytics'],
      color: 'orange'
    },
    {
      icon: <Layout />,
      title: 'Wireframing & IA',
      description: 'Strategic information architecture and wireframes for intuitive navigation',
      tech: ['User Flows', 'Sitemaps', 'Sketches'],
      color: 'navy'
    },
    {
      icon: <MousePointer />,
      title: 'Interactive Prototypes',
      description: 'High-fidelity clickable prototypes that bring your vision to life',
      tech: ['Figma', 'Adobe XD', 'Sketch'],
      color: 'orange'
    },
    {
      icon: <Accessibility />,
      title: 'Accessibility Design',
      description: 'Inclusive design ensuring usability for all users across abilities',
      tech: ['WCAG 2.1', 'ARIA', 'Color Contrast'],
      color: 'navy'
    },
    {
      icon: <Smartphone />,
      title: 'Responsive Design',
      description: 'Seamless experiences across all devices and screen sizes',
      tech: ['Mobile First', 'Adaptive', 'Breakpoints'],
      color: 'orange'
    }
  ];

  const solutions = [
    {
      icon: <Layout />,
      title: 'Web Application Design',
      description: 'Enterprise-grade web application interfaces with intuitive workflows, complex data visualization, and seamless user journeys.',
      metrics: { users: '500K+', satisfaction: '96%' }
    },
    {
      icon: <Smartphone />,
      title: 'Mobile App Design',
      description: 'Native iOS and Android designs optimized for touch interactions, gestures, and mobile-first experiences.',
      metrics: { downloads: '2M+', rating: '4.8★' }
    },
    {
      icon: <Grid />,
      title: 'Design Systems',
      description: 'Comprehensive design systems with reusable components, patterns, and guidelines for consistent brand experiences.',
      metrics: { components: '200+', efficiency: '+60%' }
    },
    {
      icon: <TrendingUp />,
      title: 'UX Optimization',
      description: 'Data-driven UX improvements through A/B testing, heatmaps, and conversion rate optimization strategies.',
      metrics: { conversion: '+45%', bounce: '-38%' }
    }
  ];

  const designProjects = [
    {
      category: 'FinTech',
      icon: '💳',
      title: 'Digital Banking Platform',
      description: 'Complete redesign of mobile banking app with focus on security, accessibility, and ease of use',
      result: '4.9★ rating, 85% engagement increase',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      alt: 'Modern banking dashboard showing financial analytics and transaction history'
    },
    {
      category: 'Healthcare',
      icon: '🏥',
      title: 'Telemedicine App',
      description: 'Patient-centric telehealth platform connecting doctors and patients seamlessly',
      result: '120K+ active users, 4.7★ rating',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      alt: 'Healthcare application interface with appointment scheduling and video consultation features'
    },
    {
      category: 'E-Commerce',
      icon: '🛍️',
      title: 'Fashion Marketplace',
      description: 'Beautiful shopping experience with AR try-on, personalized recommendations, and social features',
      result: '58% conversion rate increase',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      alt: 'Fashion e-commerce platform with product galleries and shopping cart interface'
    },
    {
      category: 'SaaS',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Complex data visualization platform making big data accessible and actionable for enterprises',
      result: 'Fortune 500 adoption, 92% satisfaction',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      alt: 'Analytics dashboard displaying charts, graphs, and real-time data visualization'
    }
  ];

  const designTools = [
    { name: 'Figma', category: 'Design Tool' },
    { name: 'Adobe XD', category: 'Prototyping' },
    { name: 'Sketch', category: 'UI Design' },
    { name: 'InVision', category: 'Collaboration' },
    { name: 'Framer', category: 'Animation' },
    { name: 'Principle', category: 'Interaction' },
    { name: 'Maze', category: 'User Testing' },
    { name: 'Hotjar', category: 'Analytics' }
  ];

  const designProcess = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'Understand users, business goals, and competitive landscape through comprehensive research',
      deliverables: ['User personas', 'Journey maps', 'Competitive analysis']
    },
    {
      number: '02',
      title: 'Ideation & Wireframing',
      description: 'Explore concepts and create low-fidelity wireframes to define structure and flow',
      deliverables: ['Information architecture', 'User flows', 'Wireframes']
    },
    {
      number: '03',
      title: 'Visual Design',
      description: 'Craft high-fidelity designs with brand identity, typography, and visual hierarchy',
      deliverables: ['UI mockups', 'Design system', 'Style guide']
    },
    {
      number: '04',
      title: 'Prototype & Test',
      description: 'Build interactive prototypes and validate with real users through usability testing',
      deliverables: ['Clickable prototype', 'Test results', 'Design specs']
    }
  ];

  return (
    <div className="uiux-design-page">
      {/* Hero Section - Split Grid Layout */}
      <section className="uiux-hero">
        <div className="uiux-hero-grid">
          <div className="uiux-hero-content">
            <div className="uiux-hero-badge">
              <Palette size={18} />
              <span>Award-Winning UI/UX Design Excellence</span>
            </div>
            <h1 className="uiux-hero-title">
              Design Experiences That
              <span className="uiux-gradient-text"> Users Love</span>
            </h1>
            <p className="uiux-hero-desc">
              Transform your digital presence with exceptional UI/UX design that delights users and drives business results.
              We create intuitive, beautiful interfaces that engage audiences and exceed expectations.
            </p>
            <div className="uiux-hero-actions">
              <Link to="/contact" state={{ scrollToTop: true }} className="uiux-btn-primary">
                <span>Get Free Consultation</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/portfolio/work" className="uiux-btn-secondary">
                <Eye className="btn-icon-left" />
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Hero Stats Grid */}
            <div className="uiux-hero-stats-grid">
              {heroStats.map((stat, index) => (
                <div key={index} className="uiux-hero-stat-card">
                  <div className="uiux-stat-icon">{stat.icon}</div>
                  <div className="uiux-stat-value">{stat.value}</div>
                  <div className="uiux-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="uiux-hero-visual">
            <div className="uiux-hero-image-wrapper">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Executive Team Meeting"
                className="uiux-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="uiux-capabilities">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <span className="uiux-label">Core Services</span>
            <h2 className="uiux-section-title">UI/UX Design Capabilities</h2>
            <p className="uiux-section-subtitle">
              Comprehensive design services from research to pixel-perfect execution
            </p>
          </div>

          <div className="uiux-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className={`uiux-capability-card ${capability.color}`}>
                <div className="uiux-capability-glow"></div>
                <div className="uiux-capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="uiux-tech-badges">
                  {capability.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="uiux-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="uiux-solutions">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <span className="uiux-label">What We Design</span>
            <h2 className="uiux-section-title">Design Solutions</h2>
          </div>

          <div className="uiux-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="uiux-solution-card">
                <div className="uiux-solution-header">
                  <div className="uiux-solution-icon">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p>{solution.description}</p>
                <div className="uiux-solution-metrics">
                  {Object.entries(solution.metrics).map(([key, value], mIndex) => (
                    <div key={mIndex} className="uiux-metric">
                      <div className="uiux-metric-value">{value}</div>
                      <div className="uiux-metric-label">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="uiux-solution-link">
                  Explore Design <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Projects Showcase */}
      <section className="uiux-showcase">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <span className="uiux-label">Portfolio</span>
            <h2 className="uiux-section-title">Featured Design Projects</h2>
            <p className="uiux-section-subtitle">
              Real-world design solutions that transformed user experiences
            </p>
          </div>

          <div className="uiux-showcase-grid">
            {designProjects.map((project, index) => (
              <div key={index} className="uiux-showcase-card">
                <div className="uiux-showcase-image">
                  <img src={project.image} alt={project.alt} />
                  <div className="uiux-showcase-overlay">
                    <div className="uiux-showcase-icon">{project.icon}</div>
                  </div>
                </div>
                <div className="uiux-showcase-content">
                  <div className="uiux-showcase-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="uiux-showcase-result">
                    <CheckCircle size={18} />
                    <span>{project.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="uiux-tools">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <span className="uiux-label">Our Toolkit</span>
            <h2 className="uiux-section-title">Design Tools & Software</h2>
          </div>

          <div className="uiux-tools-grid">
            {designTools.map((tool, index) => (
              <div key={index} className="uiux-tool-card">
                <div className="uiux-tool-name">{tool.name}</div>
                <div className="uiux-tool-category">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="uiux-process">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <span className="uiux-label">Our Approach</span>
            <h2 className="uiux-section-title">Design Process</h2>
            <p className="uiux-section-subtitle">
              Proven methodology delivering exceptional design outcomes
            </p>
          </div>

          <div className="uiux-process-timeline">
            {designProcess.map((step, index) => (
              <div key={index} className="uiux-process-step">
                <div className="uiux-process-line"></div>
                <div className="uiux-process-number">{step.number}</div>
                <div className="uiux-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul className="uiux-deliverables">
                    {step.deliverables.map((deliverable, dIndex) => (
                      <li key={dIndex}>
                        <CheckCircle size={14} />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="uiux-cta">
        <div className="uiux-cta-container">
          <div className="uiux-cta-content">
            <div className="uiux-cta-left">
              <div className="uiux-cta-badge">
                <Palette size={20} />
                <span>Let's Create Something Beautiful</span>
              </div>
              <h2>Ready to Transform Your User Experience?</h2>
              <p>
                Partner with our award-winning design team to create stunning interfaces that users love.
                Get started with a free design consultation and project assessment.
              </p>
              <ul className="uiux-cta-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>Free design consultation</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Portfolio review & analysis</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Custom design proposal</span>
                </li>
              </ul>
            </div>
            <div className="uiux-cta-right">
              <Link to="/contact" className="uiux-cta-btn" onClick={() => window.scrollTo(0, 0)}>
                <span>Schedule Design Session</span>
                <Rocket size={20} />
              </Link>
              <div className="uiux-cta-trust">
                <div className="uiux-trust-item">
                  <Award size={18} />
                  <span>Award-Winning Designs</span>
                </div>
                <div className="uiux-trust-item">
                  <Shield size={18} />
                  <span>NDA Protection</span>
                </div>
                <div className="uiux-trust-item">
                  <Globe size={18} />
                  <span>Global Design Expertise</span>
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

export default UIUXDesign;

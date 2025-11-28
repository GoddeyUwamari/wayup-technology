import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Tablet,
  Code,
  Zap,
  Users,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Shield,
  TrendingUp,
  Globe,
  Cpu,
  Layers,
  Monitor,
  Download,
  MessageCircle,
  Sparkles,
  Apple,
  Chrome
} from 'lucide-react';
import './MobileAppDevelopment.css';
import Checkout from '../components/Checkout';

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: <Apple />,
      title: 'iOS Development',
      description: 'Native Swift apps with stunning performance and seamless Apple ecosystem integration',
      tech: ['Swift', 'SwiftUI', 'Xcode'],
      color: 'navy'
    },
    {
      icon: <Chrome />,
      title: 'Android Development',
      description: 'High-performance Kotlin apps optimized for the Android platform and devices',
      tech: ['Kotlin', 'Jetpack', 'Material Design'],
      color: 'orange'
    },
    {
      icon: <Layers />,
      title: 'Cross-Platform',
      description: 'Single codebase for both platforms using React Native or Flutter frameworks',
      tech: ['React Native', 'Flutter', 'Expo'],
      color: 'navy'
    },
    {
      icon: <Monitor />,
      title: 'Progressive Web Apps',
      description: 'App-like experiences on the web with offline capabilities and push notifications',
      tech: ['PWA', 'Service Workers', 'Web APIs'],
      color: 'orange'
    },
    {
      icon: <Cpu />,
      title: 'Backend & APIs',
      description: 'Scalable cloud infrastructure and real-time APIs powering your mobile apps',
      tech: ['Node.js', 'Firebase', 'GraphQL'],
      color: 'navy'
    },
    {
      icon: <Shield />,
      title: 'Security & Testing',
      description: 'End-to-end encryption, automated testing, and security audits for peace of mind',
      tech: ['OAuth', 'Jest', 'Detox'],
      color: 'orange'
    }
  ];

  const solutions = [
    {
      icon: <Sparkles />,
      title: 'Consumer Apps',
      description: 'Beautiful, intuitive mobile apps for iOS and Android with engaging UX, social features, and seamless performance.',
      metrics: { downloads: '10M+', rating: '4.8★' }
    },
    {
      icon: <Target />,
      title: 'Enterprise Mobility',
      description: 'Secure, scalable enterprise apps with advanced features, integrations, and device management.',
      metrics: { users: '500K+', uptime: '99.9%' }
    },
    {
      icon: <TrendingUp />,
      title: 'E-commerce Apps',
      description: 'Mobile shopping experiences with AR try-on, personalized recommendations, and seamless checkout.',
      metrics: { conversion: '+35%', revenue: '$50M+' }
    },
    {
      icon: <Globe />,
      title: 'Real-time Apps',
      description: 'Live streaming, messaging, and collaborative apps with WebSocket technology and push notifications.',
      metrics: { latency: '< 100ms', concurrent: '1M+' }
    }
  ];

  const showcaseApps = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      title: 'HealthTrack Pro',
      description: 'AI-powered fitness tracking with 15+ wearable integrations and personalized health insights',
      result: '2M+ downloads, 4.8★ rating',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80'
    },
    {
      industry: 'FinTech',
      icon: '💳',
      title: 'FinanceFlow',
      description: 'Personal finance management with smart budgeting AI and investment tracking',
      result: '1.5M+ users, $12M managed',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80'
    },
    {
      industry: 'E-commerce',
      icon: '🛍️',
      title: 'ShopSmart',
      description: 'Social shopping platform with AR try-on features and personalized recommendations',
      result: '3M+ downloads, 35% conversion',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80'
    },
    {
      industry: 'Education',
      icon: '📚',
      title: 'LearnHub',
      description: 'Interactive learning platform with gamification and offline course access',
      result: '900K+ students, 92% retention',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
    }
  ];

  const techStack = [
    { name: 'Swift', category: 'iOS' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'AWS Amplify', category: 'Cloud' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Market research, user personas, and technical roadmap planning for your mobile app',
      deliverables: ['Competitive analysis', 'User stories', 'Technical specs']
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'High-fidelity mockups, interactive prototypes, and user testing for optimal UX',
      deliverables: ['Figma designs', 'Clickable prototype', 'Design system']
    },
    {
      number: '03',
      title: 'Development & QA',
      description: 'Agile sprints, continuous integration, and rigorous testing across all devices',
      deliverables: ['MVP release', 'Automated tests', 'Beta testing']
    },
    {
      number: '04',
      title: 'Launch & Growth',
      description: 'App store optimization, marketing support, and analytics setup for success',
      deliverables: ['Store submission', 'Analytics', 'Growth plan']
    }
  ];

  return (
    <div className="mobile-app-page">
      {/* Full-Width Hero Section */}
      <section className="mobile-full-hero">
        <div className="mobile-hero-background">
         <img
  src="https://images.pexels.com/photos/30688592/pexels-photo-30688592.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1"
  alt="Professional team working on mobile app development"
  className="mobile-bg-image"
/>
          <div className="mobile-hero-overlay"></div>
        </div>

        <div className="mobile-hero-content-center">
          <div className="mobile-badge">
            <Sparkles size={16} />
            500+ APPS DELIVERED | 10M+ ACTIVE USERS
          </div>

          <h1 className="mobile-main-title">
            Mobile App <span className="mobile-highlight-text">Development</span>
          </h1>

          <p className="mobile-subtitle">
            Build powerful iOS and Android apps that engage users and drive business growth
          </p>

          <div className="mobile-cta-buttons">
            <Link to="/contact" className="mobile-btn-speak-now">Start Your Project</Link>
            <Link to="/portfolio/work" className="mobile-btn-secondary-outline">View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="mobile-capabilities">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Core Expertise</span>
            <h2 className="mobile-section-title">Mobile Development Capabilities</h2>
            <p className="mobile-section-subtitle">
              Native and cross-platform solutions for every use case
            </p>
          </div>

          <div className="mobile-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className={`mobile-capability-card ${capability.color}`}>
                <div className="mobile-capability-glow"></div>
                <div className="mobile-capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="mobile-tech-badges">
                  {capability.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="mobile-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mobile-solutions">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">What We Build</span>
            <h2 className="mobile-section-title">Mobile Solutions That Scale</h2>
          </div>

          <div className="mobile-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="mobile-solution-card">
                <div className="mobile-solution-header">
                  <div className="mobile-solution-icon">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p>{solution.description}</p>
                <div className="mobile-solution-metrics">
                  {Object.entries(solution.metrics).map(([key, value], mIndex) => (
                    <div key={mIndex} className="mobile-metric">
                      <div className="mobile-metric-value">{value}</div>
                      <div className="mobile-metric-label">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" state={{ scrollToTop: true }} className="mobile-solution-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Apps */}
      <section className="mobile-showcase">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Real-World Success</span>
            <h2 className="mobile-section-title">Featured Mobile Apps</h2>
            <p className="mobile-section-subtitle">
              Real projects, real results—see what we've created for our clients
            </p>
          </div>

          <div className="mobile-showcase-grid">
            {showcaseApps.map((app, index) => (
              <div key={index} className="mobile-showcase-card">
                <div className="mobile-showcase-image">
                  <img src={app.image} alt={`${app.title} - ${app.industry} mobile application`} />
                  <div className="mobile-showcase-overlay">
                    <div className="mobile-showcase-icon">{app.icon}</div>
                  </div>
                </div>
                <div className="mobile-showcase-content">
                  <div className="mobile-showcase-industry">{app.industry}</div>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                  <div className="mobile-showcase-result">
                    <CheckCircle size={18} />
                    <span>{app.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mobile-tech-stack">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Our Tools</span>
            <h2 className="mobile-section-title">Mobile Technology Stack</h2>
          </div>

          <div className="mobile-tech-stack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="mobile-tech-card">
                <div className="mobile-tech-name">{tech.name}</div>
                <div className="mobile-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="mobile-process">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Our Methodology</span>
            <h2 className="mobile-section-title">App Development Process</h2>
            <p className="mobile-section-subtitle">
              Structured approach to delivering world-class mobile applications
            </p>
          </div>

          <div className="mobile-process-timeline">
            {process.map((step, index) => (
              <div key={index} className="mobile-process-step">
                <div className="mobile-process-line"></div>
                <div className="mobile-process-number">{step.number}</div>
                <div className="mobile-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul className="mobile-deliverables">
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
      <section className="mobile-cta">
        <div className="mobile-cta-container">
          <div className="mobile-cta-content">
            <div className="mobile-cta-left">
              <div className="mobile-cta-badge">
                <Smartphone size={20} />
                <span>Let's Build Something Amazing</span>
              </div>
              <h2>Ready to Launch Your Mobile App?</h2>
              <p>
                Transform your vision into a successful mobile application with our expert team.
                Get a free consultation and custom project estimate tailored to your goals.
              </p>
              <ul className="mobile-cta-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>Free project consultation</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Custom development estimate</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>App Store success roadmap</span>
                </li>
              </ul>
            </div>
            <div className="mobile-cta-right">
              <Link to="/contact" state={{ scrollToTop: true }} className="mobile-cta-btn">
                <span>Schedule Consultation</span>
                <Rocket size={20} />
              </Link>
              <div className="mobile-cta-trust">
                <div className="mobile-trust-item">
                  <Award size={18} />
                  <span>Award-Winning Apps</span>
                </div>
                <div className="mobile-trust-item">
                  <Shield size={18} />
                  <span>Enterprise Security</span>
                </div>
                <div className="mobile-trust-item">
                  <MessageCircle size={18} />
                  <span>24/7 Support</span>
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

export default MobileAppDevelopment;

import { useEffect } from 'react';
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
  Palette,
  Shield,
  TrendingUp,
  Globe,
  Cpu,
  Layers,
  Monitor,
  Play,
  Download,
  MessageCircle,
  Heart,
  Sparkles
} from 'lucide-react';
import './MobileAppDevelopment.css';
import Checkout from '../components/Checkout';

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroFeatures = [
    { icon: <Smartphone />, label: 'iOS & Android' },
    { icon: <Code />, label: 'Cross-Platform' },
    { icon: <Zap />, label: 'Fast Delivery' },
    { icon: <Users />, label: '10M+ Users' }
  ];

  const platforms = [
    {
      icon: <Smartphone />,
      title: 'iOS Development',
      description: 'Native Swift apps with stunning performance and seamless Apple ecosystem integration',
      tech: ['Swift', 'SwiftUI', 'Xcode'],
      color: 'cyan'
    },
    {
      icon: <Tablet />,
      title: 'Android Development',
      description: 'High-performance Kotlin apps optimized for the Android platform and devices',
      tech: ['Kotlin', 'Jetpack', 'Material Design'],
      color: 'blue'
    },
    {
      icon: <Layers />,
      title: 'Cross-Platform',
      description: 'Single codebase for both platforms using React Native or Flutter frameworks',
      tech: ['React Native', 'Flutter', 'Expo'],
      color: 'cyan'
    },
    {
      icon: <Monitor />,
      title: 'Progressive Web Apps',
      description: 'App-like experiences on the web with offline capabilities and push notifications',
      tech: ['PWA', 'Service Workers', 'Web APIs'],
      color: 'blue'
    },
    {
      icon: <Cpu />,
      title: 'Backend & APIs',
      description: 'Scalable cloud infrastructure and real-time APIs powering your mobile apps',
      tech: ['Node.js', 'Firebase', 'GraphQL'],
      color: 'cyan'
    },
    {
      icon: <Shield />,
      title: 'Security & Testing',
      description: 'End-to-end encryption, automated testing, and security audits for peace of mind',
      tech: ['OAuth', 'Jest', 'Detox'],
      color: 'blue'
    }
  ];

  const features = [
    {
      icon: <Sparkles />,
      title: 'Beautiful UI/UX',
      description: 'Pixel-perfect designs that delight users and drive engagement',
      metric: '4.9★ Avg Rating'
    },
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description: 'Optimized performance with < 2s load times and smooth 60fps animations',
      metric: '< 2s Load Time'
    },
    {
      icon: <Globe />,
      title: 'Global Scale',
      description: 'Apps built to handle millions of users with auto-scaling infrastructure',
      metric: '10M+ Users'
    },
    {
      icon: <Heart />,
      title: 'User Retention',
      description: 'Engaging experiences that keep users coming back day after day',
      metric: '92% Retention'
    }
  ];

  const showcaseApps = [
    {
      name: 'HealthTrack Pro',
      category: 'Healthcare',
      icon: '🏥',
      downloads: '2M+',
      rating: '4.8★',
      description: 'AI-powered fitness tracking with 15+ wearable integrations'
    },
    {
      name: 'FinanceFlow',
      category: 'FinTech',
      icon: '💳',
      downloads: '1.5M+',
      rating: '4.9★',
      description: 'Personal finance management with smart budgeting AI'
    },
    {
      name: 'ShopSmart',
      category: 'E-commerce',
      icon: '🛍️',
      downloads: '3M+',
      rating: '4.7★',
      description: 'Social shopping platform with AR try-on features'
    },
    {
      name: 'LearnHub',
      category: 'Education',
      icon: '📚',
      downloads: '900K+',
      rating: '4.9★',
      description: 'Interactive learning platform with gamification'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Market research, user personas, and technical roadmap planning',
      deliverables: ['Competitive analysis', 'User stories', 'Technical specs']
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'High-fidelity mockups, interactive prototypes, and user testing',
      deliverables: ['Figma designs', 'Clickable prototype', 'Design system']
    },
    {
      number: '03',
      title: 'Development & QA',
      description: 'Agile sprints, continuous integration, and rigorous testing',
      deliverables: ['MVP release', 'Automated tests', 'Beta testing']
    },
    {
      number: '04',
      title: 'Launch & Growth',
      description: 'App store optimization, marketing support, and analytics setup',
      deliverables: ['Store submission', 'Analytics', 'Support plan']
    }
  ];

  const techStack = [
    { name: 'Swift', category: 'iOS' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'AWS Amplify', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' }
  ];

  return (
    <div className="mobile-app-page">
      {/* Hero Section - Centered with Device Grid */}
      <section className="mobile-hero">
        <div className="mobile-hero-bg-pattern"></div>
        <div className="mobile-hero-container">
          <div className="mobile-hero-badge">
            <Smartphone size={16} />
            <span>500+ Apps Delivered | 10M+ Active Users</span>
          </div>
          <h1 className="mobile-hero-title">
            Build Mobile Apps That
            <span className="mobile-gradient-text"> Users Love</span>
          </h1>
          <p className="mobile-hero-desc">
            Award-winning iOS and Android app development. From startup MVPs to enterprise-scale applications,
            we create powerful, beautiful mobile experiences that drive engagement and revenue.
          </p>

          {/* Quick Feature Pills */}
          <div className="mobile-hero-features">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="mobile-feature-pill">
                {feature.icon}
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="mobile-hero-actions">
            <button className="mobile-btn-primary">
              <span>Start Your App</span>
              <Rocket />
            </button>
            <button className="mobile-btn-secondary">
              <Play />
              <span>View Portfolio</span>
            </button>
          </div>

          {/* Floating Stats */}
          <div className="mobile-hero-stats">
            <div className="mobile-stat-item">
              <div className="mobile-stat-value">500+</div>
              <div className="mobile-stat-label">Apps Delivered</div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-value">4.9★</div>
              <div className="mobile-stat-label">App Store Rating</div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-value">10M+</div>
              <div className="mobile-stat-label">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid - Hexagonal Cards */}
      <section className="mobile-platforms">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Our Expertise</span>
            <h2 className="mobile-section-title">Multi-Platform Development</h2>
            <p className="mobile-section-subtitle">
              Native and cross-platform solutions for every use case
            </p>
          </div>

          <div className="mobile-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className={`mobile-platform-card ${platform.color}`}>
                <div className="mobile-platform-glow"></div>
                <div className="mobile-platform-icon">{platform.icon}</div>
                <h3>{platform.title}</h3>
                <p>{platform.description}</p>
                <div className="mobile-tech-badges">
                  {platform.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="mobile-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Large Cards with Metrics */}
      <section className="mobile-features">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Why Choose Us</span>
            <h2 className="mobile-section-title">Built for Performance & Engagement</h2>
          </div>

          <div className="mobile-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="mobile-feature-card">
                <div className="mobile-feature-header">
                  <div className="mobile-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
                <div className="mobile-feature-metric">
                  <TrendingUp size={18} />
                  <span>{feature.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Apps - Portfolio Grid */}
      <section className="mobile-showcase">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Featured Work</span>
            <h2 className="mobile-section-title">Apps We've Built</h2>
            <p className="mobile-section-subtitle">
              Real projects, real results—see what we've created for our clients
            </p>
          </div>

          <div className="mobile-showcase-grid">
            {showcaseApps.map((app, index) => (
              <div key={index} className="mobile-showcase-card">
                <div className="mobile-showcase-header">
                  <div className="mobile-showcase-icon">{app.icon}</div>
                  <div className="mobile-showcase-category">{app.category}</div>
                </div>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <div className="mobile-showcase-metrics">
                  <div className="mobile-showcase-metric">
                    <Download size={16} />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="mobile-showcase-metric">
                    <Star size={16} fill="currentColor" />
                    <span>{app.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Floating Cards */}
      <section className="mobile-tech-stack">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Technologies</span>
            <h2 className="mobile-section-title">Our Tech Stack</h2>
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

      {/* Process - Horizontal Timeline */}
      <section className="mobile-process">
        <div className="mobile-container">
          <div className="mobile-section-header">
            <span className="mobile-label">Our Process</span>
            <h2 className="mobile-section-title">From Idea to App Store</h2>
            <p className="mobile-section-subtitle">
              Proven methodology delivering apps on time and within budget
            </p>
          </div>

          <div className="mobile-process-grid">
            {process.map((step, index) => (
              <div key={index} className="mobile-process-step">
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

      {/* CTA - Gradient Split */}
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
              <button className="mobile-cta-btn">
                <span>Get Free Consultation</span>
                <Rocket size={20} />
              </button>
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

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Settings,
  Globe,
  Award,
  Briefcase,
  UserCheck,
  TrendingDown,
  DollarSign,
  Layers,
  Code,
  Smartphone,
  Database,
  Rocket,
  HeadphonesIcon,
  Building2,
  BadgeCheck
} from 'lucide-react';
import './StaffAugmentation.css';
import Checkout from '../components/Checkout';

const StaffAugmentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '2K+', label: 'Professionals', icon: <Users /> },
    { value: '48h', label: 'Avg. Match Time', icon: <Clock /> },
    { value: '95%', label: 'Retention Rate', icon: <TrendingUp /> },
    { value: '500+', label: 'Active Clients', icon: <Building2 /> }
  ];

  const benefits = [
    {
      icon: <Clock />,
      title: 'Rapid Deployment',
      description: 'Get qualified professionals onboarded in 1-2 weeks',
      metric: '48h Match',
      color: 'teal'
    },
    {
      icon: <DollarSign />,
      title: 'Cost Efficient',
      description: 'Save up to 50% compared to full-time hiring',
      metric: '50% Savings',
      color: 'navy'
    },
    {
      icon: <Layers />,
      title: 'Scalable Teams',
      description: 'Scale from 1 to 50+ professionals seamlessly',
      metric: 'Unlimited Scale',
      color: 'orange'
    },
    {
      icon: <Shield />,
      title: 'Risk-Free Trials',
      description: 'Start with 2-week trial period with no commitment',
      metric: '2-Week Trial',
      color: 'teal'
    },
    {
      icon: <BadgeCheck />,
      title: 'Pre-Vetted Talent',
      description: 'All professionals pass rigorous screening process',
      metric: 'Top 5%',
      color: 'navy'
    },
    {
      icon: <Target />,
      title: 'Perfect Match',
      description: 'AI-powered matching for skills and culture fit',
      metric: '95% Success',
      color: 'orange'
    }
  ];

  const roles = [
    {
      category: 'Development',
      icon: <Code />,
      positions: [
        'Full-Stack Developers',
        'Frontend Engineers',
        'Backend Developers',
        'DevOps Engineers',
        'QA Engineers',
        'Cloud Architects'
      ]
    },
    {
      category: 'Design & UX',
      icon: <Smartphone />,
      positions: [
        'UI/UX Designers',
        'Product Designers',
        'Graphic Designers',
        'Motion Designers',
        'UX Researchers',
        'Design System Experts'
      ]
    },
    {
      category: 'Data & AI',
      icon: <Database />,
      positions: [
        'Data Scientists',
        'ML Engineers',
        'Data Engineers',
        'AI Specialists',
        'Data Analysts',
        'Business Intelligence'
      ]
    },
    {
      category: 'Management',
      icon: <Briefcase />,
      positions: [
        'Project Managers',
        'Product Managers',
        'Scrum Masters',
        'Business Analysts',
        'Technical Leads',
        'Solution Architects'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Define Requirements',
      description: 'Share your project needs, tech stack, and team culture',
      duration: '1 day',
      icon: <Search />
    },
    {
      step: '02',
      title: 'Talent Matching',
      description: 'AI-powered system matches top candidates to your needs',
      duration: '24-48h',
      icon: <UserCheck />
    },
    {
      step: '03',
      title: 'Interview & Select',
      description: 'Review profiles, conduct interviews, select your team',
      duration: '2-3 days',
      icon: <Star />
    },
    {
      step: '04',
      title: 'Onboard & Launch',
      description: 'Seamless integration with your tools and processes',
      duration: '1-2 days',
      icon: <Rocket />
    }
  ];

  const testimonials = [
    {
      quote: "We augmented our team with 5 senior developers in under 2 weeks. The quality exceeded our expectations.",
      author: 'Sarah Martinez',
      role: 'Engineering Director',
      company: 'TechCorp',
      rating: 5
    },
    {
      quote: "Cost-effective, high-quality talent that integrated seamlessly. Game changer for our startup.",
      author: 'David Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      rating: 5
    }
  ];

  const pricingModels = [
    {
      title: 'Hourly',
      description: 'Flexible pay-as-you-go model',
      icon: <Clock />,
      features: [
        'No minimum commitment',
        'Hourly billing',
        'Easy scaling',
        'Perfect for short-term needs'
      ],
      highlight: false
    },
    {
      title: 'Monthly',
      description: 'Dedicated resources with savings',
      icon: <Users />,
      features: [
        'Full-time dedication',
        'Up to 30% savings',
        'Monthly billing',
        'Best for ongoing projects'
      ],
      highlight: true
    },
    {
      title: 'Project-Based',
      description: 'Fixed scope and timeline',
      icon: <Target />,
      features: [
        'Fixed pricing',
        'Defined deliverables',
        'Milestone payments',
        'Complete project ownership'
      ],
      highlight: false
    }
  ];

  return (
    <div className="staff-augmentation-page">
      {/* Hero Section - Modern Split with Stats Overlay */}
      <section className="staff-hero">
        <div className="staff-hero-container">
          <div className="staff-hero-content">
            <div className="staff-hero-badge">
              <Users size={18} />
              <span>Elite Talent Network</span>
            </div>
            <h1 className="staff-hero-title">
              Scale Your Team with
              <span className="staff-gradient-text"> Top 5% Tech Talent</span>
            </h1>
            <p className="staff-hero-desc">
              Access pre-vetted developers, designers, and specialists in 48 hours.
              No lengthy hiring processes. No long-term commitments. Just world-class professionals
              ready to accelerate your projects.
            </p>

            {/* Key Benefits Pills */}
            <div className="staff-hero-benefits">
              <div className="staff-benefit-pill">
                <CheckCircle size={18} />
                <span>Match in 48 hours</span>
              </div>
              <div className="staff-benefit-pill">
                <CheckCircle size={18} />
                <span>2-week risk-free trial</span>
              </div>
              <div className="staff-benefit-pill">
                <CheckCircle size={18} />
                <span>50% cost savings</span>
              </div>
            </div>

            <div className="staff-hero-actions">
              <Link to="/contact" state={{ scrollToTop: true }} className="staff-btn-primary">
                <span>Find Your Team</span>
                <ArrowRight />
              </Link>
              <Link to="/contact" state={{ scrollToTop: true }} className="staff-btn-secondary">
                <HeadphonesIcon />
                <span>Talk to Expert</span>
              </Link>
            </div>
          </div>

          {/* Hero Stats Cards - Floating Grid */}
          <div className="staff-hero-stats-grid">
            {heroStats.map((stat, index) => (
              <div key={index} className="staff-hero-stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Masonry Grid with Alternating Colors */}
      <section className="staff-benefits">
        <div className="staff-container">
          <div className="staff-section-header">
            <span className="staff-label">Why Choose Us</span>
            <h2 className="staff-section-title">Staff Augmentation Advantages</h2>
            <p className="staff-section-subtitle">
              Flexible, fast, and cost-effective way to scale your technical team
            </p>
          </div>

          <div className="staff-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className={`staff-benefit-card ${benefit.color}`}>
                <div className="benefit-icon-wrapper">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="benefit-metric">
                  <TrendingUp size={16} />
                  <span>{benefit.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section - 4-Column Grid with Expandable Cards */}
      <section className="staff-roles">
        <div className="staff-container">
          <div className="staff-section-header">
            <span className="staff-label">Available Talent</span>
            <h2 className="staff-section-title">Roles We Staff</h2>
            <p className="staff-section-subtitle">
              From individual contributors to complete teams across all disciplines
            </p>
          </div>

          <div className="staff-roles-grid">
            {roles.map((role, index) => (
              <div key={index} className="staff-role-card">
                <div className="role-header">
                  <div className="role-icon">{role.icon}</div>
                  <h3>{role.category}</h3>
                </div>
                <ul className="role-positions">
                  {role.positions.map((position, pIndex) => (
                    <li key={pIndex}>
                      <CheckCircle size={14} />
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline with Icons */}
      <section className="staff-process">
        <div className="staff-container">
          <div className="staff-section-header">
            <span className="staff-label">How It Works</span>
            <h2 className="staff-section-title">From Request to Ready in 1 Week</h2>
          </div>

          <div className="staff-process-timeline">
            {process.map((step, index) => (
              <div key={index} className="staff-process-step">
                <div className="process-step-icon">{step.icon}</div>
                <div className="process-step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-duration">{step.duration}</div>
                {index < process.length - 1 && (
                  <div className="process-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Side-by-side Cards */}
      <section className="staff-testimonials">
        <div className="staff-container">
          <div className="staff-section-header">
            <span className="staff-label">Success Stories</span>
            <h2 className="staff-section-title">Trusted by Leading Companies</h2>
          </div>

          <div className="staff-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="staff-testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models - 3-Column Cards */}
      <section className="staff-pricing">
        <div className="staff-container">
          <div className="staff-section-header">
            <span className="staff-label">Flexible Engagement</span>
            <h2 className="staff-section-title">Pricing Models</h2>
            <p className="staff-section-subtitle">
              Choose the model that fits your project needs and budget
            </p>
          </div>

          <div className="staff-pricing-grid">
            {pricingModels.map((model, index) => (
              <div key={index} className={`staff-pricing-card ${model.highlight ? 'highlight' : ''}`}>
                {model.highlight && (
                  <div className="pricing-badge">
                    <Award size={14} />
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="pricing-icon">{model.icon}</div>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <ul className="pricing-features">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" state={{ scrollToTop: true }} className="pricing-btn">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with Split Content */}
      <section className="staff-cta">
        <div className="staff-cta-container">
          <div className="staff-cta-content">
            <div className="cta-left">
              <h2>Ready to Build Your Dream Team?</h2>
              <p>
                Get matched with expert professionals in 48 hours. Start with a risk-free
                2-week trial and experience the difference top-tier talent makes.
              </p>
              <ul className="cta-checklist">
                <li>
                  <CheckCircle size={20} />
                  <span>No upfront costs or commitments</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Replace talent within 48h if not satisfied</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Dedicated account manager included</span>
                </li>
              </ul>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="staff-cta-btn-primary" onClick={() => window.scrollTo(0, 0)}>
                <span>Start Your Trial</span>
                <Rocket size={20} />
              </Link>
              <Link to="/contact" className="staff-cta-btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <div className="cta-trust-badges">
                <div className="trust-badge">
                  <Shield size={18} />
                  <span>NDA Protected</span>
                </div>
                <div className="trust-badge">
                  <Award size={18} />
                  <span>ISO Certified</span>
                </div>
                <div className="trust-badge">
                  <Globe size={18} />
                  <span>Global Talent</span>
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

export default StaffAugmentation;

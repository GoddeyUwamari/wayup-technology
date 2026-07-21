import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  ShoppingCart,
  Building2,
  Layers,
  Globe,
  Users,
  TrendingUp,
  Rocket,
  ExternalLink,
  Github,
  CheckCircle,
  Server,
  Cloud,
  Database,
  Zap,
  Filter,
  Utensils,
  Scissors,
  HardHat,
  Award,
  Clock,
  Shield
} from 'lucide-react';
import './OurWork.css';

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers /> },
    { id: 'smb', label: 'SMB Websites', icon: <Globe /> },
    { id: 'saas', label: 'SaaS Platforms', icon: <Cloud /> },
    { id: 'ecommerce', label: 'E-Commerce', icon: <ShoppingCart /> },
    { id: 'devops', label: 'DevOps & Cloud', icon: <Server /> },
    { id: 'api', label: 'API & Backend', icon: <Database /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'Restaurant Website & Online Presence',
      client: 'Local Restaurant — New Jersey',
      industry: 'Food & Beverage',
      category: 'smb',
      description: 'Mobile-friendly website with online menu, contact form, Google Maps integration, and basic SEO setup. The restaurant now appears on Google Search and Maps, bringing in new customers every week.',
      image: 'images/restaurant-hero.jpg',
      alt: 'Restaurant website showing menu and contact information',
      tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'SEO'],
      results: 'Live in 10 days, Google-indexed',
      highlights: [
        'Mobile-responsive design for all devices',
        'Google Maps and contact form integration',
        'Basic SEO — now appears in local search results',
        'Fast loading — under 2 seconds on mobile',
        'Ongoing support included'
      ]
    },
    {
      id: 2,
      title: 'Contractor Portfolio & Lead Generation Site',
      client: 'Home Services Contractor — New Jersey',
      industry: 'Construction & Trades',
      category: 'smb',
      description: 'Professional website showcasing past projects, services offered, and a contact form that generates inbound leads. The contractor now receives consistent quote requests through the website instead of relying solely on word of mouth.',
      image: 'images/contractor-hero.jpg',
      alt: 'Contractor website showing project portfolio and contact form',
      tech: ['React', 'Node.js', 'MongoDB', 'Responsive CSS', 'SEO'],
      results: 'Consistent inbound leads weekly',
      highlights: [
        'Project portfolio with before/after photos',
        'Lead capture form with email notifications',
        'Service area pages for local SEO',
        'Click-to-call button for mobile visitors',
        '30 days post-launch support'
      ]
    },
    {
      id: 3,
      title: 'CloudBill — Multi-Tenant SaaS Billing Platform',
      client: 'Enterprise SaaS Clients',
      industry: 'FinTech / SaaS',
      category: 'saas',
      description: 'Production-ready multi-tenant SaaS billing platform featuring 5 microservices architecture, 213+ automated tests, Stripe payment integration, PostgreSQL with Row-Level Security, Redis session management, Docker containerization, and complete AWS infrastructure.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      alt: 'CloudBill SaaS billing platform dashboard',
      tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Stripe', 'AWS', 'Terraform'],
      results: '5 microservices, 213 tests, 99.9% uptime',
      github: 'https://github.com/GoddeyUwamari/cloudbill',
      highlights: [
        'Multi-tenant architecture with complete data isolation',
        '213+ automated tests with full CI/CD pipeline',
        'Enterprise security with Row-Level Security',
        'Real-time billing analytics and reporting',
        'Stripe payment integration with webhooks'
      ]
    },
    {
      id: 4,
      title: 'CloudBill Dashboard — Next.js 14 Frontend',
      client: 'Enterprise SaaS Platform',
      industry: 'SaaS / Enterprise',
      category: 'saas',
      description: 'Modern multi-tenant SaaS billing dashboard built with Next.js 14, TypeScript, and shadcn/ui. Features server-side rendering, type-safe development, and seamless integration with CloudBill backend microservices.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      alt: 'CloudBill dashboard showing billing analytics interface',
      tech: ['Next.js 14', 'TypeScript', 'React', 'shadcn/ui', 'TailwindCSS', 'Zustand'],
      results: 'Type-safe, SSR optimized, modern UI',
      github: 'https://github.com/GoddeyUwamari/cloudbill-dashboard',
      highlights: [
        'Next.js 14 App Router with server components',
        'Fully type-safe with TypeScript end-to-end',
        'Beautiful UI with shadcn/ui components',
        'Optimized for performance and SEO',
        'Responsive across all screen sizes'
      ]
    },
    {
      id: 5,
      title: 'WayUP Technology — Full-Stack Business Website',
      client: 'WayUP Technology LLC',
      industry: 'Web Development',
      category: 'smb',
      description: 'Full-stack professional website for a technology services company. Features real-time chat widget with Socket.IO, contact form with email notifications, MongoDB integration, and responsive design across all devices.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      alt: 'WayUP Technology website showing modern business design',
      tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Resend'],
      results: 'Full-stack, real-time chat, live leads',
      github: 'https://github.com/GoddeyUwamari/Empire',
      highlights: [
        'Real-time chat widget with Socket.IO',
        'Contact form with instant email notifications',
        'MongoDB database for lead management',
        'Mobile-responsive across all devices',
        'SEO-optimized pages and meta tags'
      ]
    },
    {
      id: 6,
      title: 'DevControl — AWS Developer Portal',
      client: 'Platform Engineering Teams',
      industry: 'DevOps / Cloud Infrastructure',
      category: 'devops',
      description: 'AWS-native internal developer portal with comprehensive AWS service integrations, developer self-service capabilities, service catalog, cost management, Stripe billing, and multi-tenant architecture. 37 production routes.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      alt: 'DevControl AWS developer portal showing infrastructure management',
      tech: ['React', 'TypeScript', 'Node.js', 'AWS SDK', 'Stripe', 'PostgreSQL', 'Docker'],
      results: '37 routes, multi-tenant, production-ready',
      github: 'https://github.com/GoddeyUwamari/devcontrol',
      highlights: [
        'Backstage alternative for AWS environments',
        'Developer self-service for infrastructure',
        'AWS cost visibility and reporting',
        'Integrated Stripe billing per tenant',
        'Row-Level Security for data isolation'
      ]
    },
    {
      id: 7,
      title: 'Production API Framework',
      client: 'Enterprise Development Teams',
      industry: 'Platform Engineering',
      category: 'api',
      description: 'Production-grade Node.js/TypeScript API framework with Docker and Kubernetes deployment, CI/CD pipeline with GitHub Actions, CloudWatch monitoring, and Terraform infrastructure as code.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      alt: 'Enterprise API framework showing deployment pipeline',
      tech: ['Node.js', 'TypeScript', 'Express', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
      results: 'Auto-scaling, 24/7 monitoring, enterprise-ready',
      github: 'https://github.com/GoddeyUwamari/production-api-framework',
      highlights: [
        'Complete Docker and Kubernetes configuration',
        'Automated CI/CD with GitHub Actions',
        'Infrastructure as Code with Terraform',
        'CloudWatch monitoring and alerting',
        'Security best practices throughout'
      ]
    },
    {
      id: 8,
      title: 'E-Commerce Store — Local Retail',
      client: 'Retail Business — New York',
      industry: 'Retail & E-Commerce',
      category: 'ecommerce',
      description: 'Full e-commerce store with product catalog, shopping cart, Stripe payment processing, order management, and inventory tracking. Built for a local retail business looking to sell online alongside their physical location.',
      image: 'images/retail-hero.jpg',
      alt: 'E-commerce store showing product catalog and checkout',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'Responsive CSS'],
      results: 'Online sales live, Stripe payments working',
      highlights: [
        'Full product catalog with search and filters',
        'Stripe payment processing — secure checkout',
        'Order management and email confirmations',
        'Mobile-optimized for on-the-go shoppers',
        'Inventory management built in'
      ]
    }
  ];

  const stats = [
    { icon: <Award />, value: '16+', label: 'Years Experience' },
    { icon: <CheckCircle />, value: '100%', label: 'Client Satisfaction' },
    { icon: <Clock />, value: '2 Wks', label: 'Average Launch Time' },
    { icon: <Shield />, value: '$1,299', label: 'Starting Price' }
  ];

  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'shadcn/ui']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Express', 'TypeScript', 'Socket.IO', 'REST APIs']
    },
    {
      category: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Row-Level Security']
    },
    {
      category: 'DevOps & Cloud',
      techs: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      category: 'Payments & E-Commerce',
      techs: ['Stripe', 'Webhooks', 'Order Management', 'Inventory']
    },
    {
      category: 'SEO & Marketing',
      techs: ['Google Analytics 4', 'Search Console', 'Local SEO', 'Schema Markup']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getFilterCount = (categoryId) => {
    if (categoryId === 'all') return projects.length;
    return projects.filter(p => p.category === categoryId).length;
  };

  return (
    <div className="our-work-page">

      {/* Hero Section */}
      <section className="our-work-hero">
        <div className="work-hero-content">
          <h1 className="work-hero-title">
            Real Work. <span className="highlight-yellow">Real Results.</span>
          </h1>
          <p className="work-hero-subtitle">
            From local restaurant websites to enterprise SaaS platforms —
            we build software that works for your business, not just looks good.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link
              to="/contact"
              state={{ scrollToTop: true }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #ef5a16, #f97316)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(239, 90, 22, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              <Rocket size={20} />
              Start Your Project
            </Link>
            <a
              href="https://github.com/GoddeyUwamari"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-github-badge"
            >
              <Github size={24} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="work-filters">
        <div className="work-container">
          <div className="work-filters-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`work-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
                <span className="filter-count">({getFilterCount(category.id)})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-projects">
        <div className="work-container">
          <div className="filter-results-header">
            <h3>
              {activeFilter === 'all'
                ? `All Projects (${filteredProjects.length})`
                : `${categories.find(c => c.id === activeFilter)?.label} (${filteredProjects.length})`
              }
            </h3>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <Filter size={48} />
              </div>
              <h3>No projects found</h3>
              <p>Try selecting a different category or view all projects.</p>
              <button
                className="empty-state-btn"
                onClick={() => setActiveFilter('all')}
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="work-projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="work-project-card">
                  <div className="work-project-image-container">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="work-project-image"
                    />
                    <div className="work-project-image-overlay"></div>
                    <div className="work-project-overlay">
                      <div className="work-project-overlay-content">
                        <h3>{project.title}</h3>
                        <p>{project.description.substring(0, 150)}...</p>
                        <div className="work-project-result">
                          <CheckCircle size={18} />
                          <span>{project.results}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="work-project-content">
                    <div className="work-project-header">
                      <div className="work-project-industry">{project.industry}</div>
                      <h3>{project.title}</h3>
                      <p className="work-project-client">Client: {project.client}</p>
                    </div>

                    <p className="work-project-desc">{project.description}</p>

                    {project.highlights && (
                      <div className="work-project-highlights">
                        <h4>Key Features:</h4>
                        <ul>
                          {project.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index}>
                              <Zap size={14} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="work-project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="work-tech-badge">{tech}</span>
                      ))}
                    </div>

                    <div className="work-project-actions">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-github-btn"
                        >
                          <Github size={16} />
                          <span>View on GitHub</span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          state={{ scrollToTop: true }}
                          className="work-github-btn"
                        >
                          <Rocket size={16} />
                          <span>Build Something Similar</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="work-stats">
        <div className="work-container">
          <div className="work-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="work-stat-card">
                <div className="work-stat-icon">{stat.icon}</div>
                <div className="work-stat-value">{stat.value}</div>
                <div className="work-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="work-technologies">
        <div className="work-container">
          <div className="work-section-header">
            <span className="work-label">Our Tech Stack</span>
            <h2 className="work-section-title">Technologies We Use</h2>
            <p className="work-section-subtitle">
              Modern, reliable tools chosen for performance, security, and long-term maintainability
            </p>
          </div>

          <div className="work-tech-categories">
            {technologies.map((techGroup, index) => (
              <div key={index} className="work-tech-category">
                <h3 className="work-tech-category-title">{techGroup.category}</h3>
                <div className="work-tech-category-items">
                  {techGroup.techs.map((tech, tIndex) => (
                    <span key={tIndex} className="work-tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WayUP */}
      <section className="work-open-source">
        <div className="work-container">
          <div className="open-source-content">
            <h2>Why Businesses Choose WayUP</h2>
            <div className="open-source-grid">
              <div className="open-source-card">
                <div className="open-source-icon">
                  <Clock size={32} />
                </div>
                <h3>Fast Turnaround</h3>
                <p>Most websites launched in 2 weeks or less. No drawn-out timelines or endless revisions.</p>
              </div>
              <div className="open-source-card">
                <div className="open-source-icon">
                  <Shield size={32} />
                </div>
                <h3>Honest Pricing</h3>
                <p>Clear, upfront pricing starting at $1,299. No hidden fees, no surprise invoices.</p>
              </div>
              <div className="open-source-card">
                <div className="open-source-icon">
                  <TrendingUp size={32} />
                </div>
                <h3>Built to Convert</h3>
                <p>Every site is built to attract customers and generate leads — not just look good.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta">
        <div className="work-cta-container">
          <div className="work-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Tell us what you need. We'll review your project and get back to you
              within 24 hours with a clear plan and honest price.
            </p>
            <div className="work-cta-actions">
              <Link
                to="/contact"
                state={{ scrollToTop: true }}
                className="work-cta-btn-primary"
              >
                <span>Get a Free Consultation</span>
                <Rocket size={20} />
              </Link>
              <Link
                to="/portfolio/clients"
                state={{ scrollToTop: true }}
                className="work-cta-btn-secondary"
              >
                <Users size={20} />
                <span>View Client Results</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurWork;
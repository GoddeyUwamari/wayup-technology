import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  Brain,
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
  Filter
} from 'lucide-react';
import './OurWork.css';

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers /> },
    { id: 'saas', label: 'SaaS Platforms', icon: <Cloud /> },
    { id: 'enterprise', label: 'Enterprise Software', icon: <Building2 /> },
    { id: 'devops', label: 'DevOps & Cloud', icon: <Server /> },
    { id: 'web', label: 'Web Development', icon: <Code /> },
    { id: 'api', label: 'API & Backend', icon: <Database /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'CloudBill - Multi-Tenant SaaS Billing Platform',
      client: 'Enterprise SaaS Clients',
      industry: 'FinTech / SaaS',
      category: 'saas',
      description: 'Production-ready multi-tenant SaaS billing platform featuring 5 microservices architecture, 213+ comprehensive automated tests, Stripe payment integration, PostgreSQL with Row-Level Security, Redis session management, Docker containerization, and complete AWS infrastructure deployment with Terraform.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      alt: 'CloudBill SaaS billing platform with microservices architecture and payment processing',
      tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Stripe', 'AWS', 'Terraform'],
      results: '5 microservices, 213 tests, 99.9% uptime',
      github: 'https://github.com/GoddeyUwamari/cloudbill',
      highlights: [
        'Multi-tenant architecture with complete data isolation',
        'Comprehensive test coverage (213+ automated tests)',
        'Production-ready CI/CD pipeline with GitHub Actions',
        'Enterprise security with Row-Level Security (RLS)',
        'Real-time billing analytics and reporting'
      ]
    },
    {
      id: 2,
      title: 'CloudBill Dashboard - Next.js 14 SaaS Frontend',
      client: 'Enterprise SaaS Platform',
      industry: 'SaaS / Enterprise',
      category: 'saas',
      description: 'Modern multi-tenant SaaS billing platform frontend built with Next.js 14, TypeScript, and shadcn/ui component library. Features beautiful UI/UX, type-safe development, server-side rendering for optimal performance, and seamless integration with CloudBill backend microservices.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      alt: 'CloudBill dashboard showing modern SaaS billing interface with analytics',
      tech: ['Next.js 14', 'TypeScript', 'React', 'shadcn/ui', 'TailwindCSS', 'Zustand'],
      results: 'Type-safe, SSR optimized, Modern UI',
      github: 'https://github.com/GoddeyUwamari/cloudbill-dashboard',
      highlights: [
        'Built with latest Next.js 14 App Router',
        'Fully type-safe with TypeScript',
        'Beautiful UI with shadcn/ui components',
        'Optimized for performance and SEO',
        'Responsive design for all devices'
      ]
    },
    {
      id: 3,
      title: 'Production API Framework - Enterprise Backend',
      client: 'Enterprise Development Teams',
      industry: 'DevOps / Platform Engineering',
      category: 'api',
      description: 'Production-grade Node.js/TypeScript API framework designed for enterprise applications. Includes Docker and Kubernetes deployment configurations, complete CI/CD pipeline with GitHub Actions, comprehensive monitoring with CloudWatch, infrastructure as code with Terraform, and security best practices for production environments.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      alt: 'Enterprise API framework showing microservices architecture and deployment pipeline',
      tech: ['Node.js', 'TypeScript', 'Express', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'CloudWatch'],
      results: 'Enterprise-ready, Auto-scaling, 24/7 monitoring',
      github: 'https://github.com/GoddeyUwamari/production-api-framework',
      highlights: [
        'Complete Docker and Kubernetes setup',
        'Automated CI/CD pipeline',
        'Infrastructure as Code with Terraform',
        'Production monitoring and logging',
        'Security best practices implemented'
      ]
    },
    {
      id: 4,
      title: 'DevControl - AWS Internal Developer Portal',
      client: 'Platform Engineering Teams',
      industry: 'DevOps / Cloud Infrastructure',
      category: 'devops',
      description: 'AWS-native internal developer portal positioned as a Backstage alternative. Features comprehensive AWS service integrations, developer self-service capabilities, service catalog, infrastructure provisioning, cost management, Stripe billing integration, and multi-tenant architecture. Currently at 99% completion with 37 production routes.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      alt: 'DevControl AWS developer portal showing service catalog and infrastructure management',
      tech: ['React', 'TypeScript', 'Node.js', 'AWS SDK', 'Stripe', 'PostgreSQL', 'Docker'],
      results: '99% complete, 37 routes, Multi-tenant',
      github: 'https://github.com/GoddeyUwamari/devcontrol',
      highlights: [
        'Backstage alternative for AWS environments',
        'Comprehensive AWS service integrations',
        'Developer self-service portal',
        'Integrated billing with Stripe',
        'Multi-tenant architecture'
      ]
    },
    {
      id: 5,
      title: 'Platform Engineering Toolkit',
      client: 'Development & DevOps Teams',
      industry: 'Platform Engineering',
      category: 'devops',
      description: 'Self-service platform engineering toolkit for creating production-ready services from templates. Includes CLI tool for rapid scaffolding, Node.js API with microservices templates, standardized project structures, best practices built-in, and automated setup for Docker, testing, and CI/CD configurations.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
      alt: 'Platform engineering toolkit showing CLI interface and service templates',
      tech: ['Node.js', 'TypeScript', 'CLI', 'Yeoman', 'Docker', 'Microservices'],
      results: 'Production templates, Self-service',
      github: 'https://github.com/GoddeyUwamari/platform-engineering-toolkit',
      highlights: [
        'CLI tool for rapid service creation',
        'Production-ready microservices templates',
        'Standardized best practices',
        'Automated Docker and CI/CD setup',
        'Developer productivity accelerator'
      ]
    },
    {
      id: 6,
      title: 'WayUP Technology Corporate Website',
      client: 'WayUP Technology LLC',
      industry: 'Web Development',
      category: 'web',
      description: 'Full-stack professional enterprise website for technology consulting company. Features real-time chat widget with Socket.IO, contact form management, MongoDB integration, responsive design across all devices, modern UI/UX with glass morphism, and comprehensive backend API with Express and Node.js.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      alt: 'WayUP Technology website showing modern design and chat functionality',
      tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'CSS3', 'Responsive Design'],
      results: 'Full-stack, Real-time features, Production',
      github: 'https://github.com/GoddeyUwamari/Empire',
      highlights: [
        'Real-time chat with Socket.IO',
        'Full backend API with Express',
        'MongoDB database integration',
        'Modern responsive design',
        'Contact form with session management'
      ]
    }
  ];

  const stats = [
    { icon: <CheckCircle />, value: '6+', label: 'Production Projects' },
    { icon: <Code />, value: '234', label: 'Contributions This Year' },
    { icon: <Users />, value: '5', label: 'Microservices Built' },
    { icon: <Globe />, value: '100%', label: 'Open Source' }
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
      category: 'Testing & Quality',
      techs: ['Jest', 'Supertest', '213+ Automated Tests', 'CI/CD']
    },
    {
      category: 'Payment & Billing',
      techs: ['Stripe', 'SaaS Billing', 'Multi-tenant', 'Webhooks']
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
      {/* Hero Section - Clean Animated Gradient */}
      <section className="our-work-hero">
        <div className="work-hero-content">
          <h1 className="work-hero-title">
            Our <span className="highlight-yellow">Portfolio</span>
          </h1>
          <p className="work-hero-subtitle">
            Explore our production-ready projects and enterprise solutions - all open source on GitHub
          </p>
          <div className="hero-github-badge">
            <Github size={24} />
            <span>100% Transparent Development</span>
          </div>
        </div>
      </section>

      {/* GitHub Stats Banner */}
      <section className="github-stats-banner">
        <div className="work-container">
          <div className="stats-banner-content">
            <div className="stats-banner-text">
              <h3>Our Work is Open Source</h3>
              <p>We believe in transparency. View our production-ready code, comprehensive tests, and enterprise architecture on GitHub.</p>
            </div>
            <a 
              href="https://github.com/GoddeyUwamari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
              <ExternalLink size={16} />
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
          {/* Filter Results Header */}
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
                  <img src={project.image} alt={project.alt} className="work-project-image" />
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
                  
                  {/* Project Highlights */}
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

                  {/* Action Buttons */}
                  <div className="work-project-actions">
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
              Building with cutting-edge technologies for maximum performance
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

      {/* Why Open Source Section */}
      <section className="work-open-source">
        <div className="work-container">
          <div className="open-source-content">
            <h2>Why We Share Our Code</h2>
            <div className="open-source-grid">
              <div className="open-source-card">
                <div className="open-source-icon">
                  <CheckCircle size={32} />
                </div>
                <h3>Transparency</h3>
                <p>We believe in showing, not just telling. Our code speaks for itself.</p>
              </div>
              <div className="open-source-card">
                <div className="open-source-icon">
                  <Code size={32} />
                </div>
                <h3>Quality Assurance</h3>
                <p>Public code means we maintain the highest standards in every line.</p>
              </div>
              <div className="open-source-card">
                <div className="open-source-icon">
                  <TrendingUp size={32} />
                </div>
                <h3>Proven Expertise</h3>
                <p>See our enterprise-grade architecture and production-ready solutions.</p>
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
              Let's transform your vision into reality. Get a free consultation
              and project assessment from our expert team.
            </p>
            <div className="work-cta-actions">
              <Link to="/contact" state={{ scrollToTop: true }} className="work-cta-btn-primary">
                <span>Get a Free Consultation</span>
                <Rocket size={20} />
              </Link>
              <a 
                href="https://github.com/GoddeyUwamari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="work-cta-btn-secondary"
              >
                <Github size={20} />
                <span>Explore Our GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
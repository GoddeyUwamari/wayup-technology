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
  Filter,
  CheckCircle
} from 'lucide-react';
import './OurWork.css';

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers /> },
    { id: 'web', label: 'Web Development', icon: <Code /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone /> },
    { id: 'ai', label: 'AI Solutions', icon: <Brain /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart /> },
    { id: 'enterprise', label: 'Enterprise Software', icon: <Building2 /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      client: 'RetailHub',
      industry: 'E-Commerce',
      category: 'ecommerce',
      description: 'Built a scalable e-commerce platform handling 100K+ daily transactions',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80',
      alt: 'Modern e-commerce platform dashboard with analytics and product management',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: '200% increase in sales'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      category: 'enterprise',
      description: 'HIPAA-compliant patient management system for 50+ hospitals',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      alt: 'Healthcare management system showing patient records and hospital workflow',
      tech: ['Angular', 'Python', 'PostgreSQL', 'Azure'],
      results: '60% efficiency improvement'
    },
    {
      id: 3,
      title: 'AI Predictive Maintenance',
      client: 'AutoManufacture Co',
      industry: 'Manufacturing',
      category: 'ai',
      description: 'ML-powered predictive maintenance reducing downtime by 85%',
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f6e3ef?w=600&q=80',
      alt: 'Industrial machinery with AI-powered monitoring and predictive analytics',
      tech: ['Python', 'TensorFlow', 'IoT', 'AWS'],
      results: '$6M annual savings'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      client: 'FinanceFirst Bank',
      industry: 'FinTech',
      category: 'mobile',
      description: 'Secure mobile banking app with biometric authentication',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
      alt: 'Mobile banking application interface with secure transaction features',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      results: '2M+ downloads'
    },
    {
      id: 5,
      title: 'Supply Chain Dashboard',
      client: 'LogisticsHub',
      industry: 'Logistics',
      category: 'web',
      description: 'Real-time supply chain tracking and optimization platform',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      alt: 'Supply chain dashboard displaying real-time logistics and delivery tracking',
      tech: ['React', 'Python', 'PostgreSQL', 'Redis'],
      results: '40% cost reduction'
    },
    {
      id: 6,
      title: 'Learning Management System',
      client: 'EduTech Academy',
      industry: 'Education',
      category: 'web',
      description: 'Interactive LMS with video streaming and assessment tools',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      alt: 'Online learning platform with video courses and interactive assessments',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      results: '50K+ active students'
    },
    {
      id: 7,
      title: 'Restaurant Ordering System',
      client: 'FoodChain Restaurant',
      industry: 'Hospitality',
      category: 'mobile',
      description: 'Multi-location ordering and delivery management system',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
      alt: 'Restaurant ordering system with menu display and delivery tracking',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: '3x order volume'
    },
    {
      id: 8,
      title: 'CRM Platform',
      client: 'SalesPro Inc',
      industry: 'Sales',
      category: 'enterprise',
      description: 'Custom CRM with AI-powered lead scoring and automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      alt: 'CRM platform dashboard showing sales pipeline and customer analytics',
      tech: ['React', 'Python', 'MongoDB', 'AWS'],
      results: '150% sales increase'
    },
    {
      id: 9,
      title: 'IoT Smart Factory',
      client: 'SmartManufacturing',
      industry: 'Manufacturing',
      category: 'ai',
      description: 'Connected factory floor with real-time monitoring and analytics',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
      alt: 'Smart factory with IoT sensors and real-time production monitoring',
      tech: ['React', 'Python', 'InfluxDB', 'Azure IoT'],
      results: '75% efficiency gain'
    }
  ];

  const stats = [
    { icon: <CheckCircle />, value: '500+', label: 'Projects Completed' },
    { icon: <TrendingUp />, value: '98%', label: 'On-Time Delivery' },
    { icon: <Users />, value: '150+', label: 'Happy Clients' },
    { icon: <Globe />, value: '25+', label: 'Countries Served' }
  ];

  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Vue', 'Angular', 'Next.js']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'Java', '.NET']
    },
    {
      category: 'Mobile',
      techs: ['React Native', 'Flutter', 'Swift']
    },
    {
      category: 'Cloud',
      techs: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      category: 'Database',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      category: 'AI/ML',
      techs: ['TensorFlow', 'PyTorch', 'scikit-learn']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="work-page">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-bg-grid"></div>
        <div className="work-hero-container">
          <h1 className="work-hero-title">
            Our <span className="work-gradient-text">Portfolio</span>
          </h1>
          <p className="work-hero-desc">
            Delivering excellence across industries with cutting-edge solutions
            that transform businesses and drive measurable results.
          </p>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-projects">
        <div className="work-container">
          <div className="work-projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="work-project-card">
                <div className="work-project-image">
                  <img src={project.image} alt={project.alt} />
                  <div className="work-project-overlay">
                    <div className="work-project-overlay-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
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
                  <div className="work-project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="work-tech-badge">{tech}</span>
                    ))}
                  </div>
                  <button className="work-project-btn">
                    <span>View Case Study</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
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
              <Link to="/contact" state={{ scrollToTop: true }} className="work-cta-btn-secondary">
                <Users size={20} />
                <span>Schedule a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

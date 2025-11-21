import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database as DatabaseIcon, Server, HardDrive, Shield, Zap, CheckCircle, Cloud, Lock, TrendingUp, Users, Layers, GitBranch, Activity, BarChart3, ArrowRight, Award, RefreshCw } from 'lucide-react';
import './Database.css';

const Database = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const databaseServices = [
    {
      icon: <DatabaseIcon className="db-service-icon" />,
      title: 'Database Design & Architecture',
      description: 'Custom database schema design optimized for performance, scalability, and data integrity with industry best practices.',
      features: ['Schema Design', 'Data Modeling', 'Optimization'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <Cloud className="db-service-icon" />,
      title: 'Cloud Database Solutions',
      description: 'Fully managed cloud databases on AWS RDS, Azure SQL, Google Cloud SQL with auto-scaling and high availability.',
      features: ['AWS RDS', 'Azure SQL', 'Cloud Migration'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <Server className="db-service-icon" />,
      title: 'Database Administration',
      description: '24/7 monitoring, maintenance, backup management, and performance tuning for mission-critical databases.',
      features: ['24/7 Monitoring', 'Backups', 'Performance Tuning'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: <RefreshCw className="db-service-icon" />,
      title: 'Database Migration',
      description: 'Seamless migration from legacy systems to modern databases with zero downtime and complete data integrity.',
      features: ['Zero Downtime', 'Data Validation', 'Rollback Plan'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: <Shield className="db-service-icon" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, access control, audit logging, and compliance with GDPR, HIPAA, SOC2.',
      features: ['Encryption', 'Access Control', 'Compliance'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: <TrendingUp className="db-service-icon" />,
      title: 'Performance Optimization',
      description: 'Query optimization, indexing strategies, caching implementation, and database tuning for maximum performance.',
      features: ['Query Optimization', 'Indexing', 'Caching'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const databaseTypes = [
    {
      icon: <DatabaseIcon className="db-type-icon" />,
      name: 'Relational (SQL)',
      databases: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Oracle'],
      useCase: 'Structured data with complex relationships'
    },
    {
      icon: <Layers className="db-type-icon" />,
      name: 'NoSQL',
      databases: ['MongoDB', 'Cassandra', 'DynamoDB', 'Couchbase'],
      useCase: 'Flexible schemas and horizontal scaling'
    },
    {
      icon: <Activity className="db-type-icon" />,
      name: 'In-Memory',
      databases: ['Redis', 'Memcached', 'Apache Ignite'],
      useCase: 'Ultra-fast caching and real-time analytics'
    },
    {
      icon: <BarChart3 className="db-type-icon" />,
      name: 'Time-Series',
      databases: ['InfluxDB', 'TimescaleDB', 'Prometheus'],
      useCase: 'IoT, monitoring, and time-stamped data'
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="db-feat-icon" />,
      title: 'High Performance',
      description: 'Optimized queries and indexing deliver sub-second response times even with billions of records.',
      metric: '<100ms',
      label: 'Query Time'
    },
    {
      icon: <Shield className="db-feat-icon" />,
      title: 'Enterprise Security',
      description: 'AES-256 encryption, role-based access control, and comprehensive audit trails.',
      metric: '99.99%',
      label: 'Uptime SLA'
    },
    {
      icon: <GitBranch className="db-feat-icon" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale compute and storage resources based on demand without downtime.',
      metric: '10x',
      label: 'Scalability'
    },
    {
      icon: <RefreshCw className="db-feat-icon" />,
      title: 'Automated Backups',
      description: 'Point-in-time recovery with automated backups every 15 minutes and 35-day retention.',
      metric: '15min',
      label: 'RPO'
    }
  ];

  const stats = [
    { value: '500TB+', label: 'Data Managed', description: 'Across all platforms' },
    { value: '99.99%', label: 'Uptime', description: 'Guaranteed SLA' },
    { value: '<50ms', label: 'Response Time', description: 'Average query latency' },
    { value: '24/7', label: 'Support', description: 'Expert DBA team' }
  ];

  const industries = [
    {
      name: 'Financial Services',
      applications: ['Transaction processing', 'Fraud detection', 'Risk analytics', 'Compliance reporting']
    },
    {
      name: 'Healthcare',
      applications: ['Patient records (EHR)', 'HIPAA compliance', 'Medical imaging storage', 'Clinical analytics']
    },
    {
      name: 'E-Commerce',
      applications: ['Product catalogs', 'Inventory management', 'Order processing', 'Customer data']
    },
    {
      name: 'Technology & SaaS',
      applications: ['Multi-tenant databases', 'User management', 'Application data', 'Analytics pipelines']
    }
  ];

  const caseStudy = {
    company: 'Global E-Commerce Platform',
    industry: 'Retail & Technology',
    challenge: 'Handling 50 million daily transactions across multiple regions with a monolithic Oracle database struggling under peak loads. Database costs exceeded $2M annually with frequent outages during flash sales causing revenue loss and customer dissatisfaction.',
    solution: 'Migrated to distributed PostgreSQL cluster with read replicas across 5 regions, implemented Redis caching layer, optimized queries, and deployed automated scaling. Achieved zero-downtime migration over 8-week period with complete data validation.',
    results: [
      { metric: '10x', label: 'Performance Gain', description: 'Average query speed' },
      { metric: '75%', label: 'Cost Reduction', description: '$500K annual savings' },
      { metric: '0', label: 'Downtime', description: 'During migration' },
      { metric: '99.99%', label: 'Uptime', description: 'Since launch' }
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  };

  return (
    <div className="db">
      {/* Hero Section */}
      <section className="db-hero">
        <div className="db-hero-grid"></div>
        <div className="db-container">
          <div className="db-hero-layout">
            <div className="db-hero-content">
              <div className="db-hero-badge">
                <DatabaseIcon size={16} />
                <span>Enterprise Database Solutions</span>
              </div>
              <h1 className="db-hero-title">
                Powerful Database<br />
                <span className="db-hero-gradient">Management & Solutions</span>
              </h1>
              <p className="db-hero-subtitle">
                Design, deploy, and manage high-performance databases that power your applications.
                From SQL to NoSQL, on-premise to cloud, we deliver scalable, secure, and reliable
                database solutions optimized for your business needs.
              </p>
              <div className="db-hero-buttons">
                <Link to="/contact" state={{ scrollToTop: true }} className="db-btn db-btn-primary">
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio/work" state={{ scrollToTop: true }} className="db-btn db-btn-outline">
                  <span>View Solutions</span>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="db-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="db-stat-card">
                    <div className="db-stat-value">{stat.value}</div>
                    <div className="db-stat-label">{stat.label}</div>
                    <div className="db-stat-desc">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="db-hero-visual">
              <div className="db-database-stack">
                <div className="db-stack-layer" style={{ '--index': 0 }}></div>
                <div className="db-stack-layer" style={{ '--index': 1 }}></div>
                <div className="db-stack-layer" style={{ '--index': 2 }}></div>
                <div className="db-stack-layer" style={{ '--index': 3 }}></div>
                <div className="db-stack-layer" style={{ '--index': 4 }}></div>
              </div>
              <div className="db-floating-nodes">
                <div className="db-node" style={{ '--x': '20%', '--y': '10%', '--delay': '0s' }}></div>
                <div className="db-node" style={{ '--x': '80%', '--y': '20%', '--delay': '0.5s' }}></div>
                <div className="db-node" style={{ '--x': '50%', '--y': '80%', '--delay': '1s' }}></div>
                <div className="db-node" style={{ '--x': '15%', '--y': '60%', '--delay': '1.5s' }}></div>
                <div className="db-node" style={{ '--x': '85%', '--y': '70%', '--delay': '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="db-services">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Our Services</span>
            <h2 className="db-section-title">Comprehensive Database Solutions</h2>
            <p className="db-section-subtitle">
              End-to-end database services from design and deployment to optimization and management
            </p>
          </div>

          <div className="db-services-grid">
            {databaseServices.map((service, index) => (
              <div key={index} className="db-service-card">
                <div className="db-service-icon-wrapper" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <h3 className="db-service-title">{service.title}</h3>
                <p className="db-service-description">{service.description}</p>
                <div className="db-service-features">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="db-feature-badge">
                      <CheckCircle size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Types Section */}
      <section className="db-types">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Database Technologies</span>
            <h2 className="db-section-title">Multi-Platform Expertise</h2>
            <p className="db-section-subtitle">
              Expert implementation across all major database platforms and paradigms
            </p>
          </div>

          <div className="db-types-grid">
            {databaseTypes.map((type, index) => (
              <div key={index} className="db-type-card">
                <div className="db-type-icon-bg">
                  {type.icon}
                </div>
                <h3 className="db-type-name">{type.name}</h3>
                <p className="db-type-usecase">{type.useCase}</p>
                <div className="db-type-databases">
                  {type.databases.map((db, dbIndex) => (
                    <div key={dbIndex} className="db-database-tag">
                      {db}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="db-features">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label db-label-light">Key Features</span>
            <h2 className="db-section-title db-title-light">Enterprise-Grade Capabilities</h2>
          </div>

          <div className="db-features-grid">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="db-feature-card">
                <div className="db-feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="db-feature-content">
                  <h3 className="db-feature-title">{feature.title}</h3>
                  <p className="db-feature-description">{feature.description}</p>
                  <div className="db-feature-metric">
                    <div className="db-metric-value">{feature.metric}</div>
                    <div className="db-metric-label">{feature.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="db-industries">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Industry Solutions</span>
            <h2 className="db-section-title">Databases Across Industries</h2>
          </div>

          <div className="db-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="db-industry-card">
                <div className="db-industry-header">
                  <HardDrive size={28} />
                  <h3 className="db-industry-name">{industry.name}</h3>
                </div>
                <div className="db-industry-apps">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="db-industry-app">
                      <CheckCircle size={16} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="db-case-study">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Success Story</span>
            <h2 className="db-section-title">Database Transformation Success</h2>
          </div>

          <div className="db-case-layout">
            <div className="db-case-image-section">
              <img
                src={caseStudy.image}
                alt="Database infrastructure and server management visualization"
                className="db-case-image"
              />
              <div className="db-case-overlay">
                <Award size={32} />
                <div className="db-case-company-info">
                  <div className="db-case-company">{caseStudy.company}</div>
                  <div className="db-case-industry">{caseStudy.industry}</div>
                </div>
              </div>
            </div>

            <div className="db-case-content">
              <div className="db-case-details">
                <div className="db-case-block">
                  <h4 className="db-case-label">Challenge</h4>
                  <p className="db-case-text">{caseStudy.challenge}</p>
                </div>

                <div className="db-case-block">
                  <h4 className="db-case-label">Solution</h4>
                  <p className="db-case-text">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="db-case-results">
                <h4 className="db-case-results-title">Results & Impact</h4>
                <div className="db-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="db-case-result">
                      <div className="db-result-metric">{result.metric}</div>
                      <div className="db-result-label">{result.label}</div>
                      <div className="db-result-desc">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="db-cta">
        <div className="db-container">
          <div className="db-cta-content">
            <div className="db-cta-icon-wrapper">
              <DatabaseIcon size={56} />
              <div className="db-cta-rings">
                <div className="db-cta-ring"></div>
                <div className="db-cta-ring"></div>
                <div className="db-cta-ring"></div>
              </div>
            </div>
            <h2 className="db-cta-title">Ready to Optimize Your Database?</h2>
            <p className="db-cta-text">
              Partner with WayUP Technology to build high-performance, scalable database solutions
              that power your applications and drive business growth.
            </p>
            <Link to="/contact" state={{ scrollToTop: true }} className="db-btn db-btn-cta">
              <span>Schedule Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <div className="db-cta-features">
              <div className="db-cta-feature">
                <CheckCircle size={18} />
                <span>Free Database Audit</span>
              </div>
              <div className="db-cta-feature">
                <CheckCircle size={18} />
                <span>Migration Planning</span>
              </div>
              <div className="db-cta-feature">
                <CheckCircle size={18} />
                <span>Performance Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Database;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, LineChart, TrendingUp, Database, PieChart, Activity, Zap, CheckCircle, Target, Users, Brain, Globe, Layers, ArrowRight, Award } from 'lucide-react';
import './BIAnalytics.css';

const BIAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const analyticsServices = [
    {
      icon: <BarChart3 className="bia-service-icon" />,
      title: 'Data Visualization',
      description: 'Transform complex data into interactive dashboards and visual reports that drive actionable insights and informed decision-making.',
      features: ['Interactive Dashboards', 'Custom Reports', 'Real-time Updates']
    },
    {
      icon: <Database className="bia-service-icon" />,
      title: 'Data Warehousing',
      description: 'Centralize enterprise data from multiple sources into unified, scalable data warehouses for comprehensive analysis.',
      features: ['ETL Pipelines', 'Data Integration', 'Cloud/On-Premise']
    },
    {
      icon: <Brain className="bia-service-icon" />,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning and AI to forecast trends, predict outcomes, and optimize business strategies proactively.',
      features: ['ML Models', 'Forecasting', 'Pattern Recognition']
    },
    {
      icon: <TrendingUp className="bia-service-icon" />,
      title: 'Performance Analytics',
      description: 'Monitor KPIs, track business metrics, and measure performance across all departments with real-time analytics.',
      features: ['KPI Tracking', 'Benchmarking', 'Goal Monitoring']
    },
    {
      icon: <Users className="bia-service-icon" />,
      title: 'Customer Analytics',
      description: 'Understand customer behavior, preferences, and lifetime value to enhance engagement and retention strategies.',
      features: ['Segmentation', 'Churn Prediction', '360° View']
    },
    {
      icon: <Activity className="bia-service-icon" />,
      title: 'Operational Analytics',
      description: 'Optimize operations with real-time monitoring, process analytics, and automated alerts for critical business events.',
      features: ['Process Mining', 'Anomaly Detection', 'Automation']
    }
  ];

  const capabilities = [
    {
      icon: <Zap className="bia-cap-icon" />,
      title: 'Real-Time Insights',
      description: 'Access live data and analytics updated in real-time for immediate decision-making.',
      color: '#10B981'
    },
    {
      icon: <Globe className="bia-cap-icon" />,
      title: 'Scalable Architecture',
      description: 'Handle data from gigabytes to petabytes with cloud-native, infinitely scalable solutions.',
      color: '#3B82F6'
    },
    {
      icon: <Target className="bia-cap-icon" />,
      title: 'AI-Powered Insights',
      description: 'Automated insights powered by machine learning algorithms that learn from your data.',
      color: '#8B5CF6'
    },
    {
      icon: <Layers className="bia-cap-icon" />,
      title: 'Multi-Source Integration',
      description: 'Seamlessly integrate data from CRM, ERP, databases, APIs, and third-party platforms.',
      color: '#F59E0B'
    }
  ];

  const techStack = [
    { category: 'Visualization', tools: ['Tableau', 'Power BI', 'Looker', 'Grafana'] },
    { category: 'Data Platforms', tools: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks'] },
    { category: 'Analytics', tools: ['Python', 'R', 'Apache Spark', 'TensorFlow'] },
    { category: 'Databases', tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle'] }
  ];

  const industries = [
    {
      name: 'Retail & E-Commerce',
      applications: ['Sales forecasting', 'Inventory optimization', 'Customer segmentation', 'Price optimization']
    },
    {
      name: 'Finance & Banking',
      applications: ['Risk analytics', 'Fraud detection', 'Portfolio analysis', 'Regulatory reporting']
    },
    {
      name: 'Healthcare',
      applications: ['Patient analytics', 'Operational efficiency', 'Clinical outcomes', 'Resource planning']
    },
    {
      name: 'Manufacturing',
      applications: ['Production analytics', 'Quality control', 'Supply chain', 'Predictive maintenance']
    }
  ];

  const stats = [
    { value: '10x', label: 'Faster Decisions', description: 'With real-time analytics' },
    { value: '95%', label: 'Data Accuracy', description: 'Automated validation' },
    { value: '40%', label: 'Cost Reduction', description: 'Through optimization' },
    { value: '24/7', label: 'Monitoring', description: 'Always-on insights' }
  ];

  const caseStudy = {
    company: 'Fortune 500 Retail Chain',
    industry: 'Retail & Consumer Goods',
    challenge: 'Managing 2,000+ stores with fragmented data across POS systems, inventory management, e-commerce platforms, and customer databases. Lack of unified insights led to stockouts, overstocking, and missed revenue opportunities totaling $50M annually.',
    solution: 'Implemented comprehensive BI platform integrating all data sources into centralized data warehouse with real-time dashboards for inventory, sales, and customer analytics. Deployed predictive models for demand forecasting and automated reporting system.',
    results: [
      { metric: '35%', label: 'Inventory Reduction', description: 'Optimized stock levels' },
      { metric: '28%', label: 'Sales Increase', description: 'Better product placement' },
      { metric: '$45M', label: 'Annual Savings', description: 'Reduced waste & stockouts' },
      { metric: '90%', label: 'Report Automation', description: 'Freed analyst time' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  };

  return (
    <div className="bia">
      {/* Hero Section */}
      <section className="bia-hero">
        <div className="bia-hero-pattern"></div>
        <div className="bia-container">
          <div className="bia-hero-layout">
            <div className="bia-hero-content">
              <div className="bia-hero-badge">
                <BarChart3 size={16} />
                <span>Data-Driven Decision Making</span>
              </div>
              <h1 className="bia-hero-title">
                Business Intelligence<br />
                <span className="bia-hero-gradient">& Advanced Analytics</span>
              </h1>
              <p className="bia-hero-subtitle">
                Transform raw data into strategic insights with powerful BI solutions that deliver
                real-time analytics, predictive intelligence, and actionable visualizations to drive
                business growth and competitive advantage.
              </p>
              <div className="bia-hero-buttons">
                <Link to="/contact" state={{ scrollToTop: true }} className="bia-btn bia-btn-primary">
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio/work" state={{ scrollToTop: true }} className="bia-btn bia-btn-outline">
                  <span>View Demo</span>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="bia-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="bia-stat-card">
                    <div className="bia-stat-value">{stat.value}</div>
                    <div className="bia-stat-label">{stat.label}</div>
                    <div className="bia-stat-desc">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bia-hero-visual">
              <div className="bia-chart-container">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
                  alt="Business analytics dashboard showing interactive data visualizations and charts"
                  className="bia-hero-image"
                />
                <div className="bia-floating-chart">
                  <BarChart3 size={32} />
                  <div className="bia-chart-bars">
                    <div className="bia-bar" style={{ '--height': '60%', '--delay': '0s' }}></div>
                    <div className="bia-bar" style={{ '--height': '85%', '--delay': '0.1s' }}></div>
                    <div className="bia-bar" style={{ '--height': '45%', '--delay': '0.2s' }}></div>
                    <div className="bia-bar" style={{ '--height': '95%', '--delay': '0.3s' }}></div>
                    <div className="bia-bar" style={{ '--height': '70%', '--delay': '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="bia-services">
        <div className="bia-container">
          <div className="bia-section-header">
            <span className="bia-section-label">Our Solutions</span>
            <h2 className="bia-section-title">Comprehensive Analytics Services</h2>
            <p className="bia-section-subtitle">
              End-to-end business intelligence solutions from data integration to advanced analytics
            </p>
          </div>

          <div className="bia-services-grid">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bia-service-card">
                <div className="bia-service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="bia-service-title">{service.title}</h3>
                <p className="bia-service-description">{service.description}</p>
                <div className="bia-service-features">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="bia-feature-tag">
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

      {/* Capabilities Section */}
      <section className="bia-capabilities">
        <div className="bia-container">
          <div className="bia-capabilities-layout">
            <div className="bia-capabilities-visual">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80"
                alt="Data analytics and business intelligence visual representation with charts and graphs"
                className="bia-capabilities-image"
              />
              <div className="bia-visual-overlay">
                <div className="bia-overlay-stat">
                  <TrendingUp size={24} />
                  <div className="bia-overlay-value">98%</div>
                  <div className="bia-overlay-label">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="bia-capabilities-content">
              <span className="bia-section-label">Key Capabilities</span>
              <h2 className="bia-section-title">
                Enterprise-Grade<br />
                Analytics Platform
              </h2>
              <p className="bia-capabilities-text">
                Our business intelligence solutions combine cutting-edge technology with industry
                best practices to deliver powerful analytics capabilities that scale with your business.
                From real-time dashboards to predictive modeling, we provide the tools you need to
                turn data into competitive advantage.
              </p>

              <div className="bia-capabilities-grid">
                {capabilities.map((capability, index) => (
                  <div key={index} className="bia-capability-card">
                    <div className="bia-capability-icon" style={{ '--cap-color': capability.color }}>
                      {capability.icon}
                    </div>
                    <div className="bia-capability-content">
                      <h4 className="bia-capability-title">{capability.title}</h4>
                      <p className="bia-capability-desc">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bia-techstack">
        <div className="bia-container">
          <div className="bia-section-header">
            <span className="bia-section-label">Technology Stack</span>
            <h2 className="bia-section-title">Leading BI & Analytics Tools</h2>
            <p className="bia-section-subtitle">
              Expert implementation across industry-leading platforms and technologies
            </p>
          </div>

          <div className="bia-techstack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="bia-tech-category">
                <h3 className="bia-tech-category-title">{tech.category}</h3>
                <div className="bia-tech-tools">
                  {tech.tools.map((tool, tIndex) => (
                    <div key={tIndex} className="bia-tech-tool">
                      <CheckCircle size={16} />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bia-industries">
        <div className="bia-container">
          <div className="bia-section-header">
            <span className="bia-section-label bia-label-light">Industry Solutions</span>
            <h2 className="bia-section-title bia-title-light">Analytics Across Industries</h2>
          </div>

          <div className="bia-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="bia-industry-card">
                <h3 className="bia-industry-name">{industry.name}</h3>
                <div className="bia-industry-apps">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="bia-industry-app">
                      <div className="bia-app-bullet"></div>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bia-case-study">
        <div className="bia-container">
          <div className="bia-section-header">
            <span className="bia-section-label">Success Story</span>
            <h2 className="bia-section-title">Transforming Data into Revenue</h2>
          </div>

          <div className="bia-case-layout">
            <div className="bia-case-image-wrapper">
              <img
                src={caseStudy.image}
                alt="Business intelligence dashboard implementation case study results"
                className="bia-case-image"
              />
              <div className="bia-case-badge">
                <Award size={32} />
                <div className="bia-badge-text">
                  <div className="bia-badge-company">{caseStudy.company}</div>
                  <div className="bia-badge-industry">{caseStudy.industry}</div>
                </div>
              </div>
            </div>

            <div className="bia-case-content">
              <div className="bia-case-details">
                <div className="bia-case-block">
                  <h4 className="bia-case-label">Challenge</h4>
                  <p className="bia-case-text">{caseStudy.challenge}</p>
                </div>

                <div className="bia-case-block">
                  <h4 className="bia-case-label">Solution</h4>
                  <p className="bia-case-text">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="bia-case-results">
                <h4 className="bia-case-results-title">Results & Impact</h4>
                <div className="bia-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bia-case-result">
                      <div className="bia-result-metric">{result.metric}</div>
                      <div className="bia-result-label">{result.label}</div>
                      <div className="bia-result-desc">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bia-cta">
        <div className="bia-container">
          <div className="bia-cta-content">
            <div className="bia-cta-icon-wrapper">
              <BarChart3 size={48} />
              <div className="bia-cta-icon-glow"></div>
            </div>
            <h2 className="bia-cta-title">Ready to Unlock Your Data's Potential?</h2>
            <p className="bia-cta-text">
              Partner with WayUP Technology to build a comprehensive business intelligence solution
              that transforms your data into actionable insights and drives measurable business outcomes.
            </p>
            <Link to="/contact" state={{ scrollToTop: true }} className="bia-btn bia-btn-cta">
              <span>Schedule Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <div className="bia-cta-features">
              <div className="bia-cta-feature">
                <CheckCircle size={18} />
                <span>Free Data Assessment</span>
              </div>
              <div className="bia-cta-feature">
                <CheckCircle size={18} />
                <span>Custom Dashboard Demo</span>
              </div>
              <div className="bia-cta-feature">
                <CheckCircle size={18} />
                <span>ROI Projection Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BIAnalytics;

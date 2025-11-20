import { useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  Database,
  FileText,
  CheckCircle,
  ArrowRight,
  Activity,
  PieChart,
  LineChart,
  Award,
  Briefcase,
  Search
} from 'lucide-react';
import './BusinessAnalysis.css';
import Checkout from '../components/Checkout';

const BusinessAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { value: '$2.5B+', label: 'Value Delivered', icon: <TrendingUp /> },
    { value: '300+', label: 'Projects Completed', icon: <Award /> },
    { value: '95%', label: 'Client Satisfaction', icon: <Target /> },
    { value: '15+', label: 'Years Experience', icon: <Briefcase /> }
  ];

  const solutions = [
    {
      icon: <BarChart3 />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into strategic insights with advanced analytics, real-time dashboards, and predictive modeling that drive informed decision-making.',
      features: ['Power BI & Tableau', 'Predictive Analytics', 'Custom Dashboards']
    },
    {
      icon: <TrendingUp />,
      title: 'Market Intelligence',
      description: 'Gain competitive advantage through comprehensive market research, competitor analysis, and industry trend identification.',
      features: ['Competitive Analysis', 'Market Segmentation', 'Trend Forecasting']
    },
    {
      icon: <Target />,
      title: 'KPI & Performance Management',
      description: 'Design and implement strategic KPI frameworks that align with business objectives and track organizational performance.',
      features: ['KPI Development', 'Balanced Scorecard', 'Performance Tracking']
    },
    {
      icon: <Activity />,
      title: 'Process Optimization',
      description: 'Streamline operations and eliminate inefficiencies through process mapping, bottleneck analysis, and continuous improvement.',
      features: ['Process Mapping', 'Six Sigma', 'Lean Methodology']
    },
    {
      icon: <Lightbulb />,
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategic roadmaps that align technology initiatives with business goals and drive growth.',
      features: ['Digital Roadmaps', 'Change Management', 'ROI Analysis']
    },
    {
      icon: <Database />,
      title: 'Requirements Engineering',
      description: 'Expert requirements gathering, documentation, and stakeholder management ensuring project success from conception.',
      features: ['Stakeholder Analysis', 'User Stories', 'Agile/Waterfall']
    }
  ];

  const industries = [
    { name: 'Financial Services', icon: '💰', projects: '85+' },
    { name: 'Healthcare', icon: '🏥', projects: '65+' },
    { name: 'Retail & E-commerce', icon: '🛒', projects: '95+' },
    { name: 'Manufacturing', icon: '🏭', projects: '70+' },
    { name: 'Technology', icon: '💻', projects: '110+' },
    { name: 'Government', icon: '🏛️', projects: '45+' }
  ];

  const methodologies = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Analysis',
      duration: '1-2 weeks',
      activities: ['Stakeholder interviews', 'Current state analysis', 'Pain point identification', 'Opportunity assessment']
    },
    {
      phase: 'Phase 2',
      title: 'Strategy Development',
      duration: '2-3 weeks',
      activities: ['Framework design', 'Solution architecture', 'Roadmap planning', 'Risk assessment']
    },
    {
      phase: 'Phase 3',
      title: 'Implementation',
      duration: '4-8 weeks',
      activities: ['Process redesign', 'System configuration', 'User training', 'Quality assurance']
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Support',
      duration: 'Ongoing',
      activities: ['Performance monitoring', 'Continuous improvement', 'Monthly reviews', 'Strategic adjustments']
    }
  ];

  const technologies = [
    'Power BI', 'Tableau', 'SAP Analytics', 'Google Analytics',
    'Salesforce', 'Microsoft Dynamics', 'Jira', 'Confluence',
    'Lucidchart', 'Miro', 'SQL Server', 'Python/R'
  ];

  return (
    <div className="business-analysis-page">
      {/* Hero Section - Split Grid Layout */}
      <section className="business-analysis-hero">
        <div className="business-analysis-hero-grid">
          <div className="business-analysis-hero-content">
            <div className="ba-hero-badge">
              <Briefcase size={18} />
              <span>Strategic Business Intelligence & Analysis</span>
            </div>
            <h1 className="business-analysis-hero-title">
              Transform Data Into
              <span className="business-analysis-gradient-text"> Strategic Action</span>
            </h1>
            <p className="business-analysis-hero-desc">
              Data-driven business analysis solutions that transform complex information into actionable insights.
              We help organizations optimize operations, drive growth, and make informed strategic decisions.
            </p>
            <div className="ba-hero-actions">
              <button className="business-analysis-btn-primary">
                <span>Get Free Consultation</span>
                <ArrowRight className="btn-arrow" />
              </button>
              <button className="business-analysis-btn-secondary">
                <LineChart className="btn-icon-left" />
                <span>View Case Studies</span>
              </button>
            </div>

            {/* Hero Stats Grid */}
            <div className="ba-hero-stats-grid">
              {heroStats.map((stat, index) => (
                <div key={index} className="ba-hero-stat-card">
                  <div className="ba-stat-icon">{stat.icon}</div>
                  <div className="ba-stat-value">{stat.value}</div>
                  <div className="ba-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="business-analysis-hero-visual">
            <div className="ba-hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Business analytics dashboard with data visualization"
                className="business-analysis-hero-img"
              />
              <div className="ba-hero-image-gradient"></div>
            </div>
            {/* Floating Metric Cards */}
            <div className="ba-hero-floating-metrics">
              <div className="ba-floating-metric ba-floating-metric-1">
                <PieChart size={20} />
                <div>
                  <div className="ba-metric-value">40%</div>
                  <div className="ba-metric-label">Efficiency Gain</div>
                </div>
              </div>
              <div className="ba-floating-metric ba-floating-metric-2">
                <TrendingUp size={20} />
                <div>
                  <div className="ba-metric-value">ROI</div>
                  <div className="ba-metric-label">3.5x Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="business-analysis-industries">
        <div className="business-analysis-container">
          <div className="ba-industries-header">
            <span className="ba-section-label">Industries We Serve</span>
            <h3 className="ba-industries-title">Trusted Across Multiple Sectors</h3>
          </div>
          <div className="ba-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="ba-industry-card">
                <div className="ba-industry-icon">{industry.icon}</div>
                <div className="ba-industry-name">{industry.name}</div>
                <div className="ba-industry-projects">{industry.projects} Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="business-analysis-solutions">
        <div className="business-analysis-container">
          <div className="ba-solutions-header">
            <span className="ba-section-label">Our Services</span>
            <h2 className="business-analysis-section-title">
              Comprehensive Business Analysis Solutions
            </h2>
            <p className="business-analysis-section-subtitle">
              End-to-end services from strategic planning to operational excellence
            </p>
          </div>
          <div className="ba-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="ba-solution-card">
                <div className="ba-solution-card-header">
                  <div className="ba-solution-icon-wrapper">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p className="ba-solution-description">{solution.description}</p>
                <ul className="ba-solution-features">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle className="ba-feature-check" />
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
      <section className="business-analysis-case-study">
        <div className="ba-case-study-container">
          <div className="ba-case-study-content">
            <div className="ba-case-study-badge">SUCCESS STORY</div>
            <h2 className="ba-case-study-title">
              Fortune 500 Retail Chain: $150M Cost Reduction Through Data Analytics
            </h2>
            <div className="ba-case-study-body">
              <div className="ba-case-study-challenge">
                <h4>
                  <Search className="ba-section-icon" />
                  The Challenge
                </h4>
                <p>
                  A major retail chain with 1,200+ stores was losing $450M annually due to inefficient inventory management,
                  lack of demand forecasting, and disconnected regional operations with no unified business intelligence.
                </p>
              </div>
              <div className="ba-case-study-solution">
                <h4>
                  <Lightbulb className="ba-section-icon" />
                  Our Solution
                </h4>
                <p>
                  Deployed an enterprise-wide BI platform integrating Power BI dashboards, predictive analytics for demand
                  forecasting, automated inventory optimization, and real-time performance tracking across all locations.
                </p>
              </div>
            </div>
            <div className="ba-case-study-results">
              <div className="ba-result-card">
                <div className="ba-result-value">$150M</div>
                <div className="ba-result-label">Annual Savings</div>
              </div>
              <div className="ba-result-card">
                <div className="ba-result-value">35%</div>
                <div className="ba-result-label">Inventory Reduction</div>
              </div>
              <div className="ba-result-card">
                <div className="ba-result-value">92%</div>
                <div className="ba-result-label">Forecast Accuracy</div>
              </div>
              <div className="ba-result-card">
                <div className="ba-result-value">6 mo</div>
                <div className="ba-result-label">Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="business-analysis-methodology">
        <div className="business-analysis-container">
          <div className="ba-methodology-header">
            <span className="ba-section-label">Our Process</span>
            <h2 className="business-analysis-section-title">Proven Implementation Methodology</h2>
            <p className="business-analysis-section-subtitle">
              Structured approach delivering measurable results at every stage
            </p>
          </div>
          <div className="ba-methodology-timeline">
            {methodologies.map((method, index) => (
              <div key={index} className="ba-methodology-step">
                <div className="ba-step-number">{method.phase}</div>
                <div className="ba-step-content">
                  <h3>{method.title}</h3>
                  <div className="ba-step-duration">{method.duration}</div>
                  <ul className="ba-step-activities">
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
      <section className="business-analysis-technologies">
        <div className="business-analysis-container">
          <h3 className="ba-tech-title">Tools & Technologies We Master</h3>
          <div className="ba-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="ba-tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-analysis-cta">
        <div className="business-analysis-container">
          <div className="ba-cta-content">
            <h2>Ready to Transform Your Business with Data-Driven Insights?</h2>
            <p>
              Schedule a free consultation with our business analysis experts and discover how we can
              optimize your operations and drive measurable growth.
            </p>
            <button className="business-analysis-btn-cta">
              <span>Schedule Free Consultation</span>
              <ArrowRight size={20} />
            </button>
            <div className="ba-cta-features">
              <div className="ba-cta-feature">
                <CheckCircle size={18} />
                <span>Free Initial Assessment</span>
              </div>
              <div className="ba-cta-feature">
                <CheckCircle size={18} />
                <span>No Commitment Required</span>
              </div>
              <div className="ba-cta-feature">
                <CheckCircle size={18} />
                <span>Custom Solutions</span>
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

export default BusinessAnalysis;

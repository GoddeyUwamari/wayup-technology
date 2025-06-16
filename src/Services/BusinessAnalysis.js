import React from 'react';
import { 
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Search,
  Database,
  FileText,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  PieChart,
  Activity
} from 'lucide-react';
import './BusinessAnalysis.css';
import Checkout from '../components/Checkout';

const BusinessAnalysis = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="business-analysis-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="business-analysis-container">
          <h1 className="business-analysis-hero-title">Business Analysis Services</h1>
          <p className="business-analysis-hero-description">
            Transform your business with data-driven insights and strategic analysis. 
            We help organizations make informed decisions through comprehensive business intelligence and process optimization.
          </p>
        </div>
      </section>

      {/* Strategic Business Intelligence Section */}
      <section className="business-analysis-development-section">
        <div className="business-analysis-container">
          <div className="business-analysis-section-header">
            <h2>Strategic Business Intelligence</h2>
            <p>Unlock the power of your data with comprehensive business intelligence solutions that provide actionable insights for strategic decision-making.</p>
          </div>

          <div className="business-analysis-content-row">
            <div className="business-analysis-image-column">
              <img 
                src="/images/top.png" 
                alt="Strategic Business Intelligence" 
                className="business-analysis-section-image" 
              />
            </div>

            <div className="business-analysis-text-column">
              {/* Data Analytics & Visualization */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <BarChart3 />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Data Analytics & Visualization</h3>
                  <p>Transform complex data into clear, actionable insights through advanced analytics, interactive dashboards, and compelling visualizations.</p>
                </div>
              </div>

              {/* Market Research & Analysis */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <TrendingUp />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Market Research & Analysis</h3>
                  <p>Comprehensive market analysis, competitor research, and industry trend identification to inform strategic business decisions.</p>
                </div>
              </div>

              {/* Performance Metrics & KPIs */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Target />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Performance Metrics & KPIs</h3>
                  <p>Establish meaningful performance indicators and measurement frameworks to track progress and optimize business outcomes.</p>
                </div>
              </div>

              {/* Financial Analysis & Forecasting */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <PieChart />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Financial Analysis & Forecasting</h3>
                  <p>In-depth financial modeling, budget analysis, and predictive forecasting to support investment and growth strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Optimization & Requirements Section */}
      <section className="business-analysis-development-section business-analysis-alternate">
        <div className="business-analysis-container">
          <div className="business-analysis-section-header">
            <h2>Process Optimization & Requirements</h2>
            <p>Streamline your operations and define clear requirements through systematic process analysis and optimization strategies.</p>
          </div>

          <div className="business-analysis-content-row">
            <div className="business-analysis-image-column">
              <img 
                src="/images/hero.png" 
                alt="Process Optimization & Requirements" 
                className="business-analysis-section-image" 
              />
            </div>

            <div className="business-analysis-text-column">
              {/* Requirements Gathering */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Search />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Requirements Gathering</h3>
                  <p>Systematic collection and documentation of business requirements, stakeholder needs, and functional specifications for project success.</p>
                </div>
              </div>

              {/* Process Mapping & Analysis */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Activity />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Process Mapping & Analysis</h3>
                  <p>Visual mapping of business processes, identification of bottlenecks, and optimization recommendations for improved efficiency.</p>
                </div>
              </div>

              {/* Stakeholder Analysis */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Users />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Stakeholder Analysis</h3>
                  <p>Comprehensive stakeholder identification, influence mapping, and engagement strategies to ensure project alignment and success.</p>
                </div>
              </div>

              {/* Quality Assurance & Testing */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <CheckCircle />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Quality Assurance & Testing</h3>
                  <p>Business process testing, validation of requirements, and quality assurance frameworks to ensure deliverable excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation & Strategy Section */}
      <section className="business-analysis-development-section">
        <div className="business-analysis-container">
          <div className="business-analysis-section-header">
            <h2>Digital Transformation & Strategy</h2>
            <p>Guide your organization through digital transformation with strategic planning, technology assessment, and change management expertise.</p>
          </div>

          <div className="business-analysis-content-row">
            <div className="business-analysis-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Digital Transformation & Strategy" 
                className="business-analysis-section-image" 
              />
            </div>

            <div className="business-analysis-text-column">
              {/* Strategic Planning & Roadmaps */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Lightbulb />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Strategic Planning & Roadmaps</h3>
                  <p>Development of comprehensive strategic plans, digital transformation roadmaps, and implementation timelines for organizational growth.</p>
                </div>
              </div>

              {/* Technology Assessment */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <Database />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Technology Assessment</h3>
                  <p>Evaluation of current technology stack, identification of gaps, and recommendations for technology upgrades and integrations.</p>
                </div>
              </div>

              {/* Documentation & Training */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <FileText />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Documentation & Training</h3>
                  <p>Comprehensive documentation of processes, procedures, and systems, along with training programs for successful adoption.</p>
                </div>
              </div>

              {/* Change Management */}
              <div className="business-analysis-feature-item">
                <div className="business-analysis-feature-icon">
                  <ArrowRight />
                </div>
                <div className="business-analysis-feature-content">
                  <h3>Change Management</h3>
                  <p>Structured change management approaches to ensure smooth transitions, user adoption, and minimal disruption to operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <Checkout />
    </>
  );
};

export default BusinessAnalysis;
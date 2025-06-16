import React from 'react';
import { 
  Lightbulb,
  Zap,
  Cog,
  Rocket,
  Users,
  Target,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Layers,
  Settings
} from 'lucide-react';
import './CustomProductDevelopment.css';
import Checkout from '../components/Checkout';

const CustomProductDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="custom-product-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="custom-product-container">
          <h1 className="custom-product-hero-title">Custom Product Development</h1>
          <p className="custom-product-hero-description">
            From concept to market launch, we build innovative custom products that solve real-world problems. 
            Our end-to-end development process ensures your vision becomes a successful, scalable product.
          </p>
        </div>
      </section>

      {/* Product Strategy & Innovation Section */}
      <section className="custom-product-development-section">
        <div className="custom-product-container">
          <div className="custom-product-section-header">
            <h2>Product Strategy & Innovation</h2>
            <p>Transform your ideas into market-ready products through strategic planning, market validation, and innovative design thinking methodologies.</p>
          </div>

          <div className="custom-product-content-row">
            <div className="custom-product-image-column">
              <img 
                src="/images/top.png" 
                alt="Product Strategy & Innovation" 
                className="custom-product-section-image" 
              />
            </div>

            <div className="custom-product-text-column">
              {/* Ideation & Concept Development */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Lightbulb />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Ideation & Concept Development</h3>
                  <p>Systematic approach to idea generation, concept validation, and feasibility analysis to ensure your product meets market demands and user needs.</p>
                </div>
              </div>

              {/* Market Research & Validation */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Target />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Market Research & Validation</h3>
                  <p>Comprehensive market analysis, competitor research, and user validation to minimize risks and maximize product-market fit potential.</p>
                </div>
              </div>

              {/* User Experience Design */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Users />
                </div>
                <div className="custom-product-feature-content">
                  <h3>User Experience Design</h3>
                  <p>User-centered design approach with prototyping, usability testing, and iterative design to create intuitive and engaging product experiences.</p>
                </div>
              </div>

              {/* Product Roadmap Planning */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <TrendingUp />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Product Roadmap Planning</h3>
                  <p>Strategic roadmap development with clear milestones, feature prioritization, and timeline planning for successful product evolution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Stack Development & Engineering Section */}
      <section className="custom-product-development-section custom-product-alternate">
        <div className="custom-product-container">
          <div className="custom-product-section-header">
            <h2>Full-Stack Development & Engineering</h2>
            <p>Build robust, scalable products with cutting-edge technologies and engineering best practices that ensure performance, security, and maintainability.</p>
          </div>

          <div className="custom-product-content-row">
            <div className="custom-product-image-column">
              <img 
                src="/images/hero.png" 
                alt="Full-Stack Development & Engineering" 
                className="custom-product-section-image" 
              />
            </div>

            <div className="custom-product-text-column">
              {/* Frontend Development */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Cog />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Frontend Development</h3>
                  <p>Modern, responsive user interfaces using React, Vue.js, or Angular with optimized performance and cross-platform compatibility.</p>
                </div>
              </div>

              {/* Backend Architecture */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Settings />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Backend Architecture</h3>
                  <p>Scalable server-side solutions with microservices architecture, API development, and database design for enterprise-grade performance.</p>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Shield />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Security & Compliance</h3>
                  <p>Enterprise-level security implementation with data encryption, secure authentication, and compliance with industry standards and regulations.</p>
                </div>
              </div>

              {/* Cloud Integration */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Layers />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Cloud Integration</h3>
                  <p>Cloud-native development with AWS, Azure, or Google Cloud integration for scalability, reliability, and cost-effective operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch & Growth Optimization Section */}
      <section className="custom-product-development-section">
        <div className="custom-product-container">
          <div className="custom-product-section-header">
            <h2>Launch & Growth Optimization</h2>
            <p>Successfully bring your product to market with comprehensive launch strategies, performance monitoring, and continuous optimization for sustained growth.</p>
          </div>

          <div className="custom-product-content-row">
            <div className="custom-product-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Launch & Growth Optimization" 
                className="custom-product-section-image" 
              />
            </div>

            <div className="custom-product-text-column">
              {/* Go-to-Market Strategy */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Rocket />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Go-to-Market Strategy</h3>
                  <p>Comprehensive launch planning including market positioning, pricing strategy, distribution channels, and marketing campaign development.</p>
                </div>
              </div>

              {/* Performance Monitoring */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <Zap />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Performance Monitoring</h3>
                  <p>Real-time analytics, user behavior tracking, and performance metrics to optimize product functionality and user engagement.</p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <CheckCircle />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Quality Assurance</h3>
                  <p>Comprehensive testing strategies including automated testing, load testing, and user acceptance testing to ensure product reliability.</p>
                </div>
              </div>

              {/* Continuous Improvement */}
              <div className="custom-product-feature-item">
                <div className="custom-product-feature-icon">
                  <ArrowRight />
                </div>
                <div className="custom-product-feature-content">
                  <h3>Continuous Improvement</h3>
                  <p>Ongoing optimization based on user feedback, market trends, and performance data to ensure long-term product success and growth.</p>
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

export default CustomProductDevelopment;
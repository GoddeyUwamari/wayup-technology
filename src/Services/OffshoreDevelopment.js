import React from 'react';
import { 
  Globe,
  Users,
  DollarSign,
  Clock,
  Shield,
  Zap,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Settings,
  Target
} from 'lucide-react';
import './OffshoreDevelopment.css';
import Checkout from '../components/Checkout';

const OffshoreDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="offshore-development-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="offshore-development-container">
          <h1 className="offshore-development-hero-title">Offshore Development Services</h1>
          <p className="offshore-development-hero-description">
            Scale your development capabilities with our world-class offshore team. Access top talent, 
            reduce costs, and accelerate project delivery while maintaining the highest quality standards.
          </p>
        </div>
      </section>

      {/* Global Talent & Expertise Section */}
      <section className="offshore-development-development-section">
        <div className="offshore-development-container">
          <div className="offshore-development-section-header">
            <h2>Global Talent & Expertise</h2>
            <p>Access a diverse pool of skilled developers and technical experts from around the world, bringing specialized knowledge and innovative solutions to your projects.</p>
          </div>

          <div className="offshore-development-content-row">
            <div className="offshore-development-image-column">
              <img 
                src="/images/top.png" 
                alt="Global Talent & Expertise" 
                className="offshore-development-section-image" 
              />
            </div>

            <div className="offshore-development-text-column">
              {/* Expert Development Teams */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Users />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Expert Development Teams</h3>
                  <p>Handpicked senior developers, architects, and specialists with proven track records in cutting-edge technologies and industry best practices.</p>
                </div>
              </div>

              {/* Multi-Technology Stack */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Settings />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Multi-Technology Stack</h3>
                  <p>Comprehensive expertise across frontend, backend, mobile, cloud, AI/ML, blockchain, and emerging technologies to meet any project requirement.</p>
                </div>
              </div>

              {/* Scalable Team Structure */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <TrendingUp />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Scalable Team Structure</h3>
                  <p>Flexible team scaling from individual specialists to full development teams, adapting quickly to project demands and timeline requirements.</p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Shield />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Quality Assurance</h3>
                  <p>Rigorous quality standards with comprehensive testing, code reviews, and continuous integration to ensure exceptional deliverable quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Effective Solutions Section */}
      <section className="offshore-development-development-section offshore-development-alternate">
        <div className="offshore-development-container">
          <div className="offshore-development-section-header">
            <h2>Cost-Effective Solutions</h2>
            <p>Optimize your development budget without compromising quality. Our offshore model provides significant cost savings while delivering premium results.</p>
          </div>

          <div className="offshore-development-content-row">
            <div className="offshore-development-image-column">
              <img 
                src="/images/hero.png" 
                alt="Cost-Effective Solutions" 
                className="offshore-development-section-image" 
              />
            </div>

            <div className="offshore-development-text-column">
              {/* Competitive Pricing */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <DollarSign />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Competitive Pricing</h3>
                  <p>Achieve 40-60% cost savings compared to local development while maintaining premium quality standards and professional service delivery.</p>
                </div>
              </div>

              {/* Flexible Engagement Models */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Target />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Flexible Engagement Models</h3>
                  <p>Choose from dedicated teams, project-based, or time & material models that align with your budget, timeline, and project requirements.</p>
                </div>
              </div>

              {/* Transparent Billing */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <CheckCircle />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Transparent Billing</h3>
                  <p>Clear, detailed invoicing with no hidden costs, regular progress reports, and milestone-based payments for complete budget transparency.</p>
                </div>
              </div>

              {/* ROI Optimization */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Zap />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>ROI Optimization</h3>
                  <p>Maximize return on investment through efficient resource allocation, optimized workflows, and accelerated time-to-market delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Project Management Section */}
      <section className="offshore-development-development-section">
        <div className="offshore-development-container">
          <div className="offshore-development-section-header">
            <h2>Communication & Project Management</h2>
            <p>Seamless collaboration across time zones with robust communication protocols and agile project management for successful offshore partnerships.</p>
          </div>

          <div className="offshore-development-content-row">
            <div className="offshore-development-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Communication & Project Management" 
                className="offshore-development-section-image" 
              />
            </div>

            <div className="offshore-development-text-column">
              {/* 24/7 Communication */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <MessageCircle />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>24/7 Communication</h3>
                  <p>Round-the-clock availability with overlapping working hours, instant messaging, video conferencing, and regular status updates for continuous collaboration.</p>
                </div>
              </div>

              {/* Agile Methodologies */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Clock />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Agile Methodologies</h3>
                  <p>Proven agile and scrum practices with daily standups, sprint planning, regular demos, and iterative development for maximum efficiency.</p>
                </div>
              </div>

              {/* Project Transparency */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <Globe />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Project Transparency</h3>
                  <p>Real-time project tracking with dedicated project managers, detailed reporting, milestone tracking, and collaborative development tools.</p>
                </div>
              </div>

              {/* Cultural Alignment */}
              <div className="offshore-development-feature-item">
                <div className="offshore-development-feature-icon">
                  <ArrowRight />
                </div>
                <div className="offshore-development-feature-content">
                  <h3>Cultural Alignment</h3>
                  <p>Strong English communication skills, cultural understanding, and business process alignment for smooth integration with your existing teams.</p>
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

export default OffshoreDevelopment;
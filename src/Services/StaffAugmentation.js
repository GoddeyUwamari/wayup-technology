import React from 'react';
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
  Globe
} from 'lucide-react';
import './StaffAugmentation.css';
import Checkout from '../components/Checkout';

const StaffAugmentation = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="staff-augmentation-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="staff-augmentation-container">
          <h1 className="staff-augmentation-hero-title">Staff Augmentation Services</h1>
          <p className="staff-augmentation-hero-description">
            Scale your team instantly with top-tier talent. Our staff augmentation services provide skilled professionals 
            who integrate seamlessly with your existing team to accelerate project delivery and drive business success.
          </p>
        </div>
      </section>

      {/* Talent Acquisition & Matching Section */}
      <section className="staff-augmentation-development-section">
        <div className="staff-augmentation-container">
          <div className="staff-augmentation-section-header">
            <h2>Talent Acquisition & Matching</h2>
            <p>Access pre-vetted, highly skilled professionals who match your specific requirements, technical expertise, and company culture for seamless team integration.</p>
          </div>

          <div className="staff-augmentation-content-row">
            <div className="staff-augmentation-image-column">
              <img 
                src="/images/top.png" 
                alt="Talent Acquisition & Matching" 
                className="staff-augmentation-section-image" 
              />
            </div>

            <div className="staff-augmentation-text-column">
              {/* Expert Talent Pool */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Users />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Expert Talent Pool</h3>
                  <p>Access our extensive network of pre-screened developers, designers, analysts, and specialists with proven expertise across all major technologies and frameworks.</p>
                </div>
              </div>

              {/* Precise Skill Matching */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Search />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Precise Skill Matching</h3>
                  <p>Our advanced matching algorithm considers technical skills, experience level, industry background, and cultural fit to find the perfect candidates for your team.</p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Star />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Quality Assurance</h3>
                  <p>Rigorous vetting process including technical assessments, portfolio reviews, reference checks, and soft skills evaluation to ensure top-tier talent quality.</p>
                </div>
              </div>

              {/* Cultural Integration */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Globe />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Cultural Integration</h3>
                  <p>Focus on cultural compatibility and communication skills to ensure augmented staff integrate smoothly with your existing team and work environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Scaling Solutions Section */}
      <section className="staff-augmentation-development-section staff-augmentation-alternate">
        <div className="staff-augmentation-container">
          <div className="staff-augmentation-section-header">
            <h2>Flexible Scaling Solutions</h2>
            <p>Scale your workforce up or down based on project demands with flexible engagement models that adapt to your changing business needs and timelines.</p>
          </div>

          <div className="staff-augmentation-content-row">
            <div className="staff-augmentation-image-column">
              <img 
                src="/images/hero.png" 
                alt="Flexible Scaling Solutions" 
                className="staff-augmentation-section-image" 
              />
            </div>

            <div className="staff-augmentation-text-column">
              {/* Rapid Deployment */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Clock />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Rapid Deployment</h3>
                  <p>Get qualified professionals onboarded within 1-2 weeks, enabling quick project kickoffs and meeting tight deadlines without compromising quality.</p>
                </div>
              </div>

              {/* Scalable Teams */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <TrendingUp />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Scalable Teams</h3>
                  <p>Easily scale from individual specialists to full development teams, adjusting team size based on project phases, budget, and delivery requirements.</p>
                </div>
              </div>

              {/* Flexible Contracts */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Settings />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Flexible Contracts</h3>
                  <p>Choose from short-term, long-term, or project-based engagements with flexible contract terms that align with your project timeline and budget constraints.</p>
                </div>
              </div>

              {/* Risk Mitigation */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Shield />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Risk Mitigation</h3>
                  <p>Reduce hiring risks with trial periods, performance guarantees, and replacement options to ensure you get the right talent for your specific needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration & Support Section */}
      <section className="staff-augmentation-development-section">
        <div className="staff-augmentation-container">
          <div className="staff-augmentation-section-header">
            <h2>Seamless Integration & Support</h2>
            <p>Comprehensive onboarding and ongoing support ensure augmented staff become productive team members quickly while maintaining high performance standards.</p>
          </div>

          <div className="staff-augmentation-content-row">
            <div className="staff-augmentation-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Seamless Integration & Support" 
                className="staff-augmentation-section-image" 
              />
            </div>

            <div className="staff-augmentation-text-column">
              {/* Smooth Onboarding */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Target />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Smooth Onboarding</h3>
                  <p>Comprehensive onboarding process including project briefings, tool access, team introductions, and process training for immediate productivity.</p>
                </div>
              </div>

              {/* Performance Management */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <Zap />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Performance Management</h3>
                  <p>Regular performance reviews, feedback sessions, and skill development support to ensure augmented staff meet your quality and productivity expectations.</p>
                </div>
              </div>

              {/* Dedicated Support */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <CheckCircle />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Dedicated Support</h3>
                  <p>Dedicated account managers provide ongoing support, address concerns, facilitate communication, and ensure smooth collaboration throughout the engagement.</p>
                </div>
              </div>

              {/* Knowledge Transfer */}
              <div className="staff-augmentation-feature-item">
                <div className="staff-augmentation-feature-icon">
                  <ArrowRight />
                </div>
                <div className="staff-augmentation-feature-content">
                  <h3>Knowledge Transfer</h3>
                  <p>Structured knowledge transfer processes ensure business continuity, documentation handover, and smooth transitions when engagements conclude.</p>
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

export default StaffAugmentation;
import React from 'react';
import { 
  Palette, 
  Users, 
  Smartphone, 
  Monitor,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Eye,
  Layers,
  Search,
  BarChart3
} from 'lucide-react';
import './UIUXDesign.css';
import Checkout from '../components/Checkout';

const UIUXDesign = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="uiux-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="uiux-container">
          <h1 className="uiux-hero-title">UI/UX Design Services</h1>
          <p className="uiux-hero-description">
            Crafting exceptional digital experiences that captivate users and drive business growth 
            through innovative design solutions and user-centered approaches.
          </p>
        </div>
      </section>

      {/* User Experience Strategy Section */}
      <section className="uiux-development-section">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <h2>User Experience Strategy</h2>
            <p>We develop comprehensive UX strategies that align with your business goals and create meaningful connections with your users through research-driven design decisions.</p>
          </div>

          <div className="uiux-content-row">
            <div className="uiux-image-column">
              <img 
                src="/images/ui4.png" 
                alt="User Experience Strategy" 
                className="uiux-section-image" 
              />
            </div>

            <div className="uiux-text-column">
              {/* User Research & Analysis */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Users />
                </div>
                <div className="uiux-feature-content">
                  <h3>User Research & Analysis</h3>
                  <p>Deep dive into user behavior, needs, and pain points through comprehensive research methodologies and data-driven insights.</p>
                </div>
              </div>

              {/* Strategic Planning */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Target />
                </div>
                <div className="uiux-feature-content">
                  <h3>Strategic Planning</h3>
                  <p>Develop comprehensive UX roadmaps that align design decisions with business objectives and user expectations.</p>
                </div>
              </div>

              {/* Information Architecture */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Eye />
                </div>
                <div className="uiux-feature-content">
                  <h3>Information Architecture</h3>
                  <p>Structure and organize content in intuitive ways that guide users naturally through your digital experience.</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <BarChart3 />
                </div>
                <div className="uiux-feature-content">
                  <h3>Performance Metrics</h3>
                  <p>Establish KPIs and measurement frameworks to track success and continuously optimize user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Design Excellence Section */}
      <section className="uiux-development-section uiux-alternate">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <h2>Interface Design Excellence</h2>
            <p>Creating visually stunning and functionally superior interfaces that deliver seamless interactions across all devices and platforms.</p>
          </div>

          <div className="uiux-content-row">
            <div className="uiux-image-column">
              <img 
                src="/images/ui3.png" 
                alt="Interface Design Excellence" 
                className="uiux-section-image" 
              />
            </div>

            <div className="uiux-text-column">
              {/* Visual Design Systems */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Palette />
                </div>
                <div className="uiux-feature-content">
                  <h3>Visual Design Systems</h3>
                  <p>Comprehensive design systems with consistent colors, typography, and components that scale across your entire product ecosystem.</p>
                </div>
              </div>

              {/* Responsive Design */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Smartphone />
                </div>
                <div className="uiux-feature-content">
                  <h3>Responsive Design</h3>
                  <p>Pixel-perfect designs that adapt beautifully to any screen size, ensuring optimal user experience across all devices.</p>
                </div>
              </div>

              {/* Interactive Prototypes */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Layers />
                </div>
                <div className="uiux-feature-content">
                  <h3>Interactive Prototypes</h3>
                  <p>High-fidelity prototypes that bring designs to life, allowing stakeholders to experience the final product before development.</p>
                </div>
              </div>

              {/* Accessibility Focus */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Heart />
                </div>
                <div className="uiux-feature-content">
                  <h3>Accessibility Focus</h3>
                  <p>Inclusive design principles ensuring your product is accessible to users of all abilities and meets WCAG standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Product Optimization Section */}
      <section className="uiux-development-section">
        <div className="uiux-container">
          <div className="uiux-section-header">
            <h2>Digital Product Optimization</h2>
            <p>Continuous improvement through data-driven optimization, ensuring your digital products evolve with user needs and market demands.</p>
          </div>

          <div className="uiux-content-row">
            <div className="uiux-image-column">
             <img 
                src="/images/ui2.png" 
                alt="Digital Product Optimization" 
                className="uiux-section-image" 
              />
            </div>

            <div className="uiux-text-column">
              {/* Usability Testing */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Search />
                </div>
                <div className="uiux-feature-content">
                  <h3>Usability Testing</h3>
                  <p>Comprehensive testing methodologies to identify friction points and optimize user journeys for maximum conversion and satisfaction.</p>
                </div>
              </div>

              {/* Conversion Rate Optimization */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <TrendingUp />
                </div>
                <div className="uiux-feature-content">
                  <h3>Conversion Rate Optimization</h3>
                  <p>Data-driven approach to improve conversion rates through A/B testing, user behavior analysis, and strategic design iterations.</p>
                </div>
              </div>

              {/* Performance Monitoring */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Monitor />
                </div>
                <div className="uiux-feature-content">
                  <h3>Performance Monitoring</h3>
                  <p>Continuous monitoring of design performance with real-time analytics to ensure optimal user experience and business outcomes.</p>
                </div>
              </div>

              {/* Rapid Iteration */}
              <div className="uiux-feature-item">
                <div className="uiux-feature-icon">
                  <Zap />
                </div>
                <div className="uiux-feature-content">
                  <h3>Rapid Iteration</h3>
                  <p>Agile design process enabling quick iterations based on user feedback and market changes to stay ahead of competition.</p>
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

export default UIUXDesign;
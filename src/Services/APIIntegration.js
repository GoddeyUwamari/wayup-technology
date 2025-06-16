import React from 'react';
import { 
  Zap,
  Globe,
  Shield,
  Settings,
  Code,
  Database,
  CloudLightning,
  CheckCircle,
  ArrowRight,
  Lock,
  RefreshCw,
  Monitor
} from 'lucide-react';
import './APIIntegration.css';
import Checkout from '../components/Checkout';

const APIIntegration = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="api-integration-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="api-integration-container">
          <h1 className="api-integration-hero-title">API Integration Services</h1>
          <p className="api-integration-hero-description">
            Seamlessly connect your systems with powerful API integrations. We build secure, scalable, 
            and reliable API solutions that enable your applications to communicate efficiently and drive business growth.
          </p>
        </div>
      </section>

      {/* API Development & Design Section */}
      <section className="api-integration-development-section">
        <div className="api-integration-container">
          <div className="api-integration-section-header">
            <h2>API Development & Design</h2>
            <p>Build robust, well-documented APIs with modern architecture patterns that ensure scalability, security, and optimal performance for your applications.</p>
          </div>

          <div className="api-integration-content-row">
            <div className="api-integration-image-column">
              <img 
                src="/images/top.png" 
                alt="API Development & Design" 
                className="api-integration-section-image" 
              />
            </div>

            <div className="api-integration-text-column">
              {/* RESTful API Development */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Code />
                </div>
                <div className="api-integration-feature-content">
                  <h3>RESTful API Development</h3>
                  <p>Design and build scalable RESTful APIs with proper HTTP methods, status codes, and resource-based architecture for intuitive and efficient data exchange.</p>
                </div>
              </div>

              {/* GraphQL Implementation */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Database />
                </div>
                <div className="api-integration-feature-content">
                  <h3>GraphQL Implementation</h3>
                  <p>Implement flexible GraphQL APIs that allow clients to request exactly the data they need, reducing over-fetching and improving application performance.</p>
                </div>
              </div>

              {/* API Documentation */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Monitor />
                </div>
                <div className="api-integration-feature-content">
                  <h3>API Documentation</h3>
                  <p>Create comprehensive, interactive API documentation with OpenAPI/Swagger specifications, code examples, and testing interfaces for developer adoption.</p>
                </div>
              </div>

              {/* Microservices Architecture */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Settings />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Microservices Architecture</h3>
                  <p>Design microservices-based API architecture that enables independent deployment, scaling, and maintenance of different application components.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Integrations Section */}
      <section className="api-integration-development-section api-integration-alternate">
        <div className="api-integration-container">
          <div className="api-integration-section-header">
            <h2>Third-Party Integrations</h2>
            <p>Connect your applications with popular services and platforms through secure, reliable integrations that extend functionality and streamline workflows.</p>
          </div>

          <div className="api-integration-content-row">
            <div className="api-integration-image-column">
              <img 
                src="/images/hero.png" 
                alt="Third-Party Integrations" 
                className="api-integration-section-image" 
              />
            </div>

            <div className="api-integration-text-column">
              {/* Payment Gateway Integration */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Shield />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Payment Gateway Integration</h3>
                  <p>Integrate secure payment processing with Stripe, PayPal, Square, and other providers, ensuring PCI compliance and seamless transaction handling.</p>
                </div>
              </div>

              {/* Cloud Services Integration */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <CloudLightning />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Cloud Services Integration</h3>
                  <p>Connect with AWS, Azure, Google Cloud services including storage, messaging, AI/ML services, and serverless functions for enhanced capabilities.</p>
                </div>
              </div>

              {/* Social Media & Communication */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Globe />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Social Media & Communication</h3>
                  <p>Integrate with social platforms, messaging services, email providers, and communication tools to enhance user engagement and connectivity.</p>
                </div>
              </div>

              {/* CRM & Business Tools */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <RefreshCw />
                </div>
                <div className="api-integration-feature-content">
                  <h3>CRM & Business Tools</h3>
                  <p>Seamlessly connect with Salesforce, HubSpot, Slack, Microsoft 365, and other business tools to create unified workflows and data synchronization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Performance Section */}
      <section className="api-integration-development-section">
        <div className="api-integration-container">
          <div className="api-integration-section-header">
            <h2>Security & Performance</h2>
            <p>Implement enterprise-grade security measures and performance optimizations to ensure your APIs are secure, fast, and reliable under any load conditions.</p>
          </div>

          <div className="api-integration-content-row">
            <div className="api-integration-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Security & Performance" 
                className="api-integration-section-image" 
              />
            </div>

            <div className="api-integration-text-column">
              {/* Authentication & Authorization */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Lock />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Authentication & Authorization</h3>
                  <p>Implement secure authentication methods including OAuth 2.0, JWT tokens, API keys, and role-based access control for comprehensive security.</p>
                </div>
              </div>

              {/* Rate Limiting & Throttling */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <Zap />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Rate Limiting & Throttling</h3>
                  <p>Protect your APIs from abuse and ensure fair usage with intelligent rate limiting, request throttling, and quota management systems.</p>
                </div>
              </div>

              {/* Monitoring & Analytics */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <CheckCircle />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Monitoring & Analytics</h3>
                  <p>Comprehensive API monitoring with real-time performance metrics, error tracking, usage analytics, and automated alerting for proactive management.</p>
                </div>
              </div>

              {/* Caching & Optimization */}
              <div className="api-integration-feature-item">
                <div className="api-integration-feature-icon">
                  <ArrowRight />
                </div>
                <div className="api-integration-feature-content">
                  <h3>Caching & Optimization</h3>
                  <p>Optimize API performance with intelligent caching strategies, response compression, and efficient data serialization for lightning-fast responses.</p>
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

export default APIIntegration;
import React from 'react';
import { Smartphone, Code, Palette, Shield, Zap, Users, Database, Globe, Settings, Cpu, Cloud, Lock } from 'lucide-react';
import './MobileAppDevelopment.css';
import Checkout from '../components/Checkout';

const MobileAppDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
  className="mobile-app-hero-section"
  style={{backgroundImage: 'url(/images/iphoto3.png)'}}
>
  <div className="mobile-app-container">
    <h1 className="mobile-app-hero-title">Mobile App Development Solutions</h1>
    <p className="mobile-app-hero-description">
      We create innovative mobile applications that deliver exceptional user experiences 
      across iOS and Android platforms, tailored to your business needs.
    </p>
  </div>
</section>

      {/* Native App Development Section */}
      <section className="mobile-app-development-section">
        <div className="mobile-app-container">
          <div className="mobile-app-section-header">
            <h2>Native App Development</h2>
            <p>Build powerful, platform-specific applications that leverage device capabilities for optimal performance and user experience.</p>
          </div>

          <div className="mobile-app-content-row">
            <div className="mobile-app-image-column">
              <img 
                src="/images/top.png" 
                alt="Native App Development" 
                className="mobile-app-section-image" 
              />
            </div>

            <div className="mobile-app-text-column">
              {/* iOS Development */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Smartphone />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>iOS Development</h3>
                  <p>Native iOS apps built with Swift and Objective-C, optimized for iPhone and iPad with seamless integration into the Apple ecosystem.</p>
                </div>
              </div>

              {/* Android Development */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Code />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Android Development</h3>
                  <p>Custom Android applications using Kotlin and Java, designed to work flawlessly across diverse Android devices and versions.</p>
                </div>
              </div>

              {/* Performance Optimization */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Zap />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Performance Optimization</h3>
                  <p>High-performance apps with efficient memory management, fast loading times, and smooth animations for superior user experience.</p>
                </div>
              </div>

              {/* Device Integration */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Settings />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Device Integration</h3>
                  <p>Full access to device features including camera, GPS, sensors, and notifications for rich, interactive experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Development Section */}
      <section className="mobile-app-development-section mobile-app-alternate">
        <div className="mobile-app-container">
          <div className="mobile-app-section-header">
            <h2>Cross-Platform Development</h2>
            <p>Develop once, deploy everywhere. Cost-effective solutions that maintain native performance across multiple platforms.</p>
          </div>

          <div className="mobile-app-content-row">
            <div className="mobile-app-image-column">
              <img 
                src="/images/hero.png" 
                alt="Native App Development" 
                className="mobile-app-section-image" 
              />
            </div>

            <div className="mobile-app-text-column">
              {/* React Native */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Globe />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>React Native</h3>
                  <p>Build mobile apps using React Native framework, sharing code between iOS and Android while maintaining native performance.</p>
                </div>
              </div>

              {/* Flutter Development */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Palette />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Flutter Development</h3>
                  <p>Create beautiful, natively compiled applications using Google's Flutter framework with a single codebase for multiple platforms.</p>
                </div>
              </div>

              {/* Hybrid Solutions */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Cpu />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Hybrid Solutions</h3>
                  <p>Leverage web technologies with Ionic and Cordova to create apps that work across platforms with reduced development time.</p>
                </div>
              </div>

              {/* Shared Backend */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Database />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Shared Backend</h3>
                  <p>Unified backend services and APIs that serve multiple platforms efficiently, reducing maintenance overhead and costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Mobile Solutions Section */}
      <section className="mobile-app-development-section">
        <div className="mobile-app-container">
          <div className="mobile-app-section-header">
            <h2>Enterprise Mobile Solutions</h2>
            <p>Secure, scalable mobile applications designed for enterprise environments with advanced security and management features.</p>
          </div>

          <div className="mobile-app-content-row">
            <div className="mobile-app-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="Native App Development" 
                className="mobile-app-section-image" 
              />
            </div>

            <div className="mobile-app-text-column">
              {/* Security & Compliance */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Shield />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Security & Compliance</h3>
                  <p>Enterprise-grade security with encryption, secure authentication, and compliance with industry standards like GDPR and HIPAA.</p>
                </div>
              </div>

              {/* User Management */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Users />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>User Management</h3>
                  <p>Advanced user roles, permissions, and access controls integrated with existing enterprise identity management systems.</p>
                </div>
              </div>

              {/* Cloud Integration */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Cloud />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>Cloud Integration</h3>
                  <p>Seamless integration with cloud platforms like AWS, Azure, and Google Cloud for scalable, reliable backend services.</p>
                </div>
              </div>

              {/* MDM Support */}
              <div className="mobile-app-feature-item">
                <div className="mobile-app-feature-icon">
                  <Lock />
                </div>
                <div className="mobile-app-feature-content">
                  <h3>MDM Support</h3>
                  <p>Mobile Device Management compatibility for enterprise deployment, remote configuration, and security policy enforcement.</p>
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

export default MobileAppDevelopment;

// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import New from '../assets/New.mp4';
import 'animate.css';

const LazyVideo = React.memo(({ src }) => (
  <video className="background-video" autoPlay loop muted playsInline>
    <source src={src} type="video/mp4" />
  </video>
));

const HeroSection = () => {
  return (
    <div className="hero-container">
      <LazyVideo src={New} />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          High-Converting <span className="highlight-word">Websites & E-Commerce</span> for Growing Businesses
        </h1>
        
        <p className="hero-subtitle">
          We build fast, modern websites, online stores, and custom business solutions that help you attract more customers, increase sales, and save time through automation.
        </p>

        <div className="hero-cta-container">
          <Link to="/contact" className="hero-cta-primary">
            Start Your Project
          </Link>
          <Link to="/portfolio/clients" className="hero-cta-secondary">
  View Client Results
</Link>
        </div>

        {/* Trust signals */}
        <div className="hero-trust">
          <p>✓ 16+ Years Experience • ✓ Secure Cloud Solutions • ✓ 200+ Production Systems Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
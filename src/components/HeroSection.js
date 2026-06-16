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
          Reliable <span className="highlight-word">Software</span> Solutions Built for Growing Businesses
        </h1>
        
        <p className="hero-subtitle">
          Websites, eCommerce, automation, and custom software designed to help businesses attract customers, save time, and scale.
        </p>

        <div className="hero-cta-container">
          <Link to="/contact" className="hero-cta-primary">
            Start Your Project
          </Link>
          <Link to="/portfolio/work" className="hero-cta-secondary">
            View Our Work
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
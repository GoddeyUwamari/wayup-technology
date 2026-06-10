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
          Scalable <span className="highlight-word">Software</span> & Cloud Infrastructure That Grows With Your Business
        </h1>
        
        <p className="hero-subtitle">
          High-converting websites for local businesses • Multi-tenant SaaS platforms • 
AWS cost optimization (30–50% savings) — built by a 16+ year senior engineering team.
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
          <p>✓ 30–50% AWS Cost Reduction • ✓ 99.9% Uptime • ✓ 15+ Production Systems Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
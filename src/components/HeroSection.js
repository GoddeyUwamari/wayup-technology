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
        <h1 className="hero-title">Professional Websites & <span className="highlight-word">Software</span> That Help Local Businesses Get More Customers</h1>
        <p className="hero-subtitle">
          Web, mobile, and AWS infrastructure built by a 16+ year senior engineering team. We ship production-ready code that scales, stays secure, and doesn't break on launch day.
        </p>
        <div className="hero-cta-container">
          <Link to="/contact" className="hero-cta-primary">
            Start Your Project
          </Link>
          <Link to="/portfolio/work" className="hero-cta-secondary">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

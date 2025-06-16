import React, { useMemo, useRef, useEffect } from 'react';
import './Client.css';

const Client = () => {
  const sliderRef = useRef(null);

  const logos = useMemo(() => [
    "kphoto11.png", "kphoto14.png", "kphoto.png", "kphoto1.png", "kphoto2.png",
    "kphoto3.png", "kphoto5.png", "kphoto00.png", "kphoto0.png"
  ], []);

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h2 className='king'>Everything You Need to Succeed in the Digital World</h2>
        
<section className="benefits-section">
  <div className="benefits-grid">
    <div className="benefit-card">
      <h3 className="benefit-title">Web Development</h3>
      <p className="benefit-text">
        Custom website solutions, front-end & back-end development, and optimization for performance and responsiveness.
      </p>
    </div>
    
    <div className="benefit-card">
      <h3 className="benefit-title">Mobile Apps</h3>
      <p className="benefit-text">
       Tailored mobile app development, cross-platform builds, and native integration for iOS and Android devices.
      </p>
    </div>
    
    <div className="benefit-card">
      <h3 className="benefit-title">E-Commerce</h3>
      <p className="benefit-text">
        Custom e-commerce platforms, shopping cart development, and integration for scalable online stores and marketplaces.
      </p>
    </div>
    
    <div className="benefit-card">
      <h3 className="benefit-title">WordPress Expert</h3>
      <p className="benefit-text">
        Custom WordPress solutions, theme development, and plugin creation for dynamic websites.
      </p>
    </div>

    <div className="benefit-card">
      <h3 className="benefit-title">UI/UX Design</h3>
      <p className="benefit-text">
        User-centered design solutions, wireframing, prototyping, and creating intuitive interfaces for optimal user experience.
      </p>
    </div>

    <div className="benefit-card">
      <h3 className="benefit-title">Database Solutions</h3>
      <p className="benefit-text">
        Database design, optimization, and management for efficient data storage, retrieval, and scalable applications.
      </p>
    </div>

    <div className="benefit-card">
      <h3 className="benefit-title">API Development</h3>
      <p className="benefit-text">
        RESTful API creation, third-party integrations, and microservices architecture for seamless data communication.
      </p>
    </div>

    <div className="benefit-card">
      <h3 className="benefit-title">Cloud Services</h3>
      <p className="benefit-text">
        Cloud deployment, hosting solutions, and DevOps implementation for scalable and reliable application infrastructure.
      </p>
    </div>
  </div>
</section>

        {/* Accelerate Your Success Section */}
        <section className="success-section">
         <h2 className="success-title"> Accelerate Your <span className="hypergrowth-text">Business</span> Success</h2>
          <div className="success-benefits-grid">
            <div className="success-benefit-card">
              <h3 className="success-benefit-title"> Specialized Industry Expertise</h3>
              <p className="success-benefit-text">
                Skilled teams with deep domain knowledge deliver tailored solutions aligned with your business goals and industry standards.
              </p>
            </div>
            
            <div className="success-benefit-card">
              <h3 className="success-benefit-title">Global Delivery Models</h3>
              <p className="success-benefit-text">
                Choose from onshore, nearshore, or offshore collaboration options—ensuring flexibility, speed, and real-time project alignment.
              </p>
            </div>
            
            <div className="success-benefit-card">
              <h3 className="success-benefit-title">Proven & Reliable Partner</h3>
              <p className="success-benefit-text">
                Trusted U.S.-based company with 10+ years of experience and a global team of 2,800+ professionals backed by legal compliance.
              </p>
            </div>
            
            <div className="success-benefit-card">
              <h3 className="success-benefit-title">High Value, Cost-Efficient</h3>
              <p className="success-benefit-text">
                Delivering premium software solutions at a competitive price point—maximizing ROI without compromising quality.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      
      {/* Full Width Trusted Brands Section */}
      <section className="trusted-brands-section-full">
       <h2 className="trusted-brands-title">
    Clients We've <span className="highlight-work">Worked</span> With
</h2>
        <h4 className="trusted-brands-subtitle">You're in Good Company</h4>
        <div className="logo-container-home">
          <div className="logo-slide-home" ref={sliderRef}>
            {logos.concat(logos).map((img, index) => (
              <img key={index} src={`/images/${img}`} alt="" className="logo-image" />
            ))}
          </div>
        </div>
        <div className="logo-container-home">
          <div className="logo-slide-home-reverse">
            {logos.concat(logos).map((img, index) => (
              <img key={`reverse-${index}`} src={`/images/${img}`} alt="" className="logo-image" />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
<section className="statistics-section">
  <div className="statistics-grid">
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">500+</div>
        <div className="statistic-label">Projects Delivered</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">98%</div>
        <div className="statistic-label">Client Satisfaction</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">24/7</div>
        <div className="statistic-label">Support Available</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">10+</div>
        <div className="statistic-label">Years Experience</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">2800+</div>
        <div className="statistic-label">Global Professionals</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">99%</div>
        <div className="statistic-label">On-Time Delivery</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">150+</div>
        <div className="statistic-label">Countries Served</div>
      </div>
    </div>
    
    <div className="statistic-card">
      <div className="statistic-content">
        <div className="statistic-number">4.9/5</div>
        <div className="statistic-label">Average Rating</div>
      </div>
    </div>
        </div>
        <h2 className="success-titleR">YOUR SUCCESS IS <span className="highlight-our">OUR</span> PRIORITY</h2>
</section>
    </div>
  );
};

export default Client;
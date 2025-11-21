import React, { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaMobile, FaShoppingCart, FaWordpress, FaPalette, FaDatabase,
  FaPlug, FaCloud, FaBullseye, FaGlobeAmericas, FaTrophy, FaDollarSign,
  FaProjectDiagram, FaSmile, FaClock, FaCalendarAlt, FaUsers,
  FaCheckCircle, FaGlobe, FaStar } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import './Client.css';

const Client = () => {
  const sliderRef = useRef(null);

  const logos = useMemo(() => [
    "kphoto11.png", "kphoto14.png", "kphoto.png", "kphoto1.png", "kphoto2.png",
    "kphoto3.png", "kphoto5.png", "kphoto00.png", "kphoto0.png"
  ], []);

  // Top section service cards with navigation
  const serviceCards = [
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "Custom website solutions, front-end & back-end development, and optimization for performance and responsiveness.",
      link: "/services/software-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      text: "Tailored mobile app development, cross-platform builds, and native integration for iOS and Android devices.",
      link: "/services/mobile-app"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      text: "Complete e-commerce solutions, payment gateway integration, inventory management, and scalable online marketplace development.",
      link: "/industries/ecommerce"
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Expert",
      text: "Custom WordPress solutions, theme development, plugin creation, and performance optimization for dynamic websites.",
      link: "/services/custom-software"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      text: "User-centered design solutions, wireframing, prototyping, and creating intuitive interfaces for optimal user experience and conversion.",
      link: "/services/ui-ux"
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      text: "Database design, optimization, migration, and management for efficient data storage, retrieval, and scalable applications.",
      link: "/solution/database"
    },
    {
      icon: <FaPlug />,
      title: "API Development",
      text: "RESTful API creation, GraphQL implementation, third-party integrations, and microservices architecture for seamless data communication.",
      link: "/services/api-integration"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      text: "Cloud deployment, AWS/Azure solutions, DevOps implementation, and CI/CD pipelines for scalable and reliable infrastructure.",
      link: "/services/offshore"
    }
  ];

  // Bottom section benefit cards with navigation
  const benefitCards = [
    {
      icon: <FaBullseye />,
      title: "Specialized Industry Expertise",
      text: "Skilled teams with deep domain knowledge deliver tailored solutions aligned with your business goals and industry standards across fintech, healthcare, retail, and enterprise sectors.",
      link: "/industries/healthcare"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Delivery Models",
      text: "Choose from onshore, nearshore, or offshore collaboration options—ensuring flexibility, speed, and real-time project alignment with 24/7 development cycles.",
      link: "/services/offshore"
    },
    {
      icon: <FaTrophy />,
      title: "Proven & Reliable Partner",
      text: "Trusted U.S.-based company with 10+ years of experience, a global team of 2,800+ professionals, ISO certifications, and full legal compliance.",
      link: "/portfolio/work"
    },
    {
      icon: <FaDollarSign />,
      title: "High Value, Cost-Efficient",
      text: "Delivering premium software solutions at competitive rates—maximizing ROI while maintaining enterprise-grade quality and performance standards.",
      link: "/services/staff-augmentation"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h2 className='king'>Everything You Need to Succeed in the Digital World</h2>

        <section className="benefits-section">
          <div className="benefits-grid">
            {serviceCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                state={{ scrollToTop: true }}
                className="benefit-card-link"
              >
                <div className="benefit-card">
                  <div className="benefit-icon">{card.icon}</div>
                  <h3 className="benefit-title">{card.title}</h3>
                  <p className="benefit-text">{card.text}</p>
                  <div className="card-arrow">→</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Accelerate Your Success Section */}
        <section className="success-section">
          <Link to="/contact" state={{ scrollToTop: true }}>
            <button className="speak-to-us-btn">
              <span className="btn-icon"><FiMessageCircle /></span>
              Speak to Experts Now!
            </button>
          </Link>

          <h2 className="success-title">Accelerate Your <span className="hypergrowth-text">Business</span> Success</h2>
          <div className="success-benefits-grid">
            {benefitCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                state={{ scrollToTop: true }}
                className="success-benefit-card-link"
              >
                <div className="success-benefit-card">
                  <div className="success-benefit-icon">{card.icon}</div>
                  <h3 className="success-benefit-title">{card.title}</h3>
                  <p className="success-benefit-text">{card.text}</p>
                  <div className="card-arrow">→</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Full Width Trusted Brands Section */}
      <section className="trusted-brands-section-full">
        <h2 className="trusted-brands-title">
          Clients We're <span className="highlight-work">Serving</span>...
        </h2>
        <h4 className="trusted-brands-subtitle">You're in Good Company - Join 500+ Satisfied Clients</h4>
        <div className="logo-container-home">
          <div className="logo-slide-home" ref={sliderRef}>
            {logos.concat(logos).map((img, index) => (
              <img key={index} src={`/images/${img}`} alt="Trusted Client Logo" className="logo-image" />
            ))}
          </div>
        </div>
        <div className="logo-container-home">
          <div className="logo-slide-home-reverse">
            {logos.concat(logos).map((img, index) => (
              <img key={`reverse-${index}`} src={`/images/${img}`} alt="Trusted Client Logo" className="logo-image" />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-grid">
          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaProjectDiagram /></div>
              <div className="statistic-number">500+</div>
              <div className="statistic-label">Projects Delivered</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaSmile /></div>
              <div className="statistic-number">98%</div>
              <div className="statistic-label">Client Satisfaction</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaClock /></div>
              <div className="statistic-number">24/7</div>
              <div className="statistic-label">Support Available</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaCalendarAlt /></div>
              <div className="statistic-number">10+</div>
              <div className="statistic-label">Years Experience</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaUsers /></div>
              <div className="statistic-number">2800+</div>
              <div className="statistic-label">Global Professionals</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaCheckCircle /></div>
              <div className="statistic-number">99%</div>
              <div className="statistic-label">On-Time Delivery</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaGlobe /></div>
              <div className="statistic-number">150+</div>
              <div className="statistic-label">Countries Served</div>
            </div>
          </div>

          <div className="statistic-card">
            <div className="statistic-content">
              <div className="statistic-icon"><FaStar /></div>
              <div className="statistic-number">4.9/5</div>
              <div className="statistic-label">Average Rating</div>
            </div>
          </div>
        </div>
        <h2 className="success-titleR">YOUR SUCCESS IS <span className="highlight-our">OUR TOP</span> PRIORITY</h2>
        <p className="success-subtitle">Join thousands of businesses that have transformed their digital presence with our expertise</p>
      </section>
    </div>
  );
};

export default Client;
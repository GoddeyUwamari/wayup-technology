import React, { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaMobile, FaShoppingCart, FaWordpress, FaPalette, FaDatabase,
  FaPlug, FaCloud, FaBullseye, FaGlobeAmericas, FaTrophy, FaDollarSign,
  FaProjectDiagram, FaSmile, FaClock, FaCalendarAlt,
  FaCheckCircle, FaStar
} from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import './Client.css';

const Client = () => {
  const sliderRef = useRef(null);

  const logos = useMemo(() => [
    "kphoto11.png", "kphoto14.png", "kphoto.png", "kphoto1.png", "kphoto2.png",
    "kphoto3.png", "kphoto5.png", "kphoto00.png", "kphoto0.png"
  ], []);

  const serviceCards = [
    {
      icon: <FaCode />,
      title: "Website Design & Development",
      text: "Fast, modern websites that attract customers and turn visitors into leads.",
      link: "/services/software-development"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      text: "Online stores built to increase sales and simplify operations.",
      link: "/industries/ecommerce"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      text: "Mobile experiences that help customers connect with your business.",
      link: "/services/mobile-app"
    },
    {
      icon: <FaProjectDiagram />,
      title: "Business Automation",
      text: "Save time by automating repetitive tasks and workflows.",
      link: "/services/custom-software"
    },
    {
      icon: <FaCloud />,
      title: "Custom Software Solutions",
      text: "Tools built around how your business actually works.",
      link: "/services/custom-software"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      text: "Simple, professional experiences customers enjoy using.",
      link: "/services/ui-ux"
    },
    {
      icon: <FaPlug />,
      title: "CRM & System Integrations",
      text: "Connect your tools and streamline your operations.",
      link: "/services/api-integration"
    },
    {
      icon: <FaWordpress />,
      title: "Cloud Solutions",
      text: "Reliable hosting, security, and infrastructure that scales.",
      link: "/services/cloud"
    }
  ];

  const benefitCards = [
    {
      icon: <FaTrophy />,
      title: "16+ Years Experience",
      text: "Senior engineers who have built and shipped real production systems — not junior developers.",
      link: "/portfolio/work"
    },
    {
      icon: <FaCheckCircle />,
      title: "We Build It Right the First Time",
      text: "No shortcuts. Clean code, secure systems, and reliable delivery every time.",
      link: "/portfolio/work"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Local & Remote — Always Available",
      text: "Based in the NYC metro area. Available remotely across all timezones.",
      link: "/contact"
    },
    {
      icon: <FaBullseye />,
      title: "Built Around Your Business",
      text: "We take time to understand your business before writing a single line of code.",
      link: "/contact"
    }
  ];

  const statistics = [
    { icon: <FaCalendarAlt />, number: "16+", label: "Years Experience" },
    { icon: <FaProjectDiagram />, number: "400+", label: "Production Systems Delivered" },
    { icon: <FaCheckCircle />, number: "99.9%", label: "Uptime Achieved" },
    { icon: <FaStar />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* Section Header */}
        <h2 className='king'>Websites & Software Built to Grow Your Business</h2>

        {/* Service Cards */}
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
                  <div className="benefit-icons">{card.icon}</div>
                  <h3 className="benefit-title">{card.title}</h3>
                  <p className="benefit-text">{card.text}</p>
                  <div className="card-arrow">→</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose WayUP Section */}
        <section className="success-section">
          <Link to="/contact" state={{ scrollToTop: true }}>
            <button className="speak-to-us-btn">
              <span className="btn-icon"><FiMessageCircle /></span>
              Speak to Experts Now!
            </button>
          </Link>

          <h2 className="success-title">Why Businesses Choose <span className="hypergrowth-text">WayUP</span></h2>
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

      <section className="trusted-brands-section-full">
        <h2 className="trusted-brands-title">
          Clients We're <span className="highlight-work">Serving</span>
        </h2>
        <h4 className="trusted-brands-subtitle">
          Trusted by local businesses, e-commerce brands, and growing companies across the US
        </h4>
        <div className="logo-container-home">
          <div className="logo-slide-home" ref={sliderRef}>
            {logos.concat(logos).map((img, index) => (
              <img key={index} src={`/images/${img}`} alt="Client Logo" className="logo-image" />
            ))}
          </div>
        </div>
        <div className="logo-container-home">
          <div className="logo-slide-home-reverse">
            {logos.concat(logos).map((img, index) => (
              <img key={`reverse-${index}`} src={`/images/${img}`} alt="Client Logo" className="logo-image" />
            ))}
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="statistic-card">
              <div className="statistic-content">
                <div className="statistic-icon">{stat.icon}</div>
                <div className="statistic-number">{stat.number}</div>
                <div className="statistic-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="success-titleR">
          YOUR SUCCESS IS <span className="highlight-our">OUR</span> MISSION
        </h2>
        <p className="success-subtitle">
          A senior engineering team that takes time to understand your business — then builds systems that actually work.
        </p>
      </section>
    </div>
  );
};

export default Client;
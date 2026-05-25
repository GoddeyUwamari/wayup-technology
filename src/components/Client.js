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

  // Updated Service Cards — Better balance between premium SaaS and local business
  const serviceCards = [
    {
      icon: <FaCloud />,
      title: "AWS Cost Optimization",
      text: "Reduce AWS bills by 30–50%. Identify idle resources, over-provisioning, and hidden waste.",
      link: "/services/cloud"
    },
    {
      icon: <FaProjectDiagram />,
      title: "Multi-Tenant SaaS",
      text: "Scalable, secure platforms with proper tenant isolation, billing, and observability.",
      link: "/services/custom-software"
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "High-converting websites that generate more leads and grow your revenue.",
      link: "/services/software-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      text: "Mobile applications that expand your reach and increase customer engagement.",
      link: "/services/mobile-app"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      text: "Online stores that drive higher sales and reduce cart abandonment.",
      link: "/industries/ecommerce"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      text: "Intuitive designs that boost conversions and create great user experiences.",
      link: "/services/ui-ux"
    },
    {
      icon: <FaPlug />,
      title: "API Development",
      text: "Seamless integrations that automate processes and unlock new opportunities.",
      link: "/services/api-integration"
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Expert",
      text: "Powerful, easy-to-manage websites that attract customers and save time.",
      link: "/services/custom-software"
    }
  ];

  // Updated Benefit Cards
  const benefitCards = [
    {
      icon: <FaTrophy />,
      title: "Production-Grade Delivery",
      text: "16+ years shipping systems with 99.9% uptime, CI/CD, and automated testing.",
      link: "/portfolio/work"
    },
    {
      icon: <FaDollarSign />,
      title: "AWS Cost Reduction",
      text: "Proven 30–50% savings on cloud infrastructure for growing companies.",
      link: "/services/cloud"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Remote-First, NYC Based",
      text: "Headquartered in Union, NJ with reliable remote delivery across timezones.",
      link: "/contact"
    },
    {
      icon: <FaBullseye />,
      title: "SaaS & Local Business Experience",
      text: "From Series A SaaS platforms to high-converting websites for local businesses.",
      link: "/industries"
    }
  ];

  // Statistics — Real & Strong
  const statistics = [
    { icon: <FaCalendarAlt />, number: "16+", label: "Years Experience" },
    { icon: <FaProjectDiagram />, number: "15+", label: "Production Systems Delivered" },
    { icon: <FaSmile />, number: "$2M+", label: "Client Revenue Supported" },
    { icon: <FaCheckCircle />, number: "99.9%", label: "Uptime Achieved" },
    { icon: <FaCloud />, number: "30–50%", label: "AWS Cost Reduction" },
    { icon: <FaDollarSign />, number: "$96K+", label: "Annual Savings (One Client)" },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* Section Header */}
        <h2 className='king'>Websites & Software That Drive Real Business Growth</h2>

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

          <h2 className="success-title">Why Teams Choose <span className="hypergrowth-text">WayUP</span></h2>
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

      {/* Trusted Brands & Statistics sections remain unchanged */}
      <section className="trusted-brands-section-full">
        <h2 className="trusted-brands-title">
          Clients We're <span className="highlight-work">Serving</span>
        </h2>
        <h4 className="trusted-brands-subtitle">
          Trusted by businesses across SaaS, fintech, e-commerce, and local operations
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
          Built by a senior engineering team that has shipped production systems serving 10,000+ users.
        </p>
      </section>
    </div>
  );
};

export default Client;
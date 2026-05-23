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

  // Service cards — results focused
  const serviceCards = [
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "High-converting websites that generate more leads, build trust, and grow your revenue.",
      link: "/services/software-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      text: "Mobile applications that expand your reach, improve customer engagement, and increase sales.",
      link: "/services/mobile-app"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      text: "Online stores that drive higher sales, reduce cart abandonment, and maximize profitability.",
      link: "/industries/ecommerce"
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Expert",
      text: "Powerful, easy-to-manage websites that attract customers and save you time and money.",
      link: "/services/custom-software"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      text: "Intuitive designs that boost conversions, reduce bounce rates, and create memorable customer experiences.",
      link: "/services/ui-ux"
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      text: "Reliable data systems that improve decision-making, streamline operations, and support business growth.",
      link: "/solution/database"
    },
    {
      icon: <FaPlug />,
      title: "API Development",
      text: "Seamless integrations that automate processes, reduce manual work, and unlock new business opportunities.",
      link: "/services/api-integration"
    },
    {
      icon: <FaCloud />,
      title: "Cloud & AWS",
      text: "Scalable cloud solutions that reduce costs, improve performance, and give you peace of mind.",
      link: "/services/cloud"
    }
  ];

  // Benefit cards — results focused
  const benefitCards = [
    {
      icon: <FaBullseye />,
      title: "Deep Industry Experience",
      text: "16+ years across SaaS, fintech, e-commerce, and healthcare — we've solved your problem before.",
      link: "/industries/healthcare"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Remote-First, NYC Based",
      text: "Headquartered in Union NJ with full remote delivery — responsive, accountable, and in your timezone.",
      link: "/services/offshore"
    },
    {
      icon: <FaTrophy />,
      title: "Production-Grade Quality",
      text: "Every system we ship runs at 99.9% uptime with automated tests, CI/CD, and zero-downtime deployments.",
      link: "/portfolio/work"
    },
    {
      icon: <FaDollarSign />,
      title: "Transparent Pricing",
      text: "Fixed-scope projects or hourly retainers — no surprise invoices, no scope creep without sign-off.",
      link: "/services/staff-augmentation"
    }
  ];

  // Real, verifiable statistics only
  const statistics = [
    { icon: <FaCalendarAlt />, number: "16+", label: "Years Experience" },
    { icon: <FaProjectDiagram />, number: "15+", label: "Production Systems Delivered" },
    { icon: <FaSmile />, number: "$2M+", label: "Client Revenue Enabled" },
    { icon: <FaCheckCircle />, number: "99.9%", label: "Uptime Achieved" },
    { icon: <FaCloud />, number: "30–50%", label: "AWS Cost Reduction" },
    { icon: <FaClock />, number: "24/7", label: "Support Available" },
    { icon: <FaDollarSign />, number: "$96K+", label: "AWS Savings for One Client" },
    { icon: <FaStar />, number: "16+", label: "Years Senior Engineering" },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* Section Header */}
        <h2 className='king'>Websites & Software That Help Your Business Grow</h2>

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

      {/* Trusted Brands Section */}
      <section className="trusted-brands-section-full">
        <h2 className="trusted-brands-title">
          Clients We're <span className="highlight-work">Serving</span>
        </h2>
        <h4 className="trusted-brands-subtitle">
          Trusted by businesses across SaaS, fintech, e-commerce, and more
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

      {/* Statistics Section — real numbers only */}
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
          Built by a senior engineering team that has shipped production systems serving 10,000+ users — we treat your project like our own.
        </p>
      </section>
    </div>
  );
};

export default Client;
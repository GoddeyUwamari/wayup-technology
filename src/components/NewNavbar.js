import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './NewNavbar.css'
import { FaEnvelope, FaShoppingCart } from 'react-icons/fa'; // Added icons

const NewNavbar = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setShowBurger(!showBurger);
  };

  const handleLinkClick = (path) => {
    setShowBurger(false);
    setActiveDropdown(null);
    window.location.href = path; // Add your navigation logic here
  };

  const toggleDropdown = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Hover handlers
  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to prevent flickering
  };

  const navbarStyles = {
    position: 'fixed',
    top: '60px', 
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  };

  const topHeaderStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
    backgroundColor: 'white',
  };

  return (
    <>
      {/* Top Header - Now Fixed */}
      <div className="top-header" style={topHeaderStyles}>
        <div className="heading-container">
          <img className="usa-image" src="/images/rphoto6.png" alt="" />
          
          <div className="phone-number">
            +1(848)-228-9890
          </div>

          <div className="yahoo">
            <FaEnvelope className="envelope-icon" />
            <a href="mailto:projectmanager@wayuptechn.com">projectmanager@wayuptechn.com</a>
          </div>

          <div className="help" onClick={() => handleLinkClick('/order')}>
            <FaShoppingCart className="shopping-cart-icon" />
            How can we help you today?
          </div>
        </div>
      </div>

      {/* Main Navbar - Now Fixed */}
      <nav 
        className={`nvbr ${showBurger ? "show-links" : ""}`}
        style={navbarStyles}
      >
        <div className="nvbr_logo" onClick={() => handleLinkClick('/')}>
          <h1 className="logo-text">
            <img 
              src="/images/Logo6.png" 
              alt="WayUP Technology Icon" 
              className="wayup-logo-icon"
            />
            <span className="logo-text-content">WAYUP TECHNOLOGY</span>
          </h1>
        </div>

        <ul className="nvbr-links" ref={dropdownRef}>
          {/* SERVICES Dropdown */}
          <li 
            className="nvbr-item dropdown-container"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="nvbr-link dropdown-trigger" 
              onClick={(e) => toggleDropdown('services', e)}
            >
              SERVICES <span className="dropdown-arrow">▼</span>
            </div>
            {activeDropdown === 'services' && (
              <ul className="dropdown-menu">
               <li onClick={() => handleLinkClick('/services/software-development')}>Custom Software Development</li>
                <li onClick={() => handleLinkClick('/services/mobile-app')}>Mobile App Development</li>
                <li onClick={() => handleLinkClick('/services/ui-ux')}>UI/UX Design</li>
                <li onClick={() => handleLinkClick('/services/business-analysis')}>Business Analysis</li>
                <li onClick={() => handleLinkClick('/services/custom-product')}>Custom Product Development</li>
                <li onClick={() => handleLinkClick('/services/api-integration')}>API Integration</li>
                <li onClick={() => handleLinkClick('/services/offshore')}>Offshore Development</li>
                <li onClick={() => handleLinkClick('/services/ai')}>AI Development</li>
                <li onClick={() => handleLinkClick('/services/staff-augmentation')}>Staff Augmentation</li>
              </ul>
            )}
          </li>

          {/* INDUSTRIES Dropdown */}
          <li 
            className="nvbr-item dropdown-container"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="nvbr-link dropdown-trigger" 
              onClick={(e) => toggleDropdown('industries', e)}
            >
              INDUSTRIES <span className="dropdown-arrow">▼</span>
            </div>
            {activeDropdown === 'industries' && (
              <ul className="dropdown-menu">
               <li onClick={() => handleLinkClick('/industries/healthcare')}>Healthcare</li>
                <li onClick={() => handleLinkClick('/industries/manufacturing')}>Manufacturing</li>
                <li onClick={() => handleLinkClick('/industries/pharmaceutical')}>Pharmaceutical</li>
                <li onClick={() => handleLinkClick('/industries/industrial')}>Industrial</li>
                <li onClick={() => handleLinkClick('/industries/agricultural')}>Agricultural</li>
                <li onClick={() => handleLinkClick('/industries/automotive')}>Automotive</li>
                <li onClick={() => handleLinkClick('/industries/ecommerce')}>E-Commerce</li>
                <li onClick={() => handleLinkClick('/industries/logistics')}>Logistics</li>
                <li onClick={() => handleLinkClick('/industries/construction')}>Construction</li>
              </ul>
            )}
          </li>

          {/* SOLUTIONS Dropdown */}
          <li 
            className="nvbr-item dropdown-container"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="nvbr-link dropdown-trigger" 
              onClick={(e) => toggleDropdown('solutions', e)}
            >
              SOLUTIONS <span className="dropdown-arrow">▼</span>
            </div>
            {activeDropdown === 'solutions' && (
              <ul className="dropdown-menu">
               <li onClick={() => handleLinkClick('/solution/digital-marketing')}>Digital Marketing</li>
                <li onClick={() => handleLinkClick('/solution/animation-graphic-design')}>Design & Animation</li>
                <li onClick={() => handleLinkClick('/solution/artificial-intelligence')}>AI Solutions</li>
                <li onClick={() => handleLinkClick('/solution/asset-tracking')}>Asset Tracking</li>
                <li onClick={() => handleLinkClick('/solution/biometrics')}>Biometrics</li>
                <li onClick={() => handleLinkClick('/solution/blockchain')}>Blockchain</li>
                <li onClick={() => handleLinkClick('/solution/business-intelligence-analytics')}>BI & Analytics</li>
                <li onClick={() => handleLinkClick('/solution/database')}>Database</li>
                <li onClick={() => handleLinkClick('/solution/digital-asset-management')}>Asset Management</li>
              </ul>
            )}
          </li>

          {/* PORTFOLIO Dropdown */}
          <li 
            className="nvbr-item dropdown-container"
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="nvbr-link dropdown-trigger" 
              onClick={(e) => toggleDropdown('portfolio', e)}
            >
              PORTFOLIO <span className="dropdown-arrow">▼</span>
            </div>
            {activeDropdown === 'portfolio' && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLinkClick('/portfolio/clients')}>Our Clients</li>
                <li onClick={() => handleLinkClick('/portfolio/work')}>Our Work</li>
              </ul>
            )}
          </li>

          {/* CONTACT */}
          <li className="nvbr-item contact-link" onClick={() => handleLinkClick('/contact')}>
            <div className="nvbr-link">CONTACT US</div>
          </li>

          {/* Additional Image */}
          <li className="nvbr__item">
            <img src='images/chief.png' alt="" />
          </li>
        </ul>

        <div className="nvbr-burger" onClick={handleClick}>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
            <span className="burger-bar"></span>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Close menu on scroll and track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (showBurger) setShowBurger(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBurger]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBurger]);

  const handleClick = () => {
    setShowBurger(!showBurger);
  };

  const handleLinkClick = (path) => {
    setShowBurger(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const closeMenu = () => {
    setShowBurger(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="heading-container">
        <div className="top-info-left">
          <img className="usa-image" src="images/rphoto6.png" alt="US Flag" />
          <a href="tel:+18482289890" className="phone-number">
            +1(848)-228-9890
          </a>
          <div className="yahoo">
            <FaEnvelope className="envelope-icon" />
            <a href="mailto:projectmanager@wayuptechn.com">projectmanager@wayuptechn.com</a>
          </div>
        </div>
        <div className="top-info-right">
          <div className="help" onClick={() => handleLinkClick('/order')}>
            <FaShoppingCart className="shopping-cart-icon" />
            How can we help you today?
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`nvbr ${isScrolled ? 'nvbr-scrolled' : ''}`}>
        <div className="nvbr_logo" onClick={() => handleLinkClick('/')}>
          <img
            src="images/pk.png"
            alt="WayUP Technology Logo"
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="nvbr-links nvbr-links-desktop">
          <li className="nvbr-item" onClick={() => handleLinkClick('/')}>
            <div className="nvbr-link">Home</div>
          </li>
          <li className="nvbr-item" onClick={() => handleLinkClick('/design')}>
            <div className="nvbr-link">Designs</div>
          </li>
          <li className="nvbr-item" onClick={() => handleLinkClick('/solution')}>
            <div className="nvbr-link">Solutions</div>
          </li>
          <li className="nvbr-item" onClick={() => handleLinkClick('/support')}>
            <div className="nvbr-link">Support</div>
          </li>
          <li className="nvbr-item" onClick={() => handleLinkClick('/contact')}>
            <div className="nvbr-link contact-button">Contact Us</div>
          </li>
          <li className="nvbr__item">
            <img src='images/photo0.png' alt="Language" />
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className="nvbr-burger"
          onClick={handleClick}
          aria-label="Toggle menu"
          aria-expanded={showBurger}
        >
          <span className={`burger-bar ${showBurger ? 'open' : ''}`}></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${showBurger ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${showBurger ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={28} />
        </button>

        <div className="mobile-menu-header">
          <div className="mobile-logo" onClick={() => handleLinkClick('/')}>
            <img
              src="images/pk.png"
              alt="WayUP Technology Logo"
              className="logo-image-mobile"
            />
          </div>
        </div>

        <nav className="mobile-menu-nav">
          <div className="mobile-menu-item" onClick={() => handleLinkClick('/')}>
            Home
          </div>
          <div className="mobile-menu-item" onClick={() => handleLinkClick('/design')}>
            Designs
          </div>
          <div className="mobile-menu-item" onClick={() => handleLinkClick('/solution')}>
            Solutions
          </div>
          <div className="mobile-menu-item" onClick={() => handleLinkClick('/support')}>
            Support
          </div>
          <div className="mobile-menu-item mobile-menu-cta" onClick={() => handleLinkClick('/contact')}>
            Contact Us
          </div>
        </nav>

        <div className="mobile-menu-footer">
          <a href="tel:+18482289890" className="mobile-contact-item">
            <span>📞</span>
            <span>+1(848)-228-9890</span>
          </a>
          <a href="mailto:projectmanager@wayuptechn.com" className="mobile-contact-item">
            <FaEnvelope size={16} />
            <span>projectmanager@wayuptechn.com</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;



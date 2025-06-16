import React, { useState } from "react";
import { FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook

  const handleClick = () => {
    setShowBurger(!showBurger);
  };

  const handleLinkClick = (path) => {
    setShowBurger(false); // Close the burger menu when a link is clicked
    navigate(path); // Navigate to the desired path
    window.scrollTo(0, 0); // Scroll to the top
  };

  const navbarLinkStyle = {
    backgroundColor: '#ef5a16',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    marginTop: '-6px',
    borderRadius: '20px', 
    cursor: 'pointer',
  };

  return (
    <>
      <div className="heading-container">
      <img className="usa-image" src="images/rphoto6.png" alt="" />
        <div className="phone-number" >
          +1(848)-228-9890 </div>
          <div className="yahoo">
  <FaEnvelope className="envelope-icon" />
  <a href="mailto:projectmanager@wayuptechn.com">projectmanager@wayuptechn.com</a>
</div>
        
       <div className="help" onClick={() => handleLinkClick('/order')}>
  <FaShoppingCart className="shopping-cart-icon" />
  How can we help you today?
</div>
      </div>

      <nav className={`nvbr ${showBurger ? "show-links" : ""}`}>
        <div className="nvbr_logo" onClick={() => handleLinkClick('/')}>
        <img 
      src="images/pk.png" 
      alt="WayUP Technology Logo"
      className="logo-image"
    />
          {/* <h1>WayUP Technology</h1> */}
        </div>
        <ul className="nvbr-links">
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
            <div className="nvbr-link" style={navbarLinkStyle}>Contact Us</div>
          </li>
          <li className="nvbr__item">
            <img src='images/photo0.png' alt="" />
          </li>
        </ul>
        <div className="nvbr-burger" onClick={handleClick}>
          <span className="burger-bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



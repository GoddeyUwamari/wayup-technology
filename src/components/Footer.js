import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

function Footer() {
  return (
    <div className="container-box">
      <div className="footer-main">
        <div className="footer-column">
          <h3 className="footer-heading">INDUSTRIES</h3>
          <Link to="/industries/healthcare" className="footer-link">Healthcare</Link>
          <Link to="/industries/manufacturing" className="footer-link">Manufacturing</Link>
          <Link to="/industries/pharmaceutical" className="footer-link">Pharmaceutical</Link>
          <Link to="/industries/industrial" className="footer-link">Industrial</Link>
          <Link to="/industries/agricultural" className="footer-link">Agricultural</Link>
          <Link to="/industries/automotive" className="footer-link">Automotive</Link>
          <Link to="/industries/ecommerce" className="footer-link">E-Commerce</Link>
          <Link to="/industries/logistics" className="footer-link">Logistics</Link>
          <Link to="/industries/construction" className="footer-link">Construction</Link>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">SERVICES</h3>
          <Link to="/services/custom-software" className="footer-link">Custom Software Development</Link>
          <Link to="/services/mobile-app" className="footer-link">Mobile App Development</Link>
          <Link to="/services/ui-ux" className="footer-link">UI/UX Design</Link>
          <Link to="/services/business-analysis" className="footer-link">Business Analysis</Link>
          <Link to="/services/custom-product" className="footer-link">Custom Product Development</Link>
          <Link to="/services/api-integration" className="footer-link">API Integration</Link>
          <Link to="/services/offshore" className="footer-link">Offshore Development</Link>
          <Link to="/services/ai" className="footer-link">AI Development</Link>
          <Link to="/services/staff-augmentation" className="footer-link">Staff Augmentation</Link>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/promo" className="footer-link">Promo</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/legal" className="footer-link">Legal</Link>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">WayUP Technology</h3>
          <h6>Copyright © 2024 WayUP<br/> Technology</h6>
          <h6>All Rights Reserved</h6>
          <div className="social-container">
            <a href="https://github.com/GoddeyUwamari" target="_blank"
            rel="noopener noreferrer" className="social-icon">
              <GithubIcon style={{ fontSize: '36px' }} />
            </a>
            <a href="https://twitter.com/GUwamari" target="_blank" rel="noopener noreferrer" className="social-icon">
              <TwitterIcon style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.facebook.com/emmanuel.uwamari" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FacebookIcon style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.instagram.com/emmanueluwamari/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <InstagramIcon style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.linkedin.com/in/goddeyuwamri" target="_blank"
            rel="noopener noreferrer" className="social-icon">
              <LinkedInIcon style={{ fontSize: '40px' }} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <h4>WayUP Technology</h4>
      </div>
      
      <div className="footer-p">
        <p>Proudly Built With ♥ by WayUP Technology</p>
      </div>
    </div>
  );
}

export default Footer;
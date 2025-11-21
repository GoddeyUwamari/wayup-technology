import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container-box">
      <div className="footer-main">
        <div className="footer-column">
          <h3 className="footer-heading">INDUSTRIES</h3>
          <Link to="/industries/healthcare" state={{ scrollToTop: true }} className="footer-link">Healthcare</Link>
          <Link to="/industries/manufacturing" state={{ scrollToTop: true }} className="footer-link">Manufacturing</Link>
          <Link to="/industries/pharmaceutical" state={{ scrollToTop: true }} className="footer-link">Pharmaceutical</Link>
          <Link to="/industries/industrial" state={{ scrollToTop: true }} className="footer-link">Industrial</Link>
          <Link to="/industries/agricultural" state={{ scrollToTop: true }} className="footer-link">Agricultural</Link>
          <Link to="/industries/automotive" state={{ scrollToTop: true }} className="footer-link">Automotive</Link>
          <Link to="/industries/ecommerce" state={{ scrollToTop: true }} className="footer-link">E-Commerce</Link>
          <Link to="/industries/logistics" state={{ scrollToTop: true }} className="footer-link">Logistics</Link>
          <Link to="/industries/construction" state={{ scrollToTop: true }} className="footer-link">Construction</Link>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">SERVICES</h3>
          <Link to="/services/custom-software" state={{ scrollToTop: true }} className="footer-link">Custom Software Development</Link>
          <Link to="/services/mobile-app" state={{ scrollToTop: true }} className="footer-link">Mobile App Development</Link>
          <Link to="/services/ui-ux" state={{ scrollToTop: true }} className="footer-link">UI/UX Design</Link>
          <Link to="/services/business-analysis" state={{ scrollToTop: true }} className="footer-link">Business Analysis</Link>
          <Link to="/services/custom-product" state={{ scrollToTop: true }} className="footer-link">Custom Product Development</Link>
          <Link to="/services/api-integration" state={{ scrollToTop: true }} className="footer-link">API Integration</Link>
          <Link to="/services/offshore" state={{ scrollToTop: true }} className="footer-link">Offshore Development</Link>
          <Link to="/services/ai" state={{ scrollToTop: true }} className="footer-link">AI Development</Link>
          <Link to="/services/staff-augmentation" state={{ scrollToTop: true }} className="footer-link">Staff Augmentation</Link>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <Link to="/about-us" state={{ scrollToTop: true }} className="footer-link">About Us</Link>
          <Link to="/promo" state={{ scrollToTop: true }} className="footer-link">Promo</Link>
          <Link to="/blog" state={{ scrollToTop: true }} className="footer-link">Blog</Link>
          <Link to="/legal" state={{ scrollToTop: true }} className="footer-link">Legal</Link>
          <Link to="/contact" state={{ scrollToTop: true }} className="footer-link">Contact</Link>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">WayUP Technology</h3>
          <p className="footer-tagline">Transforming businesses through innovative technology solutions</p>

          <div className="footer-contact-info">
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <a href="tel:+18482289890" className="contact-link">+1 (848) 228-9890</a>
            </div>
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <a href="mailto:projectmanager@wayuptechn.com" className="contact-link">projectmanager@wayuptechn.com</a>
            </div>
            <div className="contact-item">
              <LocationOnIcon className="contact-icon" />
              <span className="contact-text">Union, NJ</span>
            </div>
          </div>

          <div className="newsletter-section">
            <p className="newsletter-title">Stay Updated</p>
            <p className="newsletter-subtitle">Get our latest insights</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-btn" disabled={subscribed}>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

          <div className="social-container">
            <a
              href="https://github.com/GoddeyUwamari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Visit our GitHub page"
              title="GitHub"
            >
              <GithubIcon style={{ fontSize: '20px' }} />
            </a>
            <a
              href="https://twitter.com/GUwamari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Follow us on Twitter"
              title="Twitter"
            >
              <TwitterIcon style={{ fontSize: '20px' }} />
            </a>
            <a
              href="https://www.facebook.com/emmanuel.uwamari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Like us on Facebook"
              title="Facebook"
            >
              <FacebookIcon style={{ fontSize: '20px' }} />
            </a>
            <a
              href="https://www.instagram.com/emmanueluwamari/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Follow us on Instagram"
              title="Instagram"
            >
              <InstagramIcon style={{ fontSize: '20px' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/goddeyuwamri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Connect with us on LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon style={{ fontSize: '20px' }} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">© 2024 WayUP Technology. All Rights Reserved.</p>
          <p className="footer-tagline-bottom">Proudly Built With ♥ by WayUP Technology</p>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}

export default Footer;
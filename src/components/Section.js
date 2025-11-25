
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import "./Section.css";
import 'animate.css';

/**
 * Professional Section Component
 *
 * A versatile, reusable section component with multiple layout options and professional styling.
 * Supports both legacy pricing cards and modern content sections with flexible layouts.
 *
 * @param {string} className - Additional CSS classes (default: 'ruler' for legacy pricing)
 * @param {string} variant - Section variant: 'pricing' (default), 'dark', 'light'
 * @param {string} layout - Layout type: 'grid', 'two-column', 'three-column', 'four-column'
 * @param {object} header - Section header configuration: { badge, title, subtitle, titleHighlight }
 * @param {node} children - Section content (cards, features, stats, etc.)
 * @param {boolean} showPattern - Show background pattern (default: false)
 */
function Section({
  className = 'ruler',
  variant = 'pricing',
  layout = 'grid',
  header = null,
  children = null,
  showPattern = false
}) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    navigate(path);
  };

  // Legacy GridBox component for pricing cards
  const GridBox = ({ imageUrl, title, price, period, buttonText, features, animationClass }) => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    return (
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 300 }}
        onChange={(isVisible) => {
          if (isVisible && !isBoxVisible) setIsBoxVisible(true);
        }}
      >
        <div className={`grid-box ${isBoxVisible ? `animate__animated ${animationClass}` : ''}`}>
          <div className="upper-div">
            <img src={imageUrl} alt={`${title} Illustration`} />
            <VisibilitySensor
              partialVisibility
              offset={{ bottom: 300 }}
              onChange={(isVisible) => {
                if (isVisible && !isTitleVisible) setIsTitleVisible(true);
              }}
            >
              <h2 className={isTitleVisible ? 'animate__animated animate__slideInLeft animate__delay-1s' : ''}>
                {title}
              </h2>
            </VisibilitySensor>
            <p>Starting at:</p>
            <h3>{price}</h3>
            <p>{period}</p>
            <button onClick={() => handleNavigation('/contact')}>{buttonText}</button>
          </div>
          <div className="lower-div">
            {features.map((feature, index) => (
              <p key={index} className="feature-item">{feature}</p>
            ))}
          </div>
        </div>
      </VisibilitySensor>
    );
  };

  // Default pricing layout (legacy)
  if (variant === 'pricing') {
    return (
      <div className={className}>
        <div className="grid-container1">
          <GridBox
            imageUrl="images/photo4.png"
            title="WEBSITE DESIGN"
            price="$199"
            period="One Time"
            buttonText="All Plans"
            features={[
              "Custom Software Development",
              "Website Design",
              "Project Management",
              "Responsive Web Design",
              "Frontend Development",
              "Backend Development",
              "E-commerce Development",
              "User Experience (UX) Design",
              "Backup and Disaster Recovery",
              "Consulting and Support"
            ]}
          />

          <GridBox
            imageUrl="images/photo3.png"
            title="WEBSITE HOSTING"
            price="$5 per"
            period="Month"
            buttonText="Order Now"
            features={[
              "Website Hosting",
              "WordPress Hosting",
              "Email Hosting",
              "E-commerce Hosting",
              "Managed Services",
              "Domain Name Registration",
              "Scalable Database Solutions",
              "Monitoring and Alerting",
              "Compliance and Regulations",
              "Performance Optimization"
            ]}
          />

          <GridBox
            imageUrl="images/photo2.png"
            title="DIGITAL MARKETING"
            price="$199"
            period="Per Page"
            buttonText="All Plans"
            features={[
              "Search Engine Optimization",
              "Social Media Marketing",
              "Mobile Marketing",
              "Content Marketing",
              "Email Marketing",
              "Marketing Automation",
              "Data Analysis and Reporting",
              "Social Media Advertising",
              "Conversion Rate Optimization",
              "Influencer Marketing Campaigns"
            ]}
          />
        </div>
      </div>
    );
  }

  // Modern professional section layout
  const sectionClasses = `section-component ${variant === 'dark' ? 'section-dark' : 'section-light'} ${className}`;
  const contentClasses = layout === 'two-column' ? 'section-two-column' :
                         layout === 'three-column' ? 'section-three-column' :
                         layout === 'four-column' ? 'section-four-column' : '';

  return (
    <section className={sectionClasses}>
      {showPattern && <div className="section-pattern"></div>}

      <div className="section-container">
        {header && (
          <div className="section-header">
            {header.badge && <span className="section-badge">{header.badge}</span>}
            {header.title && (
              <h2 className="section-title">
                {header.titleHighlight ? (
                  <>
                    {header.title.split(header.titleHighlight)[0]}
                    <span className="highlight">{header.titleHighlight}</span>
                    {header.title.split(header.titleHighlight)[1]}
                  </>
                ) : (
                  header.title
                )}
              </h2>
            )}
            {header.subtitle && <p className="section-subtitle">{header.subtitle}</p>}
          </div>
        )}

        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
export const SectionCard = ({ icon, title, description, children, className = '' }) => {
  return (
    <div className={`section-card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

// Feature List Component
export const FeatureList = ({ features }) => {
  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <div className="feature-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M5.5 10.5L2 7l1-1 2.5 2.5L11 3l1 1-6.5 6.5z"/>
            </svg>
          </div>
          <span className="feature-text">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

// Stats Display Component
export const StatsGrid = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

// CTA Buttons Component
export const SectionCTA = ({ primary, secondary }) => {
  return (
    <div className="section-cta">
      {primary && (
        <a href={primary.href} className="cta-primary" onClick={primary.onClick}>
          {primary.text}
        </a>
      )}
      {secondary && (
        <a href={secondary.href} className="cta-secondary" onClick={secondary.onClick}>
          {secondary.text}
        </a>
      )}
    </div>
  );
};

// Image Component
export const SectionImage = ({ src, alt, withOverlay = false }) => {
  if (withOverlay) {
    return (
      <div className="image-container">
        <img src={src} alt={alt} className="section-image" />
        <div className="image-overlay"></div>
      </div>
    );
  }
  return <img src={src} alt={alt} className="section-image" />;
};

export default Section;
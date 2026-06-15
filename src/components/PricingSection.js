import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import './PricingSection.css';

const plans = [
  {
    name: "Starter Website",
    price: "$1,299",
    period: "One-time",
    tagline: "Perfect for small local businesses",
    highlight: false,
    cta: "Get Started",
    ctaLink: "/contact",
    features: [
      "Up to 5 pages",
      "Modern, mobile-responsive design",
      "Contact form + Google Maps integration",
      "Basic SEO setup & Google Business integration",
      "Fast loading & core web vitals optimization",
      "SSL certificate & basic security",
      "30 days of support & minor changes"
    ]
  },
  {
    name: "Business Package",
    price: "$2,999",
    period: "One-time",
    tagline: "Ideal for professional service businesses",
    highlight: true,
    badge: "Most Popular",
    cta: "Get Started",
    ctaLink: "/contact",
    features: [
      "Up to 15 pages",
      "Fully custom design aligned with your branding",
      "CMS — easy content editing",
      "Blog / News section",
      "Advanced SEO (on-page + technical)",
      "Google Analytics 4 + Search Console setup",
      "Lead capture forms + basic automation",
      "E-commerce ready (if needed later)",
      "90 days of support & training"
    ]
  },
  {
    name: "Custom Software",
    price: "$4,999+",
    period: "Starting at",
    tagline: "For complex needs & enterprise solutions",
    highlight: false,
    cta: "Let's Talk",
    ctaLink: "/contact",
    features: [
      "Unlimited pages & custom functionality",
      "Advanced web applications & custom features",
      "API integrations & third-party connections",
      "Database design & backend development",
      "User accounts, dashboards, booking systems",
      "CI/CD deployment & cloud infrastructure",
      "Ongoing maintenance & support options",
      "Dedicated project management"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="pricing-badge">Transparent Pricing</span>
          <h2 className="pricing-title">
            Simple, Honest <span className="pricing-highlight">Pricing</span>
          </h2>
          <p className="pricing-subtitle">
            No hidden fees. No surprises. Just professional software built around your business.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlight ? 'pricing-card--featured' : ''}`}>
              {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__tagline">{plan.tagline}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__period">{plan.period}</span>
                  <span className="pricing-card__amount">{plan.price}</span>
                </div>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-card__feature">
                    <FaCheck className="pricing-card__check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.ctaLink}
                state={{ scrollToTop: true }}
                className={`pricing-card__cta ${plan.highlight ? 'pricing-card__cta--featured' : ''}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Not sure which plan fits?{' '}
          <Link to="/contact" state={{ scrollToTop: true }} className="pricing-note__link">
            Book a free 15-minute call
          </Link>{' '}
          and we'll help you decide.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

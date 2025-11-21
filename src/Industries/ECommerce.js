import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, TrendingUp, Globe, CreditCard, Package, Smartphone, Search, Shield, Repeat, Sparkles, CheckCircle, ArrowRight, Users, BarChart4, Zap, Lock } from 'lucide-react';
import './ECommerce.css';

const ECommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroMetrics = [
    { value: '340%', label: 'Revenue Growth', icon: <TrendingUp /> },
    { value: '2.8x', label: 'Conversion Rate', icon: <ShoppingCart /> },
    { value: '99.9%', label: 'Uptime SLA', icon: <Zap /> },
    { value: '45ms', label: 'Page Load Time', icon: <BarChart4 /> }
  ];

  const features = [
    { icon: <Search />, title: 'Smart Search & Discovery', description: 'AI-powered product search with autocomplete' },
    { icon: <Lock />, title: 'Secure Checkout', description: 'PCI DSS compliant payment processing' },
    { icon: <Globe />, title: 'Multi-Region Support', description: 'Global CDN with 99.9% uptime' },
    { icon: <Repeat />, title: 'Subscription Engine', description: 'Recurring billing and subscriptions' }
  ];

  const solutions = [
    {
      icon: <ShoppingCart />,
      title: 'Custom E-Commerce Platforms',
      description: 'Headless commerce architectures, scalable microservices, and PWA storefronts for high-traffic retail operations.',
      tags: ['Headless', 'API-First', 'Progressive Web Apps']
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Commerce Apps',
      description: 'Native iOS and Android shopping apps with Apple Pay, Google Pay, one-click checkout, and push notifications.',
      tags: ['iOS', 'Android', 'React Native']
    },
    {
      icon: <CreditCard />,
      title: 'Payment Gateway Integration',
      description: 'Stripe, PayPal, Square, and cryptocurrency payment integrations with fraud detection and chargeback protection.',
      tags: ['Stripe', 'PayPal', 'Crypto Payments']
    },
    {
      icon: <Package />,
      title: 'Order Management Systems',
      description: 'Inventory sync, multi-warehouse fulfillment, shipping integration (FedEx, UPS, USPS), and returns processing.',
      tags: ['Inventory', 'Fulfillment', 'Logistics']
    },
    {
      icon: <Sparkles />,
      title: 'Personalization & Recommendations',
      description: 'Machine learning product recommendations, dynamic pricing, abandoned cart recovery, and customer segmentation.',
      tags: ['AI/ML', 'Recommendations', 'Retention']
    },
    {
      icon: <BarChart4 />,
      title: 'Analytics & Reporting',
      description: 'Real-time sales dashboards, customer lifetime value tracking, conversion funnel analysis, and A/B testing.',
      tags: ['Analytics', 'Dashboards', 'A/B Testing']
    }
  ];

  const platforms = [
    { name: 'Shopify Plus', logo: '🛒' },
    { name: 'Magento', logo: '🔶' },
    { name: 'BigCommerce', logo: '🏬' },
    { name: 'WooCommerce', logo: '🔌' },
    { name: 'Salesforce Commerce', logo: '☁️' },
    { name: 'Stripe', logo: '💳' },
    { name: 'PayPal', logo: '💰' },
    { name: 'Amazon AWS', logo: '🌐' }
  ];

  const caseStudyMetrics = [
    { value: '340%', label: 'Revenue Growth (YoY)' },
    { value: '4.2%', label: 'Conversion Rate' },
    { value: '$185', label: 'Average Order Value' },
    { value: '28%', label: 'Repeat Purchase Rate' }
  ];

  return (
    <div className="ecommerce-page">
      {/* Hero Section - Conversion-Focused */}
      <section className="ecom-hero">
        <div className="ecom-hero-left">
          <div className="ecom-hero-badge">
            <ShoppingCart className="badge-cart-icon" />
            <span>E-Commerce Engineering & Development</span>
          </div>
          <h1 className="ecom-hero-title">
            Build E-Commerce That Converts & Scales
          </h1>
          <p className="ecom-hero-subtitle">
            From custom storefronts to enterprise marketplaces, we engineer high-performance e-commerce solutions that drive revenue. Headless commerce, mobile apps, payment integrations, and conversion optimization built for scale.
          </p>
          <div className="ecom-hero-metrics-row">
            {heroMetrics.map((metric, index) => (
              <div key={index} className="ecom-hero-metric-box">
                <div className="metric-icon-circle">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="ecom-hero-actions">
            <Link to="/contact" state={{ scrollToTop: true }} className="ecom-btn-primary">
              <span>Get ROI Analysis</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/portfolio/work" state={{ scrollToTop: true }} className="ecom-btn-outline">View Success Stories</Link>
          </div>
        </div>
        <div className="ecom-hero-right">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
            alt="Modern e-commerce shopping experience on mobile and desktop devices"
            className="ecom-hero-image"
          />
          <div className="ecom-hero-testimonial-float">
            <div className="testimonial-quote">
              <div className="quote-mark">"</div>
              <p>WayUP rebuilt our entire e-commerce platform in 4 months. We saw a 340% increase in revenue within the first year.</p>
            </div>
            <div className="testimonial-author">
              <strong>Sarah Chen</strong>
              <span>VP of Digital, Luxury Fashion Brand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="ecom-features">
        <div className="ecom-container">
          <div className="ecom-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="ecom-feature-box">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - List View */}
      <section className="ecom-solutions">
        <div className="ecom-container">
          <div className="ecom-section-header">
            <h2 className="ecom-section-title">Complete E-Commerce Technology Stack</h2>
            <p className="ecom-section-subtitle">
              From custom storefronts to enterprise marketplaces, we build revenue-generating platforms
            </p>
          </div>
          <div className="ecom-solutions-list">
            {solutions.map((solution, index) => (
              <div key={index} className="ecom-solution-row">
                <div className="solution-row-left">
                  <div className="solution-row-icon">{solution.icon}</div>
                  <div className="solution-row-content">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    <div className="solution-tags">
                      {solution.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="solution-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to="/contact" state={{ scrollToTop: true }} className="solution-arrow-btn">
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Partners - Badge Wall */}
      <section className="ecom-platforms">
        <div className="ecom-container">
          <h2 className="platforms-title">Platform & Payment Partners</h2>
          <p className="platforms-subtitle">Expert integration with leading e-commerce platforms and payment gateways</p>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-badge">
                <div className="platform-logo">{platform.logo}</div>
                <div className="platform-name">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Horizontal Split */}
      <section className="ecom-case-study">
        <div className="ecom-container">
          <div className="case-study-badge">CLIENT SUCCESS</div>
          <h2 className="case-study-heading">Luxury Fashion Brand: E-Commerce Transformation</h2>
          <div className="case-study-split">
            <div className="case-study-story">
              <div className="story-section">
                <h4>The Challenge</h4>
                <p>
                  A luxury fashion brand with $50M in annual revenue was stuck on a legacy Magento 1 platform that couldn't scale during peak sales events. Cart abandonment was 78%, mobile conversion was only 0.8%, and their team spent 60% of time on manual order processing.
                </p>
              </div>
              <div className="story-section">
                <h4>The Solution</h4>
                <p>
                  WayUP architected a headless commerce solution using Next.js frontend, Shopify Plus backend, Stripe payments, Algolia search, and Klaviyo email automation. We built custom iOS/Android apps, implemented AI-powered product recommendations, and integrated with their existing ERP and warehouse systems.
                </p>
              </div>
              <div className="story-section">
                <h4>Technologies Used</h4>
                <div className="tech-pills">
                  <span className="tech-pill">Next.js</span>
                  <span className="tech-pill">Shopify Plus</span>
                  <span className="tech-pill">Stripe</span>
                  <span className="tech-pill">Algolia</span>
                  <span className="tech-pill">React Native</span>
                  <span className="tech-pill">AWS</span>
                </div>
              </div>
            </div>
            <div className="case-study-metrics">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80"
                alt="Luxury fashion retail store with modern digital displays"
                className="case-study-img"
              />
              <div className="metrics-overlay">
                <h4>Key Results</h4>
                <div className="metrics-grid">
                  {caseStudyMetrics.map((metric, index) => (
                    <div key={index} className="metric-box">
                      <div className="metric-box-value">{metric.value}</div>
                      <div className="metric-box-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="additional-results">
                  <div className="result-item">
                    <CheckCircle className="result-check" />
                    <span>Reduced cart abandonment to 32%</span>
                  </div>
                  <div className="result-item">
                    <CheckCircle className="result-check" />
                    <span>Mobile revenue increased 480%</span>
                  </div>
                  <div className="result-item">
                    <CheckCircle className="result-check" />
                    <span>Automated 95% of order processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Box */}
      <section className="ecom-cta">
        <div className="ecom-container">
          <div className="ecom-cta-gradient-box">
            <div className="cta-box-left">
              <h2>Ready to Transform Your E-Commerce Revenue?</h2>
              <p>
                Partner with WayUP to build a high-converting, scalable e-commerce platform that drives growth. From strategy to deployment, we handle the entire technology stack.
              </p>
              <ul className="cta-benefits-list">
                <li>
                  <CheckCircle className="benefit-check" />
                  <span>Free conversion audit & technical roadmap</span>
                </li>
                <li>
                  <CheckCircle className="benefit-check" />
                  <span>Dedicated e-commerce engineering team</span>
                </li>
                <li>
                  <CheckCircle className="benefit-check" />
                  <span>Fixed-price project or monthly retainer options</span>
                </li>
              </ul>
              <Link to="/contact" state={{ scrollToTop: true }} className="ecom-cta-btn">
                Schedule Strategy Call
                <ArrowRight className="btn-icon" />
              </Link>
            </div>
            <div className="cta-box-right">
              <div className="cta-trust-stats">
                <div className="trust-stat">
                  <ShoppingCart className="trust-icon" />
                  <div className="trust-value">$2.4B+</div>
                  <div className="trust-label">GMV Processed</div>
                </div>
                <div className="trust-stat">
                  <Users className="trust-icon" />
                  <div className="trust-value">120+</div>
                  <div className="trust-label">E-Commerce Clients</div>
                </div>
                <div className="trust-stat">
                  <Shield className="trust-icon" />
                  <div className="trust-value">PCI DSS</div>
                  <div className="trust-label">Level 1 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce;

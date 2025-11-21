import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, MapPin, Clock, TrendingUp, Globe, Route, BarChart3, Warehouse, Zap, Shield, Users, CheckCircle, ArrowRight, Radio, Compass, Navigation } from 'lucide-react';
import './Logistics.css';

const Logistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroStats = [
    { icon: <Package />, value: '15M+', label: 'Shipments Tracked' },
    { icon: <Clock />, value: '98.5%', label: 'On-Time Delivery' },
    { icon: <Globe />, value: '180+', label: 'Countries Served' },
    { icon: <TrendingUp />, value: '35%', label: 'Cost Reduction' }
  ];

  const capabilities = [
    {
      icon: <Route />,
      title: 'Route Optimization',
      description: 'AI-powered routing algorithms that reduce delivery time by 30% and fuel costs by 25% through dynamic route planning.',
      color: 'blue'
    },
    {
      icon: <Warehouse />,
      title: 'Warehouse Management',
      description: 'End-to-end WMS solutions with barcode scanning, inventory tracking, pick/pack optimization, and automated replenishment.',
      color: 'green'
    },
    {
      icon: <Radio />,
      title: 'Fleet Tracking & Telematics',
      description: 'Real-time GPS tracking, driver behavior monitoring, fuel management, and predictive maintenance for your entire fleet.',
      color: 'orange'
    },
    {
      icon: <BarChart3 />,
      title: 'Supply Chain Analytics',
      description: 'Comprehensive dashboards, KPI tracking, demand forecasting, and business intelligence for data-driven logistics decisions.',
      color: 'purple'
    },
    {
      icon: <Package />,
      title: 'Last-Mile Delivery',
      description: 'Customer notifications, proof of delivery, dynamic ETA updates, and route optimization for final-mile efficiency.',
      color: 'teal'
    },
    {
      icon: <Shield />,
      title: 'Compliance & Safety',
      description: 'ELD compliance, hours of service tracking, DOT regulations, safety scoring, and automated reporting.',
      color: 'red'
    }
  ];

  const integrations = [
    { name: 'SAP TMS', type: 'Enterprise' },
    { name: 'Oracle SCM', type: 'Enterprise' },
    { name: 'ShipStation', type: 'Shipping' },
    { name: 'FedEx API', type: 'Carrier' },
    { name: 'UPS API', type: 'Carrier' },
    { name: 'DHL API', type: 'Carrier' },
    { name: 'EasyPost', type: 'Shipping' },
    { name: 'Shopify', type: 'E-Commerce' }
  ];

  const benefits = [
    { icon: <TrendingUp />, title: '35% Cost Reduction', description: 'Lower fuel, labor, and operational costs' },
    { icon: <Clock />, title: '40% Faster Delivery', description: 'Optimized routes and automated workflows' },
    { icon: <BarChart3 />, title: 'Real-Time Visibility', description: 'Track every shipment across the supply chain' },
    { icon: <Users />, title: 'Better Customer Experience', description: 'Proactive notifications and accurate ETAs' }
  ];

  const processSteps = [
    { number: '01', title: 'Order Received', description: 'Automatic order ingestion from multiple channels' },
    { number: '02', title: 'Route Optimized', description: 'AI algorithms calculate optimal delivery routes' },
    { number: '03', title: 'Dispatched', description: 'Driver receives route and loads shipments' },
    { number: '04', title: 'Live Tracking', description: 'Real-time GPS updates and customer notifications' },
    { number: '05', title: 'Proof of Delivery', description: 'Digital signature and photo confirmation' }
  ];

  return (
    <div className="logistics-page">
      {/* Hero Section - Diagonal Split */}
      <section className="log-hero">
        <div className="log-hero-diagonal-bg"></div>
        <div className="log-hero-content">
          <div className="log-hero-text-section">
            <div className="log-hero-label">
              <Truck className="label-truck-icon" />
              <span>Supply Chain & Logistics Technology</span>
            </div>
            <h1 className="log-hero-title">
              Smart Logistics Software That Moves Your Business Forward
            </h1>
            <p className="log-hero-subtitle">
              Transform your supply chain with intelligent routing, real-time tracking, warehouse automation, and predictive analytics. Built for freight, last-mile delivery, and enterprise logistics operations.
            </p>
            <div className="log-hero-buttons">
              <Link to="/contact" state={{ scrollToTop: true }} className="log-btn-primary">
                Request Demo
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/contact" state={{ scrollToTop: true }} className="log-btn-secondary">Watch Platform Tour</Link>
            </div>
          </div>
          <div className="log-hero-stats-grid">
            {heroStats.map((stat, index) => (
              <div key={index} className="log-hero-stat-card">
                <div className="stat-card-icon">{stat.icon}</div>
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section - 2-Column Card Grid */}
      <section className="log-capabilities">
        <div className="log-container">
          <div className="log-section-header">
            <h2 className="log-section-title">Comprehensive Logistics Solutions</h2>
            <p className="log-section-subtitle">
              Complete technology platform for freight, warehousing, and last-mile delivery
            </p>
          </div>
          <div className="log-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className={`log-capability-card capability-${capability.color}`}>
                <div className="capability-icon-box">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Horizontal */}
      <section className="log-process">
        <div className="log-container">
          <h2 className="log-section-title">How It Works: Order to Delivery</h2>
          <div className="log-process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Icon Grid */}
      <section className="log-benefits">
        <div className="log-container">
          <h2 className="log-section-title-light">Why Leading Logistics Companies Choose WayUP</h2>
          <div className="log-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="log-benefit-box">
                <div className="benefit-icon-circle">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Badge Grid */}
      <section className="log-integrations">
        <div className="log-container">
          <h2 className="log-section-title">Seamless Integrations</h2>
          <p className="log-section-subtitle">
            Connect with your existing TMS, ERP, and shipping carrier systems
          </p>
          <div className="log-integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-badge">
                <div className="integration-name">{integration.name}</div>
                <div className="integration-type">{integration.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Full Width Image Background */}
      <section className="log-case-study">
        <div className="case-study-image-bg">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80"
            alt="Modern logistics warehouse with automated systems"
            className="case-bg-img"
          />
          <div className="case-study-overlay"></div>
        </div>
        <div className="log-container">
          <div className="case-study-content-box">
            <div className="case-study-tag">SUCCESS STORY</div>
            <h2 className="case-study-title">National Freight Company: Digital Transformation</h2>
            <div className="case-study-grid">
              <div className="case-study-col">
                <h4>The Challenge</h4>
                <p>
                  A national freight company with 500+ trucks and 15 distribution centers struggled with manual dispatch, poor route efficiency, and no real-time visibility. They were losing customers due to inconsistent delivery times and lack of tracking updates.
                </p>
              </div>
              <div className="case-study-col">
                <h4>The Solution</h4>
                <p>
                  WayUP deployed an integrated TMS platform with AI route optimization, real-time fleet tracking, automated dispatch, customer portal, and mobile driver app. We integrated with their existing ERP and all major carrier APIs.
                </p>
              </div>
            </div>
            <div className="case-study-results">
              <div className="result-box">
                <div className="result-value">42%</div>
                <div className="result-label">Fuel Cost Reduction</div>
              </div>
              <div className="result-box">
                <div className="result-value">98.5%</div>
                <div className="result-label">On-Time Delivery Rate</div>
              </div>
              <div className="result-box">
                <div className="result-value">$2.8M</div>
                <div className="result-label">Annual Savings</div>
              </div>
              <div className="result-box">
                <div className="result-value">6 months</div>
                <div className="result-label">ROI Timeline</div>
              </div>
            </div>
            <div className="case-study-features">
              <div className="feature-item">
                <CheckCircle className="feature-check" />
                <span>500+ vehicles tracked in real-time</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-check" />
                <span>Automated route optimization & dispatch</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-check" />
                <span>Customer portal with live tracking</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-check" />
                <span>Mobile app for drivers with ELD compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Side-by-Side */}
      <section className="log-cta">
        <div className="log-container">
          <div className="log-cta-wrapper">
            <div className="log-cta-left">
              <div className="cta-icon-stack">
                <Compass className="cta-compass" />
              </div>
            </div>
            <div className="log-cta-right">
              <h2>Ready to Optimize Your Logistics Operations?</h2>
              <p>
                Join 500+ logistics companies using WayUP's platform to reduce costs, improve delivery times, and enhance customer satisfaction. Get a personalized demo and see how we can transform your supply chain.
              </p>
              <ul className="cta-checklist">
                <li>
                  <CheckCircle className="cta-check" />
                  <span>Free 30-day trial with full platform access</span>
                </li>
                <li>
                  <CheckCircle className="cta-check" />
                  <span>Dedicated onboarding and training</span>
                </li>
                <li>
                  <CheckCircle className="cta-check" />
                  <span>No long-term contracts, cancel anytime</span>
                </li>
              </ul>
              <div className="cta-action-group">
                <Link to="/contact" state={{ scrollToTop: true }} className="log-cta-primary">
                  Schedule Demo
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link to="/contact" state={{ scrollToTop: true }} className="log-cta-outline">Contact Sales</Link>
              </div>
              <div className="cta-trust-line">
                <Shield className="trust-shield" />
                <span>Trusted by 500+ logistics companies worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;

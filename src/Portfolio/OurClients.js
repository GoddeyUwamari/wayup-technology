import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Scissors,
  Scale,
  Home,
  HardHat,
  ShoppingBag,
  Users,
  Star,
  CheckCircle,
  Rocket,
  Shield,
  TrendingUp,
  Clock,
  Award,
  User,
  MessageSquare
} from 'lucide-react';
import './OurClients.css';

const OurClients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Award />, value: '16+', label: 'Years Experience' },
    { icon: <CheckCircle />, value: '100%', label: 'Client Satisfaction' },
    { icon: <Clock />, value: '2 Weeks', label: 'Average Launch Time' },
    { icon: <Shield />, value: '$1,299', label: 'Starting Price' }
  ];

  const clientLogos = [
    { icon: <Utensils />, name: 'Restaurant Client', industry: 'Food & Beverage — New Jersey' },
    { icon: <Scissors />, name: 'Salon Client', industry: 'Beauty & Wellness — New York' },
    { icon: <Scale />, name: 'Law Firm Client', industry: 'Legal Services — New Jersey' },
    { icon: <Home />, name: 'Real Estate Client', industry: 'Real Estate — New York' },
    { icon: <HardHat />, name: 'Contractor Client', industry: 'Construction & Trades — New Jersey' },
    { icon: <ShoppingBag />, name: 'Retail Client', industry: 'Retail & E-Commerce — New York' },
    { icon: <Utensils />, name: 'Cafe Client', industry: 'Food & Beverage — New Jersey' },
    { icon: <Scale />, name: 'Consulting Firm', industry: 'Professional Services — New York' },
    { icon: <HardHat />, name: 'Roofing Client', industry: 'Home Services — New Jersey' },
    { icon: <Home />, name: 'Property Manager', industry: 'Real Estate — New York' },
    { icon: <Scissors />, name: 'Spa Client', industry: 'Beauty & Wellness — New Jersey' },
    { icon: <ShoppingBag />, name: 'Boutique Client', industry: 'Fashion Retail — New York' }
  ];

  const testimonials = [
    {
      quote: "WayUP built our restaurant website in under two weeks. We started getting online orders and new customers finding us on Google almost immediately. Best investment we made for the business.",
      name: "Restaurant Owner",
      title: "Owner",
      company: "New Jersey Restaurant",
      rating: 5,
      placeholder: true
    },
    {
      quote: "Our salon needed a website that let clients book appointments online. WayUP delivered exactly that — clean, professional, and easy for our clients to use. Our bookings have increased significantly.",
      name: "Salon Owner",
      title: "Owner",
      company: "New York Salon",
      rating: 5,
      placeholder: true
    },
    {
      quote: "As a contractor, I was skeptical about spending money on a website. WayUP convinced me with their straightforward pricing and delivered a site that actually brings in leads. Worth every penny.",
      name: "Contractor",
      title: "Owner",
      company: "New Jersey Contracting",
      rating: 5,
      placeholder: true
    },
    {
      quote: "I needed a professional website for my law firm quickly. WayUP was responsive, understood exactly what I needed, and delivered a site that gives our firm the credibility we needed online.",
      name: "Attorney",
      title: "Managing Partner",
      company: "New Jersey Law Firm",
      rating: 5,
      placeholder: true
    }
  ];

  const industries = [
    {
      icon: <Utensils />,
      name: 'Restaurants & Cafes',
      description: 'Online menus, ordering systems & Google presence'
    },
    {
      icon: <Scissors />,
      name: 'Salons & Spas',
      description: 'Online booking, client management & branding'
    },
    {
      icon: <Scale />,
      name: 'Law Firms',
      description: 'Professional websites & client intake systems'
    },
    {
      icon: <Home />,
      name: 'Real Estate',
      description: 'Property listings & lead generation sites'
    },
    {
      icon: <HardHat />,
      name: 'Contractors & Trades',
      description: 'Portfolio sites, lead capture & job scheduling'
    },
    {
      icon: <ShoppingBag />,
      name: 'Retail & E-Commerce',
      description: 'Online stores, inventory & payment systems'
    },
    {
      icon: <Users />,
      name: 'Consultants',
      description: 'Authority-building sites & lead funnels'
    },
    {
      icon: <MessageSquare />,
      name: 'Personal Services',
      description: 'Booking systems & customer management tools'
    }
  ];

  return (
    <div className="clients-page">

      {/* Hero Section */}
      <section className="clients-hero">
        <div className="clients-hero-container">
          <h1 className="clients-hero-title">
            Real Businesses, <span className="clients-gradient-text">Real Results</span>
          </h1>
          <p className="clients-hero-desc">
            We build websites and software for local businesses across New Jersey and New York.
            Fast turnaround, honest pricing, and results you can measure.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="clients-stats">
        <div className="clients-container">
          <div className="clients-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="clients-stat-card">
                <div className="clients-stat-icon">{stat.icon}</div>
                <div className="clients-stat-value">{stat.value}</div>
                <div className="clients-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="clients-logos">
        <div className="clients-container">
          <div className="clients-section-header">
            <span className="clients-label">Who We Work With</span>
            <h2 className="clients-section-title">Businesses We've Helped</h2>
            <p className="clients-section-subtitle">
              Local businesses across New Jersey and New York trusting WayUP to build their online presence
            </p>
          </div>

          <div className="clients-logos-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="clients-logo-card">
                <div className="clients-logo-icon">{client.icon}</div>
                <h3 className="clients-logo-name">{client.name}</h3>
                <p className="clients-logo-industry">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="clients-testimonials">
        <div className="clients-container">
          <div className="clients-section-header">
            <span className="clients-label">Client Feedback</span>
            <h2 className="clients-section-title">What Our Clients Say</h2>
            <p className="clients-section-subtitle">
              Honest feedback from local business owners we've worked with
            </p>
          </div>

          <div className="clients-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="clients-testimonial-card">
                <div className="clients-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#ef5a16" color="#ef5a16" />
                  ))}
                </div>
                <p className="clients-testimonial-quote">"{testimonial.quote}"</p>
                <div className="clients-testimonial-author">
                  <div className="clients-testimonial-avatar">
                    <User size={24} />
                  </div>
                  <div className="clients-testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                    <p className="clients-testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="clients-industries">
        <div className="clients-container">
          <div className="clients-section-header">
            <span className="clients-label">Industries We Serve</span>
            <h2 className="clients-section-title">Built for Your Business</h2>
            <p className="clients-section-subtitle">
              We specialize in websites and software for local service businesses
            </p>
          </div>

          <div className="clients-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="clients-industry-card">
                <div className="clients-industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clients-cta">
        <div className="clients-cta-container">
          <div className="clients-cta-content">
            <div className="clients-cta-badge">
              <Shield size={20} />
              <span>Trusted by Local Businesses Across NJ & NY</span>
            </div>
            <h2>Ready to Grow Your Business Online?</h2>
            <p>
              Join local businesses across New Jersey and New York who chose WayUP
              to build their online presence. Starting at $1,299 — launched in 2 weeks.
            </p>
            <div className="clients-cta-actions">
              <Link
                to="/contact"
                state={{ scrollToTop: true }}
                className="clients-cta-btn-primary"
              >
                <span>Get a Free Consultation</span>
                <Rocket size={20} />
              </Link>
              <Link
                to="/contact"
                state={{ scrollToTop: true }}
                className="clients-cta-btn-secondary"
              >
                <TrendingUp size={20} />
                <span>See Pricing</span>
              </Link>
            </div>
            <div className="clients-cta-benefits">
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>Free project consultation</span>
              </div>
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>No hidden fees</span>
              </div>
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>Launched in 2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurClients;
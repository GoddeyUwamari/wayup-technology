import { useEffect } from 'react';
import {
  Building2,
  Hospital,
  ShoppingCart,
  Landmark,
  Factory,
  GraduationCap,
  Plane,
  Truck,
  Zap,
  Globe,
  Users,
  Award,
  Star,
  CheckCircle,
  Rocket,
  Shield,
  TrendingUp,
  Target,
  Heart,
  Cpu,
  Briefcase,
  Coffee,
  User
} from 'lucide-react';
import './OurClients.css';

const OurClients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Users />, value: '150+', label: 'Active Clients' },
    { icon: <TrendingUp />, value: '98%', label: 'Client Retention Rate' },
    { icon: <Globe />, value: '25+', label: 'Countries Served' },
    { icon: <Star />, value: '4.9/5', label: 'Average Rating' }
  ];

  const clientLogos = [
    { icon: <Building2 />, name: 'TechCorp', industry: 'Technology' },
    { icon: <Hospital />, name: 'MediCare Plus', industry: 'Healthcare' },
    { icon: <ShoppingCart />, name: 'RetailHub', industry: 'E-Commerce' },
    { icon: <Landmark />, name: 'FinanceFirst', industry: 'Banking' },
    { icon: <Factory />, name: 'IndustrialMax', industry: 'Manufacturing' },
    { icon: <GraduationCap />, name: 'EduLearn Pro', industry: 'Education' },
    { icon: <Plane />, name: 'SkyWings', industry: 'Aviation' },
    { icon: <Truck />, name: 'LogiTrans', industry: 'Logistics' },
    { icon: <Cpu />, name: 'AI Dynamics', industry: 'AI Solutions' },
    { icon: <Briefcase />, name: 'ConsultPro', industry: 'Consulting' },
    { icon: <Coffee />, name: 'HospitalityHub', industry: 'Hospitality' },
    { icon: <Zap />, name: 'EnergyCore', industry: 'Energy' },
    { icon: <Heart />, name: 'HealthFirst', industry: 'Healthcare' },
    { icon: <Globe />, name: 'GlobalTech', industry: 'Technology' },
    { icon: <Target />, name: 'MarketReach', industry: 'Marketing' },
    { icon: <Award />, name: 'EliteServices', industry: 'Premium Services' }
  ];

  const testimonials = [
    {
      quote: "WayUP transformed our legacy system into a modern, cloud-based platform. Our operations are now 10x faster and more efficient than ever before!",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Their AI solutions reduced our operational costs by 45% within the first quarter. The ROI was incredible and exceeded all our expectations.",
      name: "Michael Chen",
      title: "CEO",
      company: "MediCare Plus",
      rating: 5
    },
    {
      quote: "Best development partner we've worked with in 15 years. Always on time, on budget, and the quality is consistently exceptional.",
      name: "Emily Rodriguez",
      title: "VP of Engineering",
      company: "RetailHub",
      rating: 5
    },
    {
      quote: "WayUP's mobile app transformed our customer engagement. Downloads increased 300% and user satisfaction scores jumped to 4.8 stars.",
      name: "David Thompson",
      title: "Chief Digital Officer",
      company: "FinanceFirst",
      rating: 5
    },
    {
      quote: "The UI/UX redesign they delivered was phenomenal. Our bounce rate dropped 40% and conversions increased by 65%. Game-changing results!",
      name: "Lisa Martinez",
      title: "Head of Product",
      company: "IndustrialMax",
      rating: 5
    },
    {
      quote: "Outstanding team! They understood our complex requirements and delivered a custom solution that perfectly fits our enterprise needs.",
      name: "James Wilson",
      title: "Director of IT",
      company: "EduLearn Pro",
      rating: 5
    }
  ];

  const industries = [
    {
      icon: <Hospital />,
      name: 'Healthcare',
      clients: '25+',
      description: 'Digital health platforms & telemedicine'
    },
    {
      icon: <Landmark />,
      name: 'Finance & Banking',
      clients: '30+',
      description: 'Fintech solutions & digital banking'
    },
    {
      icon: <ShoppingCart />,
      name: 'E-commerce & Retail',
      clients: '35+',
      description: 'Online marketplaces & POS systems'
    },
    {
      icon: <Factory />,
      name: 'Manufacturing',
      clients: '20+',
      description: 'Industry 4.0 & IoT solutions'
    },
    {
      icon: <GraduationCap />,
      name: 'Education',
      clients: '18+',
      description: 'E-learning platforms & LMS'
    },
    {
      icon: <Building2 />,
      name: 'Government',
      clients: '12+',
      description: 'Public sector digital transformation'
    },
    {
      icon: <Truck />,
      name: 'Logistics',
      clients: '22+',
      description: 'Supply chain & fleet management'
    },
    {
      icon: <Coffee />,
      name: 'Hospitality',
      clients: '15+',
      description: 'Hotel management & booking systems'
    }
  ];

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero">
        <div className="clients-hero-bg-grid"></div>
        <div className="clients-hero-container">
          <h1 className="clients-hero-title">
            Our <span className="clients-gradient-text">Trusted Clients</span>
          </h1>
          <p className="clients-hero-desc">
            Partnering with industry leaders to deliver exceptional digital solutions
            that drive innovation, efficiency, and transformative business growth.
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
            <span className="clients-label">Our Partners</span>
            <h2 className="clients-section-title">Trusted by Leading Brands</h2>
            <p className="clients-section-subtitle">
              From startups to Fortune 500 companies, we deliver excellence
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
            <span className="clients-label">Success Stories</span>
            <h2 className="clients-section-title">What Our Clients Say</h2>
            <p className="clients-section-subtitle">
              Real feedback from real clients who trusted us with their vision
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
            <span className="clients-label">Expertise Across Sectors</span>
            <h2 className="clients-section-title">Industries We Serve</h2>
            <p className="clients-section-subtitle">
              Deep domain expertise delivering tailored solutions for every sector
            </p>
          </div>

          <div className="clients-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="clients-industry-card">
                <div className="clients-industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <div className="clients-industry-count">{industry.clients} Clients</div>
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
              <span>Fortune 500 Companies Trust Us</span>
            </div>
            <h2>Ready to Join Our Success Stories?</h2>
            <p>
              Partner with WayUP and transform your digital vision into reality.
              Join 150+ satisfied clients who chose excellence.
            </p>
            <div className="clients-cta-actions">
              <button className="clients-cta-btn-primary">
                <span>Start Your Project</span>
                <Rocket size={20} />
              </button>
              <button className="clients-cta-btn-secondary">
                <Users size={20} />
                <span>Schedule Consultation</span>
              </button>
            </div>
            <div className="clients-cta-benefits">
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>Free project assessment</span>
              </div>
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>Dedicated account manager</span>
              </div>
              <div className="clients-cta-benefit">
                <CheckCircle size={18} />
                <span>24/7 premium support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;

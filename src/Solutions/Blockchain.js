import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link2, Lock, Database, Coins, FileCheck, TrendingUp, Users, Zap, Shield, CheckCircle, Globe, Layers, Briefcase, ShoppingCart, Building } from 'lucide-react';
import './Blockchain.css';

const Blockchain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blockchainSolutions = [
    {
      icon: <Coins className="bc-solution-icon" />,
      title: 'Cryptocurrency & Digital Assets',
      description: 'Create custom cryptocurrencies, tokens, and digital asset platforms with secure wallet integration and trading capabilities.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)'
    },
    {
      icon: <FileCheck className="bc-solution-icon" />,
      title: 'Smart Contracts',
      description: 'Automate agreements and transactions with self-executing smart contracts on Ethereum, Solidity, and other platforms.',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      icon: <Link2 className="bc-solution-icon" />,
      title: 'Supply Chain Management',
      description: 'Track products from origin to destination with immutable records, ensuring transparency and authenticity.',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
    },
    {
      icon: <Shield className="bc-solution-icon" />,
      title: 'Decentralized Finance (DeFi)',
      description: 'Build DeFi platforms for lending, borrowing, staking, and yield farming with automated market makers.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
    },
    {
      icon: <Database className="bc-solution-icon" />,
      title: 'Private Blockchain Networks',
      description: 'Deploy permissioned blockchain networks for enterprise use with controlled access and governance.',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
    },
    {
      icon: <Users className="bc-solution-icon" />,
      title: 'NFT Marketplaces',
      description: 'Launch NFT platforms for digital art, collectibles, gaming assets, and tokenized real-world assets.',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)'
    }
  ];

  const keyFeatures = [
    {
      icon: <Lock className="feature-icon" />,
      title: 'Immutable Security',
      description: 'Cryptographic security ensures data cannot be altered or tampered with once recorded.'
    },
    {
      icon: <Globe className="feature-icon" />,
      title: 'Decentralization',
      description: 'Eliminate single points of failure with distributed consensus mechanisms.'
    },
    {
      icon: <Zap className="feature-icon" />,
      title: 'Fast Transactions',
      description: 'Process transactions in seconds with high throughput blockchain networks.'
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: 'Cost Reduction',
      description: 'Reduce intermediary costs and streamline processes with automated execution.'
    }
  ];

  const useCases = [
    {
      icon: <ShoppingCart className="usecase-icon" />,
      industry: 'Retail & E-Commerce',
      applications: ['Product authentication', 'Loyalty programs', 'Payment processing', 'Supply chain tracking']
    },
    {
      icon: <Briefcase className="usecase-icon" />,
      industry: 'Finance & Banking',
      applications: ['Cross-border payments', 'Trade finance', 'Identity verification', 'Securities settlement']
    },
    {
      icon: <Building className="usecase-icon" />,
      industry: 'Real Estate',
      applications: ['Property tokenization', 'Title management', 'Smart escrow', 'Fractional ownership']
    },
    {
      icon: <Layers className="usecase-icon" />,
      industry: 'Healthcare',
      applications: ['Medical records', 'Drug traceability', 'Clinical trials', 'Insurance claims']
    }
  ];

  const platforms = [
    { name: 'Ethereum', logo: 'ETH' },
    { name: 'Hyperledger', logo: 'HL' },
    { name: 'Binance Smart Chain', logo: 'BSC' },
    { name: 'Polygon', logo: 'MATIC' },
    { name: 'Solana', logo: 'SOL' },
    { name: 'Cardano', logo: 'ADA' }
  ];

  const benefits = [
    { value: '99.99%', label: 'Uptime', description: 'Network reliability' },
    { value: '100%', label: 'Transparent', description: 'Full auditability' },
    { value: '50%', label: 'Cost Savings', description: 'Average reduction' },
    { value: '10x', label: 'Faster', description: 'Than traditional systems' }
  ];

  const caseStudy = {
    company: 'Global Supply Chain Corporation',
    industry: 'Logistics & Transportation',
    challenge: 'Tracking 500,000+ shipments across 50 countries with lack of transparency, frequent disputes, and counterfeit products causing $15M annual losses.',
    solution: 'Implemented blockchain-based supply chain platform with smart contracts for automated verification, real-time tracking, and immutable record-keeping across all partners.',
    results: [
      { metric: '100%', label: 'Traceability', description: 'End-to-end visibility' },
      { metric: '85%', label: 'Dispute Reduction', description: 'Automated verification' },
      { metric: '$12M', label: 'Annual Savings', description: 'Reduced fraud & delays' },
      { metric: '3 Days', label: 'Faster Processing', description: 'Average improvement' }
    ],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
  };

  return (
    <div className="blockchain">
      {/* Hero Section */}
      <section className="bc-hero">
        <div className="bc-hero-grid-bg"></div>
        <div className="bc-container">
          <div className="bc-hero-content">
            <div className="bc-hero-badge">
              <Link2 size={16} />
              <span>Distributed Ledger Technology</span>
            </div>
            <h1 className="bc-hero-title">
              Blockchain Solutions<br />
              <span className="bc-hero-gradient">Built for the Future</span>
            </h1>
            <p className="bc-hero-subtitle">
              Transform your business with secure, transparent, and decentralized blockchain
              technology that eliminates intermediaries and builds trust.
            </p>
            <div className="bc-hero-buttons">
              <Link to="/contact" state={{ scrollToTop: true }} className="bc-btn bc-btn-primary">
                <span>Start Your Project</span>
                <Zap size={20} />
              </Link>
              <Link to="/portfolio/work" state={{ scrollToTop: true }} className="bc-btn bc-btn-secondary">
                <span>Explore Use Cases</span>
              </Link>
            </div>

            {/* Benefits Grid */}
            <div className="bc-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="bc-benefit-item">
                  <div className="bc-benefit-value">{benefit.value}</div>
                  <div className="bc-benefit-label">{benefit.label}</div>
                  <div className="bc-benefit-desc">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bc-hero-visual">
            <div className="bc-blockchain-cube">
              <div className="bc-cube-face bc-cube-front"></div>
              <div className="bc-cube-face bc-cube-back"></div>
              <div className="bc-cube-face bc-cube-right"></div>
              <div className="bc-cube-face bc-cube-left"></div>
              <div className="bc-cube-face bc-cube-top"></div>
              <div className="bc-cube-face bc-cube-bottom"></div>
            </div>
            <div className="bc-blockchain-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="bc-particle" style={{
                  '--delay': `${i * 0.2}s`,
                  '--x': `${Math.random() * 200 - 100}px`,
                  '--y': `${Math.random() * 200 - 100}px`
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bc-solutions">
        <div className="bc-container">
          <div className="bc-section-header">
            <span className="bc-section-label">Our Solutions</span>
            <h2 className="bc-section-title">Comprehensive Blockchain Services</h2>
            <p className="bc-section-subtitle">
              End-to-end blockchain development and implementation across multiple platforms and use cases
            </p>
          </div>

          <div className="bc-solutions-grid">
            {blockchainSolutions.map((solution, index) => (
              <div key={index} className="bc-solution-card">
                <div className="bc-solution-icon-wrapper" style={{ background: solution.gradient }}>
                  {solution.icon}
                </div>
                <h3 className="bc-solution-title">{solution.title}</h3>
                <p className="bc-solution-description">{solution.description}</p>
                <div className="bc-solution-link">
                  Learn More <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bc-features">
        <div className="bc-container">
          <div className="bc-features-layout">
            <div className="bc-features-content">
              <span className="bc-section-label">Why Blockchain?</span>
              <h2 className="bc-section-title">
                Revolutionary Technology<br />
                for Modern Business
              </h2>
              <p className="bc-features-text">
                Blockchain technology offers unprecedented security, transparency, and efficiency.
                By distributing data across a network of computers, blockchain creates an
                immutable record that cannot be altered retroactively, building trust and
                eliminating the need for intermediaries.
              </p>

              <div className="bc-features-grid">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="bc-feature-item">
                    <div className="bc-feature-icon-bg">
                      {feature.icon}
                    </div>
                    <div className="bc-feature-content">
                      <h4 className="bc-feature-title">{feature.title}</h4>
                      <p className="bc-feature-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bc-features-visual">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=700&q=80"
                alt="Abstract blockchain network visualization with connected nodes and data flow"
                className="bc-features-image"
              />
              <div className="bc-features-badge">
                <div className="bc-badge-icon">
                  <Link2 size={28} />
                </div>
                <div className="bc-badge-text">
                  <div className="bc-badge-title">Distributed Ledger</div>
                  <div className="bc-badge-subtitle">Immutable & Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bc-platforms">
        <div className="bc-container">
          <div className="bc-section-header">
            <span className="bc-section-label">Technology Stack</span>
            <h2 className="bc-section-title">Leading Blockchain Platforms</h2>
            <p className="bc-section-subtitle">
              Expert development across major blockchain ecosystems
            </p>
          </div>

          <div className="bc-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="bc-platform-card">
                <div className="bc-platform-logo">{platform.logo}</div>
                <div className="bc-platform-name">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bc-usecases">
        <div className="bc-container">
          <div className="bc-section-header">
            <span className="bc-section-label bc-label-light">Industry Applications</span>
            <h2 className="bc-section-title bc-title-light">Blockchain Across Industries</h2>
          </div>

          <div className="bc-usecases-grid">
            {useCases.map((usecase, index) => (
              <div key={index} className="bc-usecase-card">
                <div className="bc-usecase-icon-wrapper">
                  {usecase.icon}
                </div>
                <h3 className="bc-usecase-industry">{usecase.industry}</h3>
                <div className="bc-usecase-apps">
                  {usecase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="bc-usecase-app">
                      <CheckCircle size={16} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bc-case-study">
        <div className="bc-container">
          <div className="bc-section-header">
            <span className="bc-section-label">Success Story</span>
            <h2 className="bc-section-title">Real-World Impact</h2>
          </div>

          <div className="bc-case-layout">
            <div className="bc-case-image-section">
              <img
                src={caseStudy.image}
                alt="Blockchain supply chain tracking dashboard showing real-time shipment data"
                className="bc-case-image"
              />
              <div className="bc-case-overlay">
                <div className="bc-case-company">{caseStudy.company}</div>
                <div className="bc-case-industry">{caseStudy.industry}</div>
              </div>
            </div>

            <div className="bc-case-content">
              <div className="bc-case-details">
                <div className="bc-case-block">
                  <h4 className="bc-case-label">Challenge</h4>
                  <p className="bc-case-text">{caseStudy.challenge}</p>
                </div>

                <div className="bc-case-block">
                  <h4 className="bc-case-label">Solution</h4>
                  <p className="bc-case-text">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="bc-case-results">
                <h4 className="bc-case-results-title">Results</h4>
                <div className="bc-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bc-case-result">
                      <div className="bc-result-metric">{result.metric}</div>
                      <div className="bc-result-label">{result.label}</div>
                      <div className="bc-result-description">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bc-cta">
        <div className="bc-container">
          <div className="bc-cta-content">
            <div className="bc-cta-icon-wrapper">
              <Link2 size={48} />
            </div>
            <h2 className="bc-cta-title">Ready to Build on Blockchain?</h2>
            <p className="bc-cta-text">
              Partner with WayUP Technology to develop secure, scalable blockchain solutions
              that transform your business operations and create new opportunities.
            </p>
            <Link to="/contact" state={{ scrollToTop: true }} className="bc-btn bc-btn-cta">
              <span>Schedule Consultation</span>
              <Zap size={20} />
            </Link>
            <div className="bc-cta-features">
              <div className="bc-cta-feature">
                <CheckCircle size={18} />
                <span>Free Technical Assessment</span>
              </div>
              <div className="bc-cta-feature">
                <CheckCircle size={18} />
                <span>Custom Blockchain Architecture</span>
              </div>
              <div className="bc-cta-feature">
                <CheckCircle size={18} />
                <span>Smart Contract Audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blockchain;

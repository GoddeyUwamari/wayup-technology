import React, { useEffect } from 'react';
import { FolderOpen, Image, Video, FileText, Search, Tag, Cloud, Lock, Users, Zap, CheckCircle, Download, Upload, Share2, Grid3x3, Layers, Activity, ArrowRight, Award, Clock } from 'lucide-react';
import './AssetManagement.css';

const AssetManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const damFeatures = [
    {
      icon: <FolderOpen className="dam-feature-icon" />,
      title: 'Centralized Library',
      description: 'Store all digital assets—images, videos, documents, audio—in one unified, cloud-based repository accessible from anywhere.',
      features: ['Unlimited Storage', 'Cloud-Based', 'Fast Search'],
      color: '#f97316'
    },
    {
      icon: <Search className="dam-feature-icon" />,
      title: 'AI-Powered Search',
      description: 'Find assets instantly with AI visual recognition, metadata search, and auto-tagging capabilities.',
      features: ['Visual Search', 'Auto-Tagging', 'Smart Filters'],
      color: '#ea580c'
    },
    {
      icon: <Tag className="dam-feature-icon" />,
      title: 'Metadata Management',
      description: 'Organize assets with custom metadata, tags, categories, and keywords for efficient asset discovery.',
      features: ['Custom Fields', 'Bulk Tagging', 'Taxonomies'],
      color: '#fb923c'
    },
    {
      icon: <Users className="dam-feature-icon" />,
      title: 'Collaboration Tools',
      description: 'Share assets, collect feedback, manage approvals, and collaborate with teams in real-time.',
      features: ['Comments', 'Approvals', 'Version Control'],
      color: '#fdba74'
    },
    {
      icon: <Lock className="dam-feature-icon" />,
      title: 'Access Control',
      description: 'Granular permissions and role-based access control to protect sensitive assets and manage usage rights.',
      features: ['Role-Based Access', 'Usage Rights', 'Audit Logs'],
      color: '#c2410c'
    },
    {
      icon: <Share2 className="dam-feature-icon" />,
      title: 'Easy Distribution',
      description: 'Share assets via links, embed codes, or integrate with your website, CMS, and marketing tools.',
      features: ['Public Links', 'Embed Codes', 'API Access'],
      color: '#9a3412'
    }
  ];

  const assetTypes = [
    {
      icon: <Image className="dam-type-icon" />,
      name: 'Images',
      formats: ['JPG', 'PNG', 'SVG', 'WebP', 'TIFF', 'PSD'],
      description: 'Photos, graphics, illustrations'
    },
    {
      icon: <Video className="dam-type-icon" />,
      name: 'Videos',
      formats: ['MP4', 'MOV', 'AVI', 'WebM', 'MKV'],
      description: 'Marketing videos, tutorials'
    },
    {
      icon: <FileText className="dam-type-icon" />,
      name: 'Documents',
      formats: ['PDF', 'DOC', 'XLS', 'PPT', 'TXT'],
      description: 'Presentations, contracts, PDFs'
    },
    {
      icon: <Activity className="dam-type-icon" />,
      name: 'Media',
      formats: ['MP3', 'WAV', 'AI', 'EPS', 'INDD'],
      description: 'Audio, design files, assets'
    }
  ];

  const capabilities = [
    {
      icon: <Upload className="dam-cap-icon" />,
      title: 'Bulk Upload',
      description: 'Upload hundreds of assets simultaneously with drag-and-drop and automatic metadata extraction.',
      metric: '1000+',
      label: 'Files/Upload'
    },
    {
      icon: <Download className="dam-cap-icon" />,
      title: 'Format Conversion',
      description: 'Automatically convert assets to multiple formats and resolutions on-the-fly for different channels.',
      metric: '50+',
      label: 'Formats'
    },
    {
      icon: <Grid3x3 className="dam-cap-icon" />,
      title: 'Dynamic Collections',
      description: 'Create smart collections that auto-update based on rules, tags, and metadata criteria.',
      metric: 'Unlimited',
      label: 'Collections'
    },
    {
      icon: <Clock className="dam-cap-icon" />,
      title: 'Version History',
      description: 'Track all asset versions with complete revision history and ability to restore previous versions.',
      metric: 'Full',
      label: 'History'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Assets Managed', description: 'Across all customers' },
    { value: '5TB+', label: 'Storage', description: 'Available per account' },
    { value: '<2s', label: 'Search Speed', description: 'Average query time' },
    { value: '99.9%', label: 'Uptime', description: 'Guaranteed SLA' }
  ];

  const useCases = [
    {
      industry: 'Marketing & Advertising',
      applications: ['Campaign assets', 'Brand guidelines', 'Creative libraries', 'Social media content']
    },
    {
      industry: 'Media & Entertainment',
      applications: ['Video libraries', 'Stock footage', 'Production assets', 'Rights management']
    },
    {
      industry: 'Retail & E-Commerce',
      applications: ['Product photos', 'Marketing materials', 'Catalogs', 'Multi-channel content']
    },
    {
      industry: 'Enterprise',
      applications: ['Corporate documents', 'Training materials', 'Employee resources', 'Brand assets']
    }
  ];

  const caseStudy = {
    company: 'Global Fashion Retailer',
    industry: 'Retail & E-Commerce',
    challenge: 'Managing 500,000+ product images across 15 countries with inconsistent naming, duplicate files, and no central system. Marketing teams wasted 15+ hours weekly searching for assets, leading to missed campaign deadlines and brand inconsistencies.',
    solution: 'Implemented AI-powered DAM system with automated tagging, visual search, and regional access controls. Integrated with e-commerce platform and PIM system for seamless asset distribution. Trained 200+ users across global marketing teams.',
    results: [
      { metric: '90%', label: 'Time Saved', description: 'On asset searches' },
      { metric: '80%', label: 'Faster Publishing', description: 'Campaign launch speed' },
      { metric: '$500K', label: 'Annual Savings', description: 'Reduced duplication' },
      { metric: '100%', label: 'Brand Compliance', description: 'Approved assets only' }
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'
  };

  return (
    <div className="dam">
      {/* Hero Section */}
      <section className="dam-hero">
        <div className="dam-hero-pattern"></div>
        <div className="dam-container">
          <div className="dam-hero-layout">
            <div className="dam-hero-content">
              <div className="dam-hero-badge">
                <FolderOpen size={16} />
                <span>Digital Asset Management</span>
              </div>
              <h1 className="dam-hero-title">
                Organize, Manage &<br />
                <span className="dam-hero-gradient">Distribute Your Assets</span>
              </h1>
              <p className="dam-hero-subtitle">
                Centralize all your digital assets in one intelligent platform. From images and videos
                to documents and media files, find, share, and manage your content with AI-powered
                search and seamless collaboration tools.
              </p>
              <div className="dam-hero-buttons">
                <button className="dam-btn dam-btn-primary">
                  <span>Start Free Trial</span>
                  <ArrowRight size={20} />
                </button>
                <button className="dam-btn dam-btn-outline">
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="dam-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="dam-stat-card">
                    <div className="dam-stat-value">{stat.value}</div>
                    <div className="dam-stat-label">{stat.label}</div>
                    <div className="dam-stat-desc">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dam-hero-visual">
              <div className="dam-asset-grid">
                <div className="dam-grid-item dam-item-1">
                  <Image size={32} />
                </div>
                <div className="dam-grid-item dam-item-2">
                  <Video size={32} />
                </div>
                <div className="dam-grid-item dam-item-3">
                  <FileText size={32} />
                </div>
                <div className="dam-grid-item dam-item-4">
                  <FolderOpen size={32} />
                </div>
                <div className="dam-grid-item dam-item-5">
                  <Image size={24} />
                </div>
                <div className="dam-grid-item dam-item-6">
                  <Video size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="dam-features">
        <div className="dam-container">
          <div className="dam-section-header">
            <span className="dam-section-label">Key Features</span>
            <h2 className="dam-section-title">Powerful Asset Management</h2>
            <p className="dam-section-subtitle">
              Everything you need to organize, find, and distribute your digital assets efficiently
            </p>
          </div>

          <div className="dam-features-grid">
            {damFeatures.map((feature, index) => (
              <div key={index} className="dam-feature-card">
                <div className="dam-feature-icon-wrapper" style={{ '--feature-color': feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="dam-feature-title">{feature.title}</h3>
                <p className="dam-feature-description">{feature.description}</p>
                <div className="dam-feature-tags">
                  {feature.features.map((feat, fIndex) => (
                    <div key={fIndex} className="dam-feature-tag">
                      <CheckCircle size={14} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="dam-types">
        <div className="dam-container">
          <div className="dam-section-header">
            <span className="dam-section-label">Supported Assets</span>
            <h2 className="dam-section-title">All Your Digital Content</h2>
            <p className="dam-section-subtitle">
              Support for all major file formats and asset types in one platform
            </p>
          </div>

          <div className="dam-types-grid">
            {assetTypes.map((type, index) => (
              <div key={index} className="dam-type-card">
                <div className="dam-type-icon-bg">
                  {type.icon}
                </div>
                <h3 className="dam-type-name">{type.name}</h3>
                <p className="dam-type-desc">{type.description}</p>
                <div className="dam-type-formats">
                  {type.formats.map((format, fIndex) => (
                    <div key={fIndex} className="dam-format-badge">
                      {format}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="dam-capabilities">
        <div className="dam-container">
          <div className="dam-section-header">
            <span className="dam-section-label dam-label-light">Advanced Capabilities</span>
            <h2 className="dam-section-title dam-title-light">Enterprise-Grade Features</h2>
          </div>

          <div className="dam-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="dam-capability-card">
                <div className="dam-capability-icon-wrapper">
                  {capability.icon}
                </div>
                <div className="dam-capability-content">
                  <h3 className="dam-capability-title">{capability.title}</h3>
                  <p className="dam-capability-description">{capability.description}</p>
                  <div className="dam-capability-metric">
                    <div className="dam-metric-value">{capability.metric}</div>
                    <div className="dam-metric-label">{capability.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="dam-usecases">
        <div className="dam-container">
          <div className="dam-section-header">
            <span className="dam-section-label">Industry Solutions</span>
            <h2 className="dam-section-title">DAM Across Industries</h2>
          </div>

          <div className="dam-usecases-grid">
            {useCases.map((usecase, index) => (
              <div key={index} className="dam-usecase-card">
                <div className="dam-usecase-header">
                  <Layers size={28} />
                  <h3 className="dam-usecase-industry">{usecase.industry}</h3>
                </div>
                <div className="dam-usecase-apps">
                  {usecase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="dam-usecase-app">
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

      {/* Case Study Section */}
      <section className="dam-case-study">
        <div className="dam-container">
          <div className="dam-section-header">
            <span className="dam-section-label">Success Story</span>
            <h2 className="dam-section-title">DAM Transformation Success</h2>
          </div>

          <div className="dam-case-layout">
            <div className="dam-case-image-section">
              <img
                src={caseStudy.image}
                alt="Digital asset management system interface dashboard"
                className="dam-case-image"
              />
              <div className="dam-case-overlay">
                <Award size={32} />
                <div className="dam-case-company-info">
                  <div className="dam-case-company">{caseStudy.company}</div>
                  <div className="dam-case-industry">{caseStudy.industry}</div>
                </div>
              </div>
            </div>

            <div className="dam-case-content">
              <div className="dam-case-details">
                <div className="dam-case-block">
                  <h4 className="dam-case-label">Challenge</h4>
                  <p className="dam-case-text">{caseStudy.challenge}</p>
                </div>

                <div className="dam-case-block">
                  <h4 className="dam-case-label">Solution</h4>
                  <p className="dam-case-text">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="dam-case-results">
                <h4 className="dam-case-results-title">Results & Impact</h4>
                <div className="dam-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="dam-case-result">
                      <div className="dam-result-metric">{result.metric}</div>
                      <div className="dam-result-label">{result.label}</div>
                      <div className="dam-result-desc">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dam-cta">
        <div className="dam-container">
          <div className="dam-cta-content">
            <div className="dam-cta-icon-wrapper">
              <FolderOpen size={56} />
              <div className="dam-cta-glow"></div>
            </div>
            <h2 className="dam-cta-title">Ready to Organize Your Assets?</h2>
            <p className="dam-cta-text">
              Transform how your team manages, finds, and shares digital assets. Start your free
              trial today and experience the power of intelligent asset management.
            </p>
            <button className="dam-btn dam-btn-cta">
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </button>
            <div className="dam-cta-features">
              <div className="dam-cta-feature">
                <CheckCircle size={18} />
                <span>14-Day Free Trial</span>
              </div>
              <div className="dam-cta-feature">
                <CheckCircle size={18} />
                <span>No Credit Card Required</span>
              </div>
              <div className="dam-cta-feature">
                <CheckCircle size={18} />
                <span>Free Migration Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetManagement;

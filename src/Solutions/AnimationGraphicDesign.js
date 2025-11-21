import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Film,
  Layout,
  Video,
  BarChart,
  Share2,
  Lightbulb,
  Pencil,
  CheckCircle,
  Rocket,
  Box,
  Printer,
  Eye,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import './AnimationGraphicDesign.css';

const AnimationGraphicDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: <Palette className="capability-icon" />,
      title: 'Logo & Brand Identity',
      description: 'Create memorable brand identities that resonate with your target audience and stand the test of time.',
      color: 'purple'
    },
    {
      icon: <Film className="capability-icon" />,
      title: 'Motion Graphics',
      description: 'Dynamic animated content that captivates viewers and communicates your message with impact.',
      color: 'pink'
    },
    {
      icon: <Layout className="capability-icon" />,
      title: 'UI/UX Visual Design',
      description: 'Intuitive, beautiful interfaces that enhance user experience and drive engagement.',
      color: 'cyan'
    },
    {
      icon: <Video className="capability-icon" />,
      title: 'Video Production & Editing',
      description: 'Professional video content from concept to completion, optimized for all platforms.',
      color: 'purple'
    },
    {
      icon: <Box className="capability-icon" />,
      title: '2D/3D Animation',
      description: 'Bring your ideas to life with stunning 2D and 3D animations that engage and inspire.',
      color: 'pink'
    },
    {
      icon: <BarChart className="capability-icon" />,
      title: 'Infographics',
      description: 'Transform complex data into visually compelling stories that inform and persuade.',
      color: 'cyan'
    },
    {
      icon: <Share2 className="capability-icon" />,
      title: 'Social Media Graphics',
      description: 'Eye-catching social content designed to maximize engagement and brand visibility.',
      color: 'purple'
    },
    {
      icon: <Printer className="capability-icon" />,
      title: 'Print Design',
      description: 'Professional print materials that leave lasting impressions and elevate your brand.',
      color: 'pink'
    }
  ];

  const solutions = [
    {
      icon: <Palette className="solution-icon" />,
      title: 'Brand Identity Design',
      description: 'Create cohesive visual identities that resonate with your audience and establish strong brand recognition across all touchpoints.'
    },
    {
      icon: <Film className="solution-icon" />,
      title: 'Motion Graphics & Animation',
      description: 'Bring your ideas to life with captivating animations and motion graphics that engage viewers and communicate complex concepts simply.'
    },
    {
      icon: <Layout className="solution-icon" />,
      title: 'UI/UX Design',
      description: 'Design intuitive, user-centered interfaces that deliver exceptional experiences and drive user engagement and satisfaction.'
    },
    {
      icon: <Video className="solution-icon" />,
      title: 'Video Production & Editing',
      description: 'Produce professional-quality videos from concept to final cut, optimized for maximum impact across digital platforms.'
    },
    {
      icon: <BarChart className="solution-icon" />,
      title: 'Infographic Design',
      description: 'Transform complex data and information into visually compelling infographics that inform, engage, and persuade your audience.'
    },
    {
      icon: <Share2 className="solution-icon" />,
      title: 'Social Media Graphics',
      description: 'Create scroll-stopping social content that amplifies your brand presence and drives engagement across all social platforms.'
    }
  ];

  const techStack = [
    {
      category: 'Adobe Creative Cloud',
      tools: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
      color: 'orange'
    },
    {
      category: 'Design Tools',
      tools: ['Figma', 'Sketch', 'InVision'],
      color: 'purple'
    },
    {
      category: '3D & Animation',
      tools: ['Blender', 'Cinema 4D', 'Maya'],
      color: 'pink'
    },
    {
      category: 'Video Editing',
      tools: ['DaVinci Resolve', 'Final Cut Pro'],
      color: 'cyan'
    }
  ];

  const processSteps = [
    {
      icon: <Eye className="process-icon" />,
      title: 'Discovery & Brief',
      description: 'Understanding your brand, goals, audience, and vision to create a strategic creative direction.',
      number: '01'
    },
    {
      icon: <Lightbulb className="process-icon" />,
      title: 'Concept Development',
      description: 'Brainstorming creative concepts and developing mood boards to align on visual direction.',
      number: '02'
    },
    {
      icon: <Pencil className="process-icon" />,
      title: 'Design & Iteration',
      description: 'Crafting high-quality designs with iterative refinement based on your feedback.',
      number: '03'
    },
    {
      icon: <CheckCircle className="process-icon" />,
      title: 'Finalization & Delivery',
      description: 'Final polish, quality assurance, and delivery of all assets in required formats.',
      number: '04'
    },
    {
      icon: <Rocket className="process-icon" />,
      title: 'Post-Launch Support',
      description: 'Ongoing support and optimization to ensure continued success and maximum impact.',
      number: '05'
    }
  ];

  const industries = [
    { icon: <Sparkles />, name: 'Technology & SaaS', count: '150+' },
    { icon: <Target />, name: 'Healthcare', count: '80+' },
    { icon: <TrendingUp />, name: 'Finance', count: '120+' },
    { icon: <Share2 />, name: 'E-commerce', count: '200+' },
    { icon: <Film />, name: 'Entertainment & Media', count: '90+' },
    { icon: <Lightbulb />, name: 'Education', count: '110+' }
  ];

  const painPoints = [
    {
      problem: 'Brand Inconsistency',
      solution: 'Unified visual systems that maintain brand coherence across all channels and materials'
    },
    {
      problem: 'Low Engagement',
      solution: 'Eye-catching designs and animations that capture attention and drive user interaction'
    },
    {
      problem: 'Outdated Visuals',
      solution: 'Modern, trend-forward aesthetics that keep your brand fresh and competitive'
    }
  ];

  return (
    <div className="animation-graphic-design">
      {/* Hero Section */}
      <section className="agd-hero">
        <div className="agd-hero-overlay"></div>
        <div className="agd-hero-gradient"></div>
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80"
          alt="Creative design workspace with digital tablet, color swatches, and design tools"
          className="agd-hero-image"
        />
        <div className="agd-hero-content">
          <div className="agd-hero-badge">
            <Sparkles size={20} />
            <span>Creative Excellence</span>
          </div>
          <h1 className="agd-hero-title">Animation & Graphic Design Services</h1>
          <p className="agd-hero-subtitle">
            Bring your brand to life with stunning visuals and motion graphics that captivate, engage, and convert
          </p>
          <div className="agd-hero-buttons">
            <Link to="/contact" className="agd-btn agd-btn-primary">
              <span>Start Your Project</span>
              <Rocket size={20} />
            </Link>
            <Link to="/portfolio/work" className="agd-btn agd-btn-secondary">
              <Eye size={20} />
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="agd-overview">
        <div className="agd-container">
          <div className="agd-overview-grid">
            <div className="agd-overview-content">
              <span className="agd-section-label">Why Choose Us</span>
              <h2 className="agd-section-title">Visual Communication That Drives Results</h2>
              <p className="agd-overview-text">
                In today's fast-paced digital landscape, businesses face unprecedented challenges in
                capturing and maintaining audience attention. Generic visuals and static content no
                longer cut through the noise. Your brand needs dynamic, professional-grade design
                and animation to stand out, communicate effectively, and convert viewers into customers.
              </p>
              <p className="agd-overview-text">
                WayUP Technology delivers world-class creative solutions that elevate your brand,
                engage your audience, and drive measurable business outcomes.
              </p>

              <div className="agd-pain-points">
                <h3 className="agd-subsection-title">Challenges We Solve</h3>
                {painPoints.map((point, index) => (
                  <div key={index} className="agd-pain-point">
                    <div className="agd-pain-point-header">
                      <CheckCircle size={20} className="agd-pain-point-icon" />
                      <span className="agd-pain-point-problem">{point.problem}</span>
                    </div>
                    <p className="agd-pain-point-solution">{point.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="agd-overview-image-wrapper">
              <div className="agd-overview-image-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Professional design tools including stylus, color palette, and graphic design software interface"
                className="agd-overview-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="agd-capabilities">
        <div className="agd-container">
          <span className="agd-section-label agd-text-center">What We Offer</span>
          <h2 className="agd-section-title agd-text-center">Design Capabilities</h2>
          <p className="agd-section-subtitle">
            Comprehensive creative services delivered by expert designers and animators
          </p>

          <div className="agd-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className={`agd-capability-card ${capability.color}`}>
                <div className="agd-capability-icon-wrapper">
                  {capability.icon}
                </div>
                <h3 className="agd-capability-title">{capability.title}</h3>
                <p className="agd-capability-description">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="agd-process">
        <div className="agd-container">
          <span className="agd-section-label agd-text-center">Our Approach</span>
          <h2 className="agd-section-title agd-text-center">Design Process</h2>
          <p className="agd-section-subtitle">
            A proven methodology that ensures exceptional results every time
          </p>

          <div className="agd-process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="agd-process-step">
                <div className="agd-process-number">{step.number}</div>
                <div className="agd-process-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="agd-process-title">{step.title}</h3>
                <p className="agd-process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="agd-industries">
        <div className="agd-container">
          <span className="agd-section-label agd-text-center">Who We Serve</span>
          <h2 className="agd-section-title agd-text-center">Industries We Serve</h2>
          <p className="agd-section-subtitle">
            Delivering creative excellence across diverse sectors
          </p>

          <div className="agd-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="agd-industry-card">
                <div className="agd-industry-icon">{industry.icon}</div>
                <h3 className="agd-industry-name">{industry.name}</h3>
                <div className="agd-industry-count">{industry.count} Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="agd-case-study">
        <div className="agd-container">
          <span className="agd-section-label agd-text-center">Portfolio</span>
          <h2 className="agd-section-title agd-text-center">Success Story</h2>

          <div className="agd-case-study-content">
            <div className="agd-case-study-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80"
                alt="Modern brand design mockups displayed on various devices and marketing materials"
                className="agd-case-study-image"
              />
            </div>

            <div className="agd-case-study-details">
              <div className="agd-case-study-client">
                <h3 className="agd-case-study-label">Client</h3>
                <p className="agd-case-study-value">Fortune 500 Tech Company</p>
              </div>

              <div className="agd-case-study-challenge">
                <h3 className="agd-case-study-label">Challenge</h3>
                <p className="agd-case-study-text">
                  Low brand engagement and outdated visual identity that failed to resonate
                  with their evolving target audience. Their content was getting lost in the
                  competitive tech landscape, resulting in poor conversion rates and declining
                  social media performance.
                </p>
              </div>

              <div className="agd-case-study-solution">
                <h3 className="agd-case-study-label">Solution</h3>
                <p className="agd-case-study-text">
                  Complete brand refresh with modern visual identity, comprehensive design system,
                  and a series of animated explainer videos. We developed engaging motion graphics
                  and social media content that brought their brand story to life across all digital
                  touchpoints.
                </p>
              </div>

              <div className="agd-case-study-results">
                <h3 className="agd-case-study-label">Results</h3>
                <div className="agd-results-grid">
                  <div className="agd-result-item">
                    <TrendingUp size={32} className="agd-result-icon" />
                    <div className="agd-result-number">300%</div>
                    <div className="agd-result-label">Engagement Increase</div>
                  </div>
                  <div className="agd-result-item">
                    <Target size={32} className="agd-result-icon" />
                    <div className="agd-result-number">85%</div>
                    <div className="agd-result-label">Brand Recognition Up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="agd-cta">
        <div className="agd-cta-gradient"></div>
        <div className="agd-container">
          <div className="agd-cta-content">
            <Sparkles size={48} className="agd-cta-icon" />
            <h2 className="agd-cta-title">Ready to Elevate Your Brand?</h2>
            <p className="agd-cta-text">
              Let's create stunning designs and animations that captivate your audience and drive real business results
            </p>
            <div className="agd-cta-buttons">
              <Link to="/contact" className="agd-btn agd-btn-cta">
                <span>Get a Free Design Consultation</span>
                <Rocket size={20} />
              </Link>
              <Link to="/portfolio/work" className="agd-btn agd-btn-secondary-cta">
                <Eye size={20} />
                <span>View Our Portfolio</span>
              </Link>
            </div>

            <div className="agd-trust-signals">
              <div className="agd-trust-item">
                <CheckCircle size={24} className="agd-trust-icon" />
                <span className="agd-trust-number">500+</span>
                <span className="agd-trust-label">Projects Delivered</span>
              </div>
              <div className="agd-trust-divider"></div>
              <div className="agd-trust-item">
                <Target size={24} className="agd-trust-icon" />
                <span className="agd-trust-number">95%</span>
                <span className="agd-trust-label">Client Satisfaction</span>
              </div>
              <div className="agd-trust-divider"></div>
              <div className="agd-trust-item">
                <TrendingUp size={24} className="agd-trust-icon" />
                <span className="agd-trust-number">250%</span>
                <span className="agd-trust-label">Avg. ROI Increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationGraphicDesign;

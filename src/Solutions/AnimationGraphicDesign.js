import React, { useEffect } from 'react';
import { Palette, Film, Layout, Video, PieChart, Share2, Lightbulb, Pencil, CheckCircle, Rocket } from 'lucide-react';
import './AnimationGraphicDesign.css';

const AnimationGraphicDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      icon: <PieChart className="solution-icon" />,
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
      category: 'Design Tools',
      tools: ['Adobe Creative Suite', 'Figma', 'Sketch']
    },
    {
      category: 'Animation',
      tools: ['After Effects', 'Blender', 'Cinema 4D']
    },
    {
      category: 'Video Editing',
      tools: ['Premiere Pro', 'DaVinci Resolve']
    },
    {
      category: 'Prototyping',
      tools: ['Framer', 'Principle', 'ProtoPie']
    }
  ];

  const processSteps = [
    {
      icon: <Lightbulb className="process-icon" />,
      title: 'Discovery & Concept Development',
      description: 'Understanding your brand, goals, and target audience to create a strategic creative direction.'
    },
    {
      icon: <Pencil className="process-icon" />,
      title: 'Design & Animation Production',
      description: 'Crafting high-quality visuals and animations that align with your brand identity and messaging.'
    },
    {
      icon: <CheckCircle className="process-icon" />,
      title: 'Review & Refinement',
      description: 'Collaborative feedback sessions to perfect every detail and ensure your complete satisfaction.'
    },
    {
      icon: <Rocket className="process-icon" />,
      title: 'Delivery & Support',
      description: 'Final asset delivery with ongoing support to ensure successful implementation and maximum impact.'
    }
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
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80"
          alt="Creative design workspace with digital tablet, color swatches, and design tools"
          className="agd-hero-image"
        />
        <div className="agd-hero-content">
          <h1 className="agd-hero-title">Animation & Graphic Design Solutions</h1>
          <p className="agd-hero-subtitle">
            Transform your brand with stunning visuals, motion graphics, and creative storytelling
          </p>
          <div className="agd-hero-buttons">
            <button className="agd-btn agd-btn-primary">Start Your Project</button>
            <button className="agd-btn agd-btn-secondary">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="agd-overview">
        <div className="agd-container">
          <div className="agd-overview-grid">
            <div className="agd-overview-content">
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
                      <span className="agd-pain-point-problem">{point.problem}</span>
                    </div>
                    <p className="agd-pain-point-solution">{point.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="agd-overview-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Professional design tools including stylus, color palette, and graphic design software interface"
                className="agd-overview-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="agd-solutions">
        <div className="agd-container">
          <h2 className="agd-section-title agd-text-center">Our Creative Solutions</h2>
          <p className="agd-section-subtitle">
            Comprehensive design and animation services tailored to your brand's unique needs
          </p>

          <div className="agd-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="agd-solution-card">
                <div className="agd-solution-icon-wrapper">
                  {solution.icon}
                </div>
                <h3 className="agd-solution-title">{solution.title}</h3>
                <p className="agd-solution-description">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="agd-tech-stack">
        <div className="agd-container">
          <h2 className="agd-section-title agd-text-center">Industry-Leading Tools & Technologies</h2>
          <p className="agd-section-subtitle">
            We leverage the most advanced creative software to deliver exceptional results
          </p>

          <div className="agd-tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="agd-tech-category">
                <h3 className="agd-tech-category-title">{stack.category}</h3>
                <ul className="agd-tech-list">
                  {stack.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="agd-tech-item">{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="agd-process">
        <div className="agd-container">
          <h2 className="agd-section-title agd-text-center">Our Creative Process</h2>
          <p className="agd-section-subtitle">
            A proven methodology that ensures exceptional results every time
          </p>

          <div className="agd-process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="agd-process-step">
                <div className="agd-process-number">{index + 1}</div>
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

      {/* Case Study Section */}
      <section className="agd-case-study">
        <div className="agd-container">
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
                    <div className="agd-result-number">250%</div>
                    <div className="agd-result-label">Increase in Social Engagement</div>
                  </div>
                  <div className="agd-result-item">
                    <div className="agd-result-number">180%</div>
                    <div className="agd-result-label">Boost in Conversion Rates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="agd-cta">
        <div className="agd-container">
          <div className="agd-cta-content">
            <h2 className="agd-cta-title">Ready to Elevate Your Brand Visuals?</h2>
            <p className="agd-cta-text">
              Let's create stunning designs and animations that captivate your audience and drive real business results
            </p>
            <button className="agd-btn agd-btn-cta">Get Started Today</button>

            <div className="agd-trust-signals">
              <div className="agd-trust-item">
                <span className="agd-trust-number">500+</span>
                <span className="agd-trust-label">Projects Delivered</span>
              </div>
              <div className="agd-trust-divider"></div>
              <div className="agd-trust-item">
                <span className="agd-trust-number">95%</span>
                <span className="agd-trust-label">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationGraphicDesign;

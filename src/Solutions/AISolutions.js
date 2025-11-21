import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Bot, Cpu, Database, Eye, MessageSquare, TrendingUp, Zap, Target, Code, Shield, Sparkles } from 'lucide-react';
import './AISolutions.css';

const AISolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="ai-service-icon" />,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn from data, identify patterns, and make accurate predictions to drive business decisions.'
    },
    {
      icon: <Bot className="ai-service-icon" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy conversational AI that provides 24/7 customer support, automates responses, and enhances user engagement.'
    },
    {
      icon: <Eye className="ai-service-icon" />,
      title: 'Computer Vision',
      description: 'Enable machines to interpret visual data with advanced image recognition, object detection, and facial recognition technologies.'
    },
    {
      icon: <MessageSquare className="ai-service-icon" />,
      title: 'Natural Language Processing',
      description: 'Extract insights from text data with sentiment analysis, language translation, and intelligent document processing.'
    },
    {
      icon: <TrendingUp className="ai-service-icon" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends, anticipate customer behavior, and optimize operations with data-driven predictive models.'
    },
    {
      icon: <Zap className="ai-service-icon" />,
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation powered by AI and RPA.'
    }
  ];

  const technologies = [
    {
      category: 'ML Frameworks',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras']
    },
    {
      category: 'AI Platforms',
      tools: ['OpenAI GPT', 'Google Cloud AI', 'AWS SageMaker', 'Azure AI']
    },
    {
      category: 'Languages',
      tools: ['Python', 'R', 'Julia', 'Scala']
    },
    {
      category: 'Data Tools',
      tools: ['Apache Spark', 'Hadoop', 'Pandas', 'NumPy']
    }
  ];

  const industries = [
    {
      icon: <Target className="industry-icon" />,
      name: 'Retail & E-Commerce',
      applications: 'Personalized recommendations, demand forecasting, inventory optimization'
    },
    {
      icon: <Shield className="industry-icon" />,
      name: 'Healthcare',
      applications: 'Medical imaging analysis, patient diagnosis assistance, drug discovery'
    },
    {
      icon: <TrendingUp className="industry-icon" />,
      name: 'Finance',
      applications: 'Fraud detection, algorithmic trading, risk assessment, credit scoring'
    },
    {
      icon: <Code className="industry-icon" />,
      name: 'Manufacturing',
      applications: 'Quality control, predictive maintenance, supply chain optimization'
    }
  ];

  const benefits = [
    {
      stat: '40%',
      label: 'Cost Reduction',
      description: 'Through intelligent automation'
    },
    {
      stat: '3x',
      label: 'Faster Insights',
      description: 'Real-time data processing'
    },
    {
      stat: '95%',
      label: 'Accuracy Rate',
      description: 'In prediction models'
    },
    {
      stat: '24/7',
      label: 'Availability',
      description: 'AI-powered operations'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'Analyze your business challenges, identify AI opportunities, and define success metrics for measurable outcomes.',
      icon: <Target className="step-icon" />
    },
    {
      number: '02',
      title: 'Data Strategy & Preparation',
      description: 'Evaluate data quality, establish pipelines, and prepare datasets for optimal model training and performance.',
      icon: <Database className="step-icon" />
    },
    {
      number: '03',
      title: 'Model Development & Training',
      description: 'Design, build, and train custom AI models using cutting-edge algorithms tailored to your specific requirements.',
      icon: <Cpu className="step-icon" />
    },
    {
      number: '04',
      title: 'Deployment & Integration',
      description: 'Seamlessly integrate AI solutions into your existing systems with full support, monitoring, and optimization.',
      icon: <Sparkles className="step-icon" />
    }
  ];

  const caseStudy = {
    client: 'Global Retail Corporation',
    challenge: 'Struggling with inventory management, leading to $12M annual losses from stockouts and overstock. Customer experience suffered from lack of personalization.',
    solution: 'Implemented ML-powered demand forecasting system and AI recommendation engine. Integrated computer vision for quality control and NLP chatbot for customer service.',
    results: [
      { metric: '85%', label: 'Inventory Accuracy Improvement' },
      { metric: '$9.5M', label: 'Annual Cost Savings' },
      { metric: '45%', label: 'Customer Engagement Increase' },
      { metric: '99.2%', label: 'Chatbot Resolution Rate' }
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  };

  return (
    <div className="ai-solutions">
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-hero-background">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80"
            alt="Abstract AI neural network visualization with glowing nodes and connections"
            className="ai-hero-bg-image"
          />
          <div className="ai-hero-gradient"></div>
        </div>
        <div className="ai-hero-content">
          <div className="ai-container">
            <div className="ai-hero-badge">
              <Sparkles size={16} />
              <span>Next-Generation AI Solutions</span>
            </div>
            <h1 className="ai-hero-title">
              Artificial Intelligence<br />
              <span className="ai-hero-highlight">That Drives Results</span>
            </h1>
            <p className="ai-hero-subtitle">
              Transform your business with cutting-edge AI and machine learning solutions
              that automate processes, unlock insights, and create competitive advantages
            </p>
            <div className="ai-hero-buttons">
              <Link to="/contact" state={{ scrollToTop: true }} className="ai-btn ai-btn-primary">
                <span>Start AI Transformation</span>
                <Zap size={20} />
              </Link>
              <Link to="/services/ai-development" state={{ scrollToTop: true }} className="ai-btn ai-btn-outline">
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ai-stats">
        <div className="ai-container">
          <div className="ai-stats-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ai-stat-card">
                <div className="ai-stat-number">{benefit.stat}</div>
                <div className="ai-stat-label">{benefit.label}</div>
                <div className="ai-stat-description">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="ai-overview">
        <div className="ai-container">
          <div className="ai-overview-layout">
            <div className="ai-overview-content">
              <div className="ai-section-badge">Why AI?</div>
              <h2 className="ai-section-title">
                The Future of Business<br />Is Intelligent
              </h2>
              <p className="ai-overview-text">
                Artificial Intelligence is no longer a futuristic concept—it's a business imperative.
                Organizations that leverage AI gain unprecedented capabilities to analyze vast amounts
                of data, automate complex processes, and deliver personalized experiences at scale.
              </p>
              <p className="ai-overview-text">
                WayUP Technology specializes in developing custom AI solutions that address your unique
                business challenges. From machine learning models that predict customer behavior to
                computer vision systems that enhance quality control, we deliver measurable results
                that transform how you operate.
              </p>

              <div className="ai-key-points">
                <div className="ai-key-point">
                  <div className="ai-key-point-icon">
                    <Brain size={24} />
                  </div>
                  <div className="ai-key-point-content">
                    <h4>Enterprise-Grade AI</h4>
                    <p>Scalable, secure, and production-ready solutions built for mission-critical operations</p>
                  </div>
                </div>
                <div className="ai-key-point">
                  <div className="ai-key-point-icon">
                    <Shield size={24} />
                  </div>
                  <div className="ai-key-point-content">
                    <h4>Ethical & Responsible</h4>
                    <p>AI development guided by ethical principles, transparency, and bias mitigation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-overview-visual">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&q=80"
                alt="AI and machine learning visualization with data processing and neural networks"
                className="ai-overview-image"
              />
              <div className="ai-overview-float-card">
                <div className="ai-float-icon">
                  <Cpu size={28} />
                </div>
                <div className="ai-float-content">
                  <div className="ai-float-title">AI-Powered</div>
                  <div className="ai-float-subtitle">Advanced Neural Networks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="ai-services">
        <div className="ai-container">
          <div className="ai-section-header">
            <div className="ai-section-badge">Our Expertise</div>
            <h2 className="ai-section-title">Comprehensive AI Capabilities</h2>
            <p className="ai-section-description">
              End-to-end AI services designed to solve complex business challenges and unlock new opportunities
            </p>
          </div>

          <div className="ai-services-grid">
            {aiServices.map((service, index) => (
              <div key={index} className="ai-service-card">
                <div className="ai-service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="ai-service-title">{service.title}</h3>
                <p className="ai-service-description">{service.description}</p>
                <div className="ai-service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="ai-technologies">
        <div className="ai-container">
          <div className="ai-section-header">
            <div className="ai-section-badge">Technology Stack</div>
            <h2 className="ai-section-title">Powered by Leading AI Technologies</h2>
            <p className="ai-section-description">
              We leverage the most advanced frameworks and platforms to build robust AI solutions
            </p>
          </div>

          <div className="ai-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="ai-tech-card">
                <div className="ai-tech-header">
                  <Cpu className="ai-tech-icon" />
                  <h3 className="ai-tech-category">{tech.category}</h3>
                </div>
                <div className="ai-tech-tools">
                  {tech.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="ai-tech-tool">{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="ai-industries">
        <div className="ai-container">
          <div className="ai-section-header">
            <div className="ai-section-badge">Industry Applications</div>
            <h2 className="ai-section-title">AI Solutions Across Industries</h2>
          </div>

          <div className="ai-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="ai-industry-card">
                <div className="ai-industry-icon-bg">
                  {industry.icon}
                </div>
                <h3 className="ai-industry-name">{industry.name}</h3>
                <p className="ai-industry-applications">{industry.applications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ai-process">
        <div className="ai-container">
          <div className="ai-section-header">
            <div className="ai-section-badge ai-badge-light">Our Approach</div>
            <h2 className="ai-section-title ai-title-light">AI Implementation Methodology</h2>
            <p className="ai-section-description ai-desc-light">
              A proven, systematic approach to delivering successful AI projects
            </p>
          </div>

          <div className="ai-process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="ai-process-item">
                <div className="ai-process-line"></div>
                <div className="ai-process-card">
                  <div className="ai-process-number">{step.number}</div>
                  <div className="ai-process-icon-wrapper">
                    {step.icon}
                  </div>
                  <h3 className="ai-process-title">{step.title}</h3>
                  <p className="ai-process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="ai-case-study">
        <div className="ai-container">
          <div className="ai-section-header">
            <div className="ai-section-badge">Success Story</div>
            <h2 className="ai-section-title">Transforming Retail with AI</h2>
          </div>

          <div className="ai-case-content">
            <div className="ai-case-image-section">
              <img
                src={caseStudy.image}
                alt="AI-powered retail analytics dashboard showing real-time data visualization"
                className="ai-case-image"
              />
              <div className="ai-case-overlay">
                <div className="ai-case-client">{caseStudy.client}</div>
              </div>
            </div>

            <div className="ai-case-details">
              <div className="ai-case-section">
                <h3 className="ai-case-label">The Challenge</h3>
                <p className="ai-case-text">{caseStudy.challenge}</p>
              </div>

              <div className="ai-case-section">
                <h3 className="ai-case-label">Our Solution</h3>
                <p className="ai-case-text">{caseStudy.solution}</p>
              </div>

              <div className="ai-case-section">
                <h3 className="ai-case-label">The Results</h3>
                <div className="ai-case-results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="ai-case-result">
                      <div className="ai-case-result-metric">{result.metric}</div>
                      <div className="ai-case-result-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="ai-container">
          <div className="ai-cta-content">
            <div className="ai-cta-icon">
              <Brain size={48} />
            </div>
            <h2 className="ai-cta-title">Ready to Unlock the Power of AI?</h2>
            <p className="ai-cta-text">
              Partner with WayUP Technology to build intelligent solutions that drive innovation,
              efficiency, and growth for your business
            </p>
            <Link to="/contact" state={{ scrollToTop: true }} className="ai-btn ai-btn-cta">
              <span>Schedule AI Consultation</span>
              <Zap size={20} />
            </Link>

            <div className="ai-cta-features">
              <div className="ai-cta-feature">
                <span className="ai-cta-feature-icon">✓</span>
                <span>Free AI Readiness Assessment</span>
              </div>
              <div className="ai-cta-feature">
                <span className="ai-cta-feature-icon">✓</span>
                <span>Custom AI Strategy Development</span>
              </div>
              <div className="ai-cta-feature">
                <span className="ai-cta-feature-icon">✓</span>
                <span>Proof-of-Concept Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;

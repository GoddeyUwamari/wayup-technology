import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Cog,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Database,
  Sparkles,
  Network,
  Bot,
  Workflow,
  LineChart,
  Globe,
  Lock,
  Rocket
} from 'lucide-react';
import './AIDevelopment.css';
import Checkout from '../components/Checkout';

const AIDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroFeatures = [
    { icon: <Brain />, label: 'Machine Learning' },
    { icon: <Eye />, label: 'Computer Vision' },
    { icon: <MessageSquare />, label: 'NLP & Chatbots' },
    { icon: <BarChart3 />, label: 'Predictive Analytics' }
  ];

  const capabilities = [
    {
      icon: <Brain />,
      title: 'Custom ML Models',
      description: 'Train and deploy custom machine learning models tailored to your business needs',
      tech: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      color: 'purple'
    },
    {
      icon: <Eye />,
      title: 'Computer Vision',
      description: 'Advanced image recognition, object detection, and visual intelligence systems',
      tech: ['OpenCV', 'YOLO', 'CNNs'],
      color: 'blue'
    },
    {
      icon: <MessageSquare />,
      title: 'Natural Language Processing',
      description: 'Intelligent chatbots, sentiment analysis, and language understanding',
      tech: ['BERT', 'GPT', 'Transformers'],
      color: 'purple'
    },
    {
      icon: <BarChart3 />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and optimize decisions with advanced analytics',
      tech: ['Time Series', 'Regression', 'Classification'],
      color: 'blue'
    },
    {
      icon: <Bot />,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered decision making',
      tech: ['RPA', 'Process Mining', 'Auto ML'],
      color: 'purple'
    },
    {
      icon: <Network />,
      title: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition and insights',
      tech: ['CNNs', 'RNNs', 'GANs'],
      color: 'blue'
    }
  ];

  const solutions = [
    {
      icon: <Sparkles />,
      title: 'Generative AI',
      description: 'Content generation, code assistance, and creative AI applications using GPT-4, DALL-E, and custom models.',
      metrics: { accuracy: '95%', speed: '< 2s' }
    },
    {
      icon: <Bot />,
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent conversational AI with context awareness, multi-language support, and seamless integrations.',
      metrics: { satisfaction: '92%', uptime: '99.9%' }
    },
    {
      icon: <LineChart />,
      title: 'Business Intelligence',
      description: 'AI-powered analytics dashboards, automated reporting, and predictive insights for data-driven decisions.',
      metrics: { roi: '300%', efficiency: '+45%' }
    },
    {
      icon: <Workflow />,
      title: 'Process Automation',
      description: 'Intelligent document processing, workflow optimization, and robotic process automation solutions.',
      metrics: { time_saved: '70%', errors: '-85%' }
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      title: 'Medical Diagnosis AI',
      description: 'AI-powered diagnostic assistance analyzing medical images and patient data',
      result: '94% accuracy in early disease detection'
    },
    {
      industry: 'Finance',
      icon: '💳',
      title: 'Fraud Detection',
      description: 'Real-time fraud detection system processing millions of transactions',
      result: '$12M in fraud prevented annually'
    },
    {
      industry: 'Retail',
      icon: '🛒',
      title: 'Personalization Engine',
      description: 'AI recommendation system increasing customer engagement and sales',
      result: '35% increase in conversion rate'
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      title: 'Quality Inspection',
      description: 'Computer vision system for automated product quality control',
      result: '99.2% defect detection rate'
    }
  ];

  const techStack = [
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'OpenAI GPT', category: 'LLMs' },
    { name: 'Hugging Face', category: 'NLP' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'AWS SageMaker', category: 'MLOps' },
    { name: 'Kubernetes', category: 'Infrastructure' },
    { name: 'MLflow', category: 'Model Management' }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Understand business challenges, identify AI opportunities, and define success metrics',
      deliverables: ['Use case analysis', 'Feasibility study', 'ROI projection']
    },
    {
      number: '02',
      title: 'Data Preparation',
      description: 'Collect, clean, and prepare high-quality training data for model development',
      deliverables: ['Data pipeline', 'Feature engineering', 'Data labeling']
    },
    {
      number: '03',
      title: 'Model Development',
      description: 'Design, train, and optimize AI models using state-of-the-art techniques',
      deliverables: ['Custom models', 'Performance tuning', 'Testing & validation']
    },
    {
      number: '04',
      title: 'Deployment & Scaling',
      description: 'Deploy models to production with monitoring, continuous improvement, and scaling',
      deliverables: ['MLOps pipeline', 'Monitoring', 'Maintenance plan']
    }
  ];

  return (
    <div className="ai-development-page">
      {/* Hero Section - Centered with Animated Grid */}
      <section className="ai-hero">
        <div className="ai-hero-bg-grid"></div>
        <div className="ai-hero-container">
          <div className="ai-hero-badge">
            <Sparkles size={16} />
            <span>Powered by Advanced AI & Machine Learning</span>
          </div>
          <h1 className="ai-hero-title">
            Transform Your Business with
            <span className="ai-gradient-text"> Intelligent AI Solutions</span>
          </h1>
          <p className="ai-hero-desc">
            Unlock the full potential of artificial intelligence. We build cutting-edge ML models,
            computer vision systems, NLP applications, and intelligent automation that drive real business results.
          </p>

          {/* Quick Feature Pills */}
          <div className="ai-hero-features">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="ai-feature-pill">
                {feature.icon}
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="ai-hero-actions">
            <Link to="/contact" className="ai-btn-primary">
              <span>Start AI Project</span>
              <Rocket />
            </Link>
            <Link to="/portfolio/work" className="ai-btn-secondary">
              <Database />
              <span>Explore Use Cases</span>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="ai-hero-stats">
            <div className="ai-stat-item">
              <div className="ai-stat-value">150+</div>
              <div className="ai-stat-label">AI Models Deployed</div>
            </div>
            <div className="ai-stat-item">
              <div className="ai-stat-value">98%</div>
              <div className="ai-stat-label">Accuracy Rate</div>
            </div>
            <div className="ai-stat-item">
              <div className="ai-stat-value">5M+</div>
              <div className="ai-stat-label">Predictions Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid - Hexagonal Cards */}
      <section className="ai-capabilities">
        <div className="ai-container">
          <div className="ai-section-header">
            <span className="ai-label">Core Expertise</span>
            <h2 className="ai-section-title">AI & Machine Learning Capabilities</h2>
            <p className="ai-section-subtitle">
              Comprehensive AI solutions powered by the latest technologies
            </p>
          </div>

          <div className="ai-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className={`ai-capability-card ${capability.color}`}>
                <div className="ai-capability-glow"></div>
                <div className="ai-capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="ai-tech-badges">
                  {capability.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="ai-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Large Feature Cards */}
      <section className="ai-solutions">
        <div className="ai-container">
          <div className="ai-section-header">
            <span className="ai-label">What We Build</span>
            <h2 className="ai-section-title">AI-Powered Solutions</h2>
          </div>

          <div className="ai-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="ai-solution-card">
                <div className="ai-solution-header">
                  <div className="ai-solution-icon">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                </div>
                <p>{solution.description}</p>
                <div className="ai-solution-metrics">
                  {Object.entries(solution.metrics).map(([key, value], mIndex) => (
                    <div key={mIndex} className="ai-metric">
                      <div className="ai-metric-value">{value}</div>
                      <div className="ai-metric-label">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="ai-solution-link">
                  Explore Solution <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Industry Grid */}
      <section className="ai-use-cases">
        <div className="ai-container">
          <div className="ai-section-header">
            <span className="ai-label">Real-World Impact</span>
            <h2 className="ai-section-title">AI Success Stories</h2>
            <p className="ai-section-subtitle">
              Transforming industries with intelligent automation and insights
            </p>
          </div>

          <div className="ai-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="ai-use-case-card">
                <div className="ai-use-case-header">
                  <div className="ai-use-case-icon">{useCase.icon}</div>
                  <div className="ai-use-case-industry">{useCase.industry}</div>
                </div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <div className="ai-use-case-result">
                  <CheckCircle size={18} />
                  <span>{useCase.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Floating Cards */}
      <section className="ai-tech-stack">
        <div className="ai-container">
          <div className="ai-section-header">
            <span className="ai-label">Our Tools</span>
            <h2 className="ai-section-title">AI Technology Stack</h2>
          </div>

          <div className="ai-tech-stack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="ai-tech-card">
                <div className="ai-tech-name">{tech.name}</div>
                <div className="ai-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section className="ai-process">
        <div className="ai-container">
          <div className="ai-section-header">
            <span className="ai-label">Our Methodology</span>
            <h2 className="ai-section-title">AI Development Process</h2>
            <p className="ai-section-subtitle">
              Structured approach to delivering enterprise-grade AI solutions
            </p>
          </div>

          <div className="ai-process-timeline">
            {process.map((step, index) => (
              <div key={index} className="ai-process-step">
                <div className="ai-process-line"></div>
                <div className="ai-process-number">{step.number}</div>
                <div className="ai-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul className="ai-deliverables">
                    {step.deliverables.map((deliverable, dIndex) => (
                      <li key={dIndex}>
                        <CheckCircle size={14} />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient Split */}
      <section className="ai-cta">
        <div className="ai-cta-container">
          <div className="ai-cta-content">
            <div className="ai-cta-left">
              <div className="ai-cta-badge">
                <Brain size={20} />
                <span>Let's Build Something Intelligent</span>
              </div>
              <h2>Ready to Harness the Power of AI?</h2>
              <p>
                Partner with our AI experts to transform your business with cutting-edge
                machine learning solutions. Get started with a free consultation and feasibility analysis.
              </p>
              <ul className="ai-cta-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>Free AI strategy session</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Custom use case analysis</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>ROI projection & roadmap</span>
                </li>
              </ul>
            </div>
            <div className="ai-cta-right">
              <Link to="/contact" className="ai-cta-btn" onClick={() => window.scrollTo(0, 0)}>
                <span>Schedule AI Consultation</span>
                <Rocket size={20} />
              </Link>
              <div className="ai-cta-trust">
                <div className="ai-trust-item">
                  <Shield size={18} />
                  <span>Enterprise Security</span>
                </div>
                <div className="ai-trust-item">
                  <Lock size={18} />
                  <span>Data Privacy Guaranteed</span>
                </div>
                <div className="ai-trust-item">
                  <Globe size={18} />
                  <span>Global AI Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <Checkout />
    </div>
  );
};

export default AIDevelopment;

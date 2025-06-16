import React from 'react';
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
  Database
} from 'lucide-react';
import './AIDevelopment.css';
import Checkout from '../components/Checkout';

const AIDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="ai-development-hero-section"
        style={{backgroundImage: 'url(/images/iphoto3.png)'}}
      >
        <div className="ai-development-container">
          <h1 className="ai-development-hero-title">AI Development Services</h1>
          <p className="ai-development-hero-description">
            Harness the power of artificial intelligence to transform your business. We build cutting-edge AI solutions 
            that automate processes, enhance decision-making, and unlock new possibilities for innovation and growth.
          </p>
        </div>
      </section>

      {/* Machine Learning & AI Models Section */}
      <section className="ai-development-development-section">
        <div className="ai-development-container">
          <div className="ai-development-section-header">
            <h2>Machine Learning & AI Models</h2>
            <p>Develop sophisticated machine learning models and AI algorithms tailored to your specific business needs, from predictive analytics to intelligent automation.</p>
          </div>

          <div className="ai-development-content-row">
            <div className="ai-development-image-column">
              <img 
                src="/images/top.png" 
                alt="Machine Learning & AI Models" 
                className="ai-development-section-image" 
              />
            </div>

            <div className="ai-development-text-column">
              {/* Custom ML Models */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Brain />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Custom ML Models</h3>
                  <p>Design and train custom machine learning models using TensorFlow, PyTorch, and scikit-learn for classification, regression, clustering, and recommendation systems.</p>
                </div>
              </div>

              {/* Deep Learning Solutions */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Cpu />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Deep Learning Solutions</h3>
                  <p>Build neural networks and deep learning architectures for complex pattern recognition, natural language processing, and advanced data analysis tasks.</p>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <BarChart3 />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Predictive Analytics</h3>
                  <p>Implement forecasting models and predictive analytics systems that help businesses anticipate trends, optimize operations, and make data-driven decisions.</p>
                </div>
              </div>

              {/* Model Optimization */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Zap />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Model Optimization</h3>
                  <p>Optimize AI models for performance, accuracy, and efficiency with techniques like hyperparameter tuning, feature engineering, and model compression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Vision & NLP Section */}
      <section className="ai-development-development-section ai-development-alternate">
        <div className="ai-development-container">
          <div className="ai-development-section-header">
            <h2>Computer Vision & NLP</h2>
            <p>Leverage advanced computer vision and natural language processing technologies to extract insights from images, videos, and text data.</p>
          </div>

          <div className="ai-development-content-row">
            <div className="ai-development-image-column">
              <img 
                src="/images/hero.png" 
                alt="Computer Vision & NLP" 
                className="ai-development-section-image" 
              />
            </div>

            <div className="ai-development-text-column">
              {/* Computer Vision */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Eye />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Computer Vision</h3>
                  <p>Build image recognition, object detection, facial recognition, and visual inspection systems using OpenCV, YOLO, and state-of-the-art CNN architectures.</p>
                </div>
              </div>

              {/* Natural Language Processing */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <MessageSquare />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Natural Language Processing</h3>
                  <p>Develop chatbots, sentiment analysis, text classification, language translation, and document processing systems using BERT, GPT, and transformer models.</p>
                </div>
              </div>

              {/* Intelligent Automation */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Cog />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Intelligent Automation</h3>
                  <p>Create AI-powered automation solutions that combine computer vision and NLP to streamline document processing, data extraction, and workflow automation.</p>
                </div>
              </div>

              {/* Real-time Processing */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <TrendingUp />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Real-time Processing</h3>
                  <p>Implement real-time AI inference systems for live video analysis, streaming data processing, and instant decision-making applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Infrastructure & Deployment Section */}
      <section className="ai-development-development-section">
        <div className="ai-development-container">
          <div className="ai-development-section-header">
            <h2>AI Infrastructure & Deployment</h2>
            <p>Build scalable AI infrastructure and deploy models efficiently with MLOps practices, cloud integration, and enterprise-grade security measures.</p>
          </div>

          <div className="ai-development-content-row">
            <div className="ai-development-image-column">
             <img 
                src="/images/dphoto0.png" 
                alt="AI Infrastructure & Deployment" 
                className="ai-development-section-image" 
              />
            </div>

            <div className="ai-development-text-column">
              {/* MLOps Implementation */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Database />
                </div>
                <div className="ai-development-feature-content">
                  <h3>MLOps Implementation</h3>
                  <p>Establish robust MLOps pipelines with automated model training, validation, deployment, and monitoring using Kubeflow, MLflow, and cloud-native tools.</p>
                </div>
              </div>

              {/* Cloud AI Services */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <Shield />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Cloud AI Services</h3>
                  <p>Leverage AWS SageMaker, Google AI Platform, Azure ML, and other cloud services for scalable model training, deployment, and management.</p>
                </div>
              </div>

              {/* Model Monitoring */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <CheckCircle />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Model Monitoring</h3>
                  <p>Implement comprehensive monitoring systems to track model performance, detect drift, ensure accuracy, and maintain optimal AI system operations.</p>
                </div>
              </div>

              {/* Scalable Architecture */}
              <div className="ai-development-feature-item">
                <div className="ai-development-feature-icon">
                  <ArrowRight />
                </div>
                <div className="ai-development-feature-content">
                  <h3>Scalable Architecture</h3>
                  <p>Design horizontally scalable AI architectures with microservices, containerization, and edge computing for high-performance AI applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <Checkout />
    </>
  );
};

export default AIDevelopment;
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Droplets, Cloud, Tractor, Satellite, TrendingUp, MapPin, Thermometer, Wind, Sun, CheckCircle, ArrowRight, Leaf, BarChart4, Smartphone } from 'lucide-react';
import './Agricultural.css';

const Agricultural = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: <Satellite />,
      title: 'Precision Agriculture',
      description: 'GPS-guided equipment, variable rate technology, and satellite imagery for optimized planting, fertilizing, and harvesting operations.',
      benefits: ['Reduce input costs by 20-30%', 'Increase yield by 15-25%', 'Minimize environmental impact']
    },
    {
      icon: <Droplets />,
      title: 'Smart Irrigation Systems',
      description: 'Soil moisture sensors, weather station integration, and automated water management for efficient water usage and crop health.',
      benefits: ['Save 30-50% on water usage', 'Prevent over/under watering', 'Remote control via mobile app']
    },
    {
      icon: <Cloud />,
      title: 'Weather Intelligence',
      description: 'Hyperlocal weather forecasting, frost alerts, and climate data analytics to protect crops and optimize farming operations.',
      benefits: ['Micro-climate monitoring', 'Predictive frost warnings', 'Historical data analysis']
    },
    {
      icon: <Tractor />,
      title: 'Fleet Management',
      description: 'Real-time equipment tracking, fuel monitoring, maintenance scheduling, and operator performance analytics for farm machinery.',
      benefits: ['Track all equipment in real-time', 'Reduce fuel costs by 15%', 'Preventive maintenance alerts']
    },
    {
      icon: <Sprout />,
      title: 'Crop Health Monitoring',
      description: 'Drone imagery, NDVI analysis, pest detection, and disease prediction using AI and multispectral imaging technology.',
      benefits: ['Early pest/disease detection', 'Targeted treatment zones', 'Reduce pesticide use by 40%']
    },
    {
      icon: <BarChart4 />,
      title: 'Farm Analytics Platform',
      description: 'Comprehensive data visualization, yield mapping, profitability analysis, and decision support tools for farm management.',
      benefits: ['End-to-end visibility', 'Profit center analysis', 'Data-driven decisions']
    }
  ];

  const features = [
    { icon: <MapPin />, title: 'GPS Field Mapping', description: 'Accurate boundary and zone mapping' },
    { icon: <Thermometer />, title: 'Soil Sensors', description: 'Temperature, moisture, pH monitoring' },
    { icon: <Wind />, title: 'Weather Stations', description: 'On-farm meteorological data' },
    { icon: <Sun />, title: 'Solar-Powered', description: 'Energy-efficient IoT devices' },
    { icon: <Smartphone />, title: 'Mobile Apps', description: 'iOS & Android farm management' },
    { icon: <Satellite />, title: 'Satellite Data', description: 'Multi-spectral crop analysis' }
  ];

  const farmTypes = [
    { type: 'Row Crops', crops: 'Corn, Soybeans, Wheat', acres: '500-10,000+', icon: '🌾' },
    { type: 'Specialty Crops', crops: 'Fruits, Vegetables, Nuts', acres: '50-2,000', icon: '🍎' },
    { type: 'Livestock', crops: 'Cattle, Dairy, Poultry', acres: '200-5,000', icon: '🐄' },
    { type: 'Vineyards', crops: 'Wine Grapes, Table Grapes', acres: '20-500', icon: '🍇' }
  ];

  const impacts = [
    { metric: '30%', label: 'Input Cost Reduction', color: 'green' },
    { metric: '25%', label: 'Yield Increase', color: 'blue' },
    { metric: '40%', label: 'Water Savings', color: 'cyan' },
    { metric: '50%', label: 'Labor Efficiency', color: 'orange' }
  ];

  return (
    <div className="agricultural-page">
      {/* Hero Section - Split Design */}
      <section className="agri-hero">
        <div className="agri-hero-left">
          <div className="agri-hero-tag">
            <Leaf className="tag-leaf-icon" />
            <span>Smart Farming Technology</span>
          </div>
          <h1 className="agri-hero-title">
            Grow More with Less: Precision Agriculture Solutions
          </h1>
          <p className="agri-hero-subtitle">
            Transform your farm with IoT sensors, satellite imagery, AI-powered analytics, and automation. Increase yields, reduce costs, and farm sustainably with data-driven insights.
          </p>
          <div className="agri-hero-stats">
            {impacts.map((impact, index) => (
              <div key={index} className={`hero-stat-box stat-${impact.color}`}>
                <div className="stat-metric">{impact.metric}</div>
                <div className="stat-label">{impact.label}</div>
              </div>
            ))}
          </div>
          <div className="agri-hero-actions">
            <Link to="/contact" state={{ scrollToTop: true }} className="agri-btn-primary">
              <span>Schedule Farm Assessment</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" state={{ scrollToTop: true }} className="agri-btn-outline">Watch Demo Video</Link>
          </div>
        </div>
        <div className="agri-hero-right">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
            alt="Modern farm with precision agriculture technology and automated equipment"
            className="agri-hero-image"
          />
          <div className="agri-hero-overlay-box">
            <Sprout className="overlay-icon" />
            <div className="overlay-text">
              <div className="overlay-number">2,400+</div>
              <div className="overlay-label">Farms Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Types Section */}
      <section className="agri-farm-types">
        <div className="agri-container">
          <h3 className="farm-types-title">Solutions for Every Farm Type</h3>
          <div className="farm-types-grid">
            {farmTypes.map((farm, index) => (
              <div key={index} className="farm-type-card">
                <div className="farm-type-icon">{farm.icon}</div>
                <h4>{farm.type}</h4>
                <p className="farm-crops">{farm.crops}</p>
                <div className="farm-acres">{farm.acres} acres</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid - Feature-Rich Cards */}
      <section className="agri-solutions">
        <div className="agri-container">
          <div className="agri-section-header">
            <h2 className="agri-section-title">Complete Smart Farming Ecosystem</h2>
            <p className="agri-section-subtitle">
              Integrated hardware, software, and analytics designed for modern agriculture
            </p>
          </div>
          <div className="agri-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="agri-solution-card">
                <div className="solution-icon-circle">{solution.icon}</div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-benefits">
                  {solution.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="benefit-item">
                      <CheckCircle className="benefit-check" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase - Icon Grid */}
      <section className="agri-features">
        <div className="agri-container">
          <h2 className="agri-section-title">Technology That Works in the Field</h2>
          <div className="agri-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="agri-feature-item">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Story Format */}
      <section className="agri-case-study">
        <div className="agri-container">
          <div className="case-study-layout">
            <div className="case-study-image-section">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80"
                alt="Farmer using tablet in field with crops"
              />
              <div className="case-study-quote">
                <div className="quote-icon">"</div>
                <p>WayUP's precision agriculture system paid for itself in the first season. We reduced fertilizer costs by $85,000 and increased corn yield by 22%.</p>
                <div className="quote-author">— Michael Thompson, Thompson Farms (3,200 acres)</div>
              </div>
            </div>
            <div className="case-study-content-section">
              <div className="case-study-badge">SUCCESS STORY</div>
              <h2 className="case-study-title">Thompson Farms: From Traditional to Precision Agriculture</h2>

              <div className="case-study-story">
                <div className="story-block">
                  <h4>The Situation</h4>
                  <p>
                    A 3,200-acre corn and soybean operation in Iowa struggled with inconsistent yields across fields, rising input costs, and no data-driven insights. Manual soil sampling was time-consuming and provided limited coverage.
                  </p>
                </div>

                <div className="story-block">
                  <h4>The Transformation</h4>
                  <p>
                    WayUP deployed GPS-guided equipment, 40 soil moisture sensors, variable rate fertilizer technology, satellite NDVI monitoring, and a comprehensive farm management platform accessible via mobile and desktop.
                  </p>
                </div>

                <div className="story-block">
                  <h4>The Impact</h4>
                  <div className="impact-metrics">
                    <div className="impact-item">
                      <TrendingUp className="impact-icon" />
                      <div className="impact-data">
                        <span className="impact-value">22%</span>
                        <span className="impact-text">Yield Increase</span>
                      </div>
                    </div>
                    <div className="impact-item">
                      <Droplets className="impact-icon" />
                      <div className="impact-data">
                        <span className="impact-value">$85K</span>
                        <span className="impact-text">Fertilizer Savings</span>
                      </div>
                    </div>
                    <div className="impact-item">
                      <CheckCircle className="impact-icon" />
                      <div className="impact-data">
                        <span className="impact-value">12 mos</span>
                        <span className="impact-text">ROI Timeline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered Design */}
      <section className="agri-cta">
        <div className="agri-container">
          <div className="agri-cta-content">
            <div className="cta-icon-bg">
              <Tractor className="cta-tractor-icon" />
            </div>
            <h2>Ready to Modernize Your Farm?</h2>
            <p>
              Join thousands of farmers using WayUP's precision agriculture platform to increase profits, reduce waste, and farm more sustainably.
            </p>
            <div className="cta-features-row">
              <div className="cta-feature">
                <CheckCircle className="cta-check" />
                <span>Free farm assessment & ROI analysis</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-check" />
                <span>Custom solution design for your crops</span>
              </div>
              <div className="cta-feature">
                <CheckCircle className="cta-check" />
                <span>Flexible financing & leasing options</span>
              </div>
            </div>
            <Link to="/contact" state={{ scrollToTop: true }} className="agri-cta-button">
              Get Started Today
              <ArrowRight className="btn-icon" />
            </Link>
            <div className="cta-trust-line">
              <span>Trusted by 2,400+ farms across North America</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;

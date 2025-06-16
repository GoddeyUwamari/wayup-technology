
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import "./Section.css";
import 'animate.css';

function Section() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    navigate(path);
  };

  const GridBox = ({ imageUrl, title, price, period, buttonText, features, animationClass }) => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    return (
      <VisibilitySensor 
        partialVisibility 
        offset={{ bottom: 300 }}
        onChange={(isVisible) => {
          if (isVisible && !isBoxVisible) setIsBoxVisible(true);
        }}
      >
        <div className={`grid-box ${isBoxVisible ? `animate__animated ${animationClass}` : ''}`}>
          <div className="upper-div">
            <img src={imageUrl} alt={`${title} Illustration`} />
            <VisibilitySensor
              partialVisibility
              offset={{ bottom: 300 }}
              onChange={(isVisible) => {
                if (isVisible && !isTitleVisible) setIsTitleVisible(true);
              }}
            >
              <h2 className={isTitleVisible ? 'animate__animated animate__slideInLeft animate__delay-1s' : ''}>
                {title}
              </h2>
            </VisibilitySensor>
            <p>Starting at:</p>
            <h3>{price}</h3>
            <p>{period}</p>
            <button onClick={() => handleNavigation('/contact')}>{buttonText}</button>
          </div>
          <div className="lower-div">
            {features.map((feature, index) => (
              <p key={index} className="feature-item">{feature}</p>
            ))}
          </div>
        </div>
      </VisibilitySensor>
    );
  };

  return (
    <div className='ruler'>
      <div className="grid-container1">
        <GridBox
          imageUrl="images/photo4.png"
          title="WEBSITE DESIGN"
          price="$199"
          period="One Time"
          buttonText="All Plans"
          features={[
            "Custom Software Development",
            "Website Design",
            "Project Management",
            "Responsive Web Design",
            "Frontend Development",
            "Backend Development",
            "E-commerce Development",
            "User Experience (UX) Design",
            "Backup and Disaster Recovery",
            "Consulting and Support"
          ]}
          // animationClass="animate__fadeInLeft"
        />

        <GridBox
          imageUrl="images/photo3.png"
          title="WEBSITE HOSTING"
          price="$5 per"
          period="Month"
          buttonText="Order Now"
          features={[
            "Website Hosting",
            "WordPress Hosting",
            "Email Hosting",
            "E-commerce Hosting",
            "Managed Services",
            "Domain Name Registration",
            "Scalable Database Solutions",
            "Monitoring and Alerting",
            "Compliance and Regulations",
            "Performance Optimization"
          ]}
          // animationClass="animate__fadeInUp"
        />

        <GridBox
          imageUrl="images/photo2.png"
          title="DIGITAL MARKETING"
          price="$199"
          period="Per Page"
          buttonText="All Plans"
          features={[
            "Search Engine Optimization",
            "Social Media Marketing",
            "Mobile Marketing",
            "Content Marketing",
            "Email Marketing",
            "Marketing Automation",
            "Data Analysis and Reporting",
            "Social Media Advertising",
            "Conversion Rate Optimization",
            "Influencer Marketing Campaigns"
          ]}
          // animationClass="animate__fadeInRight"
        />
      </div>
    </div>
  );
}

export default Section;
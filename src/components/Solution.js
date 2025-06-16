import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartLine, faComments, faPlug, faNetworkWired, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faShieldAlt, faTools, faCode, faRobot, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';
// import { faMobile, faAndroid, faApple, faWindows } from '@fortawesome/free-solid-svg-icons';
import './Solution.css';

function Solutions() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate('/contact');
  };

  return (
    <>
      <div className='front-photo'>
        <div>
          <img src="/images/wphoto8.png" alt="Front" />
        </div>
        <div>
          <button className='solution-rebuild-btn'onClick={handleOnClick}>Let's Talk Now</button>
          </div>
      </div>

      <div className="logo-container-solution">
        <div className="logo-slide-solution">
          <img src="/images/kphoto11.png" alt="Logo 1" />
          <img src="/images/kphoto14.png" alt="Logo 2" />
          <img src="/images/kphoto.png" alt="Logo 3" />
          <img src="/images/kphoto1.png" alt="Logo 4" />
          <img src="/images/kphoto2.png" alt="Logo 5" />
          <img src="/images/kphoto3.png" alt="Logo 6" />
          <img src="/images/kphoto5.png" alt="Logo 7" />
          <img src="/images/kphoto00.png" alt="Logo 8" />
          <img src="/images/kphoto0.png" alt="Logo 9" />
          <img src="/images/kphoto000.png" alt="Logo 10" />
          <img src="/images/kphoto11.png" alt="Logo 11" />
          <img src="/images/kphoto14.png" alt="Logo 12" />
          <img src="/images/kphoto.png" alt="Logo 13" />
          <img src="images/kphoto1.png" alt="Logo 14" />
          <img src="/images/kphoto2.png" alt="Logo 15" />
          <img src="/images/kphoto3.png" alt="Logo 16" />
          <img src="/images/kphoto5.png" alt="Logo 17" />
          <img src="/images/kphoto00.png" alt="Logo 18" />
          <img src="/images/kphoto0.png" alt="Logo 19" />
          <img src="/images/kphoto000.png" alt="Logo 20" />
        </div>
      </div>

      

      <div className='second-grid-overview'>
        <h1>DIGITAL MARKETING SOFTWARE</h1>
  <div className='second-grid-container'>
          <div className='grid-children'>
            <div className='digital-one'>
      <h3>
        <FontAwesomeIcon icon={faBullhorn} style={{  marginLeft: '88px', marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px', backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />Marketing Automation Software
      </h3>
      <p>We leverage our developers' deep working knowledge of artificial intelligence, business intelligence, and machine learning to create unique marketing automation platforms, constructed as centralized databases that streamline workflows.</p>
    </div>
    <div className='digital-two'>
      <h3>
        <FontAwesomeIcon icon={faChartLine} style={{  marginLeft: '88px',marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px',backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />Consumer-Centric Analytics Software
      </h3>
      <p>We build analytics & reporting dashboards that integrate with your existing enterprise apps and your consolidated siloed data to create easily shareable KPI visualizations, giving you a holistic view of your marketing campaign success metrics.</p>
    </div>
    <div className='digital-three'>
      <h3>
        <FontAwesomeIcon icon={faComments} style={{  marginLeft: '88px', marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px', backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />Chatbot Software Development
      </h3>
      <p>Our engineers develop and integrate custom chatbot software with personalized interactive voice response (IVR) technology to simplify the buying process and offer the ability to monitor the consumer journey to improve customer relationships.</p>
    </div>
    <div className='digital-four'>
      <h3>
        <FontAwesomeIcon icon={faPlug} style={{  marginLeft: '88px', marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px' ,backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />Third-Party Integrations
      </h3>
      <p>We integrate all of your systems together to create a unified, all-in-one digital marketing software solution, including your social media, SEO, DAM, email marketing campaigns, lead management, data management, and analytic dashboards.</p>
    </div>
    <div className='digital-five'>
      <h3>
        <FontAwesomeIcon icon={faNetworkWired} style={{  marginLeft: '88px',marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px', backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />IoT-Enabled Digital Marketing
      </h3>
      <p>We seamlessly gather IoT data from wearables, watches, smart TVs, and other connected hardware devices and integrate it into your digital marketing software solution so you can visualize trends, augment strategies based on user behavior, and more.</p>
    </div>
    <div className='digital-six'>
      <h3>
        <FontAwesomeIcon icon={faLightbulb} style={{  marginLeft: '88px', marginBottom: '16px', width: '100px', height: '60px', paddingTop:'10px', borderRadius: '60px', backgroundColor: 'rgb(203, 192, 255)', paddingBottom: '10px', color:'black' }} />
        <br />BI-Supported Decision Making
      </h3>
      <p>Designed for data-driven multichannel marketing attribution with interactive dashboards & customizable reports, our BI solutions help you open the door to a wealth of valuable insights on your marketing strategies to promote smarter business decisions.</p>
    </div>
    <div className='button-wrapper'>
      <button className='second2-grid-button' onClick={handleOnClick}>GET MARKETING SOLUTIONS</button>
    </div>
  </div>
        </div>
        </div>

      <div className='leader-rebuild-container'>
        <div>
          {/* <img src="images/bphoto3.png" alt="" /> */}
        </div>
      </div>


      <div className='leader-container'>
  <h1>Choose an Experienced Application Development Company</h1>
  <p className='leader-container-p2'>
    At WayUP Technology, we prioritize speed and efficiency in mobile app development for Apple, Android,
    <span className="hide-on-small-screen3"><br /></span>
    and Windows devices. Our experienced developers handle app creation, testing, and updates,
    <span className="hide-on-small-screen3"><br /></span> 
    ensuring high-quality results. WayUP Technology delivers scalable and flexible 
    <span className="hide-on-small-screen3"><br /></span> 
    web and mobile applications across various industries.
  </p>
  
  <img className='leader-image' src="images/qphoto1.png" alt="Leader" />

        <div className='leader-flexbox'>
        <div className="leader-text-container">

      <div className='flex-two'>
        <h3>
          <FontAwesomeIcon icon={faAndroid} style={{ marginRight: '8px', width: '100px', paddingTop:'10px', paddingBottom:'6px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', borderRadius: '60px', color:'black' }} /> 
          Android Mobile App Development Platform
        </h3>
        <p>
          We develop web & mobile Android apps delivered across various devices using top Android app development tools, such as Android Studio, Eclipse, and IntelliJ IDEA.
        </p>
      </div>

      <div className='flex-three'>
        <h3>
          <FontAwesomeIcon icon={faApple} style={{ marginRight: '8px', width: '100px', height: '60px', paddingTop:'8px', paddingBottom:'6px', backgroundColor: 'rgb(178, 169, 223)', borderRadius: '60px', color:'black' }} /> 
          iOS Mobile App Development Platform
        </h3>
        <p>
          Our iOS app development builds high quality web & mobile apps delivered across iOS devices designed for the app store using XCode, AppCode, CodeRunner, RxSwift, Mockingbird, CocoaPods, Applyzer, Alcatraz, Marvel, and more.
        </p>
      </div>

      <div className='flex-four'>
        <h3>
          <FontAwesomeIcon icon={faWindows} style={{ marginRight: '8px', width: '100px', height: '60px', paddingTop:'10px', paddingBottom:'6px', backgroundColor: 'rgb(178, 169, 223)', borderRadius: '60px', color:'black' }} /> 
          Windows App Development Platform
        </h3>
        <p>
          We offer windows apps development services that include creating highly immersive experiences using .NET frameworks accompanied with Microsoft Visual Studio.
        </p>
      </div>
    </div>
    <div>
      <img className='mobile-app' src="/images/dphoto0.png" alt="Leader" />
            {/* <img className='ai-mobile-image' src="images/qphoto0.png" alt="" /> */}
            {/* <img className='ai-mobile-image' src="images/qphoto0001.png" alt="" /> */}
</div>
  </div>
</div>
      


      <div className="scrolling-container2">
      <div className="scrolling-content2">
        <span>Custom Software Development ★</span>
        <span>Web Development ★</span>
        <span>Mobile Application ★</span>
        <span>SEO Optimization ★</span>
        <span>Product Design ★</span>
        <span>Digital Marketing ★</span>
        <span>UX/UI Strategy ★</span>
        <span>Custom Software Development ★</span>
        <span>Web Development ★</span>
        <span>Mobile Application ★</span>
        <span>SEO Optimization ★</span>
        <span>Product Design ★</span>
        <span>Digital Marketing ★</span>
        <span>UX/UI Strategy ★</span>
      </div>
      </div>
      
      
      <div className='overall-container'>
        <h1>AI-Powered Custom Application Development</h1>
        <p className='top-intro'>
    The future of custom app development lies in artificial intelligence integration.
    Our expert developers leverage data science<span className="hide-on-small-screen3"><br /></span> and AI to build robust, personalized, and efficient applications.
    WayUP Technology delivers cutting-edge solutions<span className="hide-on-small-screen3"><br /></span> with seamless AI integration, advanced automation, and predictive analytics.
        </p>
        <img className='ai-image' src="/images/qphoto000.png" alt="" />

    <div class="grid-container">
          <div class="final-item1">
          <h3>
        <FontAwesomeIcon icon={faMobileAlt} style={{  marginLeft: '80px',  marginBottom:'26px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', width: '100px', height: '60px', borderRadius: '60px', paddingBottom: '10px' , color:'black' }} />
        <br />Mobile App AI Integration
      </h3>
      <p>Unlock the power of custom mobile apps with WayUP Technology's AI integration. We enhance app performance and user experiences through intelligent decision-making. With our expertise in mobile app development and AI, we create innovative apps to help your business thrive.</p>
          </div>
          <div class="final-item2">
          <h3>
        <FontAwesomeIcon icon={faShieldAlt} style={{  marginLeft: '88px',  marginBottom:'26px', width: '100px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', height: '60px', borderRadius: '60px', paddingBottom: '10px' , color:'black' }} />
        <br />E-Commerce ML Fraud Detection
      </h3>
      <p>Safeguard your e-commerce business with WayUP Technology's innovative ML fraud detection solutions. Our advanced algorithms detect and prevent fraud, enhancing online transaction security. Our real-time analysis identifies suspicious behaviors, enabling proactive measures. Focus on growing your business while we protect your customers.</p>
          </div>
          <div class="final-item3">
          <h3>
        <FontAwesomeIcon icon={faTools} style={{  marginLeft: '88px',  marginBottom:'26px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', borderRadius: '60px', paddingBottom: '10px' , color:'black'}} />
        <br />Predictive Maintenance Applications
      </h3>
      <p>Enhance your business efficiency with our AI and machine learning solutions. Our real-time data analysis predicts equipment failures before they occur, enabling proactive maintenance, minimizing downtime, and reducing costs. Maximize operational efficiency with our predictive maintenance technology.</p>
          </div>

          <div class="final-item4">
          <h3>
        <FontAwesomeIcon icon={faCode} style={{  marginLeft: '88px', marginBottom:'26px', width: '100px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', height: '60px', borderRadius: '60px', paddingBottom: '10px' , color:'black' }} />
        <br />AI-Integrated Low-Code/No-Code Tools
      </h3>
      <p>Harness the power of AI with our low-code/no-code platforms. Our intuitive drag-and-drop interfaces enable rapid app development, integrating AI functions like NLP, image recognition, and predictive analytics without extensive coding. Unleash your creativity and build robust apps effortlessly.</p>
          </div>
          <div class=" final-item5">
          <h3>
        <FontAwesomeIcon icon={faRobot} style={{  marginLeft: '88px',  marginBottom:'26px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', borderRadius: '60px', paddingBottom: '10px' , color:'black'}} />
        <br />AI-Powered Development Tools
      </h3>
      <p>Enhance software development with our AI-powered tools, accelerating cycles, automating tasks, and improving code quality. From code generation to testing and debugging, our custom AI tools streamline processes, enabling focused innovation in software solutions.</p>
          </div>

          <div class="final-item6">
          <h3>
        <FontAwesomeIcon icon={faDraftingCompass} style={{  marginLeft: '88px',  marginBottom:'26px', width: '100px', backgroundColor: 'rgb(178, 169, 223)', paddingTop:'10px', height: '60px', borderRadius: '40px', paddingBottom: '10px', color:'black' }} />
        <br />AI-Enhanced UI/UX Design
      </h3>
      <p>Improve your application's user experience with our AI-enhanced UI/UX design solutions. By leveraging machine learning, we create personalized, engaging, and intuitive interfaces that captivate users and drive engagement.</p> 
      </div>
</div>
</div>

    </>
  );
}

export default Solutions;

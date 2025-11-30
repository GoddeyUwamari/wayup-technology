import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faProjectDiagram, faUserTie, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap, faUtensils, faBus, faUniversity, faHeartbeat, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Checkout from '../components/Checkout';

import './Design.css'

function Design() {

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
      <div className='real-commander'>
        <div className='top-image'>
          <img src="/images/vphoto1.png" alt="" />
          <p className='top-text'>
            Expert Custom Software Development for Modern Enterprises 
          </p>
          {/* <h3 className='change-color'>On-Time, In-Budget</h3> */}
          <div className='cta-container'>
            <button onClick={handleOnClick} className="design-rebuild-btn">
              Speak to Us Now
            </button>
          </div>
        </div>

        <div className="logo-container-design1">
          <div className="logo-slide-design">
            {[
              "kphoto11", "kphoto14", "kphoto", "kphoto1", "kphoto2",
              "kphoto3", "kphoto5", "kphoto00", "kphoto0",
              "kphoto11", "kphoto14", "kphoto", "kphoto1", "kphoto2",
              "kphoto3", "kphoto5", "kphoto00", "kphoto0"
            ].map((photo, index) => (
              <img key={index} src={`/images/${photo}.png`} alt={`Logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className='second-digital-container'>
        <h1>Custom Software Solutions</h1>
        <p className="intro-text">
          We develop full-scale digital marketing software solutions
          built with workflow automation modules, reporting &
          analysis tools, CRM & marketing automation software, competitor analysis,
          ERP integration, and more for startups, SMBs,
          and enterprise-level businesses.
        </p>
        <div className='second-digital-flex'>
          <div className="image-left">
            <img className="digital-image1" src="/images/hitpaw.png" alt="Digital Marketing Solutions" />
            <img className="digital-image2" src="/images/rphoto15.png" alt="Digital Marketing Solutions" />
          </div>
          <div className="content-right">
            <div className="solution-item">
              <div className="solution-header">
                <h3>
                  <FontAwesomeIcon icon={faDatabase} style={{ marginRight: '8px', backgroundColor: 'rgb(203, 192, 255)', width: '60px', height: '60px', color: "black", borderRadius: '50%', padding: '20px' }} />
                  Custom CRM Solutions
                </h3>
              </div>
              <div className="solution-description">
                <p>We design integrated CRM modules and standalone solutions for generating, nurturing, scoring, and capturing qualified leads across all channels while providing full visibility of every client and information relative to their account.</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-header">
                <h3>
                  <FontAwesomeIcon icon={faUserTie} style={{ marginRight: '8px', backgroundColor: 'rgb(203, 192, 255)', width: '60px', height: '60px', color: "black", borderRadius: '50%', padding: '20px' }} />
                  Custom HR Management Solutions
                </h3>
              </div>
              <div className="solution-description">
                <p>Our developers create Custom HR Management Solutions that streamline employee data management, recruitment, payroll, and performance tracking. They tailor the system to your business needs, automating HR processes to improve efficiency and employee engagement.</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-header">
                <h3>
                  <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: '8px', backgroundColor: 'rgb(203, 192, 255)', width: '60px', height: '60px', color: "black", borderRadius: '50%', padding: '20px' }} />
                  Custom ERP Solutions
                </h3>
              </div>
              <div className="solution-description">
                <p>Based on your preferences, we can integrate your custom digital marketing solution with your current ERP solution, allowing you to maintain daily workflow management, including accounting, project management, supply chain operations, and so much more.</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-header">
                <h3>
                  <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '8px', backgroundColor: 'rgb(203, 192, 255)', width: '60px', height: '60px', color: "black", borderRadius: '50%', padding: '20px' }} />
                  Custom Landing Pages
                </h3>
              </div>
              <div className="solution-description">
                <p>We develop portfolio-worthy, conversion-focused landing pages perfectly aligned with showcasing your marketing campaign or exciting new product launch in a way that brings users through a customer journey designed to drive traffic & increase sales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='second-designed-grid-overview'>
        <h1>Fueling Industry Growth with Advanced Technology</h1>
        <div className='raise-up'>
          <img src="/images/rphoto11.png" alt="" />
          <h5>OIL AND GAS</h5>
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
        </div>

        <div className="grid-container-refined">
          <h1 className="header2">SOFTWARE SOLUTIONS FOR ALL INDUSTRIES</h1>
          <div className="grid-item-refined">
            <div className="first-grid1">
              <h3>
                <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '6px', width: '100px', backgroundColor: 'rgb(203, 192, 255)', height: '60px', borderRadius: '40px', color: 'black', marginTop: '20px', marginBottom:'20px', paddingTop:'8px', paddingBottom: '12px' }} />
                <br />E-Learning & Education
              </h3>
              <p>We improve learning outcomes and the student experience by implementing digital transformation initiatives. E-learning and education organizations can drive growth with predictive analytics and personalized feedback to enable custom-tailored instruction and flexible administration.</p>
            </div>
            <div className="second-grid2">
              <h3>
                <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '8px', width: '100px', height: '60px',  marginTop: '20px', marginBottom:'20px',  backgroundColor: 'rgb(203, 192, 255)', borderRadius: '40px', color: 'black', paddingTop:'8px', paddingBottom: '8px' }} />
                <br />Food & Beverage
              </h3>
              <p>Our digital transformation services can help food & beverage companies streamline operations and inventory management while providing scalable IT infrastructure resources that can support key components such as online ordering. Improve quality control and provide an improved customer experience.</p>
            </div>
            <div class="third-grid3">
              <h3>
                <FontAwesomeIcon icon={faBus} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px' , color: 'black', paddingTop:'8px', paddingBottom: '8px' }} />
                <br />Transportation
              </h3>
              <p>With benefits such as seamless access to data, companies in the transportation industry can capitalize on digital transformation services to improve efficiency and scalability. Enhance key processes such as booking and tracking while improving safety and flexibility while reducing costs.</p>
            </div>
            <div class="fouth-grid4">
              <h3>
                <FontAwesomeIcon icon={faUniversity} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px' , color: 'black', paddingTop:'8px', paddingBottom: '8px' }} />
                <br />Banking & Finance
              </h3>
              <p>Our digital transformation services can help companies in the finance industry optimize financial processes and enhance customer service in a rapidly evolving landscape. We provide staff augmentation, data migration, and other custom solutions and integrations while ensuring regulatory compliance.</p>
            </div>
            <div class="fifth-grid5">
              <h3>
                <FontAwesomeIcon icon={faHeartbeat} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} />
                <br />Healthcare
              </h3>
              <p>WayUP Technology's digital transformation services can help healthcare companies reduce administrative workload, enhance patient care, and ensure regulatory compliance. Custom software and mobile application development, systems integration, and intelligent automation are among the many solutions we provide, tailored for industry needs.</p>
            </div>
            <div class="sixth-grid6">
              <h3>
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} />
                <br />Retail
              </h3>
              <p>For retail companies our AI & machine learning implementation can not only automate processes but provide enhanced data analysis that enable better customer insights. Companies can also leverage systems integration to optimize supply chain and inventory management.</p>
            </div>
          </div>
          <div className='button-wrapper'>
            <button className='second-grid-button' onClick={handleOnClick}>GET YOUR INDUSTRY SOLUTIONS</button>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <Checkout />

      <div>  
        <p className='special-package'> AMAZING SPECIAL PACKAGES</p>
      </div> 
      <div className='second-design'>
        <div className='all-divs'>
          <div className='first-div'>
            <h2>SME Website</h2>
            <h3>Free .com Domain (1 year)</h3>
            <p>$199 (Free<br/> Domain) One Time</p>
            {/* <button */}

            <button onClick={handleOnClick}>Order Now</button>
          </div>
          <div className='second-div'>
            <h2>Business Website</h2>
            <h3> Home Page Design<br /> 15 Sub Pages<br />
              SEO on all pages<br /> Image or video Slider<br/>
              Contact Page<br/>
              CMS Inclusive<br/>
              Free Boost Hosting (1<br/> year)<br/>
              Free .com Domain (1<br/> year)
          </h3>
            <p>$199 (Free<br/> Domain) One Time</p>
            <button onClick={handleOnClick}>Order Now</button>
          </div>
          <div className='third-div'>
            <h2>Premium <br/>Website Design</h2>
            <h3> Home Page Design<br /> 15 Sub Pages<br />
              SEO on all pages<br /> Image or video Slider<br/>
              Contact Page<br/>
              CMS Inclusive<br/>
              Free Boost Hosting (1<br/> year)<br/>
              Free .com Domain (1<br/> year)
          </h3>
            <p>$199 (Free<br/> Domain) One Time</p>
            <button onClick={handleOnClick}>Order Now</button>
          </div>
          <div className='fourth-div'>
            <h2>One page responsive website design</h2>
            <h3>One page responsive<br/> website design.</h3>
            <p>$199 <br/>One Time</p>
            <button onClick={handleOnClick}>Order Now</button>
          </div>
        </div>
        </div>
      </>

  )
}

export default Design




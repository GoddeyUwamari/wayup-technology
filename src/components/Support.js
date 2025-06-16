import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faNetworkWired, faServer, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faClock, faDollarSign, faEye, faUserShield, faCogs, faIndustry } from '@fortawesome/free-solid-svg-icons';
import './Support.css';

function Support() {
  const navigate = useNavigate();

  const handleClick = () => {
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
          <img src="/images/mphoto1.png" alt="" />
        </div>
      </div>

      <div className="logo-container-support">
        <div className="logo-slide-support">
          <img src="/images/kphoto11.png" alt="" />
          <img src="/images/kphoto14.png" alt="" />
          <img src="/images/kphoto.png" alt="" />
          <img src="/images/kphoto1.png" alt="" />
          <img src="/images/kphoto2.png" alt="" />
          <img src="/images/kphoto3.png" alt="" />
          <img src="/images/kphoto5.png" alt="" />
          <img src="/images/kphoto00.png" alt="" />
          <img src="/images/kphoto0.png" alt="" />
          <img src="/images/kphoto000.png" alt="" />
          <img src="/images/kphoto11.png" alt="" />
          <img src="/images/kphoto14.png" alt="" />
          <img src="/images/kphoto.png" alt="" />
          <img src="/images/kphoto1.png" alt="" />
          <img src="/images/kphoto2.png" alt="" />
          <img src="/images/kphoto3.png" alt="" />
          <img src="/images/kphoto5.png" alt="" />
          <img src="/images/kphoto00.png" alt="" />
          <img src="/images/kphoto0.png" alt="" />
          <img src="/images/kphoto000.png" alt="" />
        </div>
      </div>

      <div className='second-support-container'>
        <h1>Let Us Manage Your Outsourced IT Support Needs</h1>
        <p className='second-text'>WayUP Technology's IT support services are tailored to your business needs. Our IT support specialists align network architecture and
          <span className="hide-on-small-screen3"><br /></span> end-to-end communication, to ensure your company has the best IT solutions built by certified technology experts.
          <span className="hide-on-small-screen3"><br /></span> We provide small, midsize, and enterprise size businesses with scalable IT support both onsite and remotely.
        </p>

        <div className='second-support-flexbox'>
          <div className='left-column'>
            <div className='support-one'>
              <h2><FontAwesomeIcon icon={faHeadset} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} /> <br /> IT Infrastructure Help Desk Management - 24/7</h2>
              <p>Our developers provide IT help desk services that enable the creation and management of onsite and remote help desk architectures. We provide a 24/7 single point of contact for your business user community to address all technical requests, problems, services, and other IT inquiries.</p>
            </div>

            <div className='support-two'>
              <h2><FontAwesomeIcon icon={faNetworkWired} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} /> <br /> Network Support Services</h2>
              <p>We perform network support services, including network design and architecture planning, network audits and ongoing support for TCP/IP setup, Virtual Private Networks (VPN), Storage Area Networks (SAN), LAN/WAN and media integrations, managed IT services, as well as administration and troubleshooting of network devices like routers, gateways, and firewalls.</p>
            </div>
          </div>

          <div className='middle-column'>
            <img src="/images/iphoto3.png" alt="IT support services" />
            <img className='imaginism' src="/images/qphoto16.png" alt="IT support services" />
          </div>

          <div className='right-column'>
            <div className='support-three'>
              <h2><FontAwesomeIcon icon={faServer} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} /> <br /> Enterprise IT Services</h2>
              <p>Our custom enterprise IT infrastructures streamline the administration of day-to-day user management, access, and security protocols and other enterprise IT services. We also perform various database services, large-scale data migrations, backup and recovery, server configuration, and network administration tasks.</p>
            </div>

            <div className='support-four'>
              <h2><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px', width: '100px', height: '60px', backgroundColor: 'rgb(203, 192, 255)', color: 'black',  marginTop: '20px', marginBottom:'20px', borderRadius: '40px', paddingTop:'8px', paddingBottom: '8px' }} /> <br /> SMB Business IT Services</h2>
              <p>We build and maintain IT infrastructure for small and midsize businesses (SMB). We provide end-to-end communication architecture built on reliable technology platforms such as e-mail based messaging and live meetings that allows real-time communication and data sharing. We supply intranet/extranet services, unified messaging, document sharing, and video conferencing that facilitate in-person or remote communication.</p>
            </div>
          </div>
        </div>

        <div className='button-wrapper2'>
          <button className='second-grid-button2' onClick={handleClick}>GET IT SUPPORT</button>
        </div>
      </div>

      <div className='first-support-grid-overview'>
        <h1>Elevate Your IT Support System with Our White-Label Support Services</h1>
        <p className='subheader'>
          Discover how WayUP Technology's expert IT support services can transform your IT capabilities. 
          We provide scalable, <span className="hide-on-small-screen9"></span><br /> 
          cost-effective support solutions from top-tier professionals to elevate your technology services for clients.
        </p>
        <div className='two-image'>
          <img className='first-image' src="/images/wphoto11.png" alt="" /> 
          <img className='second-image' src="/images/qphoto1.png" alt="" /> 
        </div>
        <div className='first-support-grid'>
          <div className='first-support-grid-item'>
            <div className='supoort1'>
              <h3>
                <FontAwesomeIcon icon={faClock} style={{ marginLeft: '88px', marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '14px' }} />
                <br />Responsive 24/7 Support
              </h3>
              <p>Partner with WayUP Technology to leverage our responsive 24/7 white-label IT support help desk services with our advanced ticketing system. Our experts ensure timely response to support requests, providing efficient service while minimizing downtime. Our around-the-clock assistance will help you elevate your IT support system with outsourced solutions.</p>
            </div>
            <div className='supoort2'>
              <h3>
                <FontAwesomeIcon icon={faDollarSign} style={{ marginLeft: '88px',  marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '10px' }} />
                <br />Cost-Effective Support Solution
              </h3>
              <p>WayUP Technology's white-label software & IT support services present an efficient, scalable, and budget-friendly alternative. This adaptable solution empowers you to flexibly expand or contract your IT support team according to customer and project demands, curbing excessive overhead expenses and fine-tuning your budget management, ultimately optimizing your financial resources.</p>
            </div>
            <div className='supoort3'>
              <h3>
                <FontAwesomeIcon icon={faEye} style={{ marginLeft: '88px',  marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '10px' }} />
                <br />Transparent Help Desk Management
              </h3>
              <p>Our transparent help desk management enables a new level of customer-focused support, prioritizing clear communication and comprehensive reporting throughout our support process. SLA adherence is an integral part of our help desk management system. Our cutting-edge reporting tools provide real-time insights into support ticket status, trends, and support performance, providing relevant data to empower the customer support experience.</p>
            </div>
            <div className='supoort4'>
              <h3>
                <FontAwesomeIcon icon={faUserShield} style={{ marginLeft: '88px',  marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '10px' }} />
                <br />Seamless Support Staff Implementation
              </h3>
              <p>WayUP Technology's support staff implementation process is meticulously crafted to guarantee the seamless integration of our seasoned professionals into your existing IT team or infrastructure. We work closely with your infrastructure and objectives to follow your unique processes. Our goal is to provide you with an extended workforce that not only complements but also operates as an integral part of your organization.</p>
            </div>
            <div className='supoort5'>
              <h3>
                <FontAwesomeIcon icon={faCogs} style={{ marginLeft: '88px',  marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '10px' }} />
                <br />Multi-Tiered Support System
              </h3>
              <p>From level 1 for basic support and customer assistance to subsequent tiers for more complex issues, our multi-tiered support system ensures efficient resolutions. Our experts are prepared to provide comprehensive expert assistance at every stage. We provide in-depth troubleshooting, advanced technical support, and root cause analysis for the most accurate approach.</p>
            </div>
            <div className='supoort6'>
              <h3>
                <FontAwesomeIcon icon={faIndustry} style={{ marginLeft: '88px',  marginBottom: '14px', width: '100px', height: '60px', backgroundColor: 'rgb(178, 169, 223)', paddingTop: '10px', borderRadius: '40px', color: 'black', paddingBottom: '10px' }} />
                <br />Industry-Specific Expertise
              </h3>
              <p>We serve 40+ industries and verticals and have industry-specialized experts who understand the unique technology and compliance needs for each industry. This in-depth knowledge allows us to provide tailored support that aligns with the specific objectives and challenges in your industry. Whether you operate in healthcare, finance, supply chain, or another industry, rely on our unmatched expertise for unparalleled application and IT support.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='fifth-grid-overview'>
        <h1>We've Got Custom App Developers With <br/>On-Demand Experience</h1>
        <p>Our programmers, developers, and engineers are highly proficient in all popular programming<span className="hide-on-small-screen7"><br /></span> languages, frameworks, databases, and development tools.</p>
        <img src="/images/res1.png" alt="" />
      </div>
    </>
  );
}

export default Support;
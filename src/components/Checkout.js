
import React from 'react';
import { Link } from "react-router-dom";
import './Checkout.css'

function Checkout() {
  return (
    <>
     
     
      <h1 className='heading'>AVAILABLE PRODUCT AND SERVICES</h1>

      
<div className='second-checkout-container'>
        <div className='checkout-first-div'>
        <img src="/images/mphoto8.png" alt="Hosting Options" />
    <p className='checkout-content'>
      <Link to="/order">Software Development</Link><br/>
      <Link to="/order">Website Development</Link><br/>
      <Link to="/order">Responsive Web Design</Link><br/>
      <Link to="/order">Frontend Development</Link><br/>
      <Link to="/order">Backend Development</Link><br/>
      <Link to="/order">E-commerce Development</Link><br/>
      <Link to="/order">Web Application Development</Link><br/>
      <Link to="/order">User Experience (UX) Design</Link><br/>
      <Link to="/order">Backup and Disaster Recovery</Link><br/>
      <Link to="/order">Consulting and Support</Link><br/>
      <Link to="/order">Performance Optimization</Link><br/>
      <Link to="/order">WordPress Hosting</Link><br/>
      <Link to="/order">Email Hosting</Link><br/>
      <Link to="/order">E-commerce Hosting</Link><br/>
      <Link to="/order">Managed Services</Link><br/>
      <Link to="/order">Domain Name Registration</Link><br/>
      <Link to="/order">Scalable Database Solutions</Link><br/>
      <Link to="/order">Monitoring and Alerting</Link><br/>
      <Link to="/order">Backup Recovery</Link>
    </p>
  </div>

        <div className='checkout-second-div'>
        <img src="/images/photo9.png" alt="Hosting Options"  />
    <p>
      <Link to="/order">Shared Hosting</Link><br/>
      <Link to="/order">Wordpress Hosting</Link><br/>
      <Link to="/order">eCommerce Hosting</Link><br/>
      <Link to="/order">Website Development</Link><br/>
      <Link to="/order">eCommerce Design</Link><br/>
      <Link to="/order">Email Hosting</Link><br/>
      <Link to="/order">Virtual Private Servers</Link><br/>
      <Link to="/order">Cloud Dedicated Servers</Link><br/>
      <Link to="/order">SSL Certificates</Link><br/>
      <Link to="/order">Company Registration</Link><br/>
      <Link to="/order">E-mail Services</Link><br/>
      <Link to="/order">Website Security</Link><br/>
      <Link to="/order">Site SSL</Link><br/>
      <Link to="/order">VPN</Link><br/>
      <Link to="/order">Backlinks and SEO</Link><br/>
      <Link to="/order">XOVI NOW</Link><br/>
      <Link to="/order">Professional Email</Link><br/>
      <Link to="/order">Influencer Marketing Campaigns</Link>
    </p>
  </div>

        <div className='checkout-third-div'>
        <img src="/images/rphoto8.png" alt="Hosting Options"  />
      <p>
      <Link to="/order">Flyer & Brochure</Link><br/>
      <Link to="/order">Marketing Video</Link><br/>
      <Link to="/order">Social Media Management</Link><br/>
      <Link to="/order">Social Media Graphics Design</Link><br/>
      <Link to="/order">Business Plan and Proposal</Link><br/>
      <Link to="/order">Graphics Design</Link><br/>
      <Link to="/order">App Development</Link><br/>
      <Link to="/order">Facebook Monthly Advert</Link><br/>
      <Link to="/order">Reseller Hosting</Link><br/>
      <Link to="/order">Flyers, Handbills and Posters</Link><br/>
      <Link to="/order">Banners</Link><br/>
      <Link to="/order">Virtual Call Center</Link><br/>
      <Link to="/order">Brand Identity</Link><br/>
      <Link to="/order">VPN</Link><br/>
      <Link to="/order">Digital Marketing</Link><br/>
      <Link to="/order">Newsletter Design</Link><br/>
      <Link to="/order">Security and Training</Link><br/>
      <Link to="/order">Email Marketing</Link><br/>
      <Link to="/order">Website Backup</Link>
    </p>
  </div>
</div>

      </>
  );
}

export default Checkout;

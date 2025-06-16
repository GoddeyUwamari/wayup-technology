
import React from 'react';
import './Language.css';

const Language = () => {
  return (
    <>
      <div className='grid-general-container'>
        <h1>Full-Stack Technology</h1>
        <p className='grid-general-information'>Our professional developers utilize multiple software platforms to enhance computing power, graphics, security<span className="hide-on-smaller-screen"><br/></span> standards, and performance levels, ensuring robust and improved web solutions.</p>
    <div className="language-grid-container">
          <div className="language-grid">
          <div className="language-one">
          <img src='images/javacrphot.png' alt='' />
        <h3>Javascript</h3>
        <p>Our developers leverage JavaScript's versatility to craft custom web applications. We focus on delivering tailored solutions that meet the unique needs of each client. This approach ensures seamless and intuitive user experiences across all platforms.</p>
          </div>
          <div className="language-two">
          <img src='images/pythonphoto.png' alt='' />
        <h3>Python</h3>
        <p>We harness Python's versatility to deliver innovative, customer-centric applications with seamless execution and enriched user experiences, leveraging its rich libraries for streamlined development.</p>
            </div>
          <div className="language-three">
          <img src='images/javaphoto.png' alt='' />
        <h3>Java</h3>
        <p>Our team leverages Java's reliable framework and cross-device compatibility to craft scalable solutions, optimizing workflows with diverse toolkits and delivering innovative applications that exceed customer expectations.</p>
          </div>
          <div className="language-four">
          <img src='images/c-sharpphoto.png' alt='' />
        <h3>C++ </h3>
       <p>Our team utilizes C#'s versatility and strong typing to develop scalable software solutions, optimizing performance and delivering innovative applications tailored to varied business needs, ensuring customer satisfaction.</p>
          </div>
          <div className="language-five">
          <img src='images/flutterphoto.png' alt='' />
        <h3>Flutter</h3>
      <p>Our team leverages Flutter's cross-platform prowess to craft seamless applications, enhancing user experiences with a rich widget library and hot reload feature, delivering visually stunning apps that exceed customer expectations.</p>
          </div>
          <div className="language-six">
          <img src='images/rubphoto.png' alt='' />
        <h3>Ruby On Rails</h3>
       <p>We harness Ruby on Rails' framework for rapid web app development, utilizing rich libraries to deliver scalable, robust, and customer-focused solutions efficiently.</p>
          </div>
          </div>  
        </div>
        </div>
      </>
  );
}

export default Language;



import React, { useEffect } from 'react';
import ReadMore from './ReadMore';
import "./Main.css";
import 'animate.css';

function Main() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClasses = entry.target.dataset.animation.split(',');
          entry.target.classList.add('animate__animated');
          animationClasses.forEach(className => {
            if (className) entry.target.classList.add(className.trim());
          });
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='containera'>
      <h1 className="animate-on-scroll" data-animation="animate__rotateInDownRight">Latest Announcements</h1>
      <p className="animate-on-scroll" data-animation="animate__fadeIn">View our latest news and announcements</p>

      <div className='flexbox-power'>
        <div className='flex1 animate-on-scroll' data-animation="animate__fadeInLeft">
          <img src="images/qphoto17.png" alt="" /> 
          <h2>Celebrating 6 Years of Excellence</h2>
          <p>As we reflect on the journey that brought us to this momentous occasion, we at WayUP Technology are overwhelmed with gratitude and pride. Six years ago, we embarked on a mission to redefine the boundaries of software engineering, and today, we stand tall as a beacon of innovation and excellence in the industry. Our path has been marked by countless milestones, challenges conquered, and triumphs celebrated</p>
          <ReadMore
            text="Over the past six years, we've had the privilege of collaborating with visionary clients, partners, and colleagues who have inspired us to push the boundaries of what's possible. Together, we've transformed ideas into reality, solutions into success stories, and dreams into tangible achievements."
            maxLength={150}
          />
        </div>
          
        <div className='flex2 animate-on-scroll' data-animation="animate__fadeInUp">
          <img src="images/mphoto5.png" alt="" /> 
          <h2>Elevate Your Digital Dreams</h2>
          <p>Look no further for revolutionizing your digital landscape! At WayUP Technology, we're committed to realizing your vision with cutting-edge software solutions. With our seasoned team of engineers, we specialize in crafting bespoke applications tailored to your needs. Whether you're a startup disrupting industries or an established enterprise seeking innovation, we've got you covered.</p>
          <ReadMore
            text="Our approach is simple yet powerful: we listen, we innovate, and we deliver. From conceptualization to deployment, our agile methodologies ensure transparency, efficiency, and superior quality every step of the way."
            maxLength={150}
          />
        </div>
          
        <div className='flex3 animate-on-scroll' data-animation="animate__fadeInRight">
          <img src="images/qphoto10.png" alt="" /> 
          <h2>Unlock Innovation with WayUP Technology</h2>
          <p>At WayUP Technology, we're not just building software—we're shaping the future of technology. As industry-leading software engineers, we specialize in crafting cutting-edge solutions tailored to elevate your business to new heights of success. With a relentless pursuit of excellence and a deep-rooted passion for innovation, we're committed to delivering solutions that transcend expectations.</p>
          <ReadMore
            text="Whether you're a startup striving to disrupt industries or an established enterprise seeking to stay ahead of the curve, our team of seasoned engineers is equipped to turn your vision into reality."
            maxLength={150}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;


// import React from 'react';
// import ReadMore from './ReadMore';
// import "./Main.css"

// function Main() {
//   return (
//     <div className='container'>
//       <h1>Latest Announcements</h1>
//       <p>View our latest news and announcements</p>
//       {/* <img src="images/Yphoto3.png" alt="" />  */}

//       <div className='flexbox-power'>
//         <div className='flex1'>
//           <img src="images/qphoto17.png" alt="" /> 
//           <h2>Celebrating 6 Years of Excellence</h2>
//           <p>As we reflect on the journey that brought us to this momentous occasion, we at WayUP Technology are overwhelmed with gratitude and pride. Six years ago, we embarked on a mission to redefine the boundaries of software engineering, and today, we stand tall as a beacon of innovation and excellence in the industry. Our path has been marked by countless milestones, challenges conquered, and triumphs celebrated</p>
//           <ReadMore
//             text="Over the past six years, we've had the privilege of collaborating with visionary clients, partners, and colleagues who have inspired us to push the boundaries of what's possible. Together, we've transformed ideas into reality, solutions into success stories, and dreams into tangible achievements."
//             maxLength={150}
//           />
//         </div>
          
//         <div className='flex2'>
//         <img src="images/mphoto5.png" alt="" /> 
//           <h2>Elevate Your Digital Dreams</h2>
//           <p> Look no further for revolutionizing your digital landscape! At WayUP Technology, we're committed to realizing your vision with cutting-edge software solutions. With our seasoned team of engineers, we specialize in crafting bespoke applications tailored to your needs. Whether you're a startup disrupting industries or an established enterprise seeking innovation, we've got you covered.</p>
//           <ReadMore
//             text="Our approach is simple yet powerful: we listen, we innovate, and we deliver. From conceptualization to deployment, our agile methodologies ensure transparency, efficiency, and superior quality every step of the way."
//             maxLength={150}
//           />
//         </div>
          
//         <div className='flex3'>
//         <img src="images/qphoto10.png" alt="" /> 
//           <h2>Unlock Innovation with WayUP Technology</h2>
//           <p>At WayUP Technology, we're not just building software—we're shaping the future of technology. As industry-leading software engineers, we specialize in crafting cutting-edge solutions tailored to elevate your business to new heights of success. With a relentless pursuit of excellence and a deep-rooted passion for innovation, we're committed to delivering solutions that transcend expectations.</p>
//           <ReadMore
//             text="Whether you're a startup striving to disrupt industries or an established enterprise seeking to stay ahead of the curve, our team of seasoned engineers is equipped to turn your vision into reality."
//             maxLength={150}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css";
import 'animate.css';

function Product() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

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
    <article className='wrapper1'>

<h1 className="animate-on-scroll" data-animation="__rotateInDownRight">
  How Can We Help Today?
</h1>
      <p>
        At any juncture of your entrepreneurial quest, consider us your trusted ally, providing unwavering support.
      </p>

      <div className='flex-master'>
        <div className='div1 animate-on-scroll' data-animation="__fadeInLeft">
          <img src='images/photo6.png' alt='Buy A Domain' />
          <h2>Buy A Domain</h2>
          <p>
            Secure your online presence and establish a unique digital identity by registering your domain name through our user-friendly online platform
          </p>
          <button className='domain' onClick={() => handleNavigation('/order')}>
            Buy A Domain
          </button>
        </div>

        <div className='div2 animate-on-scroll' data-animation="__fadeInUp">
          <img src='images/photo1.png' alt='CAC Registration' />
          <h2>Business Registration</h2>
          <p>
            Running a business without proper registration is a critical misstep that can lead to a myriad of legal, financial, and operational challenges.
          </p>
          <button className="register-button" onClick={() => handleNavigation('/order')}>
            Register Your Business
          </button>
        </div>

        <div className='div3 animate-on-scroll' data-animation="__fadeInRight">
          <img src='images/xphoto4.png' alt='Get Support' />
          <h2>Get Support</h2>
          <p>
            Our team is here to offer comprehensive assistance and support to address the myriad issues that businesses encounter during their journey.
          </p>
          <button onClick={() => handleNavigation('/order')}>
            Get Support
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;




// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Product.css";
// import 'animate.css';

// function Product() {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'instant'
//     });
//     navigate(path);
//   };

//   useEffect(() => {
//     // This will add the animation classes when the component mounts
//     const divs = document.querySelectorAll('.animate-on-scroll');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate__animated', entry.target.dataset.animation);
//         }
//       });
//     }, { threshold: 0.1 });

//     divs.forEach(div => observer.observe(div));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <article className='wrapper1'>
//       <h1 className="animate__animated animate__fadeInDown animate__bounce">
//         How Can We Help Today?
//       </h1>
//       <p>
//         At any juncture of your entrepreneurial quest, consider us your trusted ally, providing unwavering support.
//       </p>

//       <div className='flex-master'>
//         <div className='div1 animate-on-scroll' data-animation="animate__fadeInLeft">
//           <img src='images/photo6.png' alt='Buy A Domain' />
//           <h2>Buy A Domain</h2>
//           <p>
//             Secure your online presence and establish a unique digital identity by registering your domain name through our user-friendly online platform
//           </p>
//           <button onClick={() => handleNavigation('/order')}>
//             Buy A Domain
//           </button>
//         </div>

//         <div className='div2 animate-on-scroll' data-animation="animate__fadeInUp">
//           <img src='images/photo1.png' alt='CAC Registration' />
//           <h2>Business Registration</h2>
//           <p>
//             Running a business without proper registration is a critical misstep that can lead to a myriad of legal, financial, and operational challenges.
//           </p>
//           <button className="register-button" onClick={() => handleNavigation('/order')}>
//             Register Your Business
//           </button>
//         </div>

//         <div className='div3 animate-on-scroll' data-animation="animate__fadeInRight">
//           <img src='images/xphoto4.png' alt='Get Support' />
//           <h2>Get Support</h2>
//           <p>
//             Our team is here to offer comprehensive assistance and support to address the myriad issues that businesses encounter during their journey.
//           </p>
//           <button onClick={() => handleNavigation('/order')}>
//             Get Support
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default Product;


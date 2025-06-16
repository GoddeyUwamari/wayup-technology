import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import great2 from '../assets/great2.mp4';
import './Home.css';
import 'animate.css';

const LazyVideo = React.memo(({ src }) => (
  <video className="background-video" autoPlay loop muted playsInline>
    <source src={src} type="video/mp4" />
  </video>
));

const LogoSlider = React.memo(() => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const scroll = () => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
      };

      const intervalId = setInterval(scroll, 20);

      return () => clearInterval(intervalId);
    }
  }, []);

  const logos = useMemo(() => [
    "kphoto11.png", "kphoto14.png", "kphoto.png", "kphoto1.png", "kphoto2.png",
    "kphoto3.png", "kphoto5.png", "kphoto00.png", "kphoto0.png"
  ], []);

  return (
    <div className="logo-container-home">
      <div className="logo-slide-home" ref={sliderRef}>
        {logos.concat(logos).map((img, index) => (
          <img key={index} src={`images/${img}`} alt="" className="logo-image" />
        ))}
      </div>
    </div>
  );
});

const AnimatedText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = useMemo(() => ['Software', 'Websites', 'Brand Logo'], []);

  const typeEffect = useCallback(() => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;

    setText(current => {
      if (shouldDelete) {
        return currentWord.substring(0, current.length - 1);
      } else {
        return currentWord.substring(0, current.length + 1);
      }
    });

    setTypingSpeed(isDeleting ? 75 : 150);

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }, [text, isDeleting, wordIndex, words]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [typeEffect, typingSpeed]);

  return (
    <h2>
      We <span className='span'>build</span> <br />
      great <span className="dynamic-text">{text}</span>
      <span className="cursor">&nbsp;</span>
    </h2>
  );
};

function Home() {
  const navigate = useNavigate();
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoContainerRef = useRef();

  useEffect(() => {
    let currentRef = videoContainerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleOnClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    setTimeout(() => {
      navigate('/contact');
    }, 0);
  }, [navigate]);

  return (
    <>
      <div className="video-container" ref={videoContainerRef}>
        <div className="video-flex">
          {isVideoVisible && <LazyVideo src={great2} />}
          <AnimatedText />
          <div className="inner-video-text">
            <h5>Our Services:</h5>

            <h3 className="animate__animated animate__zoomInDown animate__delay-1s">
  Custom Software Development || <span className="hide-on-small-screen4"><br /></span>
  Web Design || Mobile App || Digital <span className="hide-on-small-screen4"><br /></span>
  Marketing || Website Hosting || <span className="hide-on-small-screen4"><br /></span>
  Graphics Design || Logo Branding<span className="hide-on-small-screen4"><br /></span>
  || Project Management || WordPress<span className="hide-on-small-screen4"><br /></span>
</h3>
        
            <div className="reach-out-btn">
              <button onClick={handleOnClick}>LET'S GET STARTED NOW</button>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>
    </>
  );
}

export default Home;















// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import great2 from '../assets/great2.mp4';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate();

//   const handleOnClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'instant',
//     });
//     setTimeout(() => {
//       navigate('/contact');
//     }, 0);
//   };

//   return (
//     <>

//         <div className="video-container">
//         <div className="video-flex">
//           <video className="background-video" src={great2} autoPlay loop muted></video>
//           <h2>
//             We <span className='span'>build</span> <br />
//             great Software
//           </h2>
//           <div className="inner-video-text">
//             <h5>Our Services:</h5>

//             <h3>
//               Custom Software Development || <span className="hide-on-small-screen4"><br /></span>
//               Web Design || Mobile App || Digital <span className="hide-on-small-screen4"><br /></span>
//               Marketing || Website Hosting || <span className="hide-on-small-screen4"><br /></span>
//               Graphics Design || Logo Branding<span className="hide-on-small-screen4"><br /></span>
//               || Project Management || Enterprise<span className="hide-on-small-screen4"><br /></span>
//             </h3> 


//             <div className="reach-out-btn">
//               <button onClick={handleOnClick}>LET'S GET STARTED NOW</button>
//             </div>
//           </div>
//         </div>

//         <div className="logo-container-home">
//           <div className="logo-slide-home">
//             <img src="images/kphoto11.png" alt="" />
//             <img src="images/kphoto14.png" alt="" />
//             <img src="images/kphoto.png" alt="" />
//             <img src="images/kphoto1.png" alt="" />
//             <img src="images/kphoto2.png" alt="" />
//             <img src="images/kphoto3.png" alt="" />
//             <img src="images/kphoto5.png" alt="" />
//             <img src="images/kphoto00.png" alt="" />
//             <img src="images/kphoto0.png" alt="" />
//             <img src="images/kphoto11.png" alt="" />
//             <img src="images/kphoto14.png" alt="" />
//             <img src="images/kphoto.png" alt="" />
//             <img src="images/kphoto1.png" alt="" />
//             <img src="images/kphoto2.png" alt="" />
//             <img src="images/kphoto3.png" alt="" />
//             <img src="images/kphoto5.png" alt="" />
//             <img src="images/kphoto00.png" alt="" />
//             <img src="images/kphoto0.png" alt="" />
//           </div>
//         </div>
//       </div> 
//     </>
//   );
// }

// export default Home;




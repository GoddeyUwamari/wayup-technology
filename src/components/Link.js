import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Link.css';
import 'animate.css';

const gridItems = [
  {
    img: "images/vphoto8.png",
    title: "Aerospace Research",
    link: "/aero-research",
    description: "Our cutting-edge aerospace research software integrates seamlessly with existing systems, enhancing data analysis, simulation, and operational efficiency.",
    alt: "Aerospace Research Software Solutions",
    metaDescription: "Advanced aerospace research software solutions for data analysis, simulation, and operational efficiency. Enhance your aerospace capabilities with WayUP Technology.",
    schemaType: "ResearchProject",
    category: "Aerospace Technology"
  },
  {
    img: "images/vphoto9.png",
    title: "Banking & Finance",
    link: "/banking-finance",
    description: "WayUP Technology excels in crafting secure and innovative software solutions for the banking and finance sector, ensuring compliance with industry standards and enhancing customer experiences.",
    alt: "Banking and Finance Software Solutions",
    metaDescription: "Secure banking and finance software solutions. Enhance customer experience with compliant financial technology from WayUP Technology.",
    schemaType: "FinancialProduct",
    category: "Financial Technology"
  },
  {
    img: "images/vphoto5.png",
    title: "Defense Research",
    link: "/defense-research",
    description: "WayUP Technology develops sophisticated software solutions for defense research, prioritizing security, precision, and advanced analytics to support critical missions.",
    alt: "Defense Research Software Solutions",
    metaDescription: "Advanced defense research software solutions with enhanced security and analytical capabilities. Empower your defense research with WayUP Technology.",
    schemaType: "ResearchProject",
    category: "Defense Technology"
  },
  {
    img: "images/vphoto4.png",
    title: "Medical Solutions",
    link: "/medical-solutions",
    description: "Our medical software integrates advanced technologies such as AI, machine learning, and telemedicine to support accurate diagnostics, personalized treatment plans, and efficient patient monitoring.",
    alt: "Medical Software Solutions",
    metaDescription: "Advanced medical software solutions featuring AI and telemedicine capabilities. Enhance healthcare delivery with WayUP Technology.",
    schemaType: "MedicalSoftware",
    category: "Healthcare Technology"
  },
  {
    img: "images/vphoto1.png",
    title: "Educational Solutions",
    link: "/educational-solutions",
    description: "We are dedicated to empowering educational institutions with secure, scalable, and user-friendly software systems that streamline administrative tasks and foster academic excellence.",
    alt: "Educational Software Solutions",
    metaDescription: "Comprehensive educational software solutions for modern learning institutions. Transform education with WayUP Technology.",
    schemaType: "Service", // ← CHANGED FROM "SoftwareApplication"
    category: "Educational Technology"
  },
  {
    img: "images/vphoto6.png",
    title: "Hospitality & Travel",
    link: "/hospitality-travel",
    description: "We are committed to improving hospitality operations through innovative software solutions that enhance guest experiences, streamline operations, and maximize efficiency.",
    alt: "Hospitality and Travel Software Solutions",
    metaDescription: "Advanced hospitality and travel software solutions for enhanced guest experiences. Transform your hospitality business with WayUP Technology.",
    schemaType: "Service", // ← CHANGED FROM "SoftwareApplication"
    category: "Hospitality Technology"
  }
];

function LinkComponent() {
  const navigate = useNavigate();
  const pageTitle = "Software Development | WayUP Technology";
  const pageDescription = "Discover advanced software solutions for aerospace, banking, defense, medical, educational, and hospitality sectors. Transform your business with WayUP Technology.";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WayUP Technology",
    "url": "https://www.wayuptechn.com",
    "logo": "https://www.wayuptechn.com/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/wayup-technology",
      "https://twitter.com/wayuptechnology",
      "https://www.facebook.com/wayuptechnology"
    ]
  };

  const generateServiceSchema = (items) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": item.title,
          "description": item.description,
          "provider": {
            "@type": "Organization",
            "name": "WayUP Technology"
          },
          "category": item.category,
          "image": item.img
        }
      }))
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', ...entry.target.dataset.animation.split(','));
        }
      });
    }, { threshold: 0.1 });

    const h1Element = document.querySelector('.global');
    if (h1Element) {
      observer.observe(h1Element);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="industrial software, aerospace software, banking software, defense software, medical software, educational software, hospitality software" />
        <link rel="canonical" href="https://www.wayuptechn.com/solutions" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wayuptechn.com/solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.wayuptechn.com"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Solutions",
              "item": "https://www.wayuptechn.com/solutions"
            }]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(generateServiceSchema(gridItems))}
        </script>
      </Helmet>

      <main itemScope itemType="https://schema.org/WebPage">
        <h1 
          className='global animate-on-scroll'
          data-animation="__zoomIn,animate__delay-s"
          itemProp="headline"
        >
          ADVANCED SOFTWARE FOR THE MODERN INDUSTRIAL LANDSCAPE
        </h1>

        <section 
          className="grid-link-container" 
          aria-label="Industry Solutions"
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          {gridItems.map((item, index) => (
            <article 
              className="grid-item" 
              key={index}
              itemScope 
              itemType={`https://schema.org/${item.schemaType}`}
            >
              <img 
                src={item.img} 
                alt={item.alt} 
                loading={index > 2 ? "lazy" : "eager"} 
                itemProp="image"
              />
              <div className="text-content">
                <h2 itemProp="name">{item.title}</h2>
                <p itemProp="description">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="read-more"
                  aria-label={`Read more about ${item.title}`}
                  itemProp="url"
                >
                  Read More
                  <FaArrowRight aria-hidden="true" style={{ marginLeft: '5px', marginBottom: '-4px', paddingLeft: '6' }} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <div className='button-container'>
          <button 
            className='link-button' 
            onClick={handleOnClick}
            aria-label="Contact us about business software"
          >
            GET YOUR BUSINESS SOFTWARE
          </button>
        </div>
      </main>
    </>
  );
}

export default LinkComponent;




// import React, { useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import './Link.css';
// import 'animate.css';

// const gridItems = [ { 
//   img: "images/vphoto8.png", 
//   title: "Aerospace Research", 
//   link: "/aero-research",
//   description: "Our cutting-edge aerospace research software integrates seamlessly with existing systems, enhancing data analysis, simulation, and operational efficiency."
// },
// { 
//   img: "images/vphoto9.png", 
//   title: "Banking & Finance", 
//   link: "/banking-finance",
//   description: "WayUP Technology excels in crafting secure and innovative software solutions for the banking and finance sector, ensuring compliance with industry standards and enhancing customer experiences."
// },
// { 
//   img: "images/vphoto5.png", 
//   title: "Defense Research", 
//   link: "/education",
//   description: "WayUP Technology develops sophisticated software solutions for defense research, prioritizing security, precision, and advanced analytics to support critical missions."
// },
// { 
//   img: "images/vphoto4.png", 
//   title: "Medical Solutions", 
//   link: "/medicine-software",
//   description: "Our medical software integrates advanced technologies such as AI, machine learning, and telemedicine to support accurate diagnostics, personalized treatment plans, and efficient patient monitoring."
// },
// { 
//   img: "images/vphoto1.png", 
//   title: "Educational Solutions", 
//   link: "/military-research-1",
//   description: "We are dedicated to empowering educational institutions with secure, scalable, and user-friendly software systems that streamline administrative tasks and foster academic excellence."
// },
// { 
//   img: "images/vphoto6.png", 
//   title: "Hospitality & Travel", 
//   link: "/military-research-2",
//   description: "We are committed to improving healthcare outcomes by delivering secure, compliant, and user-friendly medical software systems that empower healthcare professionals and optimize clinical operations."
// },
//   // ... (your existing gridItems array)
// ];

// function LinkComponent() {
//   const navigate = useNavigate();

//   const handleOnClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'instant'
//     });
//     navigate('/contact');
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate__animated', ...entry.target.dataset.animation.split(','));
//         }
//       });
//     }, { threshold: 0.1 });

//     const h1Element = document.querySelector('.global');
//     if (h1Element) {
//       observer.observe(h1Element);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <h1 
//         className='global animate-on-scroll' 
//         data-animation="animate__zoomIn,animate__delay-s"
//       >
//         ADVANCED SOFTWARE FOR THE MODERN INDUSTRIAL LANDSCAPE
//       </h1>

//       <div className="grid-link-container">
//         {gridItems.map((item, index) => (
//           <div className="grid-item" key={index}>
//             <img src={item.img} alt={item.title} />
//             <div className="text-content">
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//               <Link to={item.link} className="read-more">
//                 Read More
//                 <FaArrowRight style={{ marginLeft: '5px', marginBottom: '-4px', paddingLeft: '6' }} />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='button-container'>
//         <button className='link-button' onClick={handleOnClick}>GET YOUR BUSINESS SOFTWARE</button>
//       </div>
//     </>
//   );
// }

// export default LinkComponent;



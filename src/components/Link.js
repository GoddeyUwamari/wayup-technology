import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Link.css';
import 'animate.css';


const gridItems = [
  {
    img: "images/restaurant-hero.jpg",
    title: "Restaurants & Cafes",
    link: "/contact",
    description: "Streamline operations with POS integration, inventory management, and customer loyalty tools built for growing food businesses.",
    alt: "Restaurant Software Solutions",
    metaDescription: "Restaurant software for POS, inventory, and loyalty. Grow your food business with WayUP Technology.",
    schemaType: "Service",
    category: "Restaurant Technology"
  },
  {
    img: "images/salon-hero.jpg",
    title: "Salons & Spas",
    link: "/contact",
    description: "Booking, client management, and payroll tools that help salons and spas operate efficiently while focusing on customer experience.",
    alt: "Salon Software Solutions",
    metaDescription: "Salon and spa software for bookings and client management. Grow your business with WayUP Technology.",
    schemaType: "Service",
    category: "Beauty & Wellness Technology"
  },
  {
    img: "images/lawfirm-hero.jpg",
    title: "Law Firms",
    link: "/contact",
    description: "Case management, document automation, and client communication tools designed for small to mid-sized law firms.",
    alt: "Law Firm Software Solutions",
    metaDescription: "Law firm software for case management and document automation. Streamline your legal practice with WayUP Technology.",
    schemaType: "Service",
    category: "Legal Technology"
  },
  {
    img: "images/realestate-hero.jpg",
    title: "Real Estate Agencies",
    link: "/contact",
    description: "Property listings, client management, and marketing automation tools that help agencies close more deals.",
    alt: "Real Estate Software Solutions",
    metaDescription: "Real estate software for listings and client management. Grow your agency with WayUP Technology.",
    schemaType: "Service",
    category: "Real Estate Technology"
  },
  {
    img: "images/contractor-hero.jpg",
    title: "Contractors & Trades",
    link: "/contact",
    description: "Scheduling, job tracking, and invoicing tools built for contractors, electricians, plumbers, and home service businesses.",
    alt: "Contractor Software Solutions",
    metaDescription: "Contractor software for scheduling and job tracking. Streamline your trades business with WayUP Technology.",
    schemaType: "Service",
    category: "Trades Technology"
  },
  {
    img: "images/retail-hero.jpg",
    title: "Retail Stores",
    link: "/contact",
    description: "Inventory, POS, and e-commerce integration tools that help retail stores manage operations and grow sales.",
    alt: "Retail Software Solutions",
    metaDescription: "Retail software for inventory and POS. Grow your retail business with WayUP Technology.",
    schemaType: "Service",
    category: "Retail Technology"
  }
];


function LinkComponent() {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const pageTitle = "Software Solutions for Growing Businesses | WayUP Technology";
  const pageDescription = "Discover reliable software solutions for restaurants, salons, law firms, real estate agencies, contractors, and retail stores. Built for SMBs growing with WayUP Technology.";

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
      "name": "WayUP Technology Solutions",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": item.title,
          "description": item.description,
          "provider": {
            "@type": "Organization",
            "name": "WayUP Technology",
            "url": "https://www.wayuptechn.com"
          },
          "category": item.category,
          "areaServed": "United States"
        }
      }))
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animations = entry.target.dataset.animation?.split(',');
          if (animations) {
            entry.target.classList.add('animate__animated', ...animations);
          }
        }
      });
    }, { threshold: 0.1 });

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="restaurant software, salon software, law firm software, real estate software, contractor software, retail software, SMB software solutions" />
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
          ref={headingRef}
          className='global animate-on-scroll'
          data-animation="animate__zoomIn,animate__delay-1s"
          itemProp="headline"
        >
          RELIABLE SOFTWARE SOLUTIONS BUILT FOR GROWING BUSINESSES
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
                  <FaArrowRight aria-hidden="true" style={{ marginLeft: '5px', marginBottom: '-4px', paddingLeft: '6px' }} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <div className='button-container'>
          <button
            className='link-button'
            onClick={handleOnClick}
            aria-label="Book a free consultation for SMB software"
          >
            BOOK A FREE CONSULTATION
          </button>
        </div>
      </main>
    </>
  );
}


export default LinkComponent;
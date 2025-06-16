import React, { useState, useEffect, useRef } from 'react';

const LazyLoading = ({ src, alt, ...props }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={imgRef}>
      {inView ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <div style={{ height: '100px', background: '#f0f0f0' }} /> // Placeholder
      )}
    </div>
  );
};

export default React.memo(LazyLoading);
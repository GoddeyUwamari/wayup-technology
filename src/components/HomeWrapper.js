import React, { useEffect } from 'react';
import HeroSection from './HeroSection'
import Home from './Home';
import PricingSection from './PricingSection';
// import Section from './Section';
import Link from './Link';
import Product from './Product';
import Language from './Language';
import Main from './Main';
import Treasure from './Treasure';
import Services from './Services';
import Client from './Client';
// import Mobile from './Mobile';

const HomeWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Client />
      {/* <Home /> */}
      <PricingSection />
      {/* <Section /> */}
      <Services/>
      <Link />
      <Product />
      <Treasure />
      <Language />
      <Main/>
    </>
  );
};

export default HomeWrapper;

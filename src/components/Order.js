import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import Contact from '../components/Contact';
import "./Order.css"


function Order() {
  const navigate = useNavigate();
  
  const goToContactPage = () => {
    navigate('/contact');
  };


  return (
    <>
    <div>
      <Contact />
     
<button className="contact-button" onClick={goToContactPage}>Contact us</button>
    </div >
  </>
  )
}

export default Order;
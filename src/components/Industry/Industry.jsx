import "./Industry.css"

import company1 from "../../assets/companies_img/company-01.svg"
import company2 from "../../assets/companies_img/company-02.svg"
import company3 from "../../assets/companies_img/company-03.svg"
import company4 from "../../assets/companies_img/company-04.svg"
import company5 from "../../assets/companies_img/company-05.svg"
import company6 from "../../assets/companies_img/company-06.svg"

import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Industry = () => {

 // Animation control
 const controls = useAnimation();
  
 // Ref to observe the element's visibility
 const { ref, inView } = useInView({
   threshold: 0.5, // Trigger when 20% of the element is visible
 });

 // Trigger animation on scroll when the element is in view
 useEffect(() => {
   if (inView) {
     controls.start({ opacity: 1, y: 0 });
   } else {
     controls.start({ opacity: 0, y: 50 }); // Reset position and opacity when out of view
   }
 }, [controls, inView]);


  return (
    <div className="company-container">
      <motion.div className="company-section"
       ref={ref} // Attach ref to the element we want to observe
       initial={{ opacity: 0, y: 50 }} // Initial state before animation
       animate={controls} // Pass the animation controls
       transition={{ duration: 0.5 }} // Transition duration of 0.5s
      
      >
        <p>TRUSTED BY THE BEST IN THE INDUSTRY</p>
        <div className="company-images">
          <img src={company1} alt="company-logo" className="company-icon"/>
          <img src={company2} alt="company-logo" className="company-icon"/>
          <img src={company3} alt="company-logo" className="company-icon"/>
          <img src={company4} alt="company-logo" className="company-icon"/>
          <img src={company5} alt="company-logo" className="company-icon"/>
          <img src={company6} alt="company-logo" className="company-icon"/>
        </div>
      </motion.div>
    </div>
  )
}

export default Industry

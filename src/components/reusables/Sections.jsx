import "./Sections.css"
import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* eslint-disable react/prop-types */

const Sections = ({ button, title, descriptions}) => {

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
    <motion.div className="sections-container"
    ref={ref} // Attach ref to the element we want to observe
    initial={{ opacity: 0, y: 50 }} // Initial state before animation
    animate={controls} // Pass the animation controls
    transition={{ duration: 0.5 }} // Transition duration of 0.5s
    >
      <div className="sections">
          <motion.button className="sections-btn"
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}

          >{button}</motion.button>
          <h2 className="sections-title">{title}</h2>
          <p className="sections-description">{descriptions}</p>
      </div>
    </motion.div>
  )
}

export default Sections

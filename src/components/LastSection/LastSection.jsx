import "./LastSection.css"

import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const LastSection = () => {

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
    <motion.div className="last-section"
      ref={ref} // Attach ref to the element we want to observe
      initial={{ opacity: 0, y: 50 }} // Initial state before animation
      animate={controls} // Pass the animation controls
      transition={{ duration: 0.5 }} // Transition duration of 0.5s
    
    >
      <div className="last-section-sub-container">
        <motion.span className="highlights"
          initial={{scale:0}}
          animate={{scale:2}}
          transition={{duration: 1}}
        ></motion.span>
        <p>Step into the future of link management</p>
        <p>Experience the cutting-edge solution that transforms how you handle your links. Elevate your online presence with our next-gen platform.</p>
        <button>Get started for free ➔</button>
      </div>
    </motion.div>
  )
}

export default LastSection

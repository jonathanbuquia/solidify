import Sections from "../reusables/Sections"
import "./Managelinks.css"
import Calendar from "./Calendar"

import { IoLinkOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

import AppsPic from "../../assets/apps.svg";


import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';


const Managelinks = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isUpperRightHovered, setIsUpperRightHovered] = useState(false);
  const [isLowerLeftHovered, setIsLowerLeftHovered] = useState(false);
  const [isLowerRightHovered, setIsLowerRightHovered] = useState(false);

   // Animation control
 const controls = useAnimation();
  
 // Ref to observe the element's visibility
 const { ref, inView } = useInView({
   threshold: 0.2, // Trigger when 20% of the element is visible
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
    <div>
      <Sections 
      classNames="manage-sections"
      button="Features"
      title="Manage Links Like a Pro"
      descriptions=" Solidify is a powerful link management tool that helps you shorten, track, and organize all your links in one place"
      />

      <motion.div className="link-sections"
       ref={ref} // Attach ref to the element we want to observe
       initial={{ opacity: 0, y: 50 }} // Initial state before animation
       animate={controls} // Pass the animation controls
       transition={{ duration: 0.5 }} // Transition duration of 0.5s      
      
      >
        <div className="upper-container">
          <motion.div className="upper-left-container"
            onHoverStart={() => setIsHovered(true)} // Start hover effect
            onHoverEnd={() => setIsHovered(false)} // End hover effect          
          >
              <motion.div className="upper-back-left-container"
                animate={{
                  x: isHovered ? -25 : 0, // Scale up on hover
                  transition: { duration: 0.3 },
                  overflow: "hidden"
                }}
              
              >
                <h2>Create short links</h2>
                <p>Create short links that are easy to remember and share</p>
                <span>Paste your link:</span>
                <input type="text" placeholder="Paste your link here" className="blc-input"/>
              </motion.div>

              <motion.div className="upper-front-left-container"
                initial={{y:100}}
                animate={{
                  y: isHovered ? -40 : 0, // Scale up on hover
                  background: isHovered ? "rgba(254, 180, 123, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  transition: { duration: .3 },
                }}         
                style={{
                  backdropFilter: "blur(7px)"
                }}       
              
              >
                <span><IoLinkOutline className="upper-left-icon"/></span>
                <h2>Shorten links</h2>
                <p>Create short links that are easy to remember and share</p>
                <a href="#">Learn more ➔</a>
              </motion.div>
          </motion.div>


          <motion.div className="upper-right-container"
            onHoverStart={() => setIsUpperRightHovered(true)} // Start hover effect
            onHoverEnd={() => setIsUpperRightHovered(false)} // End hover effect 
          >
              <motion.div className="upper-back-right-container"
                animate={{
                  x: isUpperRightHovered ? -25 : 0, // Scale up on hover
                  transition: { duration: 0.3 },
                }}
              >
                  <input type="text" placeholder="Type to search ..."/>
                  <a href="#">solidify.io/hdf00c</a>
                  <a href="#">solidify.io/sdf30a</a>
                  <a href="#">solidify.io/ahs47c</a>
                  <a href="#">solidify.io/tdf80c</a>
                  <a href="#">solidify.io/hdf00c</a>
              </motion.div>
              <motion.div className="upper-front-right-container"
                initial={{y:100}}
                animate={{
                  y: isUpperRightHovered ? -40 : 0, // Scale up on hover
                  background: isUpperRightHovered ? "rgba(254, 180, 123, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  transition: { duration: .3 },
                }}         
                style={{
                  backdropFilter: "blur(7px)"
                }}       
              >
                <span><IoSearch className="upper-right-icon"/></span>
                <h2>Search your links</h2>
                <p>Quickly find the links you need with AI-powered search</p>
                <a href="#">Learn more ➔</a>
              </motion.div>
          </motion.div>


        </div>
          <div className="lower-container">
            <motion.div className="lower-left-container"
              onHoverStart={() => setIsLowerLeftHovered(true)} // Start hover effect
              onHoverEnd={() => setIsLowerLeftHovered(false)} // End hover effect  
            
            >
              <motion.div className="lower-back-left-container"
                animate={{
                  x: isLowerLeftHovered ? -100 : 0, // Scale up on hover
                  transition: { duration: 0.3 },
                }}              
              
              >
                  <img src={AppsPic} alt="appsPic" />
              </motion.div>
              <motion.div className="lower-front-left-container"
                initial={{y:100}}
                animate={{
                  y: isLowerLeftHovered ? -40 : 0, // Scale up on hover
                  background: isLowerLeftHovered ? "rgba(254, 180, 123, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  transition: { duration: .3 },
                }}         
                style={{
                  backdropFilter: "blur(7px)"
                }}                
              >
                <span><IoAnalytics className="lower-left-icon"/></span>
                <h2>Connect your apps</h2>
                <p>Integrate with your favorite apps and services</p>
                <a href="#">Learn more ➔</a>
              </motion.div>
            </motion.div>

            <motion.div className="lower-right-container"
              onHoverStart={() => setIsLowerRightHovered(true)} // Start hover effect
              onHoverEnd={() => setIsLowerRightHovered(false)} // End hover effect             
            >
              <motion.div className="lower-back-right-container"
                animate={{
                  x: isLowerRightHovered ? 50 : 0, // Scale up on hover
                  transition: { duration: 0.3 },
                }}                
              >
                <Calendar />
              </motion.div>
              <motion.div className="lower-front-right-container"
                initial={{y:100}}
                animate={{
                  y: isLowerRightHovered ? -40 : 0, // Scale up on hover
                  background: isLowerRightHovered ? "rgba(254, 180, 123, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  transition: { duration: .3 },
                }}         
                style={{
                  backdropFilter: "blur(7px)"
                }}                
              >
                <span><CiCalendar className="lower-right-icon"/></span>
                <h2>Calendar</h2>
                <p>Keep track of your links with our calendar view</p>
                <a href="#">Learn more ➔</a>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
  )
}

export default Managelinks

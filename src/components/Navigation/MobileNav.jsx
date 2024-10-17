import "./MobileNav.css"

import { CiLock } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { MdOutlineQrCode } from "react-icons/md";

import { LiaNewspaperSolid } from "react-icons/lia";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";


import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';



const MobileNav = () => {

  const [features, setFeatures] = useState(false);
  const [resources, setResources] = useState(false);

  const toggleFeatures = () => {
    setFeatures(!features);
      if (resources) {
        setResources(!resources);
      }
    } 

  const toggleResources = () => {
    setResources(!resources);
      if (features) {
        setFeatures(!features);
      }
    }

  return (
    <nav className="menu-container">
      <motion.div className="menu-section"
      
      initial={{ x: '-100%' }}
      animate={{x:0}}
      transition={{ duration: 1 }}
      
      >
        <div className="menu-buttons">
          <button className="menu-btn-signIn menu-btn">Sign In</button>
          <button className="menu-btn-signUp menu-btn">Sign Up</button>
        </div>
        <div className="menu-items">
          <a href="#" onClick={toggleFeatures}className="menu-main-title">
            Features  <span className="arrow">
            <MdOutlineKeyboardArrowDown className={`${ features ? "m-arrow-up" : "m-arrow-down"}`}/></span>
          </a>
         
            <div className="menu-features">
            {/* <AnimatePresence>
              <motion.div className={`menu-features-subitems ${features ? "" : "close"}`}
              
              initial={{height: 0}}
              animate={{height: features ? "auto": 0}}
              exit={{height: 0}}
              transition={{duration: .5}}
              style={{ overflow: 'hidden' }}
            
              >
                  <div className="menu-features-link menu-features-tab">
                      <a href="#"><span className="menu-title"><IoLinkOutline className="menu-features-icon"/>
                      Link Shortening</span>
                      <p className="menu-title-description"> Shorten links and track their performance</p></a>
                  </div>
                  <div className="menu-features-password menu-features-tab">
                      <a href="#"><span className="menu-title"><CiLock className="menu-features-icon"/>
                      Password Protection</span>
                      <p className="menu-title-description">Secure your links with a password</p></a>
                  </div>
                  <div className="menu-features-analytics menu-features-tab">
                      <a href="#"><span className="menu-title"><IoAnalytics className="menu-features-icon"/>
                      Advanced Analytics</span>
                      <p className="menu-title-description">Gain insights into who is clicking your links</p></a>
                  </div>
                  <div className="menu-features-qr menu-features-tab">
                      <a href="#"><span className="menu-title"><MdOutlineQrCode className="menu-features-icon"/>Custom QR Codes</span>
                      <p className="menu-title-description">Use QR codes to reach your audience</p></a>
                  </div>

              </motion.div>
            </AnimatePresence> */}

          <AnimatePresence>
            {features && (
              <motion.div
                className={`menu-features-subitems ${features ? "" : "close"}`} // Keep your className structure
                initial={{ height: 0 }} // Start with height 0 and opacity 0
                animate={{ height: 'auto', opacity: 1 }} // Animate to full height and opacity 1
                exit={{ height: 0 }} // Collapse back to height 0 and opacity 0
                transition={{ duration: 0.5 }} // Transition duration
                style={{ overflow: 'hidden' }} // Hide overflow
              >
                <div className="menu-features-link menu-features-tab">
                  <a href="#">
                    <span className="menu-title"><IoLinkOutline className="menu-features-icon" /> Link Shortening</span>
                    <p className="menu-title-description">Shorten links and track their performance</p>
                  </a>
                </div>
                <div className="menu-features-password menu-features-tab">
                  <a href="#">
                    <span className="menu-title"><CiLock className="menu-features-icon" /> Password Protection</span>
                    <p className="menu-title-description">Secure your links with a password</p>
                  </a>
                </div>
                <div className="menu-features-analytics menu-features-tab">
                  <a href="#">
                    <span className="menu-title"><IoAnalytics className="menu-features-icon" /> Advanced Analytics</span>
                    <p className="menu-title-description">Gain insights into who is clicking your links</p>
                  </a>
                </div>
                <div className="menu-features-qr menu-features-tab">
                  <a href="#">
                    <span className="menu-title"><MdOutlineQrCode className="menu-features-icon" /> Custom QR Codes</span>
                    <p className="menu-title-description">Use QR codes to reach your audience</p>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

            </div>
          
          <a href="#" className="menu-main-title">Pricing</a>
          <a href="#" className="menu-main-title">Enterprise</a>
          <a href="#" className="menu-main-title"  onClick={toggleResources}>Resources<span className="arrow">
          <MdOutlineKeyboardArrowDown className={`${ resources ? "m-arrow-up" : "m-arrow-down"}`}/></span></a>
              
              <AnimatePresence>
                {resources && (
                  <motion.div 
                  
                    className={`menu-resources-subitems ${resources ? "" : "close"}`}
                    initial={{ height: 0 }} // Start with height 0 and opacity 0
                    animate={{ height: 'auto', opacity: 1 }} // Animate to full height and opacity 1
                    exit={{ height: 0 }} // Collapse back to height 0 and opacity 0
                    transition={{ duration: 0.5 }} // Transition duration
                    style={{ overflow: 'hidden' }} // Hide overflow
                    
                    >
                    <div className="menu-resources-blog menu-resource-tab">
                        <a href="#"><span className="menu-title"><LiaNewspaperSolid  className="menu-features-icon"/>
                        Blog</span>
                        <p className="menu-title-description">Read articles on the latest trends in tech</p></a>
                    </div>
                    <div className="menu-resources-help menu-resource-tab">
                        <a href="#"><span className="menu-title"><IoIosHelpCircleOutline  className="menu-features-icon"/>
                        Help</span>
                        <p className="menu-title-description">Get answers to your questions</p></a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          <a href="#" className="menu-main-title">Changelog</a>
        </div>
      </motion.div>
    </nav>
  )
}

export default MobileNav





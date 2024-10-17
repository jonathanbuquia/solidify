import "./Navigation.css"
import MobileNav from "./MobileNav.jsx";
import "./MobileNav.css"

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { MdOutlineQrCode } from "react-icons/md";
import { LiaNewspaperSolid } from "react-icons/lia";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import {  AnimatePresence, motion } from 'framer-motion';


const Navigation = () => {

  const [features, setFeatures] = useState(false);
  const [resources, setResources] = useState(false);
  const [hamMenu, setHamMenu] = useState(true);

  const toggleFeatures = (e) => {
    e.preventDefault();
    setFeatures(!features);
      if (resources) {
        setResources(!resources);
      }
    } 

  const toggleResources = (e) => {
    e.preventDefault();
    setResources(!resources);
      if (features) {
        setFeatures(!features);
      }
    }

  const hamburger = (e) => {
    e.preventDefault();
    setHamMenu(!hamMenu);
  }

// ----------- CONTENT ------------ //

  return (
    <nav className="navigation-section">
      <motion.div className="navigation-container"
          initial={{y:-20}}
          animate={{y:0}}
          transition={{duration: 1}}      
      >
        <div className="logo">
          <a href="#"><span className="logo-text">Solidify</span></a>
        </div>

        <motion.span 

            initial={{ rotate: 0 }}  // Initial rotation of the hamburger icon
            animate={{ rotate: hamMenu ? 0 : 180 }}  // Rotate when switching between icons
            transition={{ duration: 0.3 }}  // Transition duration (0.3 seconds)


        className="hamburger" onClick={hamburger}> 
          {hamMenu ? <IoMenu className="hamburger-icon"/> : <IoMdClose className="hamburger-icon"/>}
        </motion.span>

          {!hamMenu && (
            <span className={`mobile-nav ${hamMenu ? "" : "open"}`}>
                <MobileNav />
            </span>
          )}


        <div className="navigation-menu">
          <a href="#" className="features" onClick={toggleFeatures}>Features
            <span className="arrow">
              <MdOutlineKeyboardArrowDown className={`${ features ? "arrow-up" : "arrow-down"}`}/></span>  
          </a>
          <AnimatePresence>
            {features && (
              <motion.div 
              className={`features-container ${features ? "" : "close"}`}
              initial={{ height: 0 }} // Start with height 0 and opacity 0
              animate={{ height: 'auto' }} // Animate to full height and opacity 1
              exit={{ height: 0 }} // Collapse back to height 0 and opacity 0
              transition={{ duration: 0.5 }} // Transition duration
              style={{ overflow: 'hidden' }} // Hide overflow
              
              >
                <a href="#" className="features-left">
                    <span>All Features</span>
                    <p>Manage links, track performance, and more...</p>
                </a>
                <div className="features-right">
                  <a href="#" className="features-link features-tab">
                      <span className="features-title"><IoLinkOutline className="features-icon"/>
                      Link Shortening</span>
                      <p className="title-description">Shorten links and track their ...</p>
                  </a>
                  <a href="#" className="features-password features-tab">
                    <span className="features-title"><CiLock className="features-icon"/>
                    Password Protection</span>
                    <p className="title-description">Secure your links with a password</p>
                  </a>
                  <a href="#" className="features-analytics features-tab">
                    <span className="features-title"><IoAnalytics className="features-icon"/>

                    Advanced Analytics</span>
                    <p className="title-description">Gain insights into who is clicking ...</p>
                  </a>
                  <a href="#" className="features-qr features-tab">
                    <span className="features-title"><MdOutlineQrCode className="features-icon"/>
                    Custom QR Codes</span>
                    <p className="title-description">Use QR codes tor each your ...</p>
                  </a>
                </div>
              </motion.div>
              )}
            </AnimatePresence>

          <a href="#">Pricing</a>
          <a href="#">Enterprise</a>
          <a href="#" className="features" onClick={toggleResources}>Resources
            <span className="arrow">
              <MdOutlineKeyboardArrowDown className={`${ resources ? "arrow-up" : "arrow-down"}`}/></span>
          </a>

          <AnimatePresence>
            {resources && (
            <motion.div 
            className={`resources-container ${resources ? "" : "close"}`}
            initial={{ height: 0 }} // Start with height 0 and opacity 0
            animate={{ height: 'auto' }} // Animate to full height and opacity 1
            exit={{ height: 0 }} // Collapse back to height 0 and opacity 0
            transition={{ duration: 0.5 }} // Transition duration
            style={{ overflow: 'hidden' }} // Hide overflow
            >
              <div className="resources-blog resources-tab">
                <a href="#">
                  <span className="resources-title"><LiaNewspaperSolid  className="features-icon"/>
                    Blog
                  </span>
                  <p className="blog-p">
                    Read articles on the latest ...
                  </p>
                </a>
              </div>
              <div className="resources-help resources-tab">
                <a href="#">
                  <span className="resources-title"><IoIosHelpCircleOutline  className="features-icon"/>
                    Help
                  </span>
                  <p className="blog-p">
                    Get answers to your questions.
                  </p>
                </a>
              </div>
            </motion.div>
            )}
          </AnimatePresence>

          <a href="#">Changelog</a>
        </div>
         <div className="nav-buttons">
           <button className="btn-sign-in">Sign In</button>
           <button className="btn-get-started">Get Started⚡</button>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation

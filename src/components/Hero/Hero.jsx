import "./Hero.css"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div className="hero-container"
      initial={{y:-20}}
      animate={{y:0}}
      transition={{duration: 1}}
    >
      <div className="hero-section">
        <motion.button className="hero-btn-black"
           initial={{scale: 1}}
           whileHover={{scale: 1.05}}
        
        >✨Manage links smarter ➔</motion.button>
        <h1 className="hero-title">Smart Links <br />with <span>Precision</span></h1>
        <p>Effortlessly streamline your link management with Solidify.
          <br />Shorten, track, and organize all your links in one place.</p>
        <button className="hero-btn-white">Start creating for free ➔</button>
      </div>
    </motion.div>
  )
}

export default Hero

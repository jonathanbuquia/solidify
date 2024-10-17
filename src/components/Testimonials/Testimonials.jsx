import "./Testimonials.css"

import Sections from "../reusables/Sections"
import { TestimonialsCard } from "./TestimonialsCard.js"

import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <div>
      <Sections 
        className="sections-container"
        button="Our Customers"
        title="What our users are saying"
        descriptions="Here's what some of our users have to say about Solidify"
      />
      <div className="testimonials-container">
        {TestimonialsCard.map((obj, index) => {
          return (
          <motion.div className="testimonials-card" key={index}
          
          initial={{
            borderColor: 'rgba(128, 128, 128, 0.5)', // Semi-transparent gray
            borderWidth: '1px', // Set the initial width
          }}
          whileHover={{
            borderColor: '#FF9646', 
            borderWidth: '1px', 
            transition: { duration: .5 },
          }}
          >
            <h4>{obj.name}</h4>
            <h5>{obj.ig}</h5>
            <p>{obj.message}</p>
            <span>{obj.stars}</span>
          </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials

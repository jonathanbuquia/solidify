import "./EffortCards.css"
import { motion } from "framer-motion"

/* eslint-disable react/prop-types */

const EffortCards = ({ Icon, title, descriptions, number}) => {
  return (
    <motion.div className="cards-container"
    initial={{
      borderColor: 'rgba(128, 128, 128, 0.5)', // Semi-transparent gray
      borderWidth: '1px', // Set the initial width
    }}
    whileHover={{
      borderColor: '#FF9646', 
      borderWidth: '1px', 
      transition: { duration: .5 },
    }}>
      <span>
        <Icon className="effort-card-icon"/>
      </span>
      <span>{number}</span>
      <h4>{title}</h4>
      <p>{descriptions}</p>
    </motion.div>
  )
}

export default EffortCards

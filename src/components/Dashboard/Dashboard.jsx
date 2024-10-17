import dash1 from "../../assets/dash_image.svg"
import "./Dashboard.css"
import { motion} from "framer-motion"


const Dashboard = () => {

  return (
    <div className="dash-container">
      <motion.div className="dash-section"
        initial={{y:20}}
        animate={{y:0}}
        transition={{duration: 1}}
      
      >
       <img src={dash1} alt="dashboard" className="dash_image"/> 
      </motion.div>
    </div>
  )
}

export default Dashboard

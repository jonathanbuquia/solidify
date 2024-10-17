
import "./Effortless.css"
import Sections from "../reusables/Sections"
import EffortCards from "../reusables/EffortCards"

import { FaRegFolderOpen } from "react-icons/fa";
import { PiMagicWand } from "react-icons/pi";
import { GoGraph } from "react-icons/go";


const Effortless = () => {
  return (
    <div>
      <div className="effort-sections">
        <Sections 
          button="The Process"
          title="Effortless link management in 3 steps"
          descriptions="Follow these simple steps to optimize, organize, and share your links with ease"
        />
      </div>
      <div className="effort-cards">
        <EffortCards 
          Icon={FaRegFolderOpen} 
          number="1"
          title="Organize Your Links"
          descriptions="Efficiently categorize and tag your links for quick access and easy management."
        />

        <EffortCards 
          Icon={PiMagicWand} 
          number="2"
          title="Shorten and Customize"
          descriptions="Create concise, branded links that are easy to share and track."
        />

        <EffortCards 
          Icon={GoGraph} 
          number="3"
          title="Analyze and Optimize"
          descriptions="Gain insights into link performance and optimize for better engagement"
        />

      </div>
    </div>
  )
}

export default Effortless

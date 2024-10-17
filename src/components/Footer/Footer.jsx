import "./Footer.css"
import logo from "../../assets/favicon/solidify.ico"
import FooterCard from "./FooterCard.jsx"

// eslint-disable react/prop-types 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-first-column">
          <img src={logo} alt="logo" />
          <p>Manage your links with ease</p>
          <p>Made by JB</p>
        </div>
        {FooterCard.map((obj, index)=> {
          return (
            <div key={index} className="footer-columns">
              <span>{obj.title}</span>
              <p>{obj.itemOne}</p>
              <p>{obj.itemTwo}</p>
              <p>{obj.itemThree}</p>
              <p>{obj.itemFour}</p>
            </div>
          )
        })}
      </div>
      <div>
        <p className="copyright">© 2024 Solidify INC. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

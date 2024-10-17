import "./Pricing.css"
import { TbCheckbox } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";

import Sections from "../reusables/Sections"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


// ----------- PROPS -----------

/* eslint-disable react/prop-types */

const PricingCardsUpper = ({plan, who, price, date, discount, id, term}) => {
  return (
    <div>
      <div key={id} className="upper-plan">
        <h4>{plan}</h4>
        <p>{who}</p>

        
        <div className="terms-option">
          <h2>{price}</h2>
          {(id > 1) ? ( 
            <>
            <span>{date}</span>
            
          <AnimatePresence>
            {term ? null : (
            <motion.span 
              className="terms-option-discount"
              initial={{x:10 , opacity: 0}}
              animate={{x:0 , opacity: 1}}
              exit={{x:10, opacity: 0}}
              transition={{duration: .5}}
            >{discount}</motion.span>
            )}
          </AnimatePresence>
            </>
            ): null }
        </div>
      </div>
    </div>
  )
}

const PricingCardLower = ({description}) => {
  return (
    <div className="pricing-card-lower">
      <TbCheckbox className="checkbox"/>
      <span>{description}</span>
    </div>
  )
}

// ---------- MAIN SECTION -----------


const Pricing = () => {

  const [isMonthly, setIsMonthly] = useState(true);
  const [isYearly, setIsYearly] = useState(false);

  const handleMonthly = (e) => {
    e.preventDefault();
    setIsMonthly(true);
    if (isYearly) {
      setIsYearly(false);
    }
  }

  const handleYearly = (e) => {
    e.preventDefault();
    setIsYearly(true);
    if (isMonthly) {
      setIsMonthly(false);
    }
  }

  return (
    <div className="main-pricing-container">
      <div className="main-pricing-sub-container">
        <Sections 
          button="Simple Pricing"
          title="Choose a plan that works for you"
          descriptions="Get started with Solidify today and enjoy more features with our pro plans."
        />
        <div className="pricing-terms-container">
          <div className="pricing-terms-sub-container">
            <button className={`term-btn monthly ${isMonthly ? "term" : ""}`}
              onClick={handleMonthly}>Monthly</button>
            
            <button className={`term-btn yearly ${isYearly ? "term" : ""}`}
              onClick={handleYearly}>Yearly</button>
          </div>
        </div>

        <div className="pricing-container">
          <div className="pricing-terms">
            <div className="upper-pricing">
              <PricingCardsUpper 
                id="1"
                plan="Free"
                who="For most individuals"
                // price="$0"  
                price="$0"  

              />
            </div>
            <div className="main-pricing-sub">
              <PricingCardLower description="Shorten links" />
              <PricingCardLower description="Up to 100 tags" />
              <PricingCardLower description="Customizable branded links" />
              <PricingCardLower description="Track clicks" />
              <PricingCardLower description="Community support" />
              <PricingCardLower description="AI powered suggestions" />
            </div>
            <div className="pricing-btn-box">
              <button className="pricing-btn">Start for free</button>
            </div>
          </div>
          <div className="pricing-terms mid-pricing">
            <div className="upper-pricing">
              <PricingCardsUpper 
                id="2"
                plan="Pro"
                who="For most individuals"
                price={isMonthly ? "$9" : "$95" }  
                date={isMonthly ? "/ month" : "/ yearly" }  
                term={isMonthly}
                discount="-12%"
              />
            </div>
            <div className="main-pricing-sub">
              <PricingCardLower description="Shorten links" />
              <PricingCardLower description="Up to 500 tags" />
              <PricingCardLower description="Customizable branded links" />
              <PricingCardLower description="Track clicks" />
              <PricingCardLower description="Export click data" />
              <PricingCardLower description="Priority support" />
              <PricingCardLower description="AI powered suggestions" />
            </div>
            <div className="pricing-btn-box">
              <button className="pricing-btn mid-btn">Get Started</button>
            </div>
          </div>
          <div className="pricing-terms">
            <div className="upper-pricing">
              <PricingCardsUpper 
                id="3"
                plan="Business"
                who="For most individuals"
                price={isMonthly ? "$49" : "$517" }  
                date={isMonthly ? "/ month" : "/ yearly" } 
                term={isMonthly}
                discount="-12%" 
              />
            </div>
            <div className="main-pricing-sub">
              <PricingCardLower description="Shorten links" />
              <PricingCardLower description="Unlimited tags" />
              <PricingCardLower description="Customizable branded links" />
              <PricingCardLower description="Track clicks" />
              <PricingCardLower description="Export click data" />
              <PricingCardLower description="Dedicated manager" />
              <PricingCardLower description="AI powered suggestions" />
            </div>
            <div className="pricing-btn-box">
              <button className="pricing-btn">Contact team</button>
            </div>
          </div>

        </div>
        <div className="credit-card">
          <CiCreditCard1 className="credit-icon"/>
          <p>No credit card required</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing

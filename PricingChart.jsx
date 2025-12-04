import { Link } from "react-router-dom"
// import "./components/Pricing.css"


import React from 'react'

const PricingChart = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-BASIC__</h3>
                <span clasName="bar"></span>
                <p className="btc">$ 100</p>
                <p>_3 Days-</p>
                <p>_3 pages</p>
                <p>featurede</p>
                <p>Featured Design-</p>
                <Link to="/contact" className="btn">
                PURCHASER NOW</Link>
            </div>

            
             <h3>-BSINESS_</h3>
                <span clasName="bar"></span>
                <p className="btc">$ 100</p>
                <p>6 Days-</p>
                <p>6 pages</p>
                <p>featured-</p>
                <p>Featured Design-</p>
                <Link to="/contact" className="btn">
                PURCHASER NOW</Link>

        </div>

         <h3>-PREMIUM_</h3>
                <span clasName="bar"></span>
                <p className="btc">$ 100</p>
                <p>11Days-</p>
                <p>11pages</p>
                <p>featured</p>
                <p>Featured Design-</p>
                <Link to="/contact" className="btn">
                PURCHASER NOW</Link>
    </div>
  )
}

export default PricingChart
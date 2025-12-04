import "./HeroStyle.css"

import React from 'react'
import {Link} from 'react-router-dom'
import IntroImg from "../assets/img3.webp";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask"></div>

        <img  className="intro-img"
          src={IntroImg} alt="IntroImg" />
          {/* //this line is import  */}
          <div className="content">

            
            <p>HI.iam  developer,freelancer.</p>
            <h1>REact DEVELOPER.</h1>
            <div>
              <Link to="/project"className="btn">Projects</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>

            </div>


          </div>

    </div>
  )
}

export default HeroImg
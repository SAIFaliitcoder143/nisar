import "./AboutContentStyle.css"

import React from 'react'
import rea1 from "../assets/soft4.avif"
import rea2 from "../assets/soft3.avif"
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="left"><h1>About Me,who am I</h1>this is react project.
      <p>I am a WEB developer,creator ,software engineer and a developer,
        specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I am focused on building responsive full-stack web applications.

      </p>
      <Link to="/contact">
      <button className="btn">CONTact Me.</button></Link>
      </div>


      <div className="right">
        <div className="img-container">
          <div className="img-stacktop"> 
            <img src={rea1} className="img" alt="any" />

          </div>
          <div className="img-stackbottom"> 
            <img src={rea2} className="img" alt="any" />

          </div>
          
          

        </div>
      </div>
    </div>
  )
}

export default AboutContent
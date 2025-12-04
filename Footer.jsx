import "./FooterStyle.css";

import React from 'react'
import {FaHome,FaPhone,FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'} }/>
                    <div>
                        <p>7cros Madiwala lake Khilji Ngar</p>
                        <p>Indonesai</p>
                    </div>

                    <div className="phone">
                      {/* <h4></h4> */}
                        <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'} }/>89-89-898982
                    </div>


                    <div className="email"><h4>

                        <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'} }/>info@google.mail
                    </h4>
                    </div>


                </div>
              <div className="right">
                <h4>About Me</h4>
                <p>HI.! I Am Saif Ali a software Developor Engineer and passionate technology enthusiast.
                    i specialize in fronend dev.technologies.
                    {/* I specialize in frontend technologies (React, Redux, TypeScript, Next.js), modern HTML/CSS/Sass, and responsive UI. I design and build RESTful/GraphQL web services, lead end-to-end software engineering projects, and deliver production-ready applications with testing, CI/CD, and cloud deployments. */}
                    I'm seeking a job or internship opportunity to develop my skills, gain practical knowledge, and work collaboratively with a team to help the organization achieve its goals while contributing to the development of core systems.
                </p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Footer
import "./WorkCard.css";
import React from 'react'
import pro1 from "../assets/imgh.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <h1 className="project-heading">Recent Projects</h1>
        <img src={props.imgsrc} alt="image" />
        <div className="project-container">
            <div className="project-card">
                <img src={"pro1" }alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn" >
                        <NavLink to={props.view} 
                        className="btn">VIEW</NavLink>
                        <NavLink to="url.com" 
                        className="btn">SOURCE</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
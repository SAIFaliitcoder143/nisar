import './WorkCard.css';
// import pro2 from "./src/assets/soft4.avif";
import { NavLink } from 'react-router-dom';

import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">PRojects</h1>
        <div className="project-container">
     {WorkCardData.map((val, ind) => {
        return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
        )
     })}
    
        </div>
    </div>
  )
}

export default Work
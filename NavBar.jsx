// import { Link } from "react-router-dom"
import "./NavBar.style.css"

import React, { useState } from 'react';
import { FaTimes,FaBars } from  "react-icons/fa";

import {Link} from "react-router-dom";


const NavBar = () => {

const[click,setClick]=useState(false);
const handelClick=()=>setClick(!click);

const[color,setColor]=useState(false);
const changeColor=()=>{
  if(window.screenY>=100){
   setColor(true); 
  }else{
    setColor(false);
  }
};

window.addEventListener("scroll",changeColor);

//i forgot to add this why imgae not showing in para.
  return (
    <div className={color? "header header-bg":"header"}>
        {/* <Link to="/"></Link>
        <h1>portfolio.</h1> */}

          {/* <Link to="/">link</Link>  it give link as (link)*/}

          <Link to="/">
          <h1>Portfolio..</h1>
          </Link>




        <ul className={click?"nav-menu active":
          "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
             <li>
                <Link to="/project">Project</Link>
            </li>
             <li>
                <Link to="/about">About</Link>
            </li>
             <li>
                <Link to="/contact">Contact me.</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handelClick}>

          {click ?(<FaTimes  size={20} style={{color:"#fff" }}/>):
          (<FaBars  size={20} style={{color:"#fff" }}/>)}
          

        </div>
    </div>
  )
}

export default NavBar
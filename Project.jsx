import React from 'react'
import NavBar from '../components/NavBar'
// import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingChart from '../components/PricingChart';
import Work from '../components/Work';


const Project = () => {
  return (
   <div>
   {/* <h2>project1</h2>  */}

   <NavBar/>
   <HeroImg2 heading="PROJECTS" text="Some description about my recent projects"/>
   <Work/>
   <PricingChart/>
   <Footer/>

   </div>
  )
}

export default Project
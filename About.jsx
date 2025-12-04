
import NavBar from '../components/NavBar'
// import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
        <NavBar/>
        <HeroImg2 heading="ABOUT." text="I am a frontend developer!
        specializing in Full stack DEV,work."/>
        <AboutContent/>
    <Footer/>

    </div>
  


  )
}

export default About
import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      {/* Contact */}
      <NavBar/>
      <HeroImg2 heading="CONTactT" text="Letss us have a chat."/>
      <Form/>

      <Footer/>

    </div>
  )
}

export default Contact
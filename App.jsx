import { useState } from 'react'

import './index.css'
import './App.css'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Project from './routes/Project.jsx'
import About from './routes/About.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/project" element={<Project />} />
     <Route  path="/about" element={<About />} />
     <Route  path="/contact" element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App;

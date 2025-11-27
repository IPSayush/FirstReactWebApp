import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import {NavContaint} from './Database.js'


const App = () => {
  return (
    <>
    <Navbar NavContaint={NavContaint}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App

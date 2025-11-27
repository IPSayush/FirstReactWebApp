import React from 'react'
import Navbar from './Component/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import {FooterContaint, NavContaint} from './Database.js'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar NavContaint={NavContaint}/>
    <Outlet/>
    <Footer FooterContaint={FooterContaint}/>
    </>
  )
}

export default App

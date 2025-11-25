import React from 'react'
import Footer from './Home/Footer.jsx'
import { FooterContaint } from '../Database.js';

const Services = () => {
  return (
    <>
      <div className='bg-[#B9BC97]'>
        <Footer footerContaint={FooterContaint} />
      </div>
    </>
  )
}

export default Services

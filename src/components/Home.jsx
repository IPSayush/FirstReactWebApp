import React from 'react'
import Hero from './Home/Hero.jsx';
import Layout from './Home/Layout.jsx';
import Cards from './Home/Cards.jsx';
import Products from './Home/Products.jsx';
import Headings from './Home/Headings.jsx';
import Footer from './Home/Footer.jsx';

const Home = () => {
  return (
    <>
      <div className='bg-[#F9F4FB]'>
        <Hero />
      </div>
      <div className='bg-[#B9BC97]'>
        <Layout />
      </div>
      <div className='bg-[#394024]'>
        <Headings />
      </div>
      <div className='bg-[#B9BC97]'>
        <Cards />
      </div>
      <div className='bg-[#394024]'>
        <Headings />
      </div>
      <div className='bg-[#B9BC97]'>
        <Products />
      </div>
      <div className='bg-[#394024]'>
        <Headings />
      </div>
      <div className='bg-[#B9BC97]'>
        <Footer />
      </div>
    </>
  )
}
// className='bg-linear-to-r from-emerald-500 to-emerald-900' GOOD COLOR
export default Home;

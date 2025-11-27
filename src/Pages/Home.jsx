import React from 'react'
import Hero from '../Component/Hero.jsx';
import Layout from '../Component/Layout.jsx';
import Cards from '../Component/Cards.jsx';
import Products from '../Component/Products.jsx';
import Headings from '../Component/Headings.jsx';
import {HeroContaint,LayoutContaint,HeadingsContaint,CardsContaint,ProductsContaint,FooterContaint} from '../Database.js'

const Home = () => {
  return (
    <>
      <div className='bg-[#F9F4FB]'>
        <Hero HeroContaint={HeroContaint} />
      </div>
      <div className='bg-[#B9BC97]'>
        <Layout LayoutContaint={LayoutContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading1}/>
      </div>
      <div className='bg-[#B9BC97]'>
        <Cards CardsContaint={CardsContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading2}/>
      </div>
      <div className='bg-[#B9BC97]'>
        <Products ProductsContaint={ProductsContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading3}/>
      </div>
    </>
  )
}
// className='bg-linear-to-r from-emerald-500 to-emerald-900' GOOD COLOR
export default Home;

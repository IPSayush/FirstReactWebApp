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
        <Hero HeroContaint={HeroContaint} />
        <Layout LayoutContaint={LayoutContaint} />
        <Headings HeadingsContaint={HeadingsContaint.Heading1}/>
        <Cards CardsContaint={CardsContaint} />
        <Headings HeadingsContaint={HeadingsContaint.Heading2}/>
        <Products ProductsContaint={ProductsContaint} />
        <Headings HeadingsContaint={HeadingsContaint.Heading3}/>
    </>
  )
}
// className='bg-linear-to-r from-emerald-500 to-emerald-900' GOOD COLOR
export default Home;

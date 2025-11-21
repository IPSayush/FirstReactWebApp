import React from 'react'
import Hero from './Home/Hero.jsx';
import Layout from './Home/Layout.jsx';
import Cards from './Home/Cards.jsx';
import Products from './Home/Products.jsx';
import Headings from './Headings.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Layout />
      <Cards />
      <Headings />
      <Products />
      <Headings />
      <Footer />
    </>
  )
}

export default Home;

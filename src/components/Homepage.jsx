import React from 'react'
import Hero from './UI/Hero';
import Services from './UI/Services';
import Portfolio from './UI/Portfolio';
import Contact from './UI/Contact';
import { Helmet } from 'react-helmet';
import iImg from "../images/icon.png";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Ar. Arun Ravikumar</title>
        <meta property="og:title" content="Welcome to my website" />
        <meta property="og:description" content="All about my works" />
        <meta property="og:image" content={iImg} />
        <meta property="og:url" content="http://arunarchitect.in" />
        <meta property="og:type" content="website" />
      </Helmet>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
    </>
  )
}

export default Homepage
import React from 'react'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'

const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home

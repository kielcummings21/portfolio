import React from 'react'

import Nav from '../../components/Nav'
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
    </>
  )
}

export default Home

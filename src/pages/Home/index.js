import React, { useEffect, useContext } from 'react'
import { CursorContext } from '../../App'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'

const Home = () => {

  const { setCursorType } = useContext(CursorContext)

  useEffect(() => {
    setCursorType(null)

    window.locomotiveScroll.scrollTo(0)
    window.locomotiveScroll.update()
  }, [])

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

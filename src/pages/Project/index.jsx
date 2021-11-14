import React from 'react'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'

const Project = ({ title, type, description, image1, image2}) => {
  return (
    <>
      <Nav/>
      <Hero
        title={title}
        type={type}
        image={image1}
      />
      <Footer/>
    </>
  )
}

export default Project

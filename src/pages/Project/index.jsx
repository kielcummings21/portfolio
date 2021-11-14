import React from 'react'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'
import Reporting from './sections/Reporting'

const Project = ({ title, type, description, image1, image2}) => {
  return (
    <>
      <Nav/>
      <Hero
        title={title}
        type={type}
        image={image1}
      />
      <Reporting
        description={description}
        image={image2}
      />
      <Footer/>
    </>
  )
}

export default Project

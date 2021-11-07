import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from '../../../utils/colors'

import HeroText from '../../../components/HeroText'

const Hero = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        delay: 1,
        duration: 1,
        color: colors.gray
      })
    }
  }, [titleRef])

  return (
    <Wrapper data-scroll-section id="home-hero">
      <Title ref={titleRef}><HeroText/></Title>
      <LargeText>©1993</LargeText>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  padding-top: 8.889vw;
  padding-bottom: 22.917vw;
  padding-left: 6.944vw;
  padding-right: 6.944vw;
`

const Title = styled.h1`
  position: relative;
  z-index: 2;
<<<<<<< HEAD:src/pages/Home/sections/Hero.js
=======
  white-space: pre-wrap;
  font-family: Arras, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 100%;
  letter-spacing: -0.02em;
  -webkit-text-stroke: 1px ${colors.gray};
  color: transparent;

  font-size: 13.889vw;
  cursor: default;
>>>>>>> a6454c5825a69d1c0dee1c6d3ad109a52f6779af:src/pages/Home/sections/Hero.jsx
`

const LargeText = styled.span`
  position: absolute;
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.02em;
  z-index: 1;
  background: linear-gradient(to top, ${colors.black}, #505050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;

  font-size: 41.667vw;
  right: 7.222vw;
  top: 35.972vw;
`

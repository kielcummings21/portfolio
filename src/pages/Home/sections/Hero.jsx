import React, { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { ScreenContext } from '../../../App'

import colors from '../../../utils/colors'
import media  from '../../../utils/media'

// import HeroText from '../components/HeroText'
// import HeroText from '../components/HeroText2'
// import HeroText from '../components/HeroText3'
// import HeroText from '../components/HeroText4'
import HeroText       from '../components/HeroText6'
import HeroTextMobile from '../components/HeroTextMobile'
import InkBlob        from '../../../components/InkBlob'

const Hero = () => {
  const titleRef = useRef(null)
  const dateRef = useRef(null)

  const screen = useContext(ScreenContext)

  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        delay: 1,
        duration: 1,
        color: colors.gray
      })
    }
  }, [titleRef])

  useEffect(() => {
    if (dateRef.current) {
      gsap.to(dateRef.current, {
        delay: 4.5,
        duration: 1,
        opacity: 1,
      })
    }
  }, [dateRef])

  return (
    <Wrapper data-scroll-section>
      <Title ref={titleRef}>
        {(screen.desktop || screen.fullWidth) && <HeroText/>}
        {(screen.tablet || screen.mobile) && <HeroTextMobile/>}
      </Title>
      <LargeText ref={dateRef}>©1993</LargeText>
      <InkBlob/>
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

  ${media.mobile} {
    height: 230.667vw;
    padding-top: 25.067vw;
    padding-bottom: 105.333vw;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`

const Title = styled.h1`
  // background-color: white;
  position: relative;
  z-index: 2;

  ${media.mobile} {
    left: -4vw;
  }
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
  cursor: none;
  opacity: 0;

  font-size: 41.667vw;
  right: 7.222vw;
  top: 35.972vw;

  ${media.mobile} {
    font-size: 52.533vw;
    top: 173.067vw;
    right: -7.733vw;
  }
`

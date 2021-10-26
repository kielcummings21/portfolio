import React from 'react'
import styled from 'styled-components'

import colors from '../../../utils/colors'

import PortraitPNG from '../../../images/portrait.png'

const About = () => {
  return (
    <Wrapper data-scroll-section>
      <Img src={PortraitPNG}/>
  
      <SubTitle>About Me</SubTitle>
      <Title>{`Designer of sorts.\nMenswear enthusiast.\nFull-time Husband.\nWannabe interior designer.\nAfter hours mountain biker.\nMusic curator for fun.\n`}</Title>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 7.639vw;
  padding-left: 18.333vw;
`

const SubTitle = styled.span`
  position: relative;
  z-index: 2;
  color: ${colors.green};
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.01em;

  font-size: 2.5vw;
  margin-bottom: 2.778vw;
`

const Title = styled.h3`
  position: relative;
  z-index: 2;
  color: ${colors.gray};
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.02em;
  white-space: pre-wrap;

  font-size: 6.667vw;
  margin-bottom: 1.597vw;
`

const Img = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;

  left: -11.319vw;
  width: 34.861vw;
  height: 34.861vw;
`

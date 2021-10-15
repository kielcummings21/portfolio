import React from 'react'
import styled, { keyframes } from 'styled-components'

import colors from '../../../utils/colors'

import GrainyPortrait from '../components/GrainyPortrait'

import PortraitPNG from '../../../images/portrait.png'

const About = () => {
  return (
    <Wrapper data-scroll-section>
      <ImgWrapper>
        <GrainyPortrait img={PortraitPNG}/>
      </ImgWrapper>
      <SubTitle>About Me</SubTitle>
      <Title>It's pronounced kyle</Title>
      <Text>{`Designer of sorts.\nMenswear enthusiast.\nFull-time Husband.\nWannabe interior designer.\nAfter hours mountain biker.\nMusic curator for fun.\n`}</Text>
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

  font-size: 6.667vw;
  margin-bottom: 1.597vw;
`

const Text = styled.p`
  color: ${colors.darkGray};
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 100%;
  letter-spacing: -0.04em;
  white-space: pre-wrap;

  padding-left: 10.486vw;
  font-size: 4.444vw;
  margin-bottom: 10.694vw;
`

const ImgWrapper = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  z-index: 1;

  left: -11.319vw;
  width: 34.861vw;
  height: 34.861vw;
`

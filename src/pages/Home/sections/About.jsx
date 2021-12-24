import { useContext } from 'react'
import styled from 'styled-components'
import { CursorContext } from '../../../App'

import colors from '../../../utils/colors'
import media from 'utils/media'

import PortraitPNG from '../../../images/portrait.png'

const About = () => {

  const { setCursorType } = useContext(CursorContext)

  const handleMouseEnter = () => {
    setCursorType(null)
  }

  const handleMouseLeave = () => {
    setCursorType(null)
  }

  return (
    <Wrapper 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-scroll-section
    >
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

  ${media.mobile} {
    height: 137.333vw;
    padding-top: 53.333vw;
    padding-left: 5.333vw;
  }
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

  ${media.mobile} {
    font-size: 4.8vw;
    margin-bottom: 5.333vw;
  }
`

const Title = styled.h3`
  position: relative;
  z-index: 2;
  color: ${colors.gray};
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
  
  line-height: 90%;
  font-size: 6.667vw;
  margin-bottom: 1.597vw;

  ${media.mobile} {
    font-size: 9.067vw;
    line-height: 100%;
  }
`

const Img = styled.img`
  position: absolute;
  z-index: 1;
  border: 1px solid #575757;
  border-radius: 50%;
  
  top: 0;
  left: -11.319vw;
  width: 34.861vw;
  height: 34.861vw;

  ${media.mobile} {
    width: 51.2vw;
    height: 51.2vw;
    left: unset;
    right: -13.333vw;
    top: 20.267vw;
  }
`

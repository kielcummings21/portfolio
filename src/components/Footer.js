import React from 'react'
import styled from 'styled-components'

import colors from '../utils/colors'

const CircleSVG = ({ color, index }) => {
  console.log(color)

  return (
    <SVG width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="10.5" stroke={`url(#gradient-${index})`}/>
      <defs>
        <linearGradient id={`gradient-${index}`} x1="11" y1="0" x2="11" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={color}/>
          <stop stopColor={color} offset="1" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </SVG>
  )
}

const Footer = () => {
  return (
    <Wrapper data-scroll-section>
      <LargeName>Kiel Cummings</LargeName>
      <Links>
        <Link>
          <CircleSVG color="#D13532"  index={0}/>
          <A href="https://www.instagram.com/kielcummings/" target="_blank">Instagram</A>
        </Link>
        <Link>
          <CircleSVG color="#532EE6"  index={1}/>
          <A href="https://www.linkedin.com/in/kielcummings/" target="_blank">Linkedin</A>
        </Link>
        <Link>
          <CircleSVG color="#FF2CB7"  index={2}/>
          <A href="https://dribbble.com/kielcummings" target="_blank">Dribbble</A>
        </Link>
        <Link>
          <CircleSVG color="#E5E3DE"  index={3}/>
          <A href="mailto:kielc1993@gmail.com">Mail</A>
        </Link>
      </Links>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  padding-left: 1.806vw;
  padding-right: 1.806vw;
`

const LargeName = styled.span`
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  text-align: right;
  letter-spacing: -0.02em;
  background: linear-gradient(to top, ${colors.black}, #1a1a1a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 20.833vw;
  width: 96.319vw;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  bottom: 2.639vw;
  left: 6.875vw;
`

const Link = styled.span`
  display: flex;
  align-items: center;

  margin-right: 1.389vw;
`

const SVG = styled.svg`
  height: auto;
  width: 1.528vw;
  margin-right: 0.694vw;
`

const A = styled.a`
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.667vw;
  line-height: 100%;
  letter-spacing: -0.04em;
  cursor: pointer;
  text-decoration: none;

  color: #AFB1B0;
`
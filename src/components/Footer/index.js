import React from 'react'
import styled from 'styled-components'

import colors from 'utils/colors'

import Link from './Link'

const LINK_DATA = [
  {
    color: "#D13532", 
    href: "https://www.instagram.com/kielcummings/",
    text: "Instagram"
  },
  {
    color: "#532EE6", 
    href: "https://www.linkedin.com/in/kielcummings/",
    text: "Linkedin"
  },
  {
    color: "#FF2CB7", 
    href: "https://dribbble.com/kielcummings",
    text: "Dribbble"
  },
  {
    color: "#E5E3DE", 
    href: "mailto:kielc1993@gmail.com",
    text: "Mail"
  },
]

const Footer = () => {

  const links = LINK_DATA.map((item, index) => {
    return (
      <Link
        key={index}
        {...item}
      />
    )
  })

  return (
    <Wrapper data-scroll-section>
      <LargeName>Kiel Cummings</LargeName>
      <Links>
        {links}
      </Links>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100%;
  padding-left: 1.806vw;
  padding-right: 1.806vw;
  height: 17.639vw;
  overflow: hidden;
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


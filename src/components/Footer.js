import React from 'react'
import styled from 'styled-components'

import colors from '../utils/colors'

const Footer = () => {
  return (
    <Wrapper data-scroll-section>
      <LargeName>Kiel Cummings</LargeName>
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

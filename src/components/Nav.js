import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

import LogoSVG from '../images/logo.svg'

const Nav = () => {
  return (
    <Wrapper data-scroll data-scroll-sticky data-scroll-target=".smooth-scroll">
      <Logo src={LogoSVG} alt="Kiel Cummings"/> 
      <Links>
        {/* <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/work">Work</StyledLink> */}
      </Links>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.header`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  top: 0;
  left: 0;
  position: absolute;
  
  height: 7.222vw;
  padding-left: 6.875vw;
  padding-right: 6.875vw;

  ${media.mobile} {
    height: 13.333vw;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`

const Logo = styled.img`
  height: 2.431vw;
  width: 8.958vw;

  ${media.mobile} {
    height: 5.6vw;
    width: 20.8vw;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   cursor: none;
//   font-family: Lazzer TRIAL, sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   line-height: 90%;  
//   text-align: right;
//   letter-spacing: -0.01em;
//   color: ${colors.lightGray};
  
//   font-size: 1.667vw;
//   margin-left: 4.167vw;
// `

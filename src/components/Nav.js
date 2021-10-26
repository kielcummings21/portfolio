import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from '../utils/colors'

import LogoSVG from '../images/logo.svg'

const Nav = () => {
  return (
    <Wrapper  data-scroll-sticky data-scroll-target="#home-hero">
      <Logo src={LogoSVG} alt="Kiel Cummings"/> 
      <Links>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
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
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;

  height: 7.222vw;
  padding-left: 6.875vw;
  padding-right: 6.875vw
`

const Logo = styled.img`
  height: 2.431vw;
  width: 8.958vw;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;  
  text-align: right;
  letter-spacing: -0.01em;
  color: ${colors.lightGray};
  
  font-size: 1.667vw;
  margin-left: 4.167vw;
`

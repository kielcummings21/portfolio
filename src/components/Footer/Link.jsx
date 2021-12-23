import React, { useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const CircleSVG = React.forwardRef(({ color }, ref) => {

  return (
    <SVG width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle ref={ref} cx="11" cy="11" r="10.5" fill={`url(#gradient-${color})`} stroke={`url(#gradient1-${color})`}/>
      <defs>
        <linearGradient id={`gradient-${color}`} x1="11" y1="0" x2="11" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop ref={ref} stopColor={"transparent"} stopOpacity="1"/>
          <stop stopColor={color} offset="1" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={`gradient1-${color}`} x1="11" y1="0" x2="11" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="1"/>
          <stop stopColor={color} offset="1" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </SVG>
  )
})

const Link = ({ color, text, href, index }) => {
  const wrapperRef = useRef(null)
  const circleRef = useRef(null)

  const mouseEnter = () => {

    const tl = gsap.timeline({
      onComplete: () => {
        tl.kill()
      }
    })

    tl.to(wrapperRef.current, {
      duration: 0.5,
      borderColor: '#AFB1B0'
    }, 0)

    tl.to(circleRef.current, {
      duration: 0.5,
      stopColor: color
    }, 0)
  }

  const mouseLeave = () => {

    const tl = gsap.timeline({
      onComplete: () => {
        tl.kill()
      }
    })

    tl.to(wrapperRef.current, {
      duration: 0.5,
      borderColor: 'transparent'
    }, 0)

    tl.to(circleRef.current, {
      duration: 0.5,
      stopColor: 'transparent'
    }, 0)
  }

  return (
    <Wrapper ref={wrapperRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <CircleSVG color={color} ref={circleRef}/>
      <A href={href} target="_blank">{text}</A>
    </Wrapper>
  )
}

export default Link

const Wrapper = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
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
  text-decoration: none;
  cursor: none;

  color: #AFB1B0;
`

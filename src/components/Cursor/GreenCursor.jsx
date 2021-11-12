import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const GreenCursor = ({cursorType}) => {
  const viewTextRefLength = 193.53451538085938

  const innerCircleRef = useRef(null)
  const viewTextRef = useRef(null)

  const [tl, setTl] = useState(gsap.timeline())

  useEffect(() => {
    if (innerCircleRef.current) {
      const tl = gsap.timeline({
        paused: true
      })
  
      tl.to(innerCircleRef.current, {
        duration: 0.3,
        r: 26,
        ease: "circ.in"
      }, 0)

      tl.to(viewTextRef.current, {
        duration: 0.3,
        opacity: 1,
        ease: "none"
      }, 0.2)

      
  
      setTl(tl)
  
      return () => {
        tl.kill()
      }
    }
  }, [innerCircleRef])

  useEffect(() => {
    if (cursorType && tl) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [cursorType, tl])

  return (
    <Wrapper>
      <SVG width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="63" cy="63" r="63" fill="url(#paint0_radial_17_2731)" fill-opacity="0.1"/>
        <circle ref={innerCircleRef} cx="63" cy="63" r="12" fill="#91F14A"/>

        <defs>
          <radialGradient id="paint0_radial_17_2731" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(63)">
            <stop stop-color="#91F14A"/>
            <stop offset="0.11525" stop-color="#91F14A" stop-opacity="0.991615"/>
            <stop offset="0.204008" stop-color="#91F14A" stop-opacity="0.967585"/>
            <stop offset="0.270787" stop-color="#91F14A" stop-opacity="0.9296"/>
            <stop offset="0.320097" stop-color="#91F14A" stop-opacity="0.879348"/>
            <stop offset="0.356451" stop-color="#91F14A" stop-opacity="0.818519"/>
            <stop offset="0.38436" stop-color="#91F14A" stop-opacity="0.7488"/>
            <stop offset="0.408337" stop-color="#91F14A" stop-opacity="0.671881"/>
            <stop offset="0.432893" stop-color="#91F14A" stop-opacity="0.589452"/>
            <stop offset="0.462541" stop-color="#91F14A" stop-opacity="0.5032"/>
            <stop offset="0.501791" stop-color="#91F14A" stop-opacity="0.414815"/>
            <stop offset="0.555156" stop-color="#91F14A" stop-opacity="0.325985"/>
            <stop offset="0.627147" stop-color="#91F14A" stop-opacity="0.2384"/>
            <stop offset="0.722277" stop-color="#91F14A" stop-opacity="0.153748"/>
            <stop offset="0.845058" stop-color="#91F14A" stop-opacity="0.0737185"/>
            <stop offset="1" stop-color="#91F14A" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </SVG>
      <TextSVG ref={viewTextRef} width="26" height="14" viewBox="0 0 26 14" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path fill="black" d="M4.976 0.815999L2.608 10.096L2.128 8.192C1.488 5.664 1.376 2.176 1.616 0.815999H0.048L2.512 10.512L2.128 12H3.488L6.32 0.815999H4.976ZM7.079 3.52V12H8.407V3.52L7.751 2.864L7.079 3.52ZM7.735 2.528C8.151 2.528 8.487 2.192 8.487 1.776C8.487 1.36 8.151 1.024 7.735 1.024C7.335 1.024 6.999 1.36 6.999 1.776C6.999 2.192 7.335 2.528 7.735 2.528ZM15.029 8.208L14.325 8.928V10.304C14.325 12.56 11.813 12.24 11.093 9.616L13.093 7.792C19.221 2.704 11.765 0.879999 9.973 5.36C8.101 10.08 12.069 13.648 14.517 11.36L15.765 10.256V8.928L15.029 8.208ZM11.317 5.504C11.861 3.68 12.901 2.896 13.445 2.96C15.189 3.2 13.525 7.12 11.493 8.992L11.045 9.424C10.805 8.416 10.837 7.104 11.317 5.504ZM24.6843 2.864V10C24.6843 12.736 22.0763 12.048 22.0763 10.048V2.864H20.7483V9.632V9.648V10.096C20.6843 12.496 18.2682 12.384 18.2682 10.416V3.552L17.5483 2.848L16.8283 3.552V10.864L18.8443 11.904C19.4363 12.208 20.4603 12.032 20.8123 10.912L22.7643 11.904C23.3243 12.192 24.2683 12.032 24.6843 11.072V11.968H25.9963V2.864H24.6843Z"/>
      </TextSVG>
    </Wrapper>
  )
}

export default GreenCursor

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SVG = styled.svg`
  position: abolute;
  border-radius: 50%;
  pointer-events: none;

  height: auto;
  width: 12.153vw;
`

const TextSVG = styled.svg`
  position: absolute;
  z-index: 9;
  opacity: 0;

  width: auto;
  height: 1.389vw;
`
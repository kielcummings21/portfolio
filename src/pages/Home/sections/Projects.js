import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from '../../../utils/colors'

const Project = ({ title, type }) => {
  const titleRef = useRef(null)
  const [hoverTl, setHoverTl] = useState(null)

  const handleMouseEnter = () => {
    if (hoverTl) {
      hoverTl.play()
    }
  }

  const handleMouseLeave = () => {
    if (hoverTl) {
      hoverTl.reverse()
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true
    })

    tl.fromTo(titleRef.current, {
      background: 'unset',
      textStroke: '1px #AFB1B0',
      textFillColor: 'unset'
    }, {
      duration: 1,
      backgroundImage: 'linear-gradient(to bottom, #DAD9D1, #000000)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textStroke: '1px #000000'
    })

    setHoverTl(tl)
  }, [])

  return (
    <ProjectWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Type>
        <span>Project Type:&nbsp;</span>
        <p>{type}</p>
      </Type>
      <Title ref={titleRef}>{title}</Title>
      <HR/>
    </ProjectWrapper>
  )
}

const Projects = () => {
  return (
    <Wrapper data-scroll-section>

      <Project
        title="Source7"
        type="Art Direction, Branding, UI, UX"
      />

      <Project
        title="LeMond Bikes"
        type="Art Direction, Branding"
      />

      <Project
        title="Flyreel"
        type="Art Direction, Branding, UI, UX"
      />

      <Project
        title="Sandbox VR"
        type="Art Direction, Branding"
      />

    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 10.417vw;
`

const ProjectWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 18.194vw;
  padding-right: 6.25vw;
  margin-bottom: 8.75vw;
`

const Title = styled.h2`
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.02em;
  -webkit-text-stroke: 1px #AFB1B0;
  background: linear-gradient(to bottom, #DAD9D1, #000000);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  font-size: 12.5vw;
  margin-bottom: 2.222vw;
`

const Type = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.01em;
  
  font-size: 1.667vw;
  margin-bottom: 3.472vw;

  span {
    color: ${colors.green};
  }

  p {
    color: ${colors.lightGray};
  }
`

const HR = styled.hr`
  width: 100%;
  border: none;
  background: linear-gradient(to right, #AFB1B0 -0.74%, rgba(175, 177, 176, 0) 100%);
  
  height: 0.139vw;
`

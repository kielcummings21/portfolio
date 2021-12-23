import { useEffect, useRef, useState, useContext } from 'react'
import { CursorContext } from '../../../App'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from '../../../utils/colors'
import media from 'utils/media'
import { useMedia } from 'utils/hooks'

const Project = ({ title, type, href }) => {
  const titleRef = useRef(null)
  const [hoverTl, setHoverTl] = useState(null)

  const { setCursorType } = useContext(CursorContext)

  const handleTitleMouseEnter = () => {
    setCursorType('projects')
  }

  const handleTitleMouseLeave = () => {
    setCursorType(null)
  }

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

  const handleOnClick = () => {
    window.open(href, "_blank")
  }

  const textStrokeFrom = useMedia("1px #AFB1B0", "1px #AFB1B0", "1px #AFB1B0", "0.5px #AFB1B0")

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true
    })

    tl.fromTo(titleRef.current, {
      background: 'unset',
      textStroke: textStrokeFrom,
      textFillColor: 'unset'
    }, {
      duration: 0.5,
      backgroundImage: 'linear-gradient(to bottom, #DAD9D1, #000000)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textStroke: '1px #000000'
    })

    setHoverTl(tl)
  }, [])

  return (
    <ProjectWrapper 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
      data-scroll-section
    >
      <Type>
        <span>Project Type:&nbsp;</span>
        <p>{type}</p>
      </Type>
      <Title onMouseEnter={handleTitleMouseEnter} onMouseLeave={handleTitleMouseLeave} ref={titleRef}>{title}</Title>
      <HR/>
    </ProjectWrapper>
  )
}

export default Project

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

  ${media.mobile} {
    padding-left: 5.333vw;
    padding-right: 5.333vw;
    margin-bottom: 25px;
  }
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

  ${media.mobile} {
    margin-bottom: 2.133vw;
    font-size: 19.2vw;
    -webkit-text-stroke: 0.5px #AFB1B0;
  }
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

  ${media.mobile} {
    font-size: 4.267vw;
    margin-bottom: 5.333vw;
    flex-direction: column;
    align-items: flex-start;
    line-height: 150%;
  }

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

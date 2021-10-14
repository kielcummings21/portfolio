import React from 'react'
import styled from 'styled-components'

import colors from '../../../utils/colors'

const Projects = () => {
  return (
    <Wrapper data-scroll-section>

      <Project>
        <Type>
          <span>Project Type:&nbsp;</span>
          <p>Art Direction, Branding, UI, UX</p>
        </Type>
        <Title>Source7</Title>
        <HR/>
      </Project>

      <Project>
        <Type>
          <span>Project Type:&nbsp;</span>
          <p>Art Direction, Branding</p>
        </Type>
        <Title>LeMond Bikes</Title>
        <HR/>
      </Project>

      <Project>
        <Type>
          <span>Project Type:&nbsp;</span>
          <p>Art Direction, Branding, UI, UX</p>
        </Type>
        <Title>Flyreel</Title>
        <HR/>
      </Project>

      <Project>
        <Type>
          <span>Project Type:&nbsp;</span>
          <p>Art Direction, Branding</p>
        </Type>
        <Title>Sandbox VR</Title>
        <HR/>
      </Project>

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

const Project = styled.div`
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

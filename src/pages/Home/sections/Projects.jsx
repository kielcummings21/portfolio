import styled from 'styled-components'

import Project from '../components/Project'

const Projects = () => {
  
  return (
    <Wrapper 
      data-scroll-section 
    >

      <Project
        title="Source7"
        type="Art Direction, Branding, UI, UX"
        href="/source7"
      />

      <Project
        title="LeMond Bikes"
        type="Art Direction, Branding"
        href="https://lemond.com"
      />

      <Project
        title="Flyreel"
        type="Art Direction, Branding, UI, UX"
        href="https://flyreel.co"
      />

      <Project
        title="Sandbox VR"
        type="Art Direction, Branding"
        href="http://sandboxvr.com"
      />

    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 10.417vw;
`

import styled from 'styled-components'

import media from 'utils/media'
import { useMedia } from 'utils/hooks'

import Project from '../components/Project'

const Projects = () => {

  const lemondTitle = useMedia("LeMond Bikes", "LeMond Bikes", "LeMond Bikes", "LeMond")
  
  return (
    <Wrapper data-scroll-section>

      <Project
        title="Source7"
        type="Art Direction, Branding, UI, UX"
        href="https://source7.com"
      />

      <Project
        title={lemondTitle}
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

  ${media.mobile} {

  }
`

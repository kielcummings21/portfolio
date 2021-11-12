import { useContext } from 'react'
import styled from 'styled-components'
import { CursorContext } from '../../App'

// import ProjectsCursor from './ProjectsCursor'
// import AboutCursor from './AboutCursor'
import GreenCursor from './GreenCursor'

const Cursor = () => {

  const { cursorType } = useContext(CursorContext)

  return (
    <Wrapper id="cursor">
      {/* {cursorType === "projects" && <ProjectsCursor/>}
      {cursorType === "about" && <AboutCursor/>} */}
      <GreenCursor cursorType={cursorType}/>
    </Wrapper>
  )
}

export default Cursor

const Wrapper = styled.div`
  position: absolute;
  z-index: 9;
  pointer-events: none;

`
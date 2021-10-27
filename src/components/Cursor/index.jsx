import { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { CursorContext } from '../../App'

import ProjectsCursor from './ProjectsCursor'
import AboutCursor from './AboutCursor'

const Cursor = () => {
  const currentCursor = useRef(null)

  const { cursorType } = useContext(CursorContext)

  const CurrentCursor = currentCursor.current

  useEffect(() => {
    switch (cursorType) {
      case "projects":
        currentCursor.current = ProjectsCursor
        break;

      case "about":
        currentCursor.current = AboutCursor
        break;

      default: 
        break;
    }
  }, [cursorType])

  return (
    <Wrapper id="cursor">
      {cursorType && CurrentCursor && <CurrentCursor/>}
    </Wrapper>
  )
}

export default Cursor

const Wrapper = styled.div`
  position: absolute;
  z-index: 9;
  pointer-events: none;

`
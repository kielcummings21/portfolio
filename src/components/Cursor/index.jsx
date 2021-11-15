import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { CursorContext } from '../../App'

// import ProjectsCursor from './ProjectsCursor'
// import AboutCursor from './AboutCursor'
import GreenCursor from './GreenCursor'

const Cursor = () => {

  const { cursorType } = useContext(CursorContext)

  const mouseMoveHandler = (e) => {
    const cursor = document.getElementsByClassName('cursor')

    gsap.set(cursor, {
      stagger: 0.01,
      x: e.clientX - (window.innerWidth * 0.5),
      y: e.clientY - (window.innerWidth * 0.001)
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler)

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [])

  return (
    <Wrapper>
      {/* {cursorType === "projects" && <ProjectsCursor/>}
      {cursorType === "about" && <AboutCursor/>} */}
      <GreenCursor cursorType={cursorType} width={"300px"}/>
      <GreenCursor cursorType={cursorType} width={"280px"}/>
      <GreenCursor cursorType={cursorType} width={"260px"}/>
      <GreenCursor cursorType={cursorType} width={"240px"}/>
      <GreenCursor cursorType={cursorType} width={"220px"}/>
      <GreenCursor cursorType={cursorType} width={"200px"}/>
      <GreenCursor cursorType={cursorType} width={"180px"}/>
      <GreenCursor cursorType={cursorType} width={"160px"}/>
      <GreenCursor cursorType={cursorType} width={"140px"}/>
      <GreenCursor cursorType={cursorType} width={"120px"}/>
      <GreenCursor cursorType={cursorType} width={"100px"}/>
    </Wrapper>
  )
}

export default Cursor

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

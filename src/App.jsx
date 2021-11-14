import React, { useEffect, useRef, useState, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from './utils/colors'

import Scroll from './components/Scroll'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Project from './pages/Project'

export const CursorContext = createContext()

function App() {
  const wrapperRef = useRef(null)
  const [cursorType, setCursorType] = useState(null)

  const mouseMoveHandler = (e) => {
    const cursor = document.getElementById('cursor')

    gsap.set(cursor, {
      x: e.clientX - (window.innerWidth * 0.06),
      y: e.clientY - (window.innerWidth * 0.06)
    })
  }

  useEffect(() => {
    if (wrapperRef.current) {
      const wrapper = wrapperRef.current
      wrapper.addEventListener("mousemove", mouseMoveHandler)

      return () => {
        wrapper.removeEventListener("mousemove", mouseMoveHandler)
      }
    }
  }, [wrapperRef])

  return (
    <CursorContext.Provider value={{cursorType, setCursorType}}>
      <Wrapper 
        data-scroll-container 
        className="smooth-scroll"
        ref={wrapperRef}
      >
        <Scroll/>
        <Cursor/>
        
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/source7">
            <Project
              title="Source7"
              type="Art Direction, Branding, UI, UX"
              description="Source7, we are not just driven by a shared set of values and principles but real, tangible attributes that drive how we work together and how we show up for our customers and partners."
              image1=""
              image2=""
            />
          </Route>

        </Switch>

      </Wrapper>
    </CursorContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.black};
  cursor: none;
`

import React, { useEffect, useRef, useState, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from './utils/colors'

import Scroll from './components/Scroll'
import Cursor from './components/Cursor'
import Home from './pages/Home'

export const CursorContext = createContext()

function App() {
  const wrapperRef = useRef(null)
  const [cursorType, setCursorType] = useState(null)

  const mouseMoveHandler = (e) => {
    const cursor = document.getElementById('cursor')

    gsap.set(cursor, {
      x: e.clientX - (window.innerWidth * 0.05),
      y: e.clientY - (window.innerWidth * 0.05)
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
`

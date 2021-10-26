import React, { useEffect, useRef } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from './utils/colors'

import Cursor from './components/Cursor'
import Scroll from './components/Scroll'
import Home from './pages/Home'

function App() {

  const wrapperRef = useRef(null)

  const mouseMoveHandler = (e) => {
    const cursor = document.getElementById('cursor')

    gsap.set(cursor, {
      x: e.clientX - (window.innerWidth * 0.05),
      y: e.clientY - (window.innerWidth * 0.05)
    })
  }

  useEffect(() => {
    if (wrapperRef) {
      wrapperRef.current.addEventListener("mousemove", mouseMoveHandler)
    }
  }, [wrapperRef])

  return (
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
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.black};
  cursor: none;
`

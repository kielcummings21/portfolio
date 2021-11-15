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
  cursor: none;
`
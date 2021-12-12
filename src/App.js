import React, { useRef, useState, useEffect, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import colors from './utils/colors'
import { desktop, tablet, mobile } from './utils/media'

import Scroll from './components/Scroll'
import InkCursor from './components/Cursor/InkCursor'
import Home from './pages/Home'

export const CursorContext = createContext(null)
export const ScreenContext = createContext({fullWidth: false, desktop: false, tablet: false, mobile: false})

function App() {
  const wrapperRef = useRef(null)

  const [cursorType, setCursorType] = useState(null)
  const [fw, setFw] = useState(false)
  const [d, setD] = useState(false)
  const [t, setT] = useState(false)
  const [m, setM] = useState(false)
 
  useEffect(() => {
    
  }, [])

  return (
    <ScreenContext.Provider value={{fullWidth: fw, desktop: d, tablet: t, mobile: m}}>
      <CursorContext.Provider value={{cursorType, setCursorType}}>
        <Wrapper 
          data-scroll-container 
          className="smooth-scroll"
          ref={wrapperRef}
        >
          <Scroll/>

          {/* <Cursor/> */}
          <InkCursor/>
        
          
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

          </Switch>

        </Wrapper>
      </CursorContext.Provider>
    </ScreenContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.black};
  cursor: none;
`

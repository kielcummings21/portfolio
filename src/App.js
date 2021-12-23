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

  const [cursorType, setCursorType] = useState(null)
  const [screen, setScreen] = useState({
    fullWidth: false,
    desktop: false,
    tablet: false,
    mobile: false
  })
 
  useEffect(() => {
    const updateScreen = () => {
      let { innerWidth } = window

      setScreen({
        fullWidth: innerWidth > desktop,
        desktop: innerWidth <= desktop && innerWidth > tablet,
        tablet: innerWidth <= tablet && innerWidth > mobile,
        mobile: innerWidth <= mobile
      })
    }

    updateScreen()

    window.addEventListener('resize', updateScreen)

    return () => {
      window.removeEventListener('resize', updateScreen)
    }
  }, [])

  return (
    <>
      <ScreenContext.Provider value={screen}>
        <CursorContext.Provider value={{cursorType, setCursorType}}>
          <Wrapper className="smooth-scroll">
            {(screen.fullWidth || screen.desktop) && <InkCursor/>}
        
            <Home/>

          </Wrapper>
        </CursorContext.Provider>
      </ScreenContext.Provider>
      <Scroll/>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.black};
  cursor: none;
  overflow: hidden;
`

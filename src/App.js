import React, { useRef, useState, useEffect, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import colors from './utils/colors'
import { desktop, tablet, mobile } from './utils/media'

import Scroll from './components/Scroll'
import Seo from './components/Seo'
import InkCursor from './components/Cursor/InkCursor'
import Home from './pages/Home'

import SeoPng from './images/seo.jpg'

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
          <Wrapper data-scroll-container className="smooth-scroll">
            {(screen.fullWidth || screen.desktop) && <InkCursor/>}

            <Seo
              title={"Kiel Cummings"}
              description={"Kiel Cummings Portfolio"}
              url={"https://kielcummings.com"}
              image={SeoPng}
            />
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

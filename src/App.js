import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import colors from './utils/colors'

import Scroll from './components/Scroll'
import Home from './pages/Home'

function App() {
  return (
    <Wrapper data-scroll-container className="smooth-scroll">
      <Scroll/>
      
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
  width: 100%;
  background-color: ${colors.black};
`

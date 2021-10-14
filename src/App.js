import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import colors from './utils/colors'

import Home from './pages/Home'

function App() {
  return (
    <Wrapper className="App">
      
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
  width: 100vw;
  background-color: ${colors.black};
`

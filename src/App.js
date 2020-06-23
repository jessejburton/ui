import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import {
  Home,
  Colors,
  Buttons,
  Inputs,
  Messages,
  Data,
  PageNotFound
} from './pages'
import { Layout } from '../src/layout'
import { defaultTheme } from '../src/themes/default'
import { darkTheme } from '../src/themes/dark'

function App() {

  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/colors" component={Colors} />
              <Route path="/buttons" component={Buttons} />
              <Route path="/inputs" component={Inputs} />
              <Route path="/messages" component={Messages} />
              <Route path="/data" component={Data} />
              <Route component={PageNotFound} />
            </Switch>
          </Layout>
        </Router>
      </StyledAppWrapper>
    </ThemeProvider>

  );
}

export default App;

const StyledAppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.fontColor};
`
import React, { useState } from 'react'
import Layout from './layout/Layout'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Colors from './pages/Colors'
import Buttons from './pages/Buttons'
import Inputs from './pages/Inputs'
import Messages from './pages/Messages'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/components/themes/default'

function App() {

  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/colors" component={Colors} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/inputs" component={Inputs} />
            <Route path="/messages" component={Messages} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

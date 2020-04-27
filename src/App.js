import React, { Component } from 'react'
import Layout from './layout/Layout'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Colors from './pages/Colors'
import Buttons from './pages/Buttons'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "#5A67D8",
    primaryDark: "#434190"
  },
  buttons: {
    buttonTextColor: "#FFFFFF",
    buttonBorderRadius: "5px",
  }
}
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/colors" component={Colors} />
              <Route path="/buttons" component={Buttons} />
              <Route component={PageNotFound} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Layout from './layout/Layout'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Colors from './pages/Colors'
import Buttons from './pages/Buttons'
import PageNotFound from './pages/PageNotFound'

const theme = {
  colors: {
    lightest: "white",
    secondary: "red",
    primary: "blue"
  }
};

const myCustomTheme = {
  colors: {
    lightest: "hotpink",
    secondary: "cyan",
    primary: "yellow"
  }
};
class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;

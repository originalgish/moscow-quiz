import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'

import Home from '../pages/Home'
import Registration from '../pages/Registration'

class Routes extends Component {
  state = {}

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    )
  }
}

export default Routes

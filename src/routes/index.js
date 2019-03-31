import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import history from './history'
import PrivateRoute from './PrivateRoute'

import Home from '../pages/Home'
import Registration from '../pages/Registration'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Quiz from '../pages/Quiz'

class Routes extends Component {
  state = {}

  render() {
    const { isAuthenticated } = this.props
    console.log(isAuthenticated)
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/reset_password" component={ResetPassword} />
          <PrivateRoute path="/quiz" component={Quiz} isAuthenticated={isAuthenticated} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps)(Routes)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import GetCode from './GetCode'
import SubmitCode from './SubmitCode'
import RegisterUser from './RegisterUser'

import './index.scss'

class Registration extends Component {
  state = {}
  render() {
    return (
      <div className="registration">
        <GetCode />
        <SubmitCode />
        <RegisterUser />
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)

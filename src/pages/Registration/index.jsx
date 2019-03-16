import React, { Component } from 'react'

import GetCode from './GetCode'
import SendCode from './SendCode'

import './index.scss'

class Registration extends Component {
  state = {}
  render() {
    return (
      <div className="registration">
        <GetCode />
        <SendCode />
      </div>
    )
  }
}

export default Registration

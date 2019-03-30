import React, { Component } from 'react'

import Museum from './Museum'
import Menu from './Menu'

class Quiz extends Component {
  state = {}

  render() {
    return (
      <div>
        <Museum />
        <Menu />
      </div>
    )
  }
}

export default Quiz

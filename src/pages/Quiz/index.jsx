import React, { Component } from 'react'

import Museum from './Museum'

import { FullScreenCenter } from '../../styles/app/app'

class Quiz extends Component {
  state = {}

  render() {
    return (
      <FullScreenCenter>
        <Museum />
      </FullScreenCenter>
    )
  }
}

export default Quiz

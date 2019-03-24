import React, { Component } from 'react'

import Museum from './Museum'

import './index.scss'

class Quiz extends Component {
  state = {}

  handleAreaClick = e => {
    e.preventDefault()
    console.log('area')
  }

  render() {
    return (
      <div className="quiz">
        <Museum />
      </div>
    )
  }
}

export default Quiz

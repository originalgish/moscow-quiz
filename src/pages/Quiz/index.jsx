import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosition } from '../../actions/quiz'

import Museum from './Museum'
import Menu from './Menu'

class Quiz extends Component {
  state = {}

  componentDidMount() {
    // this.props.getPosition()
  }

  render() {
    const { position } = this.props
    return (
      <div>
        <Museum />
        <Menu />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  position: state.quiz.position
})

const mapDispatchToProps = {
  getPosition
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

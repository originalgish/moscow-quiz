import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosition, getQuestion } from '../../actions/quiz'

import Museum from './Museum'
import Menu from './Menu'

class Quiz extends Component {
  state = {}

  componentDidMount() {
    this.props.getPosition()
  }

  getQuestion = e => {
    const { id } = e.currentTarget.dataset
    this.props.getQuestion({ position: Number(id) })
  }

  render() {
    const { position, question } = this.props
    return (
      <div>
        <Museum position={position} getQuestion={this.getQuestion} question={question} />
        <Menu />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  position: state.quiz.position,
  question: state.quiz.question
})

const mapDispatchToProps = {
  getPosition,
  getQuestion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

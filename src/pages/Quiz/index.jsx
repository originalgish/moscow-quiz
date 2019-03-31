import React, { Component } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'

import { getPosition, getQuestion, toggleQuestionModal, setPosition } from '../../actions/quiz'

import Museum from './Museum'
import Menu from './Menu'
import Question from './Question'

class Quiz extends Component {
  state = {}

  componentDidMount() {
    this.props.getPosition()
  }

  getQuestion = e => {
    const { id } = e.currentTarget.dataset
    this.props.getQuestion({ position: Number(id) })
  }

  closeQuestionModal = () => {
    this.props.toggleQuestionModal(false)
  }

  sendAnswer = answer => {
    this.props.setPosition(answer)
  }

  render() {
    const { avaliablePositions, answeredPositions, question, questionModalIsShown } = this.props
    return (
      <div>
        <Museum avaliablePositions={avaliablePositions} getQuestion={this.getQuestion} question={question} />
        <Menu />
        {questionModalIsShown && (
          <Question question={question} closeQuestionModal={this.closeQuestionModal} sendAnswer={this.sendAnswer} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  avaliablePositions: get(state.quiz.position, 'positions.available_positions', []),
  answeredPositions: get(state.quiz.position, 'answered_positions', []),
  question: get(state.quiz.question, 'question', {}),
  questionModalIsShown: state.quiz.questionModalIsShown
})

const mapDispatchToProps = {
  getPosition,
  getQuestion,
  setPosition,
  toggleQuestionModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

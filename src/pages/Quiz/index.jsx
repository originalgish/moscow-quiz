import React, { Component } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'

import { getPosition, getQuestion, toggleQuestionModal, setPosition } from '../../actions/quiz'
import { logout } from '../../actions/user'

import Museum from './Museum'
import Menu from './Menu'
import Question from './Question'
import Clock from './Clock'
// import Leaderboard from './Leaderboard'

import { Wrapper } from './styles'

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
      <Wrapper>
        <Museum
          avaliablePositions={avaliablePositions}
          getQuestion={this.getQuestion}
          question={question}
          answeredPositions={answeredPositions}
        />
        <Menu logout={this.props.logout} />
        <Clock />
        {questionModalIsShown && (
          <Question question={question} closeQuestionModal={this.closeQuestionModal} sendAnswer={this.sendAnswer} />
        )}
        {/* <Leaderboard /> */}
      </Wrapper>
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
  toggleQuestionModal,
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

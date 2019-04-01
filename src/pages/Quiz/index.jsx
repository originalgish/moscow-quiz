import React, { Component } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'

import {
  getPosition,
  getQuestion,
  toggleQuestionModal,
  setPosition,
  toggleLeaderboard,
  getLeaderboard
} from '../../actions/quiz'
import { logout } from '../../actions/user'

import Museum from './Museum'
import Menu from './Menu'
import Question from './Question'
import Clock from './Clock'
import Leaderboard from './Leaderboard'

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

  closeLeaderboard = () => {
    this.props.toggleLeaderboard(false)
  }

  render() {
    const {
      avaliablePositions,
      answeredPositions,
      question,
      initialQuestionTime,
      questionModalIsShown,
      totalTimeSpent,
      leaderboardIsShown,
      leaderboard
    } = this.props
    return (
      <Wrapper>
        <Museum
          avaliablePositions={avaliablePositions}
          getQuestion={this.getQuestion}
          question={question}
          answeredPositions={answeredPositions}
        />
        <Menu logout={this.props.logout} getLeaderboard={this.props.getLeaderboard} />
        <Clock totalTimeSpent={totalTimeSpent} />
        {questionModalIsShown && (
          <Question
            question={question}
            initialQuestionTime={initialQuestionTime}
            closeQuestionModal={this.closeQuestionModal}
            sendAnswer={this.sendAnswer}
          />
        )}
        {leaderboardIsShown && <Leaderboard leaderboard={leaderboard} closeLeaderboard={this.closeLeaderboard} />}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  avaliablePositions: get(state.quiz.position, 'positions.available_positions', []),
  answeredPositions: get(state.quiz.position, 'answered_positions', []),
  question: get(state.quiz.question, 'question', {}),
  initialQuestionTime: get(state.quiz.question, 'time_spent', 0),
  questionModalIsShown: state.quiz.questionModalIsShown,
  totalTimeSpent: state.quiz.totalTimeSpent,
  leaderboardIsShown: state.quiz.leaderboardIsShown,
  leaderboard: state.quiz.leaderboard
})

const mapDispatchToProps = {
  getPosition,
  getQuestion,
  setPosition,
  toggleQuestionModal,
  logout,
  toggleLeaderboard,
  getLeaderboard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

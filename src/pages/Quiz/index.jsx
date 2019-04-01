import React, { Component } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'

import { getPosition, getQuestion, toggleQuestionModal, setPosition } from '../../actions/quiz'

import Museum from './Museum'
import Menu from './Menu'
import Question from './Question'

const quests = {
  answers: [
    {
      correct: true,
      id: 0,
      text:
        'Нет! В наше время госзаказчики ОФИЦИАЛЬНО утратили такие важные инструменты воздействия на исполнителей, как «заставить одуматься» и «всеми силами склонять». Но! В некоторых случаях, предусмотренных Законом о контрактной системе, допустимо уменьшение цены контракта.'
    },
    {
      correct: false,
      id: 1,
      text:
        'Безусловно, данная черта регламентирована Законом о контрактной системе и широко используется госзаказчиками.'
    }
  ],
  id: '3',
  intro:
    'Говоря об истории госзакупок, нельзя не отметить указ российской императрицы Елизаветы Петровны – Регул провиантского правления, изданный в 1758 году. В нем особое внимание уделялось рекламе и публикации объявлений о торгах. В городах билеты с извещениями о публичных торгах размещались под бой барабанов. Они публиковались в газетах для привлечения внимания населения. В глубинке, куда газеты, конечно же, не доходили, и не был слышен «барабанный бой» царских гонцов, билеты с условиями торгов оглашали священники после церковной службы. Согласитесь, уже тогда формируются черты современной контрактной системы. Еще одна немаловажная особенность, отраженная в указе – «Победителя торгов следует «всеми силами склонять к еще большему уменьшению цены... изыскивая казенной прибыли без всякой передачи».',
  text:
    'Давайте подумаем и ответим, сохранилось ли законодательно СКЛОНЕНИЕ госзаказчиком победителя к еще большему уменьшению цены?'
}

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
          <Question question={quests} closeQuestionModal={this.closeQuestionModal} sendAnswer={this.sendAnswer} />
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

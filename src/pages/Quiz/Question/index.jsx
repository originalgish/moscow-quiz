import React, { Component } from 'react'
import { Duration } from 'luxon'

import RenderButton from '../../../components/RenderButton'

import {
  Wrapper,
  Modal,
  Header,
  Timer,
  Main,
  Intro,
  Text,
  Answers,
  Label,
  Radio,
  AnswerText,
  AnswerButtonContainer,
  CloseButton,
  Result,
  ButtonBack
  // Separator
} from './styles'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      time: 0
    }
    this.timer = null
  }

  componentDidMount() {
    const answers = this.props.question.answers.map(answer => ({
      ...answer,
      answerState: 'neutral'
    }))
    this.setState({ answers })

    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
  }

  getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('h:mm:ss')

  chooseAnswer = e => {
    const id = Number(e.currentTarget.id)
    const answers = [...this.state.answers]
    answers.forEach(answer => (answer.answerState = 'neutral'))
    answers[id].answerState = 'chosen'
    this.setState({ answers })
  }

  confirmAnswer = () => {
    const questionID = Number(this.props.question.id)
    const answers = [...this.state.answers]
    const chosenAnswer = answers.find(answer => answer.answerState === 'chosen')
    const chosenAnswerID = chosenAnswer.id
    const isChosenAnswerCorrect = chosenAnswer.correct
    answers[chosenAnswerID].answerState = isChosenAnswerCorrect ? 'correct' : 'incorrect'
    this.setState({ answers })
    const requestBody = {
      position: questionID,
      correct: isChosenAnswerCorrect
    }
    this.props.sendAnswer(requestBody)
    this.stopTimer()
  }

  render() {
    const { question, closeQuestionModal } = this.props
    const { answers, time } = this.state
    const anythingChosen = answers.find(answer => answer.answerState === 'chosen')
    const hasAnswered = answers.find(answer => answer.answerState === 'correct' || answer.answerState === 'incorrect')
    const hasAnsweredCorrect = answers.find(answer => answer.answerState === 'correct')
    return (
      <Wrapper>
        <Modal>
          <Header hasAnswered={hasAnswered} hasAnsweredCorrect={hasAnsweredCorrect}>
            {/* {`Московский закупочный квест. Вопрос ${Number(question.id) + 1}/13`} */}
            <Timer>{this.getFormattedSeconds(time)}</Timer>
            {/* {hasAnswered && (
              <Result>
                {`Вы ответили ${hasAnsweredCorrect ? 'правильно! ' : 'неправильно. '}`}
                <ButtonBack onClick={closeQuestionModal}>Следующий вопрос?</ButtonBack>
              </Result>
            )} */}
            <CloseButton onClick={closeQuestionModal} />
          </Header>
          <Main>
            {/* <Timer>
              <Separator />
              {this.getFormattedSeconds(time)}
            </Timer> */}
            <Intro>{question.intro}</Intro>
            <Text>{question.text}</Text>
            <Answers>
              {answers.map((answer, index) => (
                <Label key={index} htmlFor={answer.id}>
                  <Radio
                    type="radio"
                    name="answers"
                    id={answer.id}
                    data-correct={answer.correct}
                    disabled={hasAnswered !== undefined}
                    onChange={this.chooseAnswer}
                  />
                  <AnswerText answerState={answer.answerState}>{answer.text}</AnswerText>
                </Label>
              ))}
            </Answers>

            {hasAnswered ? (
              <Result>
                {`Вы ответили ${hasAnsweredCorrect ? 'правильно! ' : 'неправильно. '}`}
                <ButtonBack onClick={closeQuestionModal}>Следующий вопрос?</ButtonBack>
              </Result>
            ) : (
              <AnswerButtonContainer>
                <RenderButton
                  type="button"
                  text="Ответить"
                  color="primary"
                  disabled={anythingChosen === undefined}
                  onClick={this.confirmAnswer}
                />
              </AnswerButtonContainer>
            )}
            {/* <AnswerButtonContainer>
              <RenderButton
                type="button"
                text="Ответить"
                color="primary"
                disabled={anythingChosen === undefined}
                onClick={this.confirmAnswer}
              />
            </AnswerButtonContainer> */}
          </Main>
        </Modal>
      </Wrapper>
    )
  }
}

export default Question

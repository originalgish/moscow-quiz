import React, { Component } from 'react'

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
  ButtonBack,
  Separator
} from './styles'

class Question extends Component {
  state = {
    answers: []
  }

  componentDidMount() {
    const answers = this.props.question.answers.map(answer => ({
      ...answer,
      answerState: 'neutral'
    }))
    this.setState({ answers })
  }

  chooseAnswer = e => {
    const id = Number(e.currentTarget.id)
    const answers = [...this.state.answers]
    answers.forEach(answer => (answer.answerState = 'neutral'))
    answers[id].answerState = 'chosen'
    this.setState({ answers })
  }

  confirmAnswer = () => {
    const answers = [...this.state.answers]
    const chosenAnswer = answers.find(answer => answer.answerState === 'chosen')
    const chosenAnswerID = chosenAnswer.id
    const isChosenAnswerCorrect = chosenAnswer.correct
    answers[chosenAnswerID].answerState = isChosenAnswerCorrect ? 'correct' : 'incorrect'
    this.setState({ answers })
    const requestBody = {
      position: chosenAnswerID,
      correct: isChosenAnswerCorrect
    }
    this.props.sendAnswer(requestBody)
  }

  render() {
    const { question, closeQuestionModal } = this.props
    const { answers } = this.state
    const anythingChosen = answers.find(answer => answer.answerState === 'chosen')
    const hasAnswered = answers.find(answer => answer.answerState === 'correct' || answer.answerState === 'incorrect')
    const hasAnsweredCorrect = answers.find(answer => answer.answerState === 'correct')
    return (
      <Wrapper>
        <Modal>
          <Header>
            {`Московский закупочный квест. Вопрос ${Number(question.id) + 1}/13`}
            <CloseButton onClick={closeQuestionModal} />
          </Header>
          <Main>
            <Timer>
              <Separator />
              0:15:25
            </Timer>
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
          </Main>
        </Modal>
      </Wrapper>
    )
  }
}

export default Question

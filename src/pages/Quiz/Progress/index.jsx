import React from 'react'

import { Wrapper, Text } from './styles'

const QUESTIONS_AMOUNT = 13

const getProgressValues = answeredPositions => {
  if (answeredPositions.length) {
    const correctReducer = (accumulator, answer) => (answer.correct ? ++accumulator : accumulator)
    const incorrectReducer = (accumulator, answer) => (!answer.correct ? ++accumulator : accumulator)

    const correctAnswersAmount = answeredPositions.reduce(correctReducer, 0)
    const incorrectAnswersAmount = answeredPositions.reduce(incorrectReducer, 0)
    const answersLeft = QUESTIONS_AMOUNT - correctAnswersAmount - incorrectAnswersAmount
    return {
      correctAnswersAmount,
      incorrectAnswersAmount,
      answersLeft
    }
  } else {
    return {
      correctAnswersAmount: 0,
      incorrectAnswersAmount: 0,
      answersLeft: 0
    }
  }
}

const Progress = ({ answeredPositions }) => (
  <Wrapper>
    <Text>{`${getProgressValues(answeredPositions).correctAnswersAmount} верно`}</Text>
    <Text>{`${getProgressValues(answeredPositions).incorrectAnswersAmount} неверно`}</Text>
    {answeredPositions.length < QUESTIONS_AMOUNT && answeredPositions.length !== 0 && (
      <Text>{`${getProgressValues(answeredPositions).answersLeft} осталось`}</Text>
    )}
  </Wrapper>
)

export default Progress

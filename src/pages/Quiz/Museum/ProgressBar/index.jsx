import React from 'react'

import { Wrapper, ProgressCircle } from './styles'

// TODO: Replace with recieved questions amount
const QUESTIONS = Array.from(Array(13).keys())

const ProgressBar = () => (
  <Wrapper>
    {QUESTIONS.map(question => (
      <ProgressCircle key={question}>{question + 1}</ProgressCircle>
    ))}
  </Wrapper>
)

export default ProgressBar

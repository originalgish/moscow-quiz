import React from 'react'
import { difference } from 'lodash'

import config from '../../../../config'

import { Wrapper, LevelLight, WindowLight } from './styles'

const Lights = ({ answeredPositions, getAnsweredQuestions }) => {
  const getLightedLevels = () => {
    const answeredQuestions = getAnsweredQuestions(answeredPositions)
    const { levelWindowMapping } = config

    const levelsArray = []
    levelWindowMapping.forEach(level => {
      const levelIncludesWindows = !difference(level.windows, answeredQuestions).length
      if (levelIncludesWindows) {
        levelsArray.push(level.levelID)
      }
    })

    return levelsArray
  }

  return (
    <Wrapper>
      {getLightedLevels(answeredPositions).map(level => (
        <LevelLight key={level} imageID={level} />
      ))}
      {getAnsweredQuestions(answeredPositions).map(level => (
        <WindowLight key={level} imageID={level} />
      ))}
    </Wrapper>
  )
}

export default Lights

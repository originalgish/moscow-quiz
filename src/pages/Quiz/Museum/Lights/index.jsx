import React from 'react'

import { Wrapper, LevelLight, WindowLight } from './styles'

// const LEVELS = [0, 1, 2, 3, 4]
const LEVELS = Array.from(Array(5).keys())
const WINDOWS = Array.from(Array(13).keys())

const Lights = () => (
  <Wrapper>
    {LEVELS.map(level => (
      <LevelLight key={level} imageID={level} />
    ))}
    {WINDOWS.map(level => (
      <WindowLight key={level} imageID={level} />
    ))}
  </Wrapper>
)

export default Lights

import React from 'react'
import { Duration } from 'luxon'

import { Wrapper, ClockImage, Time } from './styles'

const getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('h:mm:ss')

const Clock = ({ totalTimeSpent }) => (
  <Wrapper>
    <ClockImage>
      <Time>{getFormattedSeconds(totalTimeSpent)}</Time>
    </ClockImage>
  </Wrapper>
)

export default Clock

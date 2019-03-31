import React from 'react'

import { Tooltip } from './styles'

const TooltipTitle = () => (
  <Tooltip>
    <p>
      На Ваш телефон в течение <br /> нескольких секунд придет <b>4</b>-значный код.
    </p>
    <p>
      Пример кода: <b>5874</b>
    </p>
  </Tooltip>
)

export default TooltipTitle

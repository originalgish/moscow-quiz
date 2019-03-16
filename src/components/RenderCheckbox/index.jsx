import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core/'

const RenderCheckbox = ({ input, label }) => (
  <div className="render-checkbox">
    <FormControlLabel
      control={<Checkbox onChange={input.onChange} checked={input.value} color="primary" />}
      label={label}
    />
  </div>
)

export default RenderCheckbox

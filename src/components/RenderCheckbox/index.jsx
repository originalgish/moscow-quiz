import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core/'

const RenderCheckbox = ({ input, label, meta: { touched, error, warning } }) => (
  <div className="render-checkbox">
    <FormControlLabel
      control={<Checkbox onChange={input.onChange} checked={input.value} color="primary" />}
      label={label}
    />
    {touched &&
      ((error && <span className="render-checkbox__error">{error}</span>) ||
        (warning && <span className="render-checkbox__warning">{warning}</span>))}
  </div>
)

export default RenderCheckbox

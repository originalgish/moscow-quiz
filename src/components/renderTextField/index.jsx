import React from 'react'
import { TextField } from '@material-ui/core'

const RenderTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div className="render-textfield">
    <TextField error={touched && error} label={label} {...input} {...custom} />
    {touched &&
      ((error && <span className="render-textfield__error">{error}</span>) ||
        (warning && <span className="render-textfield__warning">{warning}</span>))}
  </div>
)

export default RenderTextField

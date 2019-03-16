import React from 'react'
import { TextField } from '@material-ui/core'

const RenderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <div className="render-textfield">
    <TextField
      error={touched && Boolean(error)}
      helperText={touched ? error : null}
      label={label}
      variant="outlined"
      margin="normal"
      {...input}
      {...custom}
    />
  </div>
)

export default RenderTextField

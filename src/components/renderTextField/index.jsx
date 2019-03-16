import React from 'react'
import TextField from '@material-ui/core/TextField'

const renderTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div className="text-field">
    <TextField required label={label} {...input} {...custom} />
    {touched &&
      ((error && <span className="text-field__error">{error}</span>) ||
        (warning && <span className="text-field__warning">{warning}</span>))}
  </div>
)

export default renderTextField

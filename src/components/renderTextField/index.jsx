import React from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

const RenderTextField = ({ input, label, classes, meta: { touched, error }, ...custom }) => (
  <div className="render-textfield">
    <TextField
      error={touched && Boolean(error)}
      helperText={touched ? error : null}
      label={label}
      variant="outlined"
      margin="normal"
      fullWidth
      className={classes.textfield}
      {...input}
      {...custom}
    />
  </div>
)

export default withStyles(styles)(RenderTextField)

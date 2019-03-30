import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  checkbox: {
    marginBottom: theme.spacing.unit * 2
  }
})

const RenderCheckbox = ({ input, label, classes }) => (
  <div className="render-checkbox">
    <FormControlLabel
      control={
        <Checkbox onChange={input.onChange} checked={input.value} color="primary" className={classes.checkbox} />
      }
      label={label}
    />
  </div>
)

export default withStyles(styles)(RenderCheckbox)

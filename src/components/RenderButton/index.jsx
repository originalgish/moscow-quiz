import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2
  }
})

const RenderButton = ({ text, classes, ...props }) => (
  <div className="render-button">
    <Button variant="contained" className={classes.button} fullWidth size="large" {...props}>
      {text}
    </Button>
  </div>
)

export default withStyles(styles)(RenderButton)

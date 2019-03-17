import React, { Component } from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

class RenderTextFieldPassword extends Component {
  state = {
    showPassword: false
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  render() {
    const {
      input,
      label,
      classes,
      meta: { active, dirty, touched, error }
    } = this.props
    const validationError = touched && Boolean(error)
    return (
      <div className="render-textfield">
        <FormControl fullWidth className={classes.textfield}>
          <InputLabel variant="outlined" htmlFor="adornment-password" error={validationError}>
            {label}
          </InputLabel>
          <OutlinedInput
            labelWidth={active || dirty ? 58 : 0}
            error={validationError}
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            {...input}
          />
          {validationError && (
            <FormHelperText error={validationError} className={classes.margin}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(RenderTextFieldPassword)

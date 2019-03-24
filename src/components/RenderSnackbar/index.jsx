import React, { Component } from 'react'
import classNames from 'classnames'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import { green, amber, blue } from '@material-ui/core/colors'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: blue[600]
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
})

const MySnackbarContent = props => {
  const { classes, className, message, onClose, variant, ...other } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent)

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
    color: 'white'
  }
})

class RenderSnackbar extends Component {
  state = {
    open: true
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false })
  }
  render() {
    const { classes, variant, message } = this.props

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={this.state.open}
        autoHideDuration={3000}
        onClose={this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose}
          variant={variant}
          message={message}
          className={classes.margin}
        />
      </Snackbar>
    )
  }
}

export default withStyles(styles2)(RenderSnackbar)

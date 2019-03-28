import React, { Component } from 'react'
import Routes from './routes'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { AppStyles } from './styles/app/app'
import theme from './styles/theme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppStyles />
        <Routes />
      </MuiThemeProvider>
    )
  }
}

export default App

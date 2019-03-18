import React, { Component } from 'react'
import Routes from './routes'
import { MuiThemeProvider } from '@material-ui/core/styles'

import './styles/app/app.scss'
import theme from './styles/theme'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App

import { createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'

import './index.scss'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: yellow
  },
  typography: {
    useNextVariants: true
  }
})

export default theme

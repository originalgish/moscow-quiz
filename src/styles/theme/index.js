import { createMuiTheme } from '@material-ui/core/styles'
import { amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: amber
  },
  typography: {
    useNextVariants: true
  }
})

export default theme

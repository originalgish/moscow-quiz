import { createMuiTheme } from '@material-ui/core/styles'
import { amber, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: amber,
    secondary: indigo
  },
  typography: {
    useNextVariants: true
  }
})

export default theme

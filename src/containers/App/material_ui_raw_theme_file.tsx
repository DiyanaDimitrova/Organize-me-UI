import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.purple500,
    primary2Color: Colors.green500,
    primary3Color: Colors.green300,
    accent1Color: Colors.purple900,
    accent2Color: Colors.purple900,
    accent3Color: Colors.purple900,
    textColor: Colors.purple900,
    alternateTextColor: Colors.purple50,
    canvasColor: Colors.purple200,
    borderColor: Colors.purple900,
    disabledColor: fade(Colors.purple900, 0.3)
  }
}

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)

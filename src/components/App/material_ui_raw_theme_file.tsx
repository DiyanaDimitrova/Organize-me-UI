import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.deepPurple500,
    primary2Color: Colors.deepPurple700,
    primary3Color: Colors.deepPurple100,
    accent1Color: Colors.deepPurpleA100,
    accent2Color: Colors.deepPurpleA200,
    accent3Color: Colors.deepPurpleA400,
    textColor: Colors.deepPurple700,
    alternateTextColor: Colors.deepPurple100,
    canvasColor: Colors.white,
    borderColor: Colors.deepPurple700,
    disabledColor: fade(Colors.deepPurple700, 0.3),
    pickerHeaderColor: Colors.deepPurple700,
    clockCircleColor: Colors.deepPurple100,
    shadowColor: Colors.deepPurple700
  }
}

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)

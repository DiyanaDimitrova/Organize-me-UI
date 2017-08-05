import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.deepPurple500,
    primary2Color: Colors.deepPurple900,
    primary3Color: Colors.deepPurple100,
    accent1Color: Colors.deepPurpleA100,
    accent2Color: Colors.deepPurpleA200,
    accent3Color: Colors.deepPurpleA400,
    textColor: Colors.deepPurple900,
    alternateTextColor: Colors.deepPurple100,
    canvasColor: Colors.deepPurple100,
    borderColor: Colors.deepPurple900,
    disabledColor: fade(Colors.deepPurple900, 0.3)
  }
}

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)

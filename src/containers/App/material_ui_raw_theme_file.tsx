import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.orange500,
    primary2Color: Colors.yellow500,
    primary3Color: Colors.lightGreen500,
    accent1Color: Colors.indigo500,
    accent2Color: Colors.purple500,
    accent3Color: Colors.pink500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
}

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)

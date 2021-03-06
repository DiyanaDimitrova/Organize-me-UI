import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../store/AppStore'
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home'
import { withRouter } from 'react-router'
import * as style from './style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'
const classes = require('./App.css')

interface Props {
}

interface State {
}

class App extends React.Component<Props, State>{
  render() {
    return (
      <div id='appDiv' className={classes.appDiv}>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header />
            <Home />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
function mapStateToProps(state: AppState) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

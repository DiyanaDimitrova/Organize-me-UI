import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../store/AppStore'

// import { RootState } from '../../reducers'
// import * as TodoActions from '../../actions/todos'
import Header from '../../components/Header/Header'
import { withRouter } from 'react-router'
import * as style from './style.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'

interface Props {
}

interface State {
}

class App extends React.Component<Props, State>{
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header />
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
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
export default connect(mapStateToProps, mapDispatchToProps)(App)

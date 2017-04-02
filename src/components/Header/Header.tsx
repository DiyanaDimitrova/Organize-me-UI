import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toggle from 'material-ui/Toggle'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import LoggedMenu from '../Login/LoggedMenu/LoggedMenu'
import Login from '../Login/Login/Login'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
const classes = require('./Header.css')


interface StateProps {
  logged: boolean
}

interface DispatchProps {
}

export interface HeaderProps extends StateProps, DispatchProps {

}
interface HeaderState{
  openMenu: boolean
}
/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false
    }
  }

  handleChange = (event, logged) => {
    // this.setState({logged: logged});
  }

  menuClick = () => {
      this.setState({openMenu: !this.state.openMenu})
  }
  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={this.props.logged}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar id='mainDiv' className={classes.mainDiv}
          title="Title"
          onLeftIconButtonTouchTap={this.menuClick}
          iconElementRight={this.props.logged ? <LoggedMenu /> : <Login />}
        />
        <Drawer open={this.state.openMenu}>
          <MenuItem>Create Category</MenuItem>
          <MenuItem>All Categories</MenuItem>
          <MenuItem>Create Event</MenuItem>
          <MenuItem>All Events</MenuItem>
          <MenuItem>Add Code</MenuItem>
          <MenuItem>Scan Code</MenuItem>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps: (state: AppState) => StateProps = (state) => ({
    logged: state.login.login
})

const mapDispatchToProps: (dispatch: Dispatch<any>) => DispatchProps = (dispatch) => {
    return {

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)

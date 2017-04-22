import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toggle from 'material-ui/Toggle'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import LoggedMenu from '../Login/LoggedMenu/LoggedMenu'
import Login from '../Login/Login/Login'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
const classes = require('./Header.css')


interface StateProps {
  logged: Boolean
}

interface DispatchProps {
}

export interface HeaderProps extends StateProps, DispatchProps {

}
interface HeaderState{
  openMenu: Boolean
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
  newCategoryClick = () => {
    browserHistory.push('/newCategory')
  }
  allCategoryClick = () => {
    browserHistory.push('/allCategories')
  }
  newEventClick = () => {
    browserHistory.push('/newEvent')
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
          <MenuItem onTouchTap={this.newCategoryClick}>Create Category</MenuItem>
          <MenuItem onTouchTap={this.allCategoryClick}>All Categories</MenuItem>
          <MenuItem onTouchTap={this.newEventClick}>Create Event</MenuItem>
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

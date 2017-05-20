import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import LoggedMenu from '../Login/LoggedMenu/LoggedMenu'
import Login from '../Login/Login/Login'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Event from 'material-ui/svg-icons/action/event'
import Note from 'material-ui/svg-icons/action/note-add'
import Toc from 'material-ui/svg-icons/action/toc'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import Nfc from 'material-ui/svg-icons/device/nfc'
import Photo from 'material-ui/svg-icons/image/photo-library'
import Group from 'material-ui/svg-icons/social/group'



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
  allEventClick = () => {
    browserHistory.push('/allEvents')
  }
  eventGridClick = () => {
    browserHistory.push('/event/all')
  }
  scanCodeClick = () => {
    browserHistory.push('/scanCode')
  }
  viewUsersClick = () => {
    browserHistory.push('/allUsers')
  }
  render() {
    return (
      <div>
        <AppBar id='mainDiv' className={classes.mainDiv}
          title="Organize Me"
          onLeftIconButtonTouchTap={this.menuClick}
          iconElementRight={this.props.logged ? <LoggedMenu /> : <Login />}
        />
        <Drawer open={this.state.openMenu}>
          <MenuItem onTouchTap={this.newCategoryClick} leftIcon={<Note />}>Create Category</MenuItem>
          <MenuItem onTouchTap={this.allCategoryClick} leftIcon={<Toc />}>All Categories</MenuItem>
          <MenuItem onTouchTap={this.newEventClick} leftIcon={<Event />}>Create Event</MenuItem>
          <MenuItem onTouchTap={this.allEventClick} leftIcon={<EventNote />}>All Events</MenuItem>
          <MenuItem onTouchTap={this.eventGridClick} leftIcon={<Photo />}>Events Grid</MenuItem>
          <MenuItem onTouchTap={this.scanCodeClick} leftIcon={<Nfc />}>Scan Code</MenuItem>
          <MenuItem onTouchTap={this.viewUsersClick} leftIcon={<Group />}>View Users</MenuItem>
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

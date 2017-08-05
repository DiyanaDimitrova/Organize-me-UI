import * as React from 'react'
import {AppBar, Drawer, Paper} from 'material-ui'
// import Drawer from 'material-ui/Drawer'
// import Paper from 'material-ui/Paper'
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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../../containers/App/material_ui_raw_theme_file'
import * as Colors from 'material-ui/styles/colors'

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

  // menuClick = () => {
  //     this.setState({openMenu: !this.state.openMenu})
  // }
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
      <MuiThemeProvider muiTheme={theme}>
        <div id='mainDiv' className={classes.mainDiv}>
            <div id='navigationDiv' className={classes.navigationDiv}>
              <Drawer open={true}>
                <MenuItem onTouchTap={this.newCategoryClick} leftIcon={<Note color={Colors.deepPurple700}/>}>Create Category</MenuItem>
                <MenuItem onTouchTap={this.allCategoryClick} leftIcon={<Toc color={Colors.deepPurple700}/>}>All Categories</MenuItem>
                <MenuItem onTouchTap={this.newEventClick} leftIcon={<Event color={Colors.deepPurple700}/>}>Create Event</MenuItem>
                <MenuItem onTouchTap={this.allEventClick} leftIcon={<EventNote color={Colors.deepPurple700}/>}>All Events</MenuItem>
                <MenuItem onTouchTap={this.eventGridClick} leftIcon={<Photo color={Colors.deepPurple700}/>}>Events Grid</MenuItem>
                <MenuItem onTouchTap={this.scanCodeClick} leftIcon={<Nfc color={Colors.deepPurple700}/>}>Scan Code</MenuItem>
                <MenuItem onTouchTap={this.viewUsersClick} leftIcon={<Group color={Colors.deepPurple700}/>}>View Users</MenuItem>
              </Drawer>
            </div>
            <div id='contentDiv' className={classes.contentDiv}>
              <AppBar
                title="Organize Me"
                // onLeftIconButtonTouchTap={this.menuClick}
                showMenuIconButton={false}
                iconElementRight={this.props.logged ? <LoggedMenu /> : <Login />}
              />
            </div>
        </div>
      </MuiThemeProvider>
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

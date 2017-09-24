import * as React from 'react'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {AppBar, Drawer, Paper, MenuItem, IconButton, Tabs, Tab } from 'material-ui'
import Event from 'material-ui/svg-icons/action/event'
import Note from 'material-ui/svg-icons/action/note-add'
import Toc from 'material-ui/svg-icons/action/toc'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import Nfc from 'material-ui/svg-icons/device/nfc'
import Photo from 'material-ui/svg-icons/image/photo-library'
import Group from 'material-ui/svg-icons/social/group'
import Home from 'material-ui/svg-icons/action/home'
import * as Colors from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../App/material_ui_raw_theme_file'
import LoggedMenu from '../Login/LoggedMenu/LoggedMenu'
import Login from '../Login/Login/Login'
const classes = require('./Header.css')

interface StateProps {
  logged: Boolean
  roles: Array<String>
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
  handleHome = () => {
    browserHistory.push('/')
  }

  // <Drawer open={false}>
  //   <MenuItem onTouchTap={this.newCategoryClick} leftIcon={<Note color={Colors.deepPurple700}/>}>Create Category</MenuItem>
  //   <MenuItem onTouchTap={this.allCategoryClick} leftIcon={<Toc color={Colors.deepPurple700}/>}>All Categories</MenuItem>
  //   <MenuItem onTouchTap={this.newEventClick} leftIcon={<Event color={Colors.deepPurple700}/>}>Create Event</MenuItem>
  //   <MenuItem onTouchTap={this.allEventClick} leftIcon={<EventNote color={Colors.deepPurple700}/>}>All Events</MenuItem>
  //   <MenuItem onTouchTap={this.eventGridClick} leftIcon={<Photo color={Colors.deepPurple700}/>}>Events Grid</MenuItem>
  //   <MenuItem onTouchTap={this.scanCodeClick} leftIcon={<Nfc color={Colors.deepPurple700}/>}>Scan Code</MenuItem>
  //   <MenuItem onTouchTap={this.viewUsersClick} leftIcon={<Group color={Colors.deepPurple700}/>}>View Users</MenuItem>
  // </Drawer>
  render() {
    console.log(this.props)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div id='mainDiv' className={classes.mainDiv}>
            <div id='navigationDiv' className={classes.navigationDiv}>
            </div>
            <div id='contentDiv' className={classes.contentDiv}>
              <AppBar
                title="Organize Me"
                onLeftIconButtonTouchTap={this.handleHome}
                showMenuIconButton={true}
                zDepth={2}
                iconElementLeft={<IconButton><Home /></IconButton>}
                iconElementRight={this.props.logged ? <LoggedMenu /> : <Login />}>
              </AppBar>
              {this.props.logged === true && this.props.roles !== null && this.props.roles.includes('Admin') &&
                <Tabs>
                    <Tab
                      onActive={this.newCategoryClick}
                      icon={<Note color={Colors.deepPurple700}/>}
                      label="Create Category"
                    />
                    <Tab
                      onActive={this.allCategoryClick}
                      icon={<Toc color={Colors.deepPurple700}/>}
                      label="All Categories"
                    />
                    <Tab
                      onActive={this.newEventClick}
                      icon={<Event color={Colors.deepPurple700}/>}
                      label="Create Event"
                    />
                    <Tab
                      onActive={this.allEventClick}
                      icon={<EventNote color={Colors.deepPurple700}/>}
                      label="All Events"
                    />
                    <Tab
                      onActive={this.scanCodeClick}
                      icon={<Nfc color={Colors.deepPurple700}/>}
                      label="Scan Code"
                    />
                    <Tab
                      onActive={this.viewUsersClick}
                      icon={<Group color={Colors.deepPurple700}/>}
                      label="View Users"
                    />
                </Tabs>}
            </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps: (state: AppState) => StateProps = (state) => ({
    logged: state.login.login,
    roles: state.login.user ? state.login.user.roles : null
})

const mapDispatchToProps: (dispatch: Dispatch<any>) => DispatchProps = (dispatch) => {
    return {

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)

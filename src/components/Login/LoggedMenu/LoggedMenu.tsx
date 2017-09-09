import * as React from 'react'
import { AppState } from '../../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {IconButton, Chip, Avatar, IconMenu, MenuItem} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SignOutIcon from 'material-ui/svg-icons/action/highlight-off'
import MyAccount from 'material-ui/svg-icons/action/account-circle'
import Help from 'material-ui/svg-icons/action/help'
import About from 'material-ui/svg-icons/content/font-download'
import * as actions from '../../../actions/loginActions'
const classes = require('./LoggedMenu.css')

interface StateProps {
  username: String
}

interface DispatchProps {
  performSignoutAction: () => void
}

export interface LoggedMenuProps extends StateProps, DispatchProps {

}

interface LoggedMenuState{
}

class LoggedMenu extends React.Component<LoggedMenuProps, LoggedMenuState> {
  constructor(props) {
    super(props)
  }
  signoutClick = () => {
    this.props.performSignoutAction()
    browserHistory.push('/')
  }
  helpClick = () => {
    browserHistory.push('/help')
  }
  aboutClick = () => {
    browserHistory.push('/about')
  }
  myAccountClick = () => {
    browserHistory.push('/user/' + this.props.username)
  }

  handleChangeSingle = (event, value) => {
   this.setState({
     valueSingle: value
   })
  }
  render() {
    return (
        <IconMenu
          menuStyle={{backgroundColor: Colors.deepPurple50}}
          iconButtonElement={
              <div id='userChip' className={classes.userChip}>
                <Chip style={{ margin: 4 }} backgroundColor={Colors.deepPurple100}>
                  <Avatar size={32} color={Colors.deepPurple500} backgroundColor={Colors.deepPurple50}>
                    {this.props.username.charAt(0)}
                  </Avatar>
                  {this.props.username}
                </Chip>
              </div>}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}>
          <MenuItem onClick={this.myAccountClick} leftIcon={<MyAccount color={Colors.deepPurple700}/>}primaryText="My Account" />
          <MenuItem onClick={this.aboutClick} leftIcon={<About color={Colors.deepPurple700}/>} primaryText="About Us" />
          <MenuItem onClick={this.helpClick} leftIcon={<Help color={Colors.deepPurple700}/>} primaryText="Help" />
          <MenuItem onClick={this.signoutClick} leftIcon={<SignOutIcon color={Colors.deepPurple700}/>}primaryText="Sign Out" />
        </IconMenu>
      )
    }
}
const mapStateToProps = (state: any) => ({
  username: state.login.user ? state.login.user.username : null
})

const mapDispatchToProps = (dispatch) => {
    return {
      performSignoutAction: (): void => {
          actions.performSignoutAction(dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoggedMenu)

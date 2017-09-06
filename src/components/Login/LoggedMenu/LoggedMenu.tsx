import * as React from 'react'
import { AppState } from '../../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {IconButton, Chip, Avatar, IconMenu, MenuItem} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SignOutIcon from 'material-ui/svg-icons/action/highlight-off'
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
  opened: Boolean,
  valueSingle: String
}

class LoggedMenu extends React.Component<LoggedMenuProps, LoggedMenuState> {
  constructor(props) {
    super(props)
    this.state = {
      opened: true,
      valueSingle: '3'
    }
  }
  signoutClick = () => {
    this.props.performSignoutAction()
    browserHistory.push('/')
  }
  helpClick = () => {
    this.props.performSignoutAction()
    browserHistory.push('/help')
  }
  aboutClick = () => {
    this.props.performSignoutAction()
    browserHistory.push('/about')
  }

  handleChangeSingle = (event, value) => {
   this.setState({
     valueSingle: value
   })
  }
  render() {
    return (
        <IconMenu
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
          <MenuItem value='1' onClick={this.aboutClick} leftIcon={<About color={Colors.deepPurple700}/>} primaryText="About Us" />
          <MenuItem value='2' onClick={this.helpClick} leftIcon={<Help color={Colors.deepPurple700}/>} primaryText="Help" />
          <MenuItem value='3' onClick={this.signoutClick} leftIcon={<SignOutIcon color={Colors.deepPurple700}/>}primaryText="Sign Out" />
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

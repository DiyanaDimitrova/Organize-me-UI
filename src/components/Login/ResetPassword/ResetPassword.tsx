import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/loginActions'
import { LoginRequest } from '../../../main/loginMain'
import Header from '../../../components/Header/Header'
const classes = require('./ResetPassword.css')
const styles = {
  errorStyle: {
    color: Colors.deepPurple700,
  },
  underlineStyle: {
    borderColor: Colors.deepPurple700,
  },
  floatingLabelStyle: {
    color: Colors.deepPurple700,
  },
  floatingLabelFocusStyle: {
    color: Colors.deepPurple700,
  },
}
interface StateProps {
}

interface DispatchProps {
  performResetPasswordAction: (loginRequest: LoginRequest) => void
}

export interface ResetPasswordProps extends StateProps, DispatchProps {

}


interface ResetPasswordState{
  username: String
  password: String
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class ResetPassword extends React.Component<ResetPasswordProps, ResetPasswordState> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.passwordEntered = this.passwordEntered.bind(this)
    this.usernameEntered = this.usernameEntered.bind(this)
  }
  usernameEntered(event) {
          if (event.target.value) {
               this.setState({ username: event.target.value })
           }
       }
  passwordEntered(event) {
          if (event.target.value) {
              this.setState({ password: event.target.value })
          }
      }
  changePassword = (event)  => {
    event.preventDefault()
    let loginRequest = {} as LoginRequest
    loginRequest.username = this.state.username
    loginRequest.password = this.state.password
    this.props.performResetPasswordAction(loginRequest)
    browserHistory.push('/')
  }
  render() {
    return (
      <div>
          <div>
                <Header />
          </div>
          <div id='resetPasswordDiv' className={classes.resetPasswordDiv} >
            <Paper id='resetPasswordPaper' className={classes.resetPasswordPaper} zDepth={2}>
                <div id='titleText' className={classes.titleText}>
                <h2>Reset Password</h2>
                </div>
                <div>
                  <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                  fullWidth={true} hintText="Username" floatingLabelText="Username" floatingLabelFixed={true} type="text" onChange={this.usernameEntered} value={this.state.username}/>
                </div>
                <div>
                  <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                  fullWidth={true} hintText="Password" floatingLabelText="Password" floatingLabelFixed={true} type="password" onChange={this.passwordEntered} value={this.state.password}/>
                </div>
                <div id='resetPasswordBtn' className={classes.resetPasswordBtn}>
                  <RaisedButton label="Change Pasword" fullWidth={true} backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.changePassword}/>
                </div>
              </Paper>
          </div>
       </div>
    )
  }
}
const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch) => {
    return {
      performResetPasswordAction: (loginRequest: LoginRequest): void => {
          actions.performResetPasswordAction(loginRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)

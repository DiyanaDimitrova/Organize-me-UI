import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, FlatButton, TextField, Paper } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/loginActions'
import { LoginRequest } from '../../../main/loginMain'
import Header from '../../../components/Header/Header'
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
};

const classes = require('./LoginForm.css')

interface StateProps {
}

interface DispatchProps {
  performLoginAction: (loginRequest: LoginRequest) => void
}

export interface LoginFormProps extends StateProps, DispatchProps {

}


interface LoginFormState{
  username: String
  password: String
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.usernameEntered = this.usernameEntered.bind(this)
    this.passwordEntered = this.passwordEntered.bind(this)
  }
  usernameEntered(event) {
        if (event.target.value) {
            this.setState({ username: event.target.value })
            // this.props.setFirstInput(event.target.value)
        }
    }
  passwordEntered(event) {
          if (event.target.value) {
              this.setState({ password: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  loginUser = (event)  => {
      event.preventDefault()
      console.log('LOG' + JSON.stringify(this.state))
      let loginRequest = {} as LoginRequest
      loginRequest.username = this.state.username
      loginRequest.password = this.state.password
      this.props.performLoginAction(loginRequest)
      browserHistory.push('/')
  }
  resetPassword = (event)  => {
    event.preventDefault()
    browserHistory.push('/resetPassword')
  }
  render() {
    return (
      <div id='loginFormWrapper' className={classes.loginFormWrapper}>
          <div>
                <Header />
          </div>
          <div id='loginDiv' className={classes.loginDiv} >
            <Paper id='loginPaper' className={classes.loginPaper} zDepth={2}>
                <div id='titleText' className={classes.titleText}>
                <h2>Do you have account? Log in</h2>
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
                <div id='loginBtn' className={classes.loginBtn}>
                  <RaisedButton label="Login" fullWidth={true} backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.loginUser}/>
                </div>
                <div id='resetPasswordBtn' className={classes.resetPasswordBtn}>
                  <FlatButton label="Forget password?" fullWidth={true} labelStyle={{color: "#512DA8"}} onClick={this.resetPassword}/>
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
        performLoginAction: (loginRequest: LoginRequest): void => {
            actions.performLoginAction(loginRequest, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

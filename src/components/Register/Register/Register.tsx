import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper, Snackbar } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/loginActions'
import { SignupRequest } from '../../../main/loginMain'
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
}
const classes = require('./Register.css')

interface StateProps {
  signup: Boolean
}

interface DispatchProps {
  performSignupAction: (signupRequest: SignupRequest) => void
}

interface RegisterProps extends StateProps, DispatchProps{

}

interface RegisterState{
  username: String
  password: String
  confirmPassword: String
  firstName: String
  lastName: String
  email: String
}

class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      email: ''
    }
    this.usernameEntered = this.usernameEntered.bind(this)
    this.passwordEntered = this.passwordEntered.bind(this)
    this.confirmPasswordEntered = this.confirmPasswordEntered.bind(this)
    this.firstNameEntered = this.firstNameEntered.bind(this)
    this.lastNameEntered = this.lastNameEntered.bind(this)
    this.emailEntered = this.emailEntered.bind(this)
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
  confirmPasswordEntered(event) {
          if (event.target.value) {
              this.setState({ confirmPassword: event.target.value })
          }
      }
  firstNameEntered(event) {
          if (event.target.value) {
              this.setState({ firstName: event.target.value })
          }
      }
  lastNameEntered(event) {
          if (event.target.value) {
              this.setState({ lastName: event.target.value })
          }
      }
  emailEntered(event) {
          if (event.target.value) {
              this.setState({ email: event.target.value })
          }
      }
  registerUser = (event)  => {
        event.preventDefault()
        let signupRequest = {} as SignupRequest
        signupRequest.username = this.state.username
        signupRequest.password = this.state.password
        signupRequest.confirmPassword = this.state.confirmPassword
        signupRequest.firstName = this.state.firstName
        signupRequest.lastName = this.state.lastName
        signupRequest.email = this.state.email
        this.props.performSignupAction(signupRequest)
        // browserHistory.push('/')
  }
  render() {
    return (
      <div id='registerWrapper' className={classes.registerWrapper}>
          <div>
            <Header />
          </div>
          <div id='registerDiv' className={classes.registerDiv}>
            <Paper id='registerPaper' className={classes.registerPaper} zDepth={2}>
              <div id='titleText' className={classes.titleText}>
                <h2>Don't you have account? Register</h2>
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
              <div>
                <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                fullWidth={true} hintText="Confirm Password" floatingLabelText="Confirm Password" floatingLabelFixed={true} type="password" onChange={this.confirmPasswordEntered} value={this.state.confirmPassword}/>
              </div>
              <div>
                <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                fullWidth={true} hintText="First Name" floatingLabelText="First Name" floatingLabelFixed={true} type="text" onChange={this.firstNameEntered} value={this.state.firstName}/>
              </div>
              <div>
                <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                fullWidth={true} hintText="Last Name" floatingLabelText="Last Name" floatingLabelFixed={true} type="text" onChange={this.lastNameEntered} value={this.state.lastName}/>
              </div>
              <div>
                <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                fullWidth={true} hintText="Email" floatingLabelText="Email" floatingLabelFixed={true} type="text" onChange={this.emailEntered} value={this.state.email}/>
              </div>
              <div id='registerBtn' className={classes.registerBtn}>
                <RaisedButton label="Register" fullWidth={true} backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.registerUser}/>
              </div>
            </Paper>
            <Snackbar
             open={this.props.signup}
             message="Successfully created account"
             autoHideDuration={4000}
           />
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  signup: state.login.signup
})

const mapDispatchToProps = (dispatch) => {
    return {
        performSignupAction: (signupRequest: SignupRequest): void => {
            actions.performSignupAction(signupRequest, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

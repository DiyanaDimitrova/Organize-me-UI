import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as actions from '../../../actions/loginActions'
import { SignupRequest } from '../../../main/loginMain'
const classes = require('./Register.css')

interface StateProps {
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

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
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
            // this.props.setFirstInput(event.target.value)
        }
    }
  passwordEntered(event) {
          if (event.target.value) {
              this.setState({ password: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  confirmPasswordEntered(event) {
          if (event.target.value) {
              this.setState({ confirmPassword: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  firstNameEntered(event) {
          if (event.target.value) {
              this.setState({ firstName: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  lastNameEntered(event) {
          if (event.target.value) {
              this.setState({ lastName: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  emailEntered(event) {
          if (event.target.value) {
              this.setState({ email: event.target.value })
              // this.props.setFirstInput(event.target.value)
          }
      }
  registerUser = (event)  => {
        event.preventDefault()
        console.log('LOG' + JSON.stringify(this.state))
        let signupRequest = {} as SignupRequest
        signupRequest.username = this.state.username
        signupRequest.password = this.state.password
        signupRequest.confirmPassword = this.state.confirmPassword
        signupRequest.firstName = this.state.firstName
        signupRequest.lastName = this.state.lastName
        signupRequest.email = this.state.email
        this.props.performSignupAction(signupRequest)
        browserHistory.push('/')
  }
  render() {
    return (
      <div id='registerDiv' className={classes.registerDiv}>
        <Paper id='registerPaper' className={classes.registerPaper} style={classes.registerPaper} zDepth={4}>
          <div id='titleText' className={classes.titleText}>
            <h2>Don't you have account? Register</h2>
          </div>
          <div>
            <TextField hintText="Username" floatingLabelText="Username" floatingLabelFixed={true} type="text" onChange={this.usernameEntered} value={this.state.username}/>
          </div>
          <div>
            <TextField hintText="Password" floatingLabelText="Password" floatingLabelFixed={true} type="password" onChange={this.passwordEntered} value={this.state.password}/>
          </div>
          <div>
            <TextField hintText="Confirm Password" floatingLabelText="Confirm Password" floatingLabelFixed={true} type="password" onChange={this.confirmPasswordEntered} value={this.state.confirmPassword}/>
          </div>
          <div>
            <TextField hintText="First Name" floatingLabelText="First Name" floatingLabelFixed={true} type="text" onChange={this.firstNameEntered} value={this.state.firstName}/>
          </div>
          <div>
            <TextField hintText="Last Name" floatingLabelText="Last Name" floatingLabelFixed={true} type="text" onChange={this.lastNameEntered} value={this.state.lastName}/>
          </div>
          <div>
            <TextField hintText="Email" floatingLabelText="Email" floatingLabelFixed={true} type="text" onChange={this.emailEntered} value={this.state.email}/>
          </div>
          <div>
            <RaisedButton label="Register" primary={true} onClick={this.registerUser}/>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        performSignupAction: (signupRequest: SignupRequest): void => {
            actions.performSignupAction(signupRequest, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

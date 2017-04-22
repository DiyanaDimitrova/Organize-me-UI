import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as actions from '../../../actions/loginActions'
import { LoginRequest } from '../../../main/loginMain'

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
  render() {
    return (
      <div id='mainDiv' className={classes.mainDiv} >
      <Paper id='loginPaper' className={classes.loginPaper} style={classes.loginPaper} zDepth={4}>
          <div id='titleText' className={classes.titleText}>
          <h2>Do you have account? Log in</h2>
          </div>
          <div>
            <TextField hintText="Username" floatingLabelText="Username" floatingLabelFixed={true} type="text" onChange={this.usernameEntered} value={this.state.username}/>
          </div>
          <div>
            <TextField hintText="Password" floatingLabelText="Password" floatingLabelFixed={true} type="password" onChange={this.passwordEntered} value={this.state.password}/>
          </div>
          <div>
            <RaisedButton label="Login" primary={true} onClick={this.loginUser}/>
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
        performLoginAction: (loginRequest: LoginRequest): void => {
            actions.performLoginAction(loginRequest, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

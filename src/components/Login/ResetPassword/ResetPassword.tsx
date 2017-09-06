import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/loginActions'
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
}

export interface ResetPasswordProps extends StateProps, DispatchProps {

}


interface ResetPasswordState{
  password: String
  confirmPassword: String
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class ResetPassword extends React.Component<ResetPasswordProps, ResetPasswordState> {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirmPassword: ''
    }
    this.passwordEntered = this.passwordEntered.bind(this)
    this.confirmPasswordEntered = this.confirmPasswordEntered.bind(this)
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
  changePassword = (event)  => {
    event.preventDefault()
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
                  fullWidth={true} hintText="Password" floatingLabelText="Password" floatingLabelFixed={true} type="password" onChange={this.passwordEntered} value={this.state.password}/>
                </div>
                <div>
                  <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                  fullWidth={true} hintText="Confirm Password" floatingLabelText="Confirm Password" floatingLabelFixed={true} type="password" onChange={this.confirmPasswordEntered} value={this.state.confirmPassword}/>
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)

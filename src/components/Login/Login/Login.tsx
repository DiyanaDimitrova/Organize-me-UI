import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'
import LoginForm from '../LoginForm/LoginForm'
import { AppState } from '../../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as Colors from 'material-ui/styles/colors'
import LogIn from 'material-ui/svg-icons/social/person'
import Register from 'material-ui/svg-icons/social/person-add'
const classes = require('./Login.css')

interface StateProps {
}

interface DispatchProps {
}

export interface LoginProps extends StateProps, DispatchProps {

}

interface LoginState{
}
class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
       super(props)
     }
  showLoginForm = () => {
    browserHistory.push('/login')
  }
  showRegisterForm = () => {
    browserHistory.push('/register')
  }
  render() {
    return (
      <div>
        <div id='loginBtns' className={classes.loginBtns} >
            <FlatButton {...this.props} secondary={true} icon={<LogIn color={Colors.deepPurple100}/>} label="Login" onClick={this.showLoginForm}/>
            <FlatButton {...this.props} secondary={true} icon={<Register color={Colors.deepPurple100}/>} label="Register" onClick={this.showRegisterForm}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps: (state: AppState) => StateProps = (state) => ({

})

const mapDispatchToProps: (dispatch: Dispatch<any>) => DispatchProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

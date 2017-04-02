import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'
import LoginForm from '../LoginForm/LoginForm'
import { AppState } from '../../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface StateProps {
}

interface DispatchProps {
}

export interface LoginProps extends StateProps, DispatchProps {

}

interface LoginState{
  showResults: boolean
}
class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
       super(props)
       this.state = {
         showResults: false
       }
     }
  showRegisterForm = () => {
    console.log('6548')
    this.setState({ showResults: true });
  }
  render() {
    return (
      <div>
        <div>
            <FlatButton {...this.props} label="Login" onClick={this.showRegisterForm}/>
        </div>
          <div>
              { this.state.showResults ? <LoginForm /> : null }
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

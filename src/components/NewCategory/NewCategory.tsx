import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
const classes = require('./NewCategory.css')

interface StateProps {
}

interface DispatchProps {
}

interface NewCategoryProps extends StateProps, DispatchProps{

}

interface NewCategoryState{
  title: string
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NewCategory extends React.Component<NewCategoryProps, NewCategoryState> {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.titleEntered = this.titleEntered.bind(this)
  }

  titleEntered(event) {
        if (event.target.value) {
            this.setState({ title: event.target.value })
            // this.props.setFirstInput(event.target.value)
        }
    }
    saveCategory = (event)  => {
          event.preventDefault()
          // console.log('LOG' + JSON.stringify(this.state))
          // let signupRequest = {} as SignupRequest
          // signupRequest.username = this.state.username
          // signupRequest.password = this.state.password
          // signupRequest.confirmPassword = this.state.confirmPassword
          // signupRequest.firstName = this.state.firstName
          // signupRequest.lastName = this.state.lastName
          // signupRequest.email = this.state.email
          // this.props.performSignupAction(signupRequest)
          // browserHistory.push('/')
    }
    cancelCategory = (event)  => {
          event.preventDefault()
          // console.log('LOG' + JSON.stringify(this.state))
          // let signupRequest = {} as SignupRequest
          // signupRequest.username = this.state.username
          // signupRequest.password = this.state.password
          // signupRequest.confirmPassword = this.state.confirmPassword
          // signupRequest.firstName = this.state.firstName
          // signupRequest.lastName = this.state.lastName
          // signupRequest.email = this.state.email
          // this.props.performSignupAction(signupRequest)
          // browserHistory.push('/')
    }
  render() {
    return (
      <div id='registerDiv' className={classes.registerDiv}>
          <div id='titleText' className={classes.titleText}>
            <h2>Add new category</h2>
          </div>
          <div>
            <TextField hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text" onChange={this.titleEntered} value={this.state.title}/>
          </div>
          <div>
            <RaisedButton label="Cancel" secondary={true} onClick={this.cancelCategory}/>
            <RaisedButton label="Submit" primary={true} onClick={this.saveCategory}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(NewCategory)

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Paper, Divider, TextField } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/userActions'
import { UserAccountRequest } from '../../../main/userMain'
import Header from '../../../components/Header/Header'
const classes = require('./UserAccount.css')


interface StateProps {
  params: any,
  userAccount: any
}

interface DispatchProps {
  loadUserAccount: (request: UserAccountRequest) => void
}

export interface UserAccountProps extends StateProps, DispatchProps{

}

export interface UserAccountState{

}

export class UserAccount extends React.Component<UserAccountProps, UserAccountState> {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount() {
    let userAccount = {} as UserAccountRequest
    if (this.props.params.username !== undefined && this.props.params.username !== null) {
      userAccount.username = this.props.params.username
    }
    this.props.loadUserAccount(userAccount)
  }
render() {
    return (
      <div>
        <div>
            <Header />
        </div>
        <div id='userAccountDiv' className={classes.userAccountDiv}>
          <Paper id='userAccountPaper' className={classes.userAccountPaper} zDepth={2}>
            {this.props.userAccount !== null && this.props.userAccount !== undefined &&
              <div>
                <div id='titleText' className={classes.titleText}>
                  <h2>My Account</h2>
                </div>
                <div>
                  <div id='firstNameLabel' className={classes.firstNameLabel}>First Name</div>
                  <div id='firstNameValue' className={classes.firstNameValue}>{this.props.userAccount[0].firstName}</div>
                </div>
                <hr />
                <div>
                  <div id='lastNameLabel' className={classes.lastNameLabel}>Last Name</div>
                  <div id='lastNameValue' className={classes.lastNameValue}>{this.props.userAccount[0].lastName}</div>
                </div>
                <hr />
                <div>
                  <div id='emailLabel' className={classes.emailLabel}>E-mail</div>
                  <div id='emailValue' className={classes.emailValue}>{this.props.userAccount[0].email}</div>
                </div>
                <hr />
                <div>
                  <div id='usernameLabel' className={classes.usernameLabel}>Username</div>
                  <div id='usernameValue' className={classes.usernameValue}>{this.props.userAccount[0].username}</div>
                </div>
                <hr />
              </div>
            }
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  userAccount: state.user.userAccount
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadUserAccount: (request: UserAccountRequest): void => {
          actions.loadUserAccount(request, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)

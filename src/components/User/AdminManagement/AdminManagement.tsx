import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, FlatButton, Paper, Snackbar } from 'material-ui'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import * as actions from '../../../actions/userActions'
import { MakeAdminRequest } from '../../../main/userMain'
import Header from '../../../components/Header/Header'
const classes = require('./AdminManagement.css')

interface StateProps {
  userListLoading: Boolean
  success: Boolean
  userList: Array<any>
}

interface DispatchProps {
  loadUserList: () => void
  performMakeAdminAction: (makeAdminRequest: MakeAdminRequest) => void
}

export interface AdminManagementProps extends StateProps, DispatchProps {
}

export interface AdminManagementState{
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  stripedRows: Boolean,
  showRowHover: Boolean,
  selectable: Boolean,
  multiSelectable: Boolean,
  enableSelectAll: Boolean,
  deselectOnClickaway: Boolean,
  showCheckboxes: Boolean,
  height: String,
  adminList: Array<any>,
  isRoleChanged: Boolean
}

export class AdminManagement extends React.Component<AdminManagementProps, AdminManagementState> {
  constructor(props) {
    super(props)
    this.state = {
       fixedHeader: true,
       fixedFooter: true,
       stripedRows: false,
       showRowHover: true,
       selectable: true,
       multiSelectable: true,
       enableSelectAll: true,
       deselectOnClickaway: false,
       showCheckboxes: true,
       height: '300px',
       adminList: [],
       isRoleChanged: false
     }
  }

  componentWillMount() {
    this.props.loadUserList()
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props !== nextProps
  // }
  makeAdminEvent = (event)  => {
    event.preventDefault()
    let makeAdminRequest = {} as MakeAdminRequest
    makeAdminRequest.usersToMakeAdmin = this.state.adminList
    makeAdminRequest.type = 'Admin'
    this.props.performMakeAdminAction(makeAdminRequest)
    this.setState({isRoleChanged: true})
    // browserHistory.push('/')
  }
  makeNormalEvent = (event) => {
    event.preventDefault()
    let makeAdminRequest = {} as MakeAdminRequest
    makeAdminRequest.usersToMakeAdmin = this.state.adminList
    makeAdminRequest.type = 'Normal'
    this.props.performMakeAdminAction(makeAdminRequest)
    this.setState({isRoleChanged: true})
    // browserHistory.push('/')
  }
  cancelEvent = (event)  => {
    event.preventDefault()
    this.setState({adminList: null})
    browserHistory.push('/')
  }
  handleRowSelection = (selectedRows) => {
    let makeAdminList = []
    console.log('SELETED ROW' + selectedRows)
    if(selectedRows === 'all'){
      console.log(selectedRows.length)
      for (let i = 0; i < this.props.userList.length; i++) {
        makeAdminList.push(this.props.userList[i].username)
     }
   } else if (selectedRows === 'none'){
     makeAdminList = []
   } else {
      for (let i = 0; i < selectedRows.length; i++) {
        console.log('SELECTED USER' + JSON.stringify(this.props.userList[selectedRows[i]].username))
        makeAdminList.push(this.props.userList[selectedRows[i]].username)
     }
    }
    console.log('LIST' + makeAdminList)
    this.setState({adminList: makeAdminList})
  }

  render() {
    return (
      <div id='adminManagementWrapper' className={classes.adminManagementWrapper}>
        <div>
            <Header />
        </div>
        <div id='adminDiv' className={classes.adminDiv}>
          <Paper id='adminManagementPaper' className={classes.adminManagementPaper} zDepth={2}>
          <div id='titleText' className={classes.titleText}>
            <h2>All Users</h2>
          </div>
          {this.props.success === true && this.props.userListLoading === false &&
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onRowSelection={this.handleRowSelection}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="5" tooltip="Invited to the event" style={{textAlign: 'center'}}>
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="Username">Username</TableHeaderColumn>
                  <TableHeaderColumn tooltip="First Name">First Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Last Name">Last Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="E-mail">E-mail</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Roles">Roles</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
              {this.props.userList !== null && this.props.userList.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.username}</TableRowColumn>
                  <TableRowColumn>{row.firstName}</TableRowColumn>
                  <TableRowColumn>{row.lastName}</TableRowColumn>
                  <TableRowColumn>{row.email}</TableRowColumn>
                  <TableRowColumn>{row.roles}</TableRowColumn>
                </TableRow>
                ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
              </TableFooter>
            </Table>
          }
            <div>
              <RaisedButton fullWidth={true} label="Cancel" backgroundColor="#D1C4E9" labelColor="#512DA8" onClick={this.cancelEvent}/>
              <RaisedButton fullWidth={true} label="Make Normal" backgroundColor="#673AB7" labelColor="#EDE7F6" onClick={this.makeNormalEvent}/>
              <RaisedButton fullWidth={true} label="Make Admin" backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.makeAdminEvent}/>
            </div>
          </Paper>
          <Snackbar
             open={this.state.isRoleChanged}
             message="Role of the users were changed"
             autoHideDuration={4000}
           />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  userListLoading: state.user.userListLoading,
  success: state.user.success,
  userList: state.user.userList
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadUserList: (): void => {
          actions.loadUserList(dispatch)
      },
      performMakeAdminAction: (makeAdminRequest: MakeAdminRequest): void => {
          actions.performMakeAdminAction(makeAdminRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminManagement)

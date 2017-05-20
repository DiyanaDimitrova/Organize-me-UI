import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, FlatButton } from 'material-ui'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import * as actions from '../../../actions/userActions'
import {  } from '../../../main/userMain'
import Header from '../../../components/Header/Header'
const classes = require('./AdminManagement.css')

interface StateProps {
  userListLoading: Boolean,
  success: Boolean,
  userList: Array<any>
}

interface DispatchProps {
  loadUserList: () => void

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
  height: String
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
       deselectOnClickaway: true,
       showCheckboxes: true,
       height: '300px'
     }
  }

  componentWillMount() {
    this.props.loadUserList()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }
  makeAdminEvent = (event)  => {

  }
  cancelEvent = (event)  => {

  }
  handleRowSelection = (selectedRows) => {

  }

  render() {
    return (
      <div id='registerDiv' width="100%">
        <div>
            <Header />
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
                All Users
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
            <TableRow>
              <TableRowColumn>Username</TableRowColumn>
              <TableRowColumn>First Name</TableRowColumn>
              <TableRowColumn>Last Name</TableRowColumn>
              <TableRowColumn>E-mail</TableRowColumn>
              <TableRowColumn>Roles</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                Invited to the event
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      }
        <div>
          <RaisedButton label="Cancel" secondary={true} onClick={this.cancelEvent}/>
          <RaisedButton label="Make Admin" primary={true} onClick={this.makeAdminEvent}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  userListLoading: state.user.userListLoading,
  success: state.user.success,
  userList: state.user.userList,
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadUserList: (): void => {
          actions.loadUserList(dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminManagement)

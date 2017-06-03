import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, FlatButton } from 'material-ui'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import * as actions from '../../../actions/codeActions'
import { SendCodeRequest } from '../../../main/codeMain'
import Header from '../../../components/Header/Header'
const classes = require('./Code.css')

interface StateProps {
  listInvitedLoading: Boolean,
  success: Boolean,
  invitedPeopleList: Array<any>,
  params: any
}

interface DispatchProps {
  loadListInvited: (id: String) => void,
  performSendCodeAction: (sendCodeRequest: SendCodeRequest) => void
}

export interface CodeProps extends StateProps, DispatchProps{

}

export interface CodeState{
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
  mailList: Array<any>
}

export class Code extends React.Component<CodeProps, CodeState> {
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
       mailList: []
     }
  }

  public static defaultProps: StateProps = {
    listInvitedLoading: false,
    success: true,
    invitedPeopleList: null,
    params: null
  }
  componentWillMount() {
    this.props.loadListInvited(this.props.params.id)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }
  sendCodeEvent = (event)  => {
    event.preventDefault()
    let sendCodeRequest = {} as SendCodeRequest
    sendCodeRequest.usersToSendCode = this.state.mailList
    sendCodeRequest.eventId = this.props.params.id
    this.props.performSendCodeAction(sendCodeRequest)
  }
  cancelEvent = (event)  => {
    event.preventDefault()
    this.setState({mailList: []})
  }
  handleRowSelection = (selectedRows) => {
    let sendCodeList = []
    if(selectedRows === 'all'){
      for (let i = 0; i < this.props.invitedPeopleList.length; i++) {
        sendCodeList.push(this.props.invitedPeopleList[i].username)
     }
   } else if (selectedRows === 'none'){
     sendCodeList = []
   } else {
      for (let i = 0; i < selectedRows.length; i++) {
        sendCodeList.push(this.props.invitedPeopleList[selectedRows[i]].username)
     }
    }
   this.setState({mailList: sendCodeList})
  }

  render() {
    return (
      <div id='registerDiv' width="100%">
        <div>
            <Header />
          </div>
      {this.props.success === true && this.props.listInvitedLoading === false &&
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
              <TableHeaderColumn colSpan="3" tooltip="Invited to the event" style={{textAlign: 'center'}}>
                Invited to the event
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Username">Username</TableHeaderColumn>
              <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
          {this.props.invitedPeopleList !== null && this.props.invitedPeopleList.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.username}</TableRowColumn>
              <TableRowColumn>{row.type}</TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Username</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Invited to the event
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      }
        <div>
          <RaisedButton label="Cancel" secondary={true} onClick={this.cancelEvent}/>
          <RaisedButton label="Send Code" primary={true} onClick={this.sendCodeEvent}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  listInvitedLoading: state.code.listInvitedLoading,
  success: state.code.success,
  invitedPeopleList: state.code.invitedPeopleList
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadListInvited: (id: String): void => {
          actions.loadListInvited(id, dispatch)
      },
      performSendCodeAction: (sendCodeRequest: SendCodeRequest): void => {
          actions.performSendCodeAction(sendCodeRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Code)

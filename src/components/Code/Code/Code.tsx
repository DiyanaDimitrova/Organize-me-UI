import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, FlatButton } from 'material-ui'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import * as actions from '../../../actions/codeActions'
// import { } from '../../../main/codeMain'
// const classes = require('./Event.css')
const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
]
interface StateProps {
  listInvitedLoading: Boolean,
  success: Boolean,
  invitedPeopleList: Array<any>
}

interface DispatchProps {
  loadListInvited: (id: String) => void,
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
  selected: Array<any>,
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
       deselectOnClickaway: true,
       showCheckboxes: true,
       height: '300px',
       selected: [],
       mailList: []
     }
  }

  public static defaultProps: StateProps = {
    listInvitedLoading: false,
    success: true,
    invitedPeopleList: null
  }
  componentWillMount() {
    this.props.loadListInvited(this.props.params.id)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }
  sendCodeEvent = (event)  => {
    event.preventDefault()
  }
  cancelEvent = (event)  => {
    event.preventDefault()
  }
  // isSelected = (index, name) => {
  //   return this.state.selected.indexOf(index) !== -1
  // }
  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    })
    console.log('SELECTED' + selectedRows)
  }
  // handleSelect = (row) => {
  //   console.log('ROW' + row)
  // }

  render() {
    console.log(JSON.stringify(this.props))
    return (
      <div id='registerDiv' width="100%">
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
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Code)

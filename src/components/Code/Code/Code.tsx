import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, FlatButton } from 'material-ui'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
// import * as actions from '../../../actions/codeActions'
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
}

interface DispatchProps {
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
  height: String
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
       height: '300px'
     }
  }


  handleChange = (event) => {
     this.setState({height: event.target.value});
  }
  render() {
    console.log(JSON.stringify(this.props))
    return (
      <div id='registerDiv' width="100%">
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  displayedItem: state.event.displayedItem
})

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Code)

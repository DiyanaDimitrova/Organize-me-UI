import * as React from 'react'
import { connect } from 'react-redux'
import * as QrReader from 'react-qr-reader'
import { Paper, Snackbar } from 'material-ui'
import * as actions from '../../../actions/codeActions'
import { ScanCodeRequest } from '../../../main/codeMain'
import Header from '../../../components/Header/Header'
const classes = require('./ScanCode.css')

interface StateProps {
  scanCodeMessage: String
}

interface DispatchProps {
  performScanCodeAction: (scanCodeRequest: ScanCodeRequest) => void
}

export interface ScanCodeProps extends StateProps, DispatchProps{
}

export interface ScanCodeState{
  delay: Number,
  result: Boolean,
}

export class ScanCode extends React.Component<ScanCodeProps, ScanCodeState> {
  constructor(props){
    super(props)
    this.state = {
      delay: 1000,
      result: false,
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data !== null){
      this.setState({result: true})
      let scanCodeRequest = {} as ScanCodeRequest
      scanCodeRequest.scanedCode = data
      this.props.performScanCodeAction(scanCodeRequest)
    }
  }
  handleError(err){
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 300,
      width: 720
    }
    return (
      <div id='scanCodeWrapper' className={classes.scanCodeWrapper}>
          <div>
            <Header />
          </div>
          <div id='scanCodeDiv' className={classes.scanCodeDiv}>
            <Paper id='scanCodePaper' className={classes.scanCodePaper} zDepth={2}>
              <div id='titleText' className={classes.titleText}>
                <h2>Scan Tickets</h2>
              </div>
              <QrReader
                id='scanCodeReader'
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                ></QrReader>
              <Snackbar
                 open={this.state.result}
                 message={this.props.scanCodeMessage}
                 autoHideDuration={7000}
               />
            </Paper>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  scanCodeMessage: state.code.scanCodeMessage
})

const mapDispatchToProps = (dispatch) => {
    return {
      performScanCodeAction: (scanCodeRequest: ScanCodeRequest): void => {
          actions.performScanCodeAction(scanCodeRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScanCode)

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper, DatePicker, TimePicker, FlatButton } from 'material-ui'
import * as actions from '../../../actions/eventActions'
import { CreateEventRequest } from '../../../main/eventMain'
const classes = require('./Event.css')

interface StateProps {
}

interface DispatchProps {
  performCreateEventAction: (createEventRequest: CreateEventRequest) => void

}

export interface EventProps extends StateProps, DispatchProps{

}

export interface EventState{
  title: String,
  place: String,
  hourValue: String,
  dateValue: Date,
  file: any,
  imagePreviewUrl: any,
  type: any,
  capacity: Number,
  details: String
}

export class Event extends React.Component<EventProps, EventState> {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      place: '',
      hourValue: null,
      dateValue: null,
      file: '',
      imagePreviewUrl: '',
      type: '',
      capacity: 0,
      details: ''
    }
    this.titleEntered = this.titleEntered.bind(this)
    this.saveEvent = this.saveEvent.bind(this)
    this.cancelEvent = this.cancelEvent.bind(this)
    this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this)
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.placeEntered = this.placeEntered.bind(this)
    this.detailsEntered = this.detailsEntered.bind(this)
    this.capacityEntered = this.capacityEntered.bind(this)

  }
  titleEntered = (event) => {
    if (event.target.value) {
      this.setState({ title: event.target.value })
    }
  }
  placeEntered = (event) => {
    if (event.target.value) {
      this.setState({ place: event.target.value })
    }
  }
  detailsEntered = (event) => {
    if (event.target.value) {
      this.setState({ details: event.target.value })
    }
  }
  capacityEntered = (event) => {
    if (event.target.value) {
      this.setState({ capacity: event.target.value })
    }
  }
  saveEvent = (event)  => {
      let createEvent = {} as CreateEventRequest
      createEvent.title = this.state.title
      createEvent.hourValue = this.state.hourValue
      createEvent.dateValue = this.state.dateValue
      createEvent.place = this.state.place
      createEvent.file = this.state.file
      createEvent.imagePreviewUrl = this.state.imagePreviewUrl
      createEvent.type = this.state.type
      createEvent.capacity = this.state.capacity
      createEvent.details = this.state.details
      this.props.performCreateEventAction(createEvent)
  }
  cancelEvent = (event)  => {

  }
  handleChangeTimePicker = (event, date) => {
    this.setState({hourValue: date})
  }
  handleChangeDatePicker = (event, date) => {
    this.setState({dateValue: date})
  }
  handleFile = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    console.log( 'File' + JSON.stringify(event.target.files[0].path) )
    let file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result,
        type: file.type
      })
    }

    reader.readAsDataURL(file)
    // console.log('FILE' + JSON.stringify(event.target.files[0]))
    // let reader = new FileReader()

  }
  render() {
    console.log('STATE' + JSON.stringify(this.state.type))

    let imagePreviewUrl = this.state.imagePreviewUrl
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    }
    return (
      <div id='registerDiv' className={classes.registerDiv}>
          <div id='titleText' className={classes.titleText}>
            <h2>New Event</h2>
          </div>
          <form encType='multipart/form-data'>
              <div>
                <TextField hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text" onChange={this.titleEntered} value={this.state.title}/>
              </div>
              <div>
                  <DatePicker hintText="Pick Date" floatingLabelText="Pick Date" value={this.state.dateValue}onChange={this.handleChangeDatePicker}/>
              </div>
              <div>
                  <TimePicker format="24hr" hintText="Pick Time" floatingLabelText="Pick Time" value={this.state.hourValue} onChange={this.handleChangeTimePicker}/>
              </div>
              <div>
                <TextField hintText="Place" floatingLabelText="Place" floatingLabelFixed={true} type="text" onChange={this.placeEntered} value={this.state.place}/>
              </div>
              <div>
                <TextField hintText="Capacity" floatingLabelText="Capacity" floatingLabelFixed={true} type="number" onChange={this.capacityEntered} value={this.state.capacity}/>
              </div>
              <div>
                <TextField hintText="Details" floatingLabelText="Details" floatingLabelFixed={true} type="text" onChange={this.detailsEntered} value={this.state.details}/>
              </div>
              <div>
                  <RaisedButton containerElement="label" label="Choose an Image" labelPosition="before" secondary={true}>
                      <input type="file" style={{ display: 'none' }} onChange={this.handleFile} />
                  </RaisedButton>
              </div>
              <div>
                <RaisedButton label="Cancel" secondary={true} onClick={this.cancelEvent}/>
                <RaisedButton label="Submit" primary={true} onClick={this.saveEvent}/>
              </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch) => {
    return {
      performCreateEventAction: (createEventRequest: CreateEventRequest): void => {
          actions.performCreateEventAction(createEventRequest, dispatch)
      },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Event)

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper, DatePicker, TimePicker, FlatButton, DropDownMenu, MenuItem } from 'material-ui'
import * as actions from '../../../actions/eventActions'
import * as categoryActions from '../../../actions/categoryActions'
import { CreateEventRequest, UpdateEventRequest } from '../../../main/eventMain'
import * as dateFormat from 'dateformat'
const classes = require('./Event.css')

interface StateProps {
  categoriesListLoading: Boolean,
  success: Boolean,
  categoriesList: Array<any>,
  currentItem: UpdateEventRequest,
  itemToBeEdited: Boolean
}

interface DispatchProps {
  performCreateEventAction: (createEventRequest: CreateEventRequest) => void,
  performUpdateEventAction: (updateEventRequest: UpdateEventRequest) => void,
  loadCategoriesList: () => void,
  setCurrentItem: (currentItem: String) => void

}

export interface EventProps extends StateProps, DispatchProps{

}

export interface EventState{
  title: String,
  place: String,
  hourValue: Object,
  dateValue: Object,
  file: any,
  imagePreviewUrl: any,
  type: any,
  capacity: Number,
  details: String,
  categoryValue: String
}

export class Event extends React.Component<EventProps, EventState> {
  constructor(props) {
    super(props)
    console.log('CURRENT' + JSON.stringify(props.currentItem))
    this.state = {
      title: props.itemToBeEdited === true ? props.currentItem.title : '',
      place: props.itemToBeEdited === true ? props.currentItem.place : '',
      hourValue: props.itemToBeEdited === true ? dateFormat(props.currentItem.hourValue) : null,
      dateValue: props.itemToBeEdited === true ? dateFormat(props.currentItem.dateValue) : null,
      file: props.itemToBeEdited === true ? props.currentItem.file : '',
      imagePreviewUrl: props.itemToBeEdited === true ? props.currentItem.imagePreviewUrl : '',
      type: props.itemToBeEdited === true ? props.currentItem.type : '',
      capacity: props.itemToBeEdited === true ? props.currentItem.capacity : 0,
      details: props.itemToBeEdited === true ? props.currentItem.details : '',
      categoryValue: props.itemToBeEdited === true ? props.currentItem.categoryId : '',
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
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }
  componentWillMount(){
    this.props.loadCategoriesList()
    if(this.props.params.id !== undefined && this.props.params.id !== null){
      console.log('CURRENT' + this.props.params.id)
      this.props.setCurrentItem(this.props.params.id)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps && nextProps.itemToBeEdited === true){
        this.setState({ title: nextProps.currentItem.title })
    }
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
    event.preventDefault()
    if(this.props.itemToBeEdited === true){
        let updateEvent = {} as UpdateEventRequest
        updateEvent.id = this.props.currentItem._id
        updateEvent.title = this.state.title
        updateEvent.hourValue = this.state.hourValue
        updateEvent.dateValue = this.state.dateValue
        updateEvent.place = this.state.place
        updateEvent.file = this.state.file
        updateEvent.imagePreviewUrl = this.state.imagePreviewUrl
        updateEvent.type = this.state.type
        updateEvent.capacity = this.state.capacity
        updateEvent.details = this.state.details
        updateEvent.categoryId = this.state.categoryValue
        this.props.performUpdateEventAction(updateEvent)
        this.setState({title : ''})
        this.setState({hourValue : ''})
        this.setState({dateValue : null})
        this.setState({place : ''})
        this.setState({file : ''})
        this.setState({imagePreviewUrl : ''})
        this.setState({type : ''})
        this.setState({details : ''})
        this.setState({capacity : 0})
        this.setState({categoryValue : ''})
    } else {
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
      createEvent.categoryId = this.state.categoryValue
      this.props.performCreateEventAction(createEvent)
    }
  }
  cancelEvent = (event)  => {
    event.preventDefault()
    this.setState({title : ''})
    this.setState({hourValue : ''})
    this.setState({dateValue : null})
    this.setState({place : ''})
    this.setState({file : ''})
    this.setState({imagePreviewUrl : ''})
    this.setState({type : ''})
    this.setState({details : ''})
    this.setState({capacity : 0})
    this.setState({categoryValue : ''})
  }
  handleChangeTimePicker = (event, date) => {
    console.log('HOUR' + date)
    this.setState({hourValue: date})
  }
  handleChangeDatePicker = (event, date) => {
    console.log('DATE' + date)
    this.setState({dateValue: date})
  }
  handleCategoryChange = (event, index, value) => {
    console.log('index' + index + ' ' + value)
    this.setState({categoryValue : value})
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
  }
  render() {
    let imagePreviewUrl = this.state.imagePreviewUrl
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    }
    let categoryArray
    if(this.props.categoriesList !== undefined && this.props.categoriesList !== null){
      categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
    }
    let name
    if(this.props.itemToBeEdited === true){
      name = 'Edit event'
    } else {
      name = 'Add new event'
    }
    console.log('STATE' + this.state.categoryValue)
    return (
      <div id='registerDiv' className={classes.registerDiv} width="100%">
          <div id='titleText' className={classes.titleText}>
            <h2>{name}</h2>
          </div>
          <form encType='multipart/form-data'>
              <div>
                <TextField hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text" value={this.state.title} onChange={this.titleEntered}/>
              </div>
              <div>
                  <DatePicker hintText="Pick Date" floatingLabelText="Pick Date" value={new Date(this.state.dateValue)} onChange={this.handleChangeDatePicker}/>
              </div>
              <div>
                  <TimePicker format="24hr" hintText="Pick Time" floatingLabelText="Pick Time" value={new Date(this.state.hourValue)} onChange={this.handleChangeTimePicker}/>
              </div>
              <div>
                <TextField hintText="Place" floatingLabelText="Place" floatingLabelFixed={true} type="text" value={this.state.place} onChange={this.placeEntered}/>
              </div>
              <div>
                <TextField hintText="Capacity" floatingLabelText="Capacity" floatingLabelFixed={true} type="number"  value={this.state.capacity} onChange={this.capacityEntered}/>
              </div>
              <div>
                <TextField hintText="Details" floatingLabelText="Details" floatingLabelFixed={true} type="text"  value={this.state.details} onChange={this.detailsEntered}/>
              </div>
              <div>
                <DropDownMenu value={this.state.categoryValue} onChange={this.handleCategoryChange} autoWidth={true}>
                  {categoryArray.map((item, index) => {
                    return (
                        <MenuItem value={item._id} key={index} primaryText={item.title}/>
                    )
                  })}
                 </DropDownMenu>
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
  categoriesListLoading: state.category.categoriesListLoading,
  success: state.category.success,
  categoriesList: state.category.categoriesList,
  currentItem: state.event.currentItem,
  itemToBeEdited: state.event.itemToBeEdited
})

const mapDispatchToProps = (dispatch) => {
    return {
      performCreateEventAction: (createEventRequest: CreateEventRequest): void => {
          actions.performCreateEventAction(createEventRequest, dispatch)
      },
      performUpdateEventAction: (updateEventRequest: UpdateEventRequest): void => {
          actions.performUpdateEventAction(updateEventRequest, dispatch)
      },
      loadCategoriesList: (): void => {
          categoryActions.loadCategoriesList(dispatch)
      },
      setCurrentItem: (currentItem: String): void => {
          actions.setCurrentItem(currentItem, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Event)

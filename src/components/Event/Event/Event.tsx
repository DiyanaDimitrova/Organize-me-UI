import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper, DatePicker, TimePicker, FlatButton, DropDownMenu, MenuItem } from 'material-ui'
import * as actions from '../../../actions/eventActions'
import * as categoryActions from '../../../actions/categoryActions'
import { CreateEventRequest, UpdateEventRequest } from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
import * as dateFormat from 'dateformat'
import * as Moment from 'moment'
const classes = require('./Event.css')

interface StateProps {
  categoriesListLoading: Boolean,
  success: Boolean,
  categoriesList: Array<any>,
  currentItem: UpdateEventRequest,
  itemToBeEdited: Boolean,
  // user: String,
  params: any
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
  hourValue: Date,
  dateValue: Date,
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
    console.log('PROPS ' + JSON.stringify(props))
    this.state = {
      title: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.title : '',
      place: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.place : '',
      hourValue: this.props.params.id !== undefined && props.currentItem !== null ? Moment(props.currentItem.hourValue).toDate() : Moment().toDate(),
      dateValue: this.props.params.id !== undefined && props.currentItem !== null ? Moment(props.currentItem.dateValue).toDate() : Moment().toDate(),
      file: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.file : '',
      imagePreviewUrl: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.imagePreviewUrl : '',
      type: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.type : '',
      capacity: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.capacity : 0,
      details: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.details : '',
      categoryValue: this.props.params.id !== undefined && props.currentItem !== null ? props.currentItem.categoryId : '',
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
    console.log('PARAMS222222' + this.props.params.id)
    this.props.loadCategoriesList()
    console.log('PARAMS000' + this.props.params.id)
    if(this.props.params.id !== undefined && this.props.params.id !== null){
      console.log('PARAMS' + this.props.params.id)
      this.props.setCurrentItem(this.props.params.id)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      this.setState({title : nextProps.currentItem.title, hourValue : nextProps.currentItem.hourValue,
        dateValue : nextProps.currentItem.dateValue, place : nextProps.currentItem.place, file : nextProps.currentItem.file,
        imagePreviewUrl : nextProps.currentItem.imagePreviewUrl, type : nextProps.currentItem.type,
        details : nextProps.currentItem.details, capacity : nextProps.currentItem.capacity, categoryValue : nextProps.currentItem.categoryValue
      })
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
    if(this.props.itemToBeEdited === true && this.props.params.id !== undefined){
        let updateEvent = {} as UpdateEventRequest
        updateEvent._id = this.props.currentItem._id
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
        // updateEvent.user = this.props.user
        this.props.performUpdateEventAction(updateEvent)
        this.setState({title : ''})
        this.setState({hourValue : Moment().toDate()})
        this.setState({dateValue : Moment().toDate()})
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
      // createEvent.user = this.props.user
      this.props.performCreateEventAction(createEvent)
    }
    browserHistory.push('/')
  }
  cancelEvent = (event)  => {
    event.preventDefault()
    this.setState({title : ''})
    this.setState({hourValue : Moment().toDate()})
    this.setState({dateValue : Moment().toDate()})
    this.setState({place : ''})
    this.setState({file : ''})
    this.setState({imagePreviewUrl : ''})
    this.setState({type : ''})
    this.setState({details : ''})
    this.setState({capacity : 0})
    this.setState({categoryValue : ''})
    browserHistory.push('/')
  }
  handleChangeTimePicker = (event, date) => {
    this.setState({hourValue: date})
  }
  handleChangeDatePicker = (event, date) => {
    this.setState({dateValue: date})
  }
  handleCategoryChange = (event, index, value) => {
    this.setState({categoryValue : value})
  }

  handleFile = (event) => {
    event.preventDefault();
    let reader = new FileReader();
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
    if(this.props.itemToBeEdited === true && this.props.params.id !== undefined){
      name = 'Edit event'
    } else {
      name = 'Add new event'
    }
    console.log('STATE' + this.state.dateValue)
    return (
      <div id='registerDiv' className={classes.registerDiv} width="100%">
          <div>
            <Header />
          </div>
          <div id='titleText' className={classes.titleText}>
            <h2>{name}</h2>
          </div>
          <form encType='multipart/form-data'>
              <div>
                <TextField hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text" value={this.state.title} onChange={this.titleEntered}/>
              </div>
              <div>
                  <DatePicker hintText="Pick Date" floatingLabelText="Pick Date" value={Moment(this.state.dateValue).toDate()} onChange={this.handleChangeDatePicker}/>
              </div>
              <div>
                  <TimePicker format="24hr" hintText="Pick Time" floatingLabelText="Pick Time" value={Moment(this.state.hourValue).toDate()} onChange={this.handleChangeTimePicker}/>
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
  itemToBeEdited: state.event.itemToBeEdited,
  // user: state.login.user.username
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

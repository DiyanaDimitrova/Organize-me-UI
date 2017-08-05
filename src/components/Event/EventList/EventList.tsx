import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/eventActions'
import { List, ListItem, IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { UpdateEventRequest, DeleteEventRequest } from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
import Send from 'material-ui/svg-icons/communication/contact-mail'
import View from 'material-ui/svg-icons/social/pages'
import * as Colors from 'material-ui/styles/colors'
import * as dateFormat from 'dateformat'

const classes = require('./EventList.css')

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>,
  user: String
}

interface DispatchProps {
  loadEventList: () => void,
  performDeleteEventAction: (deleteEventRequest: DeleteEventRequest) => void,
  setDisplayedItem: (displayedItem: String) => void
}

interface EventListProps extends StateProps, DispatchProps {

}

interface EventListState{
}

class EventList extends React.Component<EventListProps, EventListState> {
  constructor(props) {
    super(props)

  }

  public static defaultProps: StateProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    user: ''
  }
  componentWillMount() {
    this.props.loadEventList()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }
  deleteItem = (e, itemId) => {
    e.preventDefault()
    let deleteEvent = {} as DeleteEventRequest
    deleteEvent.id = itemId
    deleteEvent.user = this.props.user
    this.props.performDeleteEventAction(deleteEvent)
    browserHistory.push('/')
  }
  updateItem = (e, item) => {
    e.preventDefault()
    // let updateEvent = {} as UpdateEventRequest
    // updateEvent.id = item._id
    // updateEvent.title = item.title
    // updateEvent.place = item.place
    // updateEvent.hourValue = dateFormat(item.time)
    // updateEvent.dateValue = dateFormat(item.date)
    // updateEvent.capacity = item.capacity
    // updateEvent.details = item.details
    // updateEvent.categoryId = item.categoryId
    // this.props.setCurrentItem(updateEvent)
    browserHistory.push('/editEvent/' + item._id)
  }
  viewItem = (e, itemId) => {
    this.props.setDisplayedItem(itemId)
    browserHistory.push('/eventDetails/' + itemId)
  }
  sendCodeItem = (e, item) => {
    browserHistory.push('/newCode/' + item._id)
  }
  iconButtonElement = () => {
    return (
      <IconButton touch={true} tooltip="actions" tooltipPosition="bottom-left" >
        <MoreVertIcon />
      </IconButton>
    )
  }
  rightIconMenu = (item) => {
    return (
      <IconMenu iconButtonElement={this.iconButtonElement()} menuStyle={{backgroundColor: Colors.deepPurple50}}>
        <MenuItem onTouchTap={(event) => {
          this.updateItem(event, item)
        }} leftIcon={<Edit />}>Edit</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.deleteItem(event, item._id)
        }} leftIcon={<Delete />}>Delete</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.viewItem(event, item._id)
        }} leftIcon={<View />}>View</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.sendCodeItem(event, item)
        }} leftIcon={<Send />}>Send Code</MenuItem>
      </IconMenu>
    )
  }
  render() {
    let eventArray
    if(this.props.eventList !== undefined && this.props.eventList !== null){
      eventArray = Object.keys(this.props.eventList).map(key => this.props.eventList[key])
    }
    return (
      <div id='eventDiv' className={classes.eventDiv}>
         <div>
            <Header />
          </div>
        <div id='eventListDiv' className={classes.eventListDiv}>
         <List>
           {eventArray.map((item, index) => {
             return (
               <div key={index} >
                 <ListItem hoverColor="#D1C4E9"
                   rightIconButton={this.rightIconMenu(item)}
                   primaryText={item.title}
                 />
               </div>
             )
           })}
          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList,
    user: state.login.user ? state.login.user.username: ''
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventList: (): void => {
          actions.loadEventList(dispatch)
      },
      performDeleteEventAction: (deleteEventRequest: DeleteEventRequest): void => {
          actions.performDeleteEventAction(deleteEventRequest, dispatch)
      },
      setDisplayedItem: (displayedItem: String): void => {
          actions.setDisplayedItem(displayedItem, dispatch)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)

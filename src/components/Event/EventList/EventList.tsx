import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/eventActions'
import { List, ListItem, IconMenu, MenuItem, IconButton, Paper, Dialog, FlatButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
import Send from 'material-ui/svg-icons/communication/contact-mail'
import View from 'material-ui/svg-icons/social/pages'
import * as Colors from 'material-ui/styles/colors'
import * as dateFormat from 'dateformat'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { UpdateEventRequest, DeleteEventRequest, FilterEventListRequest} from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
const classes = require('./EventList.css')

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>,
  user: String
}

interface DispatchProps {
  loadEventList: (request: FilterEventListRequest) => void,
  performDeleteEventAction: (deleteEventRequest: DeleteEventRequest) => void,
  setDisplayedItem: (displayedItem: String) => void
}

interface EventListProps extends StateProps, DispatchProps {

}

interface EventListState{
  openDialog: Boolean
  id: String
}

class EventList extends React.Component<EventListProps, EventListState> {
  constructor(props) {
    super(props)
    this.state = {
      openDialog: false,
      id: null
    }
  }

  public static defaultProps: StateProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    user: ''
  }
  componentWillMount() {
    this.props.loadEventList(null)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState
  }
  deleteItem = (itemId) => {
    let deleteEvent = {} as DeleteEventRequest
    deleteEvent.id = itemId
    deleteEvent.user = this.props.user
    this.props.performDeleteEventAction(deleteEvent)
    browserHistory.push('/')
  }
  updateItem = (item) => {
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
  viewItem = (itemId) => {
    this.props.setDisplayedItem(itemId)
    browserHistory.push('/eventDetails/' + itemId)
  }
  sendCodeItem = (item) => {
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
        <MenuItem onTouchTap={() => {
          this.updateItem(item)
        }} leftIcon={<Edit color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Edit</MenuItem>
        <MenuItem onTouchTap={() => {
          this.handleOpen(item._id)
        }} leftIcon={<Delete color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Delete</MenuItem>
        <MenuItem onTouchTap={() => {
          this.viewItem(item._id)
        }} leftIcon={<View color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>View</MenuItem>
        <MenuItem onTouchTap={() => {
          this.sendCodeItem(item)
        }} leftIcon={<Send color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Send Code</MenuItem>
      </IconMenu>
    )
  }
  handleClose = () => {
    this.setState({ openDialog: false, id: null })
  }
  handleOpen = (itemId) => {
    this.setState({ openDialog: true, id: itemId })
  }
  handleDelete = () => {
    this.setState({ openDialog: false })
    this.deleteItem(this.state.id)
  }
  render() {
    let eventArray
    if(this.props.eventList !== undefined && this.props.eventList !== null){
      eventArray = Object.keys(this.props.eventList).map(key => this.props.eventList[key])
    }
    const actions = [
         <FlatButton
           label="Cancel"
           onClick={this.handleClose}
         />,
         <FlatButton
           label="Submit"
           keyboardFocused={true}
           onClick={this.handleDelete}
         />
       ]
    return (
      <div id='eventListWrapper' className={classes.eventListWrapper}>
         <div>
            <Header />
          </div>
        <div id='eventListDiv' className={classes.eventListDiv}>
          <Paper id='eventListPaper' className={classes.eventListPaper} zDepth={2}>
             <div id='titleText' className={classes.titleText}>
               <h2>All Events</h2>
             </div>
             <List>
               {eventArray.map((item, index) => {
                 if(item.user === this.props.user){
                   return (
                     <div key={index} >
                       <ListItem hoverColor="#D1C4E9"
                         rightIconButton={this.rightIconMenu(item)}
                         primaryText={item.title} style={{color: Colors.deepPurple700}}
                       />
                     </div>
                   )
                 }
               })}
              </List>
              <Dialog
                title="Do you want to delete the event?"
                actions={actions}
                modal={false}
                open={this.state.openDialog}
                onRequestClose={this.handleClose}
              >
              </Dialog>
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList,
    user: state.login.user ? state.login.user.username: null
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventList: (request: FilterEventListRequest): void => {
          actions.loadEventList(request, dispatch)
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

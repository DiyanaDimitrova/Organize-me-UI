import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/eventActions'
import { List, ListItem, IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { UpdateEventRequest, DeleteEventRequest } from '../../../main/eventMain'
import * as dateFormat from 'dateformat'

const classes = require('./EventList.css')

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>
}

interface DispatchProps {
  loadEventList: () => void,
  performDeleteEventAction: (deleteEventRequest: DeleteEventRequest) => void,
  setCurrentItem: (currentItem: UpdateEventRequest) => void
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
    eventList: []
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
    this.props.performDeleteEventAction(deleteEvent)
  }
  updateItem = (e, item) => {
    e.preventDefault()
    console.log('ITEM' + JSON.stringify(item))
    let updateEvent = {} as UpdateEventRequest
    updateEvent.id = item._id
    updateEvent.title = item.title
    updateEvent.place = item.place
    updateEvent.hourValue = dateFormat(item.time)
    updateEvent.dateValue = dateFormat(item.date)
    updateEvent.capacity = item.capacity
    updateEvent.details = item.details
    updateEvent.categoryId = item.categoryId
    console.log('UPDATE' + JSON.stringify(updateEvent))
    this.props.setCurrentItem(updateEvent)
    browserHistory.push('/newEvent')
  }
  viewItem = (e, itemId) => {
    browserHistory.push('/eventDetails')
    console.log('VIEWWWWW')
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
      <IconMenu iconButtonElement={this.iconButtonElement()}>
        <MenuItem onTouchTap={(event) => {
          this.updateItem(event, item)
        }}>Edit</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.deleteItem(event, item._id)
        }}>Delete</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.viewItem(event, item._id)
        }}>View</MenuItem>
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
         <List>
           {eventArray.map((item, index) => {
             console.log('ITEMMMMMM' + JSON.stringify(item))
             return (
               <div key={index} >
                 <ListItem
                   rightIconButton={this.rightIconMenu(item)}
                   primaryText={item.title}
                 />
               </div>
             )
           })}
          </List>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventList: (): void => {
          actions.loadEventList(dispatch)
      },
      performDeleteEventAction: (deleteEventRequest: DeleteEventRequest): void => {
          actions.performDeleteEventAction(deleteEventRequest, dispatch)
      },
      setCurrentItem: (currentItem: UpdateEventRequest): void => {
          actions.setCurrentItem(currentItem, dispatch)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, Paper, RaisedButton, Chip, Avatar, Divider} from 'material-ui'
import MapsPlace from 'material-ui/svg-icons/maps/place'
import * as Colors from 'material-ui/styles/colors'
import * as dateFormat from 'dateformat'
import * as actions from '../../../actions/eventActions'
import { EventDetailsRequest, AttendEventRequest } from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
const classes = require('./EventDetails.css')


interface StateProps {
  eventImageLoading: Boolean,
  eventDetailsLoading: Boolean,
  displayedItem: String,
  // itemToView: any,
  image: any,
  details: any,
  username: String,
  params: any
}

interface DispatchProps {
  loadEventImageAction: (request: EventDetailsRequest) => void,
  loadEventDetailsAction: (request: EventDetailsRequest) => void,
  performAttendEventAction: (request: AttendEventRequest) => void
}

export interface EventDetailsProps extends StateProps, DispatchProps{

}

export interface EventDetailsState{
  eventImageLoading: Boolean,
  eventDetailsLoading: Boolean,
  displayedItem: String,
  // itemToView: any,
  image: any,
  details: any,
  goingUsers: any,
  interestedUsers: any,
  notGoingUsers: any,
  isClickedButton: Boolean
}

export class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
  constructor(props) {
    super(props)
    this.state = {
      eventImageLoading: props.eventImageLoading,
      eventDetailsLoading: props.eventDetailsLoading,
      displayedItem: props.displayedItem,
      // itemToView: props.itemToView,
      image: props.image,
      details: props.details,
      goingUsers: null,
      interestedUsers: null,
      notGoingUsers: null,
      isClickedButton: false
    }
  }

  // public static defaultProps: StateProps = {
  //   eventImageLoading: false,
  //   eventDetailsLoading: false,
  //   displayedItem: null,
  //   itemToView: null
  // }

  // getInitialData() {
  //   let eventDetails = {} as EventDetailsRequest
  //   eventDetails.id = this.props.displayedItem
  //   // eventDetails.id = '5909807905bb9c21b40c9cdd'
  //   this.props.loadEventImageAction(eventDetails)
  //   this.props.loadEventDetailsAction(eventDetails)
  // }

  componentWillMount() {
    let eventDetails = {} as EventDetailsRequest
    if (this.props.params.id !== undefined && this.props.params.id !== null) {
      eventDetails.id = this.props.params.id
    }
    this.props.loadEventImageAction(eventDetails)
    this.props.loadEventDetailsAction(eventDetails)
  }
  goingToEvent = () => {
    let attendEvent = {} as AttendEventRequest
    attendEvent.id = this.props.displayedItem
    attendEvent.username = this.props.username
    attendEvent.type = 'going'
    this.props.performAttendEventAction(attendEvent)
  }

  interestedInEvent = () => {
    let attendEvent = {} as AttendEventRequest
    attendEvent.id = this.props.displayedItem
    attendEvent.username = this.props.username
    attendEvent.type = 'interested'
    this.props.performAttendEventAction(attendEvent)
  }
  notInterestedInEvent = () => {
    let attendEvent = {} as AttendEventRequest
    attendEvent.id = this.props.displayedItem
    attendEvent.username = this.props.username
    attendEvent.type = 'notGoing'
    this.props.performAttendEventAction(attendEvent)
  }

  // handleInvitedPeople = (actionType: String) => {
  //   let group = this.props.itemToView.details.invitedPeople.filter(item => {
  //     if(item.type === actionType){
  //       return item
  //     }
  //   })
  //   if(actionType === 'going'){
  //     this.setState({goingUsers: group})
  //   } else if(actionType === 'interested') {
  //     this.setState({interestedUsers: group})
  //   } else if(actionType === 'notGoing'){
  //     this.setState({notGoingUsers: group})
  //   }
  // }

render() {
    let imagePreviewUrl = this.props.image
    let $imagePreview = null
    if (imagePreviewUrl) {
        $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
    }
    // let disableButtons = this.props.details !== undefined ? this.props.details.invitedPeople.some((element, index, array) => {
    //     console.log('ELEMENT' + element.username)
    //     console.log('PROPS' + this.props.username)
    //     return element.username === this.props.username
    //   }) : false
    // console.log('Disabled' + disableButtons)
    return (
      <div id='eventDetailsWrapper' className={classes.eventDetailsWrapper}>
        <div>
            <Header />
        </div>
        <div id='eventDetailsDiv' className={classes.eventDetailsDiv}>
          <Paper id='eventDetailsPaper' className={classes.eventDetailsPaper} zDepth={2}>
            {this.props.details !== undefined && this.props.details !== null ? <Card>
                <CardHeader titleColor="#512DA8" subtitleColor="#D1C4E9"
                  title={this.props.details.title}
                  subtitle={dateFormat(this.props.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.details.time, 'dS mmmm, yyyy')}
                />
                <CardMedia
                  overlay={<CardTitle titleColor="#512DA8" subtitleColor="#D1C4E9" title={this.props.details.title} subtitle={dateFormat(this.props.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.details.time, 'dS mmmm, yyyy')} />}
                >
                  <div><img src={imagePreviewUrl} height="50%" width="100%"/></div>
                </CardMedia>
                <CardTitle titleColor="#512DA8" subtitleColor="#D1C4E9" title={this.props.details.title} subtitle={dateFormat(this.props.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.details.time, 'dS mmmm, yyyy')} />
                <CardText>
                  <div><MapsPlace />{this.props.details.place} </div>
                  <Divider/>
                  <div>{this.props.details.details}</div>
                  <Divider/>
                  <div id='wrapper' className={classes.wrapper}>Going: {this.props.details.invitedPeople.map((item, index) => {
                    if(item.type === 'going'){
                      return <Chip id='chip' className={classes.chip} key={index}>
                      <Avatar size={32} color={Colors.deepPurple50} backgroundColor={Colors.deepPurple700}>{item.username.charAt(0)}</Avatar>
                        {item.username}
                      </Chip>
                    }
                  })}</div>
                  <div id='wrapper' className={classes.wrapper}>Interested: {this.props.details.invitedPeople.map((item, index) => {
                    if(item.type === 'interested'){
                      return <Chip id='chip' className={classes.chip} key={index}>
                      <Avatar size={32} color={Colors.deepPurple50} backgroundColor={Colors.deepPurple500}>{item.username.charAt(0)}</Avatar>
                        {item.username}
                      </Chip>
                    }
                  })}</div>
                  <div id='wrapper' className={classes.wrapper}>Not interested: {this.props.details.invitedPeople.map((item, index) => {
                    if(item.type === 'notGoing'){
                      return <Chip id='chip' className={classes.chip} key={index}>
                      <Avatar size={32} color={Colors.deepPurple700} backgroundColor={Colors.deepPurple100}>{item.username.charAt(0)}</Avatar>
                        {item.username}
                      </Chip>
                    }
                  })}</div>
                </CardText>
                <CardActions>
                    <RaisedButton fullWidth={true} label="Going" backgroundColor="#512DA8" labelColor="#EDE7F6" disabled={this.props.details.invitedPeople.some((element, index, array) => {
                        console.log(element.username === this.props.username)
                        return element.username === this.props.username && element.type === 'going'
                      })} onClick={this.goingToEvent}/>
                    <RaisedButton fullWidth={true} label="Interested" backgroundColor="#673AB7" labelColor="#EDE7F6" disabled={this.props.details.invitedPeople.some((element, index, array) => {
                        console.log(element.username === this.props.username)
                        return element.username === this.props.username && element.type === 'interested'
                      })} onClick={this.interestedInEvent}/>
                    <RaisedButton fullWidth={true} label="Not Interested" backgroundColor="#D1C4E9" labelColor="#512DA8" disabled={this.props.details.invitedPeople.some((element, index, array) => {
                        console.log(element.username === this.props.username)
                        return element.username === this.props.username && element.type === 'notGoing'
                      })} onClick={this.notInterestedInEvent}/>
                </CardActions>
              </Card> : null}
            </Paper>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  eventImageLoading: state.event.eventImageLoading,
  eventDetailsLoading: state.event.eventDetailsLoading,
  displayedItem: state.event.displayedItem,
  image: state.event.itemToView ? state.event.itemToView.image : null,
  details: state.event.itemToView ? state.event.itemToView.details : null,
  // itemToView: state.event.itemToView ? state.event.itemToView : null,
  username: state.login.user ? state.login.user.username : null
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventImageAction: (request: EventDetailsRequest): void => {
          actions.loadEventImageAction(request, dispatch)
      },
      loadEventDetailsAction: (request: EventDetailsRequest): void => {
          actions.loadEventDetailsAction(request, dispatch)
      },
      performAttendEventAction: (request: AttendEventRequest): void => {
        actions.performAttendEventAction(request, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)

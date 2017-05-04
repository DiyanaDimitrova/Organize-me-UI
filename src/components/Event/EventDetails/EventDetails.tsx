import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import * as actions from '../../../actions/eventActions'
import { EventDetailsRequest } from '../../../main/eventMain'
import * as dateFormat from 'dateformat'
import MapsPlace from 'material-ui/svg-icons/maps/place'
import Divider from 'material-ui/Divider';

const classes = require('./EventDetails.css')


interface StateProps {
  eventImageLoading: Boolean,
  eventDetailsLoading: Boolean,
  displayedItem: String,
  itemToView: any
}

interface DispatchProps {
  loadEventImageAction: (request: EventDetailsRequest) => void,
  loadEventDetailsAction: (request: EventDetailsRequest) => void,
}

export interface EventDetailsProps extends StateProps, DispatchProps{

}

export interface EventDetailsState{
  eventImageLoading: Boolean,
  eventDetailsLoading: Boolean,
  displayedItem: String,
  itemToView: any
}

export class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
  constructor(props) {
    super(props)
    console.log('Props' + JSON.stringify(this.props))
  }
  // public static defaultProps: StateProps = {
  //   eventImageLoading: false,
  //   eventDetailsLoading: false,
  //   displayedItem: null,
  //   itemToView: null
  // }

  getInitialData() {
    let eventDetails = {} as EventDetailsRequest
    eventDetails.id = this.props.displayedItem
    // eventDetails.id = '5909807905bb9c21b40c9cdd'
    this.props.loadEventImageAction(eventDetails)
    this.props.loadEventDetailsAction(eventDetails)
  }

  componentWillMount() {
    let eventDetails = {} as EventDetailsRequest
    eventDetails.id = this.props.displayedItem
    // eventDetails.id = '5909807905bb9c21b40c9cdd'
    this.props.loadEventImageAction(eventDetails)
    this.props.loadEventDetailsAction(eventDetails)
  }
  goingToEvent = () => {

  }

  interestedInEvent = () => {

  }
  notInterestedInEvent = () => {

  }

  render() {
    let imagePreviewUrl = this.props.itemToView.image
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
  }
  console.log('Props111' + JSON.stringify(imagePreviewUrl))

    return (
      <Card>
        <CardHeader
          title={this.props.itemToView.details.title}
          subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.itemToView.details.title} subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')} />}
        >
          <div><img src={imagePreviewUrl} height="100%" width="100%"/></div>
        </CardMedia>
        <CardTitle title={this.props.itemToView.details.title} subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')} />
        <CardText>
          <div><MapsPlace />{this.props.itemToView.details.place} </div>
          <Divider/>
          <div>{this.props.itemToView.details.details}</div>
        </CardText>
        <CardActions>
            <RaisedButton label="Going" secondary={true} onClick={this.goingToEvent}/>
            <RaisedButton label="Interested" primary={true} onClick={this.interestedInEvent}/>
            <RaisedButton label="Not Interested" primary={false} onClick={this.notInterestedInEvent}/>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state: any) => ({
  eventImageLoading: state.event.eventImageLoading,
  eventDetailsLoading: state.event.eventDetailsLoading,
  displayedItem: state.event.displayedItem,
  itemToView: state.event.itemToView
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventImageAction: (request: EventDetailsRequest): void => {
          actions.loadEventImageAction(request, dispatch)
      },
      loadEventDetailsAction: (request: EventDetailsRequest): void => {
          actions.loadEventDetailsAction(request, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)

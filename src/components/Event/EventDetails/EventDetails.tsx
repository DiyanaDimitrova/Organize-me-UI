import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import * as actions from '../../../actions/eventActions'
import { EventDetailsRequest } from '../../../main/eventMain'
import * as dateFormat from 'dateformat'
const classes = require('./EventDetails.css')


interface StateProps {
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
  displayedItem: String,
  itemToView: any
}

export class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
  constructor(props) {
    super(props)
    this.state = {
      displayedItem: props.displayedItem,
      itemToView: props.itemToView
    }
    let eventDetails = {} as EventDetailsRequest
    // eventDetails.id = this.props.displayedItem
    eventDetails.id = '5909807905bb9c21b40c9cdd'
    this.props.loadEventImageAction(eventDetails)
    this.props.loadEventDetailsAction(eventDetails)

  }

  render() {
    let imagePreviewUrl = this.props.itemToView.image
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
  }
  console.log('Props' + JSON.stringify(this.props))
    return (
      <Card>
        <CardHeader
          title={this.props.itemToView.details.title}
          subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.itemToView.details.title} subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')} />}
        >
          {$imagePreview}
        </CardMedia>
        <CardTitle title={this.props.itemToView.details.title} subtitle={dateFormat(this.props.itemToView.details.time, 'HH:MM')+ ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy')} />
        <CardText>
          {this.props.itemToView.details.details}
        </CardText>
        <CardActions>
            <RaisedButton label="Going" secondary={true}/>
            <RaisedButton label="Interested" primary={true}/>
            <RaisedButton label="Not Interested" primary={false}/>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state: any) => ({
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

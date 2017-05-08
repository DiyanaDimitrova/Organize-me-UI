import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/eventActions'
// import { List, ListItem, IconMenu, MenuItem, IconButton } from 'material-ui'
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { EventDetailsRequest } from '../../../main/eventMain'
import * as dateFormat from 'dateformat'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info-outline';

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>,
  imageToView: any,
  images: Array<any>
}

interface DispatchProps {
  loadEventList: () => void,
  setDisplayedItem: (displayedItem: String) => void,
  loadEventImageListAction: (request: EventDetailsRequest) => void
}

interface EventGridProps extends StateProps, DispatchProps {

}

interface EventGridState{
}

class EventGrid extends React.Component<EventGridProps, EventGridState> {
  constructor(props) {
    super(props)
  }

  public static defaultProps: StateProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    imageToView: null,
    images: []
  }
  componentWillMount() {
    this.props.loadEventList()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.images !== nextProps.images
  }
  // componentWillUpdate(nextProps, nextState) {
  //   if(this.props.eventList !== nextProps.eventList){
  //     this.props.eventList.forEach(event => {
  //       let eventDetails = {} as EventDetailsRequest
  //       eventDetails.id = event._id
  //       this.props.loadEventImageListAction(eventDetails)
  //     })
  //   }
  // }
  viewItem = (e, itemId) => {
    // console.log('ITEM' + itemId)
    this.props.setDisplayedItem(itemId)
    browserHistory.push('/eventDetails/' + itemId)
  }
  getImage = (itemId) => {
    let eventDetails = {} as EventDetailsRequest
    eventDetails.id = itemId
    this.props.loadEventImageListAction(eventDetails)

    let src
    if(this.props.images !== null && this.props.images.length > 0){

      src = this.props.images.find(image => {
        if(image.id === itemId){
          console.log(image.id)
          return image
        }
      })
    }
    console.log('PROPS' + JSON.stringify(src ? src.id : null))

    return src ? src.image : null
  }

  render() {
    let eventArray
    if(this.props.eventList !== undefined && this.props.eventList !== null){
      eventArray = Object.keys(this.props.eventList).map(key => this.props.eventList[key])
    }
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 1000,
        height: 600,
        overflowY: 'auto',
      },
    }
    return (
      <div>
        <GridList
          cellHeight={300}
          style={styles.gridList}
        >
          <Subheader>All events</Subheader>
          {eventArray.map((tile) => (
            <GridTile
              key={tile._id}
              title={tile.title}
              subtitle={<span>at <b>{tile.place}</b></span>}
              actionIcon={<IconButton onTouchTap={(event) => {this.viewItem(event, tile._id)}}>
              <Info color="white" /></IconButton>}>
              <img src={this.getImage(tile._id)} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList,
    imageToView: state.event.itemToView.image,
    images: state.event.images
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventList: (): void => {
          actions.loadEventList(dispatch)
      },
      setDisplayedItem: (displayedItem: String): void => {
          actions.setDisplayedItem(displayedItem, dispatch)
      },
      // loadEventImageAction: (request: EventDetailsRequest): void => {
      //     actions.loadEventImageAction(request, dispatch)
      // },
      loadEventImageListAction: (request: EventDetailsRequest): void => {
        actions.loadEventImageListAction(request, dispatch)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventGrid)

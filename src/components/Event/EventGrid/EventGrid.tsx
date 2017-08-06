import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {GridList, GridTile, Paper} from 'material-ui'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import Info from 'material-ui/svg-icons/action/info-outline'
import * as dateFormat from 'dateformat'
import * as actions from '../../../actions/eventActions'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { EventDetailsRequest } from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
const classes = require('./EventGrid.css')

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>,
  // imageToView: any,
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
  images: Array<any>
}

class EventGrid extends React.Component<EventGridProps, EventGridState> {
  constructor(props) {
    super(props)
  }

  public static defaultProps: StateProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    // imageToView: null,
    images: []
  }
  componentWillMount() {
    this.props.loadEventList()
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.images !== nextProps.images
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
          // console.log(image.id)
          return image
        }
      })
    }
    return src ? src.image : null
  }

  render() {
    return (
      <div>
        <div>
            <Header />
        </div>
        {this.props.eventListLoading === false && this.props.success === true &&
          <div id='eventGridDiv' className={classes.eventGridDiv}>
            <Paper id='eventGridPaper' className={classes.eventGridPaper} zDepth={2}>
              <GridList
                cellHeight={250}
              >
                <Subheader style={{color: '#512DA8'}}>All events</Subheader>
                {this.props.eventList !== undefined && this.props.eventList !== null && this.props.eventList.map((tile) => (
                  <GridTile
                    key={tile._id}
                    titleStyle={{color: '#512DA8'}}
                    // subtitleStyle={{color: '#512DA8'}}
                    title={tile.title}
                    subtitle={tile.place}
                    actionIcon={<IconButton onTouchTap={(event) => {this.viewItem(event, tile._id)}}>
                    <Info color="#D1C4E9"/></IconButton>}>
                    {tile._id !== undefined && <img src={this.getImage(tile._id)} />}
                  </GridTile>
                ))}
              </GridList>
            </Paper>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList,
    // imageToView: state.event.itemToView.image,
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

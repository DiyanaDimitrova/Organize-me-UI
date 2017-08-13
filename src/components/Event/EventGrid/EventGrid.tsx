import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {GridList, GridTile, Paper, AutoComplete, RaisedButton, IconButton, Subheader} from 'material-ui'
import Info from 'material-ui/svg-icons/action/info-outline'
import * as Colors from 'material-ui/styles/colors'
import * as dateFormat from 'dateformat'
import * as actions from '../../../actions/eventActions'
import * as categoryActions from '../../../actions/categoryActions'
import { } from '../../../main/eventMain'
import { Event } from '../../Event/Event/Event'
import { FilterEventListRequest } from '../../../main/eventMain'
import Header from '../../../components/Header/Header'
const classes = require('./EventGrid.css')

interface StateProps {
  eventListLoading: Boolean,
  success: Boolean,
  eventList: Array<any>,
  images: Array<any>,
  categoriesListLoading: Boolean,
  categoriesListSuccess: Boolean,
  categoriesList: Array<any>
}

interface DispatchProps {
  loadEventList: (request: FilterEventListRequest) => void,
  setDisplayedItem: (displayedItem: String) => void,
  loadCategoriesList: () => void
}

interface EventGridProps extends StateProps, DispatchProps {

}

interface EventGridState{
  images: Array<any>,
  categoryText: any,
  cityText: any
}

class EventGrid extends React.Component<EventGridProps, EventGridState> {
  constructor(props) {
    super(props)
    this.state = {
      images: null,
      categoryText: null,
      cityText: null
    }
  }

  public static defaultProps: StateProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    images: [],
    categoriesListLoading: false,
    categoriesListSuccess: true,
    categoriesList: [],
  }
  componentWillMount() {
    this.props.loadEventList(null)
  }

  viewItem = (e, itemId) => {
    this.props.setDisplayedItem(itemId)
    browserHistory.push('/eventDetails/' + itemId)
  }

  getImage = (itemId) => {
    let src
    if(this.props.images !== null && this.props.images.length > 0){
      src = this.props.images.find(image => {
        if(image.id === itemId){
          return image
        }
      })
    }
    return src ? src.image : null
  }
  // <Subheader style={{color: '#512DA8', textAlign: 'center', fontSize: '12'}}>All events</Subheader>
  selectCategory = (categoryText) => {
    let category = null
    if (this.props.categoriesList !== null && this.props.categoriesList !== undefined){
      let categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
      category = categoryArray.find(item => item.title === categoryText)
    }
    this.setState({
      categoryText: category._id
    })
  }
  selectCity = (cityText) => {
    this.setState({
      cityText: cityText
    })
  }
  filterEvents = () => {
    let filterEventList = {} as FilterEventListRequest
    filterEventList.categoryId = this.state.categoryText
    filterEventList.city = this.state.cityText
    this.props.loadEventList(filterEventList)
    this.setState({
      categoryText: null,
      cityText: null
    })
  }
  render() {
    const categoryConfig = {
      text: 'title',
      value: '_id'
    }
    let categoryArray
    if(this.props.categoriesList !== undefined && this.props.categoriesList !== null){
      categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
    }
    const cityArray = [
      {city: 'Sofia', id: 1},
      {city: 'Plovdiv', id: 2},
      {city: 'Varna', id: 3},
      {city: 'Burgas', id: 4},
      {city: 'Stara Zagora', id: 5},
      {city: 'Ruse', id: 6}

    ];
    const cityConfig = {
      text: 'city',
      value: 'id',
    };

    return (
      <div>
        <div>
            <Header />
        </div>
        {this.props.eventListLoading === false && this.props.success === true &&
          <div id='eventGridDiv' className={classes.eventGridDiv}>
            <Paper id='eventGridPaper' className={classes.eventGridPaper} zDepth={2}>
            <AutoComplete
               textFieldStyle={{color: '#512DA8'}}
               menuStyle={{color: '#512DA8'}}
               listStyle={{color: '#512DA8'}}
               errorStyle={{color: '#512DA8'}}
               style={{width: 325}}
               fullWidth={true}
               floatingLabelText="Category"
               filter={AutoComplete.noFilter}
               onUpdateInput={this.selectCategory}
               openOnFocus={true}
               dataSource={categoryArray}
               dataSourceConfig={categoryConfig}
             />
             <AutoComplete
                textFieldStyle={{color: Colors.deepPurple700}}
                menuStyle={{color: Colors.deepPurple700}}
                listStyle={{color: Colors.deepPurple700}}
                errorStyle={{color: Colors.deepPurple700}}
                style={{width: 325}}
                fullWidth={true}
                floatingLabelText="City"
                filter={AutoComplete.noFilter}
                onUpdateInput={this.selectCity}
                openOnFocus={true}
                dataSource={cityArray}
                dataSourceConfig={cityConfig}
              />
              <RaisedButton label="Submit" fullWidth={true} backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.filterEvents}/>
              <GridList
                cellHeight={250}
              >
                {this.props.eventList !== undefined && this.props.eventList !== null && this.props.eventList.map((tile) => (
                  <GridTile
                    key={tile._id}
                    titleStyle={{color: '#512DA8'}}
                    // subtitleStyle={{color: '#512DA8'}}
                    title={tile.title}
                    subtitle={tile.city + ' ' + tile.place + ' ' + dateFormat(tile.time, 'dS mmmm, yyyy')}
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
    images: state.event.images,
    categoriesListLoading: state.category.categoriesListLoading,
    categoriesListSuccess: state.category.success,
    categoriesList: state.category.categoriesList,
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadEventList: (request: FilterEventListRequest): void => {
          actions.loadEventList(request, dispatch)
      },
      setDisplayedItem: (displayedItem: String): void => {
          actions.setDisplayedItem(displayedItem, dispatch)
      },
      loadCategoriesList: (): void => {
          categoryActions.loadCategoriesList(dispatch)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventGrid)

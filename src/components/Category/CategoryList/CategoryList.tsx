import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/categoryActions'
import { List, ListItem, IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { DeleteCategoryRequest, UpdateCategoryRequest } from '../../../main/categoryMain'
import { Category } from '../../Category/Category/Category'
const classes = require('./CategoryList.css')

interface StateProps {
  categoriesListLoading: Boolean,
  success: Boolean,
  categoriesList: Array<any>
}

interface DispatchProps {
  loadCategoriesList: () => void,
  performDeleteCategoryAction: (deleteCategoryRequest: DeleteCategoryRequest) => void,
}

interface CategoryListProps extends StateProps, DispatchProps{

}

interface CategoryListState{
}

class CategoryList extends React.Component<CategoryListProps, CategoryListState> {
  constructor(props) {
    super(props)

  }

  public static defaultProps: StateProps = {
      categoriesListLoading: false,
      success: true,
      categoriesList: []
  }
  componentWillMount() {
    this.props.loadCategoriesList()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }
  deleteItem = (e, itemId) => {
    e.preventDefault()
    let deleteCategory = {} as DeleteCategoryRequest
    deleteCategory.id = itemId
    this.props.performDeleteCategoryAction(deleteCategory)
  }
  updateItem = (e, item) => {
    e.preventDefault()
    // let updateCategory = {} as UpdateCategoryRequest
    // updateCategory.id = item._id
    // updateCategory.title = item.title
    // this.props.setCurrentItem(updateCategory)
    browserHistory.push('/editCategory/' + item._id)
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
      </IconMenu>
    )
  }
  render() {
    let categoryArray
    if(this.props.categoriesList !== undefined && this.props.categoriesList !== null){
      categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
    }

    return (
      <div id='categoryDiv' className={classes.categoryDiv}>
         <List>
          {categoryArray.map((item, index) => {
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
  categoriesListLoading: state.category.categoriesListLoading,
  success: state.category.success,
  categoriesList: state.category.categoriesList
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadCategoriesList: (): void => {
          actions.loadCategoriesList(dispatch)
      },
      performDeleteCategoryAction: (deleteCategoryRequest: DeleteCategoryRequest): void => {
          actions.performDeleteCategoryAction(deleteCategoryRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

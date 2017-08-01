import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/categoryActions'
import { List, ListItem, IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { DeleteCategoryRequest, UpdateCategoryRequest } from '../../../main/categoryMain'
import { Category } from '../../Category/Category/Category'
import Header from '../../../components/Header/Header'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
const classes = require('./CategoryList.css')

interface StateProps {
  categoriesListLoading: Boolean,
  success: Boolean,
  categoriesList: Array<any>,
  user: String
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
      categoriesList: [],
      user: null
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
    deleteCategory.user = this.props.user
    this.props.performDeleteCategoryAction(deleteCategory)
    browserHistory.push('/')
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
        }} leftIcon={<Edit />}>Edit</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.deleteItem(event, item._id)
        }} leftIcon={<Delete />}>Delete</MenuItem>
      </IconMenu>
    )
  }
  render() {
    let categoryArray
    if(this.props.categoriesList !== undefined && this.props.categoriesList !== null){
      categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
    }

    return (
      <div>
          <div>
            <Header />
          </div>
          <div id='categoryListDiv' className={classes.categoryListDiv}>
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
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  categoriesListLoading: state.category.categoriesListLoading,
  success: state.category.success,
  categoriesList: state.category.categoriesList,
  user: state.login.user.username
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

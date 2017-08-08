import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/categoryActions'
import { List, ListItem, IconMenu, MenuItem, IconButton, Paper } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
import * as Colors from 'material-ui/styles/colors'
import { DeleteCategoryRequest, UpdateCategoryRequest } from '../../../main/categoryMain'
import { Category } from '../../Category/Category/Category'
import Header from '../../../components/Header/Header'
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
      <IconMenu iconButtonElement={this.iconButtonElement()} menuStyle={{backgroundColor: Colors.deepPurple50}}>
        <MenuItem onTouchTap={(event) => {
          this.updateItem(event, item)
        }} leftIcon={<Edit color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Edit</MenuItem>
        <MenuItem onTouchTap={(event) => {
          this.deleteItem(event, item._id)
        }} leftIcon={<Delete color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Delete</MenuItem>
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
          <Paper id='categoryListPaper' className={classes.categoryListPaper} zDepth={2}>
             <List>
              {categoryArray.map((item, index) => {
                return (
                  <div key={index} >
                    <ListItem hoverColor="#D1C4E9"
                      rightIconButton={this.rightIconMenu(item)}
                      primaryText={item.title} style={{color: Colors.deepPurple700}}
                    />
                  </div>
                )
              })}
              </List>
            </Paper>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  categoriesListLoading: state.category.categoriesListLoading,
  success: state.category.success,
  categoriesList: state.category.categoriesList,
  user: state.login.user ? state.login.user.username : null
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

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../../actions/categoryActions'
import { List, ListItem, IconMenu, MenuItem, IconButton, Paper, Dialog, FlatButton } from 'material-ui'
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
  openDialog: Boolean
  id: String
}

class CategoryList extends React.Component<CategoryListProps, CategoryListState> {
  constructor(props) {
    super(props)
    this.state = {
      openDialog: false,
      id: null
    }
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
    return this.props !== nextProps || this.state !== nextState
  }
  deleteItem = (itemId) => {
    let deleteCategory = {} as DeleteCategoryRequest
    deleteCategory.id = itemId
    deleteCategory.user = this.props.user
    this.props.performDeleteCategoryAction(deleteCategory)
    browserHistory.push('/allCategories')
  }
  updateItem = (item) => {
    // e.preventDefault()
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
        <MenuItem onTouchTap={() => {
          this.updateItem(item)
        }} leftIcon={<Edit color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Edit</MenuItem>
        <MenuItem onTouchTap={() => {
          this.handleOpen(item._id)
        }} leftIcon={<Delete color={Colors.deepPurple700}/>} style={{color: Colors.deepPurple700}}>Delete</MenuItem>
      </IconMenu>
    )
  }
  handleClose = () => {
    this.setState({ openDialog: false, id: null })
  }
  handleOpen = (itemId) => {
    this.setState({ openDialog: true, id: itemId })
  }
  handleDelete = () => {
    this.setState({ openDialog: false })
    this.deleteItem(this.state.id)
  }
  render() {
    let categoryArray
    if(this.props.categoriesList !== undefined && this.props.categoriesList !== null){
      categoryArray = Object.keys(this.props.categoriesList).map(key => this.props.categoriesList[key])
    }
    const actions = [
         <FlatButton
           label="Cancel"
           onClick={this.handleClose}
         />,
         <FlatButton
           label="Submit"
           keyboardFocused={true}
           onClick={this.handleDelete}
         />
       ]
    return (
      <div id='categoryListWrapper' className={classes.categoryListWrapper}>
          <div>
            <Header />
          </div>
          <div id='categoryListDiv' className={classes.categoryListDiv}>
          <Paper id='categoryListPaper' className={classes.categoryListPaper} zDepth={2}>
             <div id='titleText' className={classes.titleText}>
                <h2>All Categories</h2>
             </div>
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
              <Dialog
                title="Do you want to delete the category?"
                actions={actions}
                modal={false}
                open={this.state.openDialog}
                onRequestClose={this.handleClose}
              >
              </Dialog>
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

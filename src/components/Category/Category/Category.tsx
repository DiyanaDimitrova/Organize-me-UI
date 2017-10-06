import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import * as actions from '../../../actions/categoryActions'
import { CreateCategoryRequest } from '../../../main/categoryMain'
import { UpdateCategoryRequest } from '../../../main/categoryMain'
import Header from '../../../components/Header/Header'
const classes = require('./Category.css')
const styles = {
  errorStyle: {
    color: Colors.deepPurple700,
  },
  underlineStyle: {
    borderColor: Colors.deepPurple700,
  },
  floatingLabelStyle: {
    color: Colors.deepPurple700,
  },
  floatingLabelFocusStyle: {
    color: Colors.deepPurple700,
  },
};
interface StateProps {
  currentItem: UpdateCategoryRequest,
  itemToBeEdited: Boolean,
  user: String,
  params: any
}

interface DispatchProps {
  performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest) => void,
  performUpdateCategoryAction: (updateCategoryRequest: UpdateCategoryRequest) => void,
  setCurrentItem: (currentItem: String) => void

}

export interface CategoryProps extends StateProps, DispatchProps{

}

export interface CategoryState{
  title: String
}

export class Category extends React.Component<CategoryProps, CategoryState> {
  constructor(props) {
    super(props)
    this.state = {
      title: props.itemToBeEdited === true && this.props.params.id !== undefined ? props.currentItem.title : ''
    }
    this.titleEntered = this.titleEntered.bind(this)
    this.saveCategory = this.saveCategory.bind(this)
    this.cancelCategory = this.cancelCategory.bind(this)
  }
  componentWillMount(){
    if(this.props.params.id !== undefined && this.props.params.id !== null){
      this.props.setCurrentItem(this.props.params.id)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
        this.setState({ title: nextProps.currentItem.title })
    }
  }
  titleEntered = (event) => {
      if (event.target.value) {
        this.setState({ title: event.target.value })
      }
    }
  saveCategory = (event)  => {
          event.preventDefault()
          if(this.props.itemToBeEdited === true && this.props.params.id !== undefined){
            let updateCategory = {} as UpdateCategoryRequest
            updateCategory.title = this.state.title
            updateCategory._id = this.props.currentItem._id
            updateCategory.user = this.props.user
            this.props.performUpdateCategoryAction(updateCategory)
            this.setState({title : ''})
          } else {
            let createCategory = {} as CreateCategoryRequest
            createCategory.title = this.state.title
            createCategory.user = this.props.user
            this.props.performCreateCategoryAction(createCategory)
          }
          browserHistory.push('/allCategories')
    }
  cancelCategory = (event)  => {
          event.preventDefault()
          this.setState({ title: '' })
          browserHistory.push('/')
    }
  render() {
    let title
    if (this.props.itemToBeEdited === true && this.props.params.id !== undefined) {
      title = 'Edit category'
    } else {
      title = 'Add new category'
    }

    return (
      <div id='categoryWrapper' className={classes.categoryWrapper}>
          <div>
            <Header />
          </div>
          <div id='categoryDiv' className={classes.categoryDiv}>
            <Paper id='categoryPaper' className={classes.categoryPaper} zDepth={2}>
              <div id='titleText' className={classes.titleText}>
                <h2>{title}</h2>
              </div>
              <div>
                <TextField errorStyle={styles.errorStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}  hintStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle}  textareaStyle={styles.errorStyle}
                fullWidth={true} hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text"
                value={this.state.title} onChange={this.titleEntered}/>
              </div>
              <div>
                <RaisedButton id='cancelCategoryBtn' className={classes.cancelCategoryBtn} label="Cancel" fullWidth={true} backgroundColor="#D1C4E9" labelColor="#512DA8"	onClick={this.cancelCategory}/>
                <RaisedButton id='submitCategoryBtn' className={classes.submitCategoryBtn} label="Submit" fullWidth={true} backgroundColor="#512DA8" labelColor="#EDE7F6" onClick={this.saveCategory}/>
              </div>
            </Paper>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  currentItem: state.category.currentItem,
  itemToBeEdited: state.category.itemToBeEdited,
  user: state.login.user ? state.login.user.username : null
})

const mapDispatchToProps = (dispatch) => {
    return {
      performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest): void => {
          actions.performCreateCategoryAction(createCategoryRequest, dispatch)
      },
      performUpdateCategoryAction: (updateCategoryRequest: UpdateCategoryRequest): void => {
          actions.performUpdateCategoryAction(updateCategoryRequest, dispatch)
      },
      setCurrentItem: (currentItem: String): void => {
          actions.setCurrentItem(currentItem, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)

import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as actions from '../../../actions/categoryActions'
import { CreateCategoryRequest } from '../../../main/categoryMain'
import { UpdateCategoryRequest } from '../../../main/categoryMain'
const classes = require('./NewCategory.css')

interface StateProps {
  currentItem: UpdateCategoryRequest,
  itemToBeEdited: Boolean
}

interface DispatchProps {
  performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest) => void,
  performUpdateCategoryAction: (updateCategoryRequest: UpdateCategoryRequest) => void
}

export interface NewCategoryProps extends StateProps, DispatchProps{

}

export interface NewCategoryState{
  title: String,
  // item: string,
}

export class NewCategory extends React.Component<NewCategoryProps, NewCategoryState> {
  constructor(props) {
    super(props)
    this.state = {
      title: props.itemToBeEdited === true ? props.currentItem.title : ''
      // item: ''
    }
    this.titleEntered = this.titleEntered.bind(this)
    this.saveCategory = this.saveCategory.bind(this)
    this.cancelCategory = this.cancelCategory.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps && nextProps.itemToBeEdited === true){
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
          if(this.props.itemToBeEdited === true ){
            let updateCategory = {} as UpdateCategoryRequest
            updateCategory.title = this.state.title
            updateCategory.id = this.props.currentItem.id
            console.log('DDDDDD' + JSON.stringify(updateCategory))
            this.props.performUpdateCategoryAction(updateCategory)
            this.setState({title : ''})
          } else {
            let createCategory = {} as CreateCategoryRequest
            createCategory.title = this.state.title
            this.props.performCreateCategoryAction(createCategory)
          }

    }
  cancelCategory = (event)  => {
          event.preventDefault()
          this.setState({ title: '' })
    }
  render() {
    console.log(this.props.currentItem)
    let title
    if(this.props.itemToBeEdited === true){
      title = 'Edit category'
    } else {
      title = 'Add new category'
    }

    return (
      <div id='registerDiv' className={classes.registerDiv}>
          <div id='titleText' className={classes.titleText}>
            <h2>{title}</h2>
          </div>
          <div>
            <TextField hintText="Title" floatingLabelText="Title" floatingLabelFixed={true} type="text" onChange={this.titleEntered} value={this.state.title}/>
          </div>
          <div>
            <RaisedButton label="Cancel" secondary={true} onClick={this.cancelCategory}/>
            <RaisedButton label="Submit" primary={true} onClick={this.saveCategory}/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  currentItem: state.category.currentItem,
  itemToBeEdited: state.category.itemToBeEdited
})

const mapDispatchToProps = (dispatch) => {
    return {
      performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest): void => {
          actions.performCreateCategoryAction(createCategoryRequest, dispatch)
      },
      performUpdateCategoryAction: (updateCategoryRequest: UpdateCategoryRequest): void => {
          actions.performUpdateCategoryAction(updateCategoryRequest, dispatch)
      },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCategory)

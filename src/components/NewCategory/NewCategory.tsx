import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui'
import * as actions from '../../actions/categoryActions'
import { CreateCategoryRequest } from '../../main/categoryMain'


const classes = require('./NewCategory.css')

interface StateProps {
}

interface DispatchProps {
  performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest) => void
}

interface NewCategoryProps extends StateProps, DispatchProps{

}

interface NewCategoryState{
  title: String
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NewCategory extends React.Component<NewCategoryProps, NewCategoryState> {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.titleEntered = this.titleEntered.bind(this)
  }

  titleEntered(event) {
        if (event.target.value) {
            this.setState({ title: event.target.value })
            // this.props.setFirstInput(event.target.value)
        }
    }
    saveCategory = (event)  => {
          event.preventDefault()
          let createCategory = {} as CreateCategoryRequest
          createCategory.title = this.state.title
          this.props.performCreateCategoryAction(createCategory)
    }
    cancelCategory = (event)  => {
          event.preventDefault()
          this.setState({ title: '' })
    }
  render() {
    return (
      <div id='registerDiv' className={classes.registerDiv}>
          <div>
          </div>
          <div id='titleText' className={classes.titleText}>
            <h2>Add new category</h2>
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
})

const mapDispatchToProps = (dispatch) => {
    return {
      performCreateCategoryAction: (createCategoryRequest: CreateCategoryRequest): void => {
          actions.performCreateCategoryAction(createCategoryRequest, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCategory)

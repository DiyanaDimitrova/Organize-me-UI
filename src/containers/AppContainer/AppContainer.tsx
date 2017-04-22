import * as React from 'react'
import { Router, browserHistory, IndexRedirect, Route } from 'react-router'
import { AppState } from '../../store/AppStore'
import { connect } from 'react-redux'
import Register from '../../components/Register/Register/Register'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import NewCategory from '../../components/Category/NewCategory/NewCategory'
import CategoryList from '../../components/Category/CategoryList/CategoryList'
import Event from '../../components/Event/Event/Event'

import App from '../App/App'

export class AppContainer extends React.Component<any, AppState> {

  render() {
    return (
      <div>
        <Router ref='routeRef' history={browserHistory} >
          <Route path='/' component={App} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/newCategory' component={NewCategory}/>
          <Route path='/allCategories' component={CategoryList}/>
          <Route path='/newEvent' component={Event}/>
        </Router>
      </div>
    )
  }
}

export default connect()(AppContainer)

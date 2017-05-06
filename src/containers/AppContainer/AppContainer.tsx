import * as React from 'react'
import { Router, browserHistory, IndexRedirect, Route } from 'react-router'
import { AppState } from '../../store/AppStore'
import { connect } from 'react-redux'
import Register from '../../components/Register/Register/Register'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import Category from '../../components/Category/Category/Category'
import CategoryList from '../../components/Category/CategoryList/CategoryList'
import Event from '../../components/Event/Event/Event'
import EventList from '../../components/Event/EventList/EventList'
import EventDetails from '../../components/Event/EventDetails/EventDetails'
import Code from '../../components/Code/Code/Code'
import ScanCode from '../../components/Code/ScanCode/ScanCode'

import App from '../App/App'

export class AppContainer extends React.Component<any, AppState> {

  render() {
    return (
      <div>
        <Router ref='routeRef' history={browserHistory} >
          <Route path='/' component={App} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/newCategory' component={Category}/>
          <Route path='/editCategory/:id' component={Category}/>
          <Route path='/allCategories' component={CategoryList}/>
          <Route path='/newEvent' component={Event}/>
          <Route path='/editEvent/:id' component={Event}/>
          <Route path='/allEvents' component={EventList}/>
          <Route path='/eventDetails/:id' component={EventDetails}/>
          <Route path='/newCode/:id' component={Code}/>
          <Route path='/scanCode' component={ScanCode}/>
        </Router>
      </div>
    )
  }
}

export default connect()(AppContainer)

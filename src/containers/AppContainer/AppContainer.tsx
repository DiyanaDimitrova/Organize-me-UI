import * as React from 'react'
import { Router, browserHistory, IndexRedirect, Route } from 'react-router'
import { AppState } from '../../store/AppStore'
import { connect } from 'react-redux'
import Register from '../../components/Register/Register/Register'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import NewCategory from '../../components/NewCategory/NewCategory'

import App from '../App/App'
import rootRouter from './rootRouter'

export class AppContainer extends React.Component<any, AppState> {

  render() {
    console.log('RRRR' + JSON.stringify(rootRouter[0].getComponent))
    return (
      <div>
        <Router ref='routeRef' history={browserHistory} >
          <Route path='/' component={App} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/newCategory' component={NewCategory}/>
        </Router>
      </div>
    )
  }
}
// {rootRouter.map((route) => {
//   console.log('ROUTE' + JSON.stringify(route))
//   return (<Route key={route.path} {...route} />)
// })}

export default connect()(AppContainer)

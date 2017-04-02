// <reference path='../typings/all.d.ts' />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer/AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import axios from 'axios'


//
//  Inject store variable into each component context
//
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './store/AppStore'

//
//  General look and theme styling of this application
//  You should rarely touch this file and instead update a component specific css
//
//
//  This React plugin is required by Material-UI
//  It should be removed once React support the touch event natively
//
injectTapEventPlugin()

// setup global axios defaults
var instance = axios.create({
  baseURL: 'http://localhost:3001'
})
axios.defaults.timeout = 6000
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.post['Content-Type'] = 'application/json';


// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
// if (config.client.axios.baseURL) {
//     axios.defaults.baseURL = config.client.axios.baseURL
// }

ReactDOM.render(
    <ReduxProvider store={appStore}>
            <MuiThemeProvider>
                <AppContainer />
            </MuiThemeProvider>
    </ReduxProvider>,
    document.getElementById('root')
)

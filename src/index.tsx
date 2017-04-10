// <reference path='../typings/all.d.ts' />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer/AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import axios from 'axios'

import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './store/AppStore'

injectTapEventPlugin()

// setup global axios defaults
var instance = axios.create({
  baseURL: 'http://localhost:3001'
})
axios.defaults.timeout = 6000
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
    <ReduxProvider store={appStore}>
            <MuiThemeProvider>
                <AppContainer />
            </MuiThemeProvider>
    </ReduxProvider>,
    document.getElementById('root')
)

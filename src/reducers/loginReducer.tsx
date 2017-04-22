import { LoginState } from '../main/loginMain'
import { Action } from 'redux'
import * as actions from '../actions/loginActions'

export function loginSuccessReducer(state: LoginState, action: actions.LoginAction): LoginState {
    if (action.type === actions.LOGIN_SUCCESS) {
      console.log('SUCCESS' + JSON.stringify(action))
      // let _action = actions.LoginAction
      let newState = Object.assign({}, state)
      newState.login = true
      newState.error =  false
      newState.messages = action.payload.messages
      newState.user =  action.payload.user
      return newState
    } else {
        return state
    }
}

export function loginFailReducer(state: LoginState, action: actions.LoginAction): LoginState {
    if (action.type === actions.LOGIN_FAIL) {
        console.log('FAIL' + JSON.stringify(action))
        // let _action = actions as actions.LoginAction
        let newState = Object.assign({}, state)
        newState.login = false
        newState.error =  true
        newState.messages = action.payload.messages
        return newState
    } else {
        return state
    }
}

export function dismissReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.DISMISS) {
      let newState = Object.assign({}, state)
      newState.error = false
      newState.messages = []
      return newState
    } else {
        return state
    }
}

export function signupSuccessReducer(state: LoginState, action: actions.SignupAction): LoginState {
    if (action.type === actions.SIGNUP_SUCCESS) {
        // let _action = action as actions.SignupAction
        let newState = Object.assign({}, state)
        newState.signup = true
        newState.error = false
        newState.messages = action.payload.messages
        return newState
    } else {
        return state
    }
}

export function signupFailReducer(state: LoginState, action: actions.SignupAction): LoginState {
    if (action.type === actions.SIGNUP_FAIL) {
        // let _action = action as actions.SignupAction
        let newState = Object.assign({}, state)
        newState.signup = false
        newState.error = true
        newState.messages = action.payload.messages
        return newState
      } else {
        return state
    }
}

export function beginLoadingLoginReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.BEGIN_LOADING_LOGIN) {
        let newState = Object.assign({}, state)
        newState.loading = true
        return newState
    } else {
        return state
    }
}

export function endLoadingLoginReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.END_LOADING_LOGIN) {
        let newState = Object.assign({}, state)
        newState.loading = false
        return newState
    } else {
        return state
    }
}

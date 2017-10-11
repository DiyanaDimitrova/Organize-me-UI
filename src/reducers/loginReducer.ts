import { LoginState } from '../main/loginMain'
import { Action } from 'redux'
import * as actions from '../actions/loginActions'

export function loginSuccessReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.LOGIN_SUCCESS) {
      console.log('SUCCESS' + JSON.stringify(action))
      let _action = action as actions.LoginAction
      let newState = (<any>Object).assign({}, state)
      newState.login = true
      newState.error =  false
      newState.messages = _action.payload.messages
      newState.user =  _action.payload.user
      return newState
    } else {
        return state
    }
}

export function loginFailReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.LOGIN_FAIL) {
        console.log('FAIL' + JSON.stringify(action))
        let _action = action as actions.LoginAction
        let newState = (<any>Object).assign({}, state)
        newState.login = false
        newState.error =  true
        newState.messages = _action.payload.messages
        return newState
    } else {
        return state
    }
}

export function signoutSuccessReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.SIGNOUT_SUCCESS) {
      console.log('SUCCESS' + JSON.stringify(action))
      let _action = action as actions.LoginAction
      let newState = (<any>Object).assign({}, state)
      newState.login = false
      newState.error =  false
      newState.messages = _action.payload.messages
      newState.user =  null
      return newState
    } else {
        return state
    }
}

export function signoutFailReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.SIGNOUT_FAIL) {
        console.log('FAIL' + JSON.stringify(action))
        let _action = action as actions.LoginAction
        let newState = (<any>Object).assign({}, state)
        newState.login = false
        newState.error =  true
        newState.messages = _action.payload.messages
        return newState
    } else {
        return state
    }
}


export function dismissReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.DISMISS) {
      let newState = (<any>Object).assign({}, state)
      newState.error = false
      newState.messages = []
      return newState
    } else {
        return state
    }
}

export function signupSuccessReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.SIGNUP_SUCCESS) {
        let _action = action as actions.SignupAction
        let newState = (<any>Object).assign({}, state)
        newState.signup = true
        newState.error = false
        newState.messages = _action.payload.messages
        return newState
    } else {
        return state
    }
}

export function signupFailReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.SIGNUP_FAIL) {
        let _action = action as actions.SignupAction
        let newState = (<any>Object).assign({}, state)
        newState.signup = false
        newState.error = true
        newState.messages = _action.payload.messages
        return newState
      } else {
        return state
    }
}

export function beginLoadingLoginReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.BEGIN_LOADING_LOGIN) {
        let newState = (<any>Object).assign({}, state)
        newState.loading = true
        return newState
    } else {
        return state
    }
}

export function endLoadingLoginReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.END_LOADING_LOGIN) {
        let newState = (<any>Object).assign({}, state)
        newState.loading = false
        return newState
    } else {
        return state
    }
}
export function resetPasswordSuccessReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.RESET_PASSWORD_SUCCESS) {
      let _action = action as actions.ResetPasswordAction
      let newState = (<any>Object).assign({}, state)
      newState.login = false
      newState.error =  false
      newState.messages = _action.messages
      return newState
    } else {
        return state
    }
}

export function resetPasswordFailReducer(state: LoginState, action: Action): LoginState {
    if (action.type === actions.RESET_PASSWORD_FAIL) {
        let _action = action as actions.ResetPasswordAction
        let newState = (<any>Object).assign({}, state)
        newState.login = false
        newState.error =  true
        newState.messages = _action.messages
        return newState
    } else {
        return state
    }
}

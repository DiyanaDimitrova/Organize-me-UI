import { Action } from 'redux'
import * as r from '../reducers/loginReducer'
import * as a from '../actions/loginActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface LoginRequest {
    username: String,
    password: String
}

export interface SignupRequest {
    username: String,
    password: String,
    confirmPassword: String,
    firstName: String,
    lastName: String,
    email: String
}

export interface LoginState {
    login: Boolean,
    signup: Boolean,
    error: Boolean,
    loading: Boolean,
    user: a.User
    messages: Array<any>
}

export const initialState: LoginState = {
    login: false,
    signup: false,
    user: undefined,
    loading: false,
    error: false,
    messages: []
}

const reducers = {
    [a.LOGIN_SUCCESS]: r.loginSuccessReducer,
    [a.LOGIN_FAIL]: r.loginFailReducer,
    [a.DISMISS]: r.dismissReducer,
    [a.SIGNUP_SUCCESS]: r.signupSuccessReducer,
    [a.SIGNUP_FAIL]: r.signupFailReducer,
    [a.SIGNOUT_SUCCESS]: r.signoutSuccessReducer,
    [a.SIGNOUT_FAIL]: r.signoutFailReducer,
    [a.BEGIN_LOADING_LOGIN]: r.beginLoadingLoginReducer,
    [a.END_LOADING_LOGIN]: r.endLoadingLoginReducer
}

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
    if ( action.type === LOGIN_SUCCESS) {
      state = initialState
    }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

import { Action } from 'redux'
import * as r from '../reducers/loginReducer'
import * as a from '../actions/loginActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface LoginRequest {
    username: string,
    password: string
}

export interface SignupRequest {
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    email: string
}

export interface LoginState {
    login: boolean,
    signup: boolean,
    error: boolean,
    loading: boolean,
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

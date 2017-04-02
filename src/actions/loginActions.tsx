import axios from 'axios'
// import { browserHistory } from 'react-router'
import { LoginRequest } from '../main/loginMain'
import { SignupRequest } from '../main/loginMain'
import { Action } from 'redux'
export const LOGIN_SUCCESS = '@@Login/LOGIN_SUCCESS'
export const LOGIN_FAIL = '@@Login/LOGIN_FAIL'
export const DISMISS = '@@Login/DISMISS'
export const SIGNUP_SUCCESS = '@@Login/SIGNUP_SUCCESS'
export const SIGNUP_FAIL = '@@Login/SIGNUP_FAIL'
export const BEGIN_LOADING_LOGIN = '@@Login/BEGIN_LOADING_LOGIN'
export const END_LOADING_LOGIN = '@@Login/END_LOADING_LOGIN'

export interface User {
    firstName: string
    lastName: string
}

export interface Payload {
    messages: Array<any>,
    user?: User
}

export interface LoginAction extends Action {
    payload: Payload
}

export interface SignupAction extends Action {
    payload: Payload
}

export function beginLoadingLogin(): Action {
    return { type: BEGIN_LOADING_LOGIN } as Action
}

export function endLoadingLogin(): Action {
    return { type: END_LOADING_LOGIN } as Action
}

export function loginSuccessAction(messages: Array<any>, user: User): LoginAction {
    return {
        type: LOGIN_SUCCESS,
        payload: { messages: messages, user: user }
    } as LoginAction
}

export function loginFailAction(messages: Array<any>): LoginAction {
    return {
        type: LOGIN_FAIL,
        payload: { messages: messages }
    } as LoginAction
}

export function signupSuccessAction(messages: Array<any>): SignupAction {
    return {
        type: SIGNUP_SUCCESS,
        payload: { messages: messages }
    } as SignupAction
}

export function signupFailAction(messages: Array<any>): SignupAction {
    return {
        type: SIGNUP_FAIL,
        payload: { messages: messages }
    } as SignupAction
}

export function dismissAction(): Action {
  return { type: DISMISS } as Action
}

export function performLoginAction(request: LoginRequest, dispatch: any): void {
    console.log('performLoginAction username:' +  request.username)
    console.log('performLoginAction password:' +  request.password)
    dispatch(dismissAction())
    dispatch(beginLoadingLogin())
    axios.post('http://localhost:3001/users/authenticate', request) //{ username: 'sisi', password: 'sisi' })
    .then((response) => {
        if (response.data) {
          let user = {
             firstName: response.data.user.firstName,
             lastName: response.data.user.lastName
           } as User
             dispatch(loginSuccessAction(response.data.messages, user))
             dispatch(endLoadingLogin())
          } else {
             dispatch(loginFailAction(response.data.messages))
             dispatch(endLoadingLogin())
          }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.messages) {
            dispatch(loginFailAction(err.response.data.messages))
            dispatch(endLoadingLogin())
        } else {
          let messages = [{
            'message': 'Please try again later...'
          }]
          dispatch(loginFailAction(messages))
          dispatch(endLoadingLogin())
        }
     })
}
export function performSignupAction(request: SignupRequest, dispatch: any): void {
    dispatch(dismissAction())
    axios.post('/users/create', request)
        .then((response) => {
            if (response.data.success) {
                dispatch(signupSuccessAction(response.data.messages))
            } else {
                dispatch(signupFailAction(response.data.messages))
            }
        })
        .catch((err) => {
            let messages = [{
                'message': 'Please try again later...'
            }]
            dispatch(signupFailAction(messages))
        })
}

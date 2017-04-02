import { Action } from 'redux'
import * as a from '../actions/headerActions'
import * as r from '../reducers/headerReducer'

export interface HeaderState {
  showRegisterForm: boolean,
  openLoggedMenu: boolean,
  logged: boolean
}
export const initialState: HeaderState = {
  showRegisterForm: false,
  openLoggedMenu: false,
  logged: false
}
const reducers = {
}

export function headerReducer(state: HeaderState = initialState, action: Action): HeaderState {
    // if (action.type === 'USER_LOGOUT' || action.type === LOGIN_SUCCESS) {
        state = initialState
    // }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

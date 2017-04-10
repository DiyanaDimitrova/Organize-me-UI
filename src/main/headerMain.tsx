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
    state = initialState
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

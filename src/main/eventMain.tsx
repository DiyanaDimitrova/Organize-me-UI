import { Action } from 'redux'
import * as r from '../reducers/eventReducer'
import * as a from '../actions/eventActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface CreateEventRequest {
    title: String,
    place: String
    hourValue: String,
    dateValue: Date,
    file: any,
    imagePreviewUrl: any,
    type: any
}

export interface EventState {
    newEventMessage: String,
}

export const initialState: EventState = {
    newEventMessage: null
}

const reducers = {
    [a.NEW_EVENT_SUCCESS]: r.newEventSuccessReducer,
    [a.NEW_EVENT_FAIL]: r.newEventFailReducer,
}

export function eventReducer(state: EventState = initialState, action: Action): EventState {
    if ( action.type === LOGIN_SUCCESS) {
      state = initialState
    }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

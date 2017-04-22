import { EventState } from '../main/eventMain'
import { Action } from 'redux'
import * as actions from '../actions/eventActions'

export function newEventSuccessReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.NEW_EVENT_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.newEventMessage = action.eventMessage
        return newState
    } else {
        return state
    }
}

export function newEventFailReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.NEW_EVENT_FAIL) {
        let newState = Object.assign({}, state)
        newState.newEventMessage = action.eventMessage
        return newState
      } else {
        return state
    }
}

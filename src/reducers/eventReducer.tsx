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

export function deleteEventSuccessReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.DELETE_EVENT_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.deleteEventMessage = action.eventMessage
        return newState
    } else {
        return state
    }
}

export function deleteEventFailReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.DELETE_EVENT_FAIL) {
        let newState = Object.assign({}, state)
        newState.deleteEventMessage = action.eventMessage
        return newState
      } else {
        return state
    }
}

export function updateEventSuccessReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.UPDATE_EVENT_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.updateEventMessage = action.eventMessage
        newState.currentItem = null
        newState.itemToBeEdited = false
        return newState
    } else {
        return state
    }
}

export function updateEventFailReducer(state: EventState, action: actions.EventAction): EventState {
    if (action.type === actions.UPDATE_EVENT_FAIL) {
        let newState = Object.assign({}, state)
        newState.updateEventMessage = action.eventMessage
        newState.currentItem = null
        newState.itemToBeEdited = false
        return newState
      } else {
        return state
    }
}

export function eventListBeginLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_LIST_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventListLoading = true
        return newState
    } else {
        return state
    }
}

export function eventListEndLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_LIST_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventListLoading = false
        return newState
    } else {
        return state
    }
}
export function eventImageBeginLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_IMAGE_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventImageLoading = true
        return newState
    } else {
        return state
    }
}

export function eventImageEndLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_IMAGE_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventImageLoading = false
        return newState
    } else {
        return state
    }
}

export function eventDetailsBeginLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_DETAILS_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventDetailsLoading= true
        return newState
    } else {
        return state
    }
}

export function eventDetailsEndLoadingActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.EVENT_DETAILS_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.eventDetailsLoading = false
        return newState
    } else {
        return state
    }
}

export function setEventListActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_LIST) {
        let _action = action as actions.GetAllEventsAction
        let newState = Object.assign({}, state)
        newState.eventList = Object.assign({}, _action.eventList)
        newState.success = true
        return newState
    } else {
        return state
    }
}
export function setEventListFailureActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_LIST_FAILURE) {
        let newState = Object.assign({}, state)
        newState.success = false
        return newState
    } else {
        return state
    }
}

export function setCurrentItemReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.SET_CURRENT_ITEM) {
        let _action = action as actions.CurrentItemAction
        let newState = Object.assign({}, state)
        newState.currentItem = Object.assign({}, _action.currentItem)
        newState.itemToBeEdited = true
        return newState
    } else {
        return state
    }
}

export function getEventImageActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_IMAGE) {
        let _action = action as actions.GetEventImageAction
        let newState = Object.assign({}, state)
        newState.itemToView.image = _action.image
        return newState
    } else {
        return state
    }
}
export function getEventImageFailureActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_IMAGE_FAILURE) {
        let newState = Object.assign({}, state)
        newState.itemToView.image = null
        return newState
    } else {
        return state
    }
}

export function getEventDetailsActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_DETAILS) {
        let _action = action as actions.GetEventDetailsAction
        let newState = Object.assign({}, state)
        newState.itemToView.details = Object.assign({}, _action.details)
        return newState
    } else {
        return state
    }
}
export function getEventDetailsFailureActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.GET_EVENT_DETAILS_FAILURE) {
        let newState = Object.assign({}, state)
        newState.itemToView.details = null
        return newState
    } else {
        return state
    }
}

export function setDisplayedItemActionReducer(state: EventState, action: Action): EventState {
    if (action.type === actions.SET_DISPLAYED_ITEM) {
        let _action = action as actions.DisplayedItemAction
        let newState = Object.assign({}, state)
        console.log('AAA' + JSON.stringify(_action))
        newState.displayedItem = _action.displayedItem
        return newState
    } else {
        return state
    }
}

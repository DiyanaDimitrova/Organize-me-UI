import { Action } from 'redux'
import * as r from '../reducers/eventReducer'
import * as a from '../actions/eventActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface CreateEventRequest {
    title: String,
    place: String
    hourValue: Object,
    dateValue: Object,
    file: any,
    imagePreviewUrl: any,
    type: any,
    capacity: Number,
    details: String,
    categoryId: String
}

export interface DeleteEventRequest {
    id: String
}
export interface UpdateEventRequest {
    id: String
    title: String,
    place: String
    hourValue: Object,
    dateValue: Object,
    file: any,
    imagePreviewUrl: any,
    type: any,
    capacity: Number,
    details: String,
    categoryId: String
}

export interface EventState {
    newEventMessage: String,
    deleteEventMessage: String,
    updateEventMessage: String,
    eventListLoading: Boolean,
    success: Boolean,
    eventList: Array<any>,
    currentItem: UpdateEventRequest,
    itemToBeEdited: Boolean
}

export const initialState: EventState = {
    newEventMessage: null,
    deleteEventMessage: null,
    updateEventMessage: null,
    eventListLoading: false,
    success: false,
    eventList: [],
    currentItem: null,
    itemToBeEdited: false
}

const reducers = {
    [a.NEW_EVENT_SUCCESS]: r.newEventSuccessReducer,
    [a.NEW_EVENT_FAIL]: r.newEventFailReducer,
    [a.EVENT_LIST_BEGIN_LOADING]: r.eventListBeginLoadingActionReducer,
    [a.EVENT_LIST_END_LOADING]: r.eventListEndLoadingActionReducer,
    [a.GET_EVENT_LIST_FAILURE]: r.setEventListFailureActionReducer,
    [a.GET_EVENT_LIST]: r.setEventListActionReducer,
    [a.DELETE_EVENT_SUCCESS]: r.deleteEventSuccessReducer,
    [a.DELETE_EVENT_FAIL]: r.deleteEventFailReducer,
    [a.UPDATE_EVENT_SUCCESS]: r.updateEventSuccessReducer,
    [a.UPDATE_EVENT_FAIL]: r.updateEventFailReducer,
    [a.SET_CURRENT_ITEM]: r.setCurrentItemReducer
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

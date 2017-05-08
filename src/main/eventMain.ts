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
export interface EventDetailsRequest {
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

export interface AttendEventRequest {
    id: String,
    username: String,
    type: String
}

export interface EventState {
    newEventMessage: String,
    deleteEventMessage: String,
    updateEventMessage: String,
    eventListLoading: Boolean,
    success: Boolean,
    eventList: Array<any>,
    currentItem: UpdateEventRequest,
    itemToBeEdited: Boolean,
    displayedItem: String
    itemToView: {
      image: any,
      details: any
    },
    eventImageLoading: Boolean,
    eventDetailsLoading: Boolean,
    attendEventMessage: String,
    images: Array<any>
}

export const initialState: EventState = {
    newEventMessage: null,
    deleteEventMessage: null,
    updateEventMessage: null,
    eventListLoading: false,
    success: false,
    eventList: [],
    currentItem: null,
    itemToBeEdited: false,
    displayedItem: null,
    itemToView: {
      image: null,
      details: null
    },
    eventImageLoading: false,
    eventDetailsLoading: false,
    attendEventMessage: null,
    images: []
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
    [a.SET_CURRENT_ITEM]: r.setCurrentItemReducer,
    [a.GET_EVENT_IMAGE_FAILURE]: r.getEventImageFailureActionReducer,
    [a.GET_EVENT_IMAGE]: r.getEventImageActionReducer,
    [a.EVENT_IMAGE_BEGIN_LOADING]: r.eventImageBeginLoadingActionReducer,
    [a.EVENT_IMAGE_END_LOADING]: r.eventImageEndLoadingActionReducer,
    [a.GET_EVENT_DETAILS_FAILURE]: r.getEventDetailsFailureActionReducer,
    [a.GET_EVENT_DETAILS]: r.getEventDetailsActionReducer,
    [a.EVENT_DETAILS_BEGIN_LOADING]: r.eventDetailsBeginLoadingActionReducer,
    [a.EVENT_DETAILS_END_LOADING]: r.eventDetailsEndLoadingActionReducer,
    [a.SET_DISPLAYED_ITEM]: r.setDisplayedItemActionReducer,
    [a.ATTEND_EVENT_SUCCESS]: r.attendEventSuccessReducer,
    [a.ATTEND_EVENT_FAIL]: r.attendEventFailReducer,
    [a.GET_EVENT_IMAGE_ARRAY]: r.getEventImageArrayActionReducer,
    [a.GET_EVENT_IMAGE_ARRAY_FAILURE]: r.getEventImageArrayFailureActionReducer
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

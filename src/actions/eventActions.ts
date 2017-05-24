import axios from 'axios'
// import { browserHistory } from 'react-router'
import { CreateEventRequest, UpdateEventRequest, DeleteEventRequest, EventDetailsRequest, AttendEventRequest } from '../main/eventMain'
import { Action } from 'redux'
export const NEW_EVENT_SUCCESS = '@@Event/NEW_EVENT_SUCCESS'
export const NEW_EVENT_FAIL = '@@Event/NEW_EVENT_FAIL'
export const EVENT_LIST_BEGIN_LOADING = '@@Event/EVENT_LIST_BEGIN_LOADING'
export const EVENT_LIST_END_LOADING = '@@Event/EVENT_LIST_END_LOADING'
export const GET_EVENT_LIST_FAILURE = '@@Event/GET_EVENT_LIST_FAILURE'
export const GET_EVENT_LIST = '@@Event/GET_EVENT_LIST'
export const DELETE_EVENT_SUCCESS = '@@Event/DELETE_EVENT_SUCCESS'
export const DELETE_EVENT_FAIL = '@@Event/DELETE_EVENT_FAIL'
export const UPDATE_EVENT_SUCCESS = '@@Event/UPDATE_EVENT_SUCCESS'
export const UPDATE_EVENT_FAIL = '@@Event/UPDATE_EVENT_FAIL'
export const SET_CURRENT_ITEM = '@@Event/SET_CURRENT_ITEM'
export const SET_CURRENT_ITEM_FAIL = '@@Event/SET_CURRENT_ITEM_FAIL'
export const SET_DISPLAYED_ITEM = '@@Event/SET_DISPLAYED_ITEM'
export const GET_EVENT_IMAGE_FAILURE = '@@Event/GET_EVENT_IMAGE_FAILURE'
export const GET_EVENT_IMAGE = '@@Event/GET_EVENT_IMAGE'
export const GET_EVENT_DETAILS_FAILURE = '@@Event/GET_EVENT_DETAILS_FAILURE'
export const GET_EVENT_DETAILS = '@@Event/GET_EVENT_DETAILS'
export const EVENT_IMAGE_BEGIN_LOADING = '@@Event/EVENT_IMAGE_BEGIN_LOADING'
export const EVENT_IMAGE_END_LOADING = '@@Event/EVENT_IMAGE_END_LOADING'
export const EVENT_DETAILS_BEGIN_LOADING = '@@Event/EVENT_DETAILS_BEGIN_LOADING'
export const EVENT_DETAILS_END_LOADING = '@@Event/EVENT_DETAILS_END_LOADING'
export const ATTEND_EVENT_SUCCESS = '@@Event/ATTEND_EVENT_SUCCESS'
export const ATTEND_EVENT_FAIL = '@@Event/ATTEND_EVENT_FAIL'
export const GET_EVENT_IMAGE_ARRAY_FAILURE = '@@Event/GET_EVENT_IMAGE_ARRAY_FAILURE'
export const GET_EVENT_IMAGE_ARRAY = '@@Event/GET_EVENT_IMAGE_ARRAY'

export interface EventAction extends Action {
    eventMessage: string
}

export function createEventSuccessAction(message: String): EventAction {
    return {
        type: NEW_EVENT_SUCCESS,
        eventMessage: message
    } as EventAction
}

export function createEventFailAction(message: String): EventAction {
    return {
        type: NEW_EVENT_FAIL,
        eventMessage: message
    } as EventAction
}

export function performCreateEventAction(request: CreateEventRequest, dispatch: any): void {
    axios.post('/event/add', request)
      .then((response) => {
          dispatch(createEventSuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(createEventFailAction(err.response.data.response))
      })
}

export interface GetAllEventsAction extends Action {
    eventList: Array<any>
}
export interface GetEventImageAction extends Action {
    image: any
}
export interface GetEventImageListAction extends Action {
    image: any,
    id: String
}
export interface GetEventDetailsAction extends Action {
    details: any
}
export interface CurrentItemAction extends Action {
    currentItem: Object
}
export interface DisplayedItemAction extends Action {
    displayedItem: String
}
export function deleteEventSuccessAction(message: String): EventAction {
    return {
        type: DELETE_EVENT_SUCCESS,
        eventMessage: message
    } as EventAction
}

export function deleteEventFailAction(message: String): EventAction {
    return {
        type: DELETE_EVENT_FAIL,
        eventMessage: message
    } as EventAction
}

export function updateEventSuccessAction(message: String): EventAction {
    return {
        type: UPDATE_EVENT_SUCCESS,
        eventMessage: message
    } as EventAction
}

export function updateEventFailAction(message: String): EventAction {
    return {
        type: UPDATE_EVENT_FAIL,
        eventMessage: message
    } as EventAction
}

export function setCurrentItemAction(currentItem: Object): CurrentItemAction {
    return {
        type: SET_CURRENT_ITEM,
        currentItem: currentItem
    } as CurrentItemAction
}

export function setCurrentItemFailAction(currentItem: Object): CurrentItemAction {
    return {
        type: SET_CURRENT_ITEM_FAIL,
        currentItem: currentItem
    } as CurrentItemAction
}

export function setCurrentItem(id: String, dispatch: any): void {
    axios.get('/event/' + id)
      .then((response) => {
          console.log('ACT' + JSON.stringify(response.data.event))
          dispatch(setCurrentItemAction(response.data.event))
      })
      .catch((err) => {
          dispatch(setCurrentItemFailAction(err.response))
      })
}

export function setDisplayedItemAction(displayedItem: String): DisplayedItemAction {
    return {
        type: SET_DISPLAYED_ITEM,
        displayedItem: displayedItem
    } as DisplayedItemAction
}
export function setDisplayedItem(displayedItem: String, dispatch: any): void {
    dispatch(setDisplayedItemAction(displayedItem))
}

export function eventListBeginLoading(): Action {
    return { type: EVENT_LIST_BEGIN_LOADING } as Action
}
export function eventListEndLoading(): Action {
    return { type: EVENT_LIST_END_LOADING } as Action
}

export function eventImageBeginLoading(): Action {
    return { type: EVENT_IMAGE_BEGIN_LOADING} as Action
}
export function eventImageEndLoading(): Action {
    return { type: EVENT_IMAGE_END_LOADING} as Action
}

export function eventDetailsBeginLoading(): Action {
    return { type: EVENT_IMAGE_BEGIN_LOADING} as Action
}
export function eventDetailsEndLoading(): Action {
    return { type: EVENT_DETAILS_END_LOADING} as Action
}
export function setEventListFailure(): Action {
    return { type: GET_EVENT_LIST_FAILURE } as Action
}
export function setEventList(eventList: any): GetAllEventsAction {
    return {
        type: GET_EVENT_LIST,
        eventList: Object.assign([], eventList),
    } as GetAllEventsAction
}

export function performDeleteEventAction(request: DeleteEventRequest, dispatch: any): void {
    let reqBody = {
      user: request.user
    }
    axios.delete('/event/delete/' + request.id, reqBody)
      .then((response) => {
          dispatch(deleteEventSuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(deleteEventFailAction(err.response.data.response))
      })
}
export function performUpdateEventAction(request: UpdateEventRequest, dispatch: any): void {
    let reqBody = {
      title : request.title,
      place: request.place,
      hourValue: request.hourValue,
      dateValue: request.dateValue,
      file: request.file,
      imagePreviewUrl: request.imagePreviewUrl,
      type: request.type,
      capacity: request.capacity,
      details: request.details,
      categoryId: request.categoryId,
      user: request.user
    }
    axios.put('/event/update/' + request._id, reqBody)
      .then((response) => {
          dispatch(updateEventSuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(updateEventFailAction(err.response.data.response))
      })
}
export function loadEventList(dispatch: any): void {
    dispatch(eventListBeginLoading())
    axios.get('/event/all')
      .then((response) => {
          dispatch(setEventList(response.data.events))
          dispatch(eventListEndLoading())
      })
      .catch((err) => {
          dispatch(setEventListFailure())
          dispatch(eventListEndLoading())
      })
}

export function setEventImageFailure(): Action {
    return { type: GET_EVENT_IMAGE_FAILURE } as Action
}
export function setEventImage(image: any): GetEventImageAction {
    return {
        type: GET_EVENT_IMAGE,
        image: image
    } as GetEventImageAction
}
export function loadEventImageAction(request: EventDetailsRequest, dispatch: any): void {
    dispatch(eventImageBeginLoading())
    axios.get('/event/image/' + request.id)
      .then((response) => {
          dispatch(setEventImage(response.data))
          dispatch(eventImageEndLoading())
      })
      .catch((err) => {
          dispatch(setEventImageFailure())
          dispatch(eventImageEndLoading())
      })
}

export function setEventImageArrayFailure(): Action {
    return { type: GET_EVENT_IMAGE_ARRAY_FAILURE } as Action
}
export function setEventImageArray(image: any, id: String): GetEventImageListAction {
    return {
        type: GET_EVENT_IMAGE_ARRAY,
        image: image,
        id: id
    } as GetEventImageListAction
}
export function loadEventImageListAction(request: EventDetailsRequest, dispatch: any): void {
    axios.get('/event/image/' + request.id)
      .then((response) => {
          dispatch(setEventImageArray(response.data, request.id))
      })
      .catch((err) => {
          dispatch(setEventImageArrayFailure())
      })
}


export function setEventDetailsFailure(): Action {
    return { type: GET_EVENT_DETAILS_FAILURE } as Action
}
export function setEventDetails(details: any): GetEventDetailsAction {
    return {
        type: GET_EVENT_DETAILS,
        details: Object.assign([], details)
    } as GetEventDetailsAction
}
export function loadEventDetailsAction(request: EventDetailsRequest, dispatch: any): void {
    dispatch(eventDetailsBeginLoading())
    axios.get('/event/details/' + request.id)
      .then((response) => {
          dispatch(setEventDetails(response.data.event))
          dispatch(eventDetailsEndLoading())
      })
      .catch((err) => {
          dispatch(setEventDetailsFailure())
          dispatch(eventDetailsEndLoading())
      })
}

export function attendEventSuccessAction(message: String): EventAction {
    return {
        type: ATTEND_EVENT_SUCCESS,
        eventMessage: message
    } as EventAction
}

export function attendEventFailAction(message: String): EventAction {
    return {
        type: ATTEND_EVENT_FAIL,
        eventMessage: message
    } as EventAction
}

export function performAttendEventAction(request: AttendEventRequest, dispatch: any): void {
    let reqBody = {
      username: request.username,
      type: request.type
    }
    axios.put('/event/attend/' + request.id, reqBody)
      .then((response) => {
          dispatch(attendEventSuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(attendEventFailAction(err.response.data.response))
      })
}

import axios from 'axios'
// import { browserHistory } from 'react-router'
import { CreateEventRequest, UpdateEventRequest, DeleteEventRequest, EventDetailsRequest } from '../main/eventMain'
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
export const SET_DISPLAYED_ITEM = '@@Event/SET_DISPLAYED_ITEM'
export const GET_EVENT_IMAGE_FAILURE = '@@Event/GET_EVENT_IMAGE_FAILURE'
export const GET_EVENT_IMAGE = '@@Event/GET_EVENT_IMAGE'
export const GET_EVENT_DETAILS_FAILURE = '@@Event/GET_EVENT_DETAILS_FAILURE'
export const GET_EVENT_DETAILS = '@@Event/GET_EVENT_DETAILS'

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
  console.log('AAAA' + JSON.stringify(request))
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
export interface GetEventDetailsAction extends Action {
    details: any
}
export interface CurrentItemAction extends Action {
    currentItem: UpdateEventRequest
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

export function setCurrentItemAction(currentItem: UpdateEventRequest): CurrentItemAction {
    return {
        type: SET_CURRENT_ITEM,
        currentItem: currentItem
    } as CurrentItemAction
}
export function setCurrentItem(currentItem: UpdateEventRequest, dispatch: any): void {
    dispatch(setCurrentItemAction(currentItem))
}

export function setDisplayedItemAction(displayedItem: String): DisplayedItemAction {
  console.log('DDDD' + displayedItem)
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
  console.log('DIDID' + JSON.stringify(request))
    axios.delete('/event/delete/' + request.id)
      .then((response) => {
        console.log('OK')
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
      categoryId: request.categoryId
    }
    axios.put('/event/update/' + request.id, reqBody)
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
        image: Object.assign([], image),
    } as GetEventImageAction
}
export function loadEventImageAction(request: EventDetailsRequest, dispatch: any): void {
    axios.get('/event/image/' + request.id)
      .then((response) => {
        console.log('Resp IMAGE' + JSON.stringify(response))
          dispatch(setEventImage(response.data))
      })
      .catch((err) => {
          dispatch(setEventImageFailure())
      })
}

export function setEventDetailsFailure(): Action {
    return { type: GET_EVENT_DETAILS_FAILURE } as Action
}
export function setEventDetails(details: any): GetEventDetailsAction {
    return {
        type: GET_EVENT_DETAILS,
        details: Object.assign([], details),
    } as GetEventDetailsAction
}
export function loadEventDetailsAction(request: EventDetailsRequest, dispatch: any): void {
    axios.get('/event/details/' + request.id)
      .then((response) => {
        console.log('Resp DETAILS' + JSON.stringify(response))
          dispatch(setEventDetails(response.data.event))
      })
      .catch((err) => {
          dispatch(setEventDetailsFailure())
      })
}

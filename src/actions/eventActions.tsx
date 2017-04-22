import axios from 'axios'
// import { browserHistory } from 'react-router'
import { CreateEventRequest } from '../main/eventMain'
import { Action } from 'redux'
export const NEW_EVENT_SUCCESS = '@@Event/NEW_EVENT_SUCCESS'
export const NEW_EVENT_FAIL = '@@Event/NEW_EVENT_FAIL'
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

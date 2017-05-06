import axios from 'axios'
import { SendCodeRequest, ScanCodeRequest } from '../main/codeMain'
import { Action } from 'redux'
export const LIST_INVITED_BEGIN_LOADING = '@@Code/LIST_INVITED_BEGIN_LOADING'
export const LIST_INVITED_END_LOADING = '@@Code/LIST_INVITED_END_LOADING'
export const LIST_INVITED_SUCCESS = '@@Code/LIST_INVITED_SUCCESS'
export const LIST_INVITED_FAIL = '@@Code/LIST_INVITED_FAIL'
export const SEND_CODE_SUCCESS = '@@Code/SEND_CODE_SUCCESS'
export const SEND_CODE_FAIL = '@@Code/SEND_CODE_FAIL'
export const SCAN_CODE_SUCCESS = '@@Code/SCAN_CODE_SUCCESS'
export const SCAN_CODE_FAIL = '@@Code/SCAN_CODE_FAIL'

export interface GetAllInvitedAction extends Action {
    invitedPeopleList: Array<any>
}
export interface SendCodeAction extends Action {
    sendCodeMessage: string
}
export interface ScanCodeAction extends Action {
    scanCodeMessage: string
}
export function listInvitedBeginLoading(): Action {
    return { type: LIST_INVITED_BEGIN_LOADING } as Action
}
export function listInvitedEndLoading(): Action {
    return { type: LIST_INVITED_END_LOADING } as Action
}

export function setListInvitedFailure(): Action {
    return { type: LIST_INVITED_FAIL } as Action
}
export function setListInvited(invitedPeopleList: any): GetAllInvitedAction {
    return {
        type: LIST_INVITED_SUCCESS,
        invitedPeopleList: Object.assign([], invitedPeopleList)
    } as GetAllInvitedAction
}
export function loadListInvited(id: String, dispatch: any): void {
    dispatch(listInvitedBeginLoading())
    axios.get('/code/listInvited/' + id)
      .then((response) => {
          dispatch(setListInvited(response.data.invitedPeople))
          dispatch(listInvitedEndLoading())
      })
      .catch((err) => {
          dispatch(setListInvitedFailure())
          dispatch(listInvitedEndLoading())
      })
}

export function sendCodeSuccessAction(message: String): SendCodeAction {
    return {
        type: SEND_CODE_SUCCESS,
        sendCodeMessage: message
    } as SendCodeAction
}

export function sendCodeFailAction(message: String): SendCodeAction {
    return {
        type: SEND_CODE_FAIL,
        sendCodeMessage: message
    } as SendCodeAction
}
export function performSendCodeAction(request: SendCodeRequest, dispatch: any): void {
    axios.post('/code/send', request)
      .then((response) => {
          dispatch(sendCodeSuccessAction(response.data.message))
      })
      .catch((err) => {
          dispatch(sendCodeFailAction(err.response.data.message))
      })
}

export function scanCodeSuccessAction(message: String): ScanCodeAction {
    return {
        type: SCAN_CODE_SUCCESS,
        scanCodeMessage: message
    } as ScanCodeAction
}

export function scanCodeFailAction(message: String): ScanCodeAction {
    return {
        type: SCAN_CODE_FAIL,
        scanCodeMessage: message
    } as ScanCodeAction
}
export function performScanCodeAction(request: ScanCodeRequest, dispatch: any): void {
    axios.post('/code/scan', request)
      .then((response) => {
          console.log(response.data)
          dispatch(scanCodeSuccessAction(response.data.message))
      })
      .catch((err) => {
          dispatch(scanCodeFailAction(err.response.data.message))
      })
}

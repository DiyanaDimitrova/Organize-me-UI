import { Action } from 'redux'
import * as r from '../reducers/codeReducer'
import * as a from '../actions/codeActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface SendCodeRequest {
    usersToSendCode: Array<any>
    eventId: String
}

export interface ScanCodeRequest {
    scanedCode: String
}

export interface CodeState {
  listInvitedLoading: Boolean,
  success: Boolean,
  invitedPeopleList: Array<any>,
  sendCodeToUsersMessage: String,
  scanCodeMessage: String
}

export const initialState: CodeState = {
  listInvitedLoading: false,
  success: false,
  invitedPeopleList: null,
  sendCodeToUsersMessage: null,
  scanCodeMessage: null
}

const reducers = {
    [a.LIST_INVITED_SUCCESS]: r.listInvitedSuccessReducer,
    [a.LIST_INVITED_FAIL]: r.listInvitedFailReducer,
    [a.LIST_INVITED_BEGIN_LOADING]: r.listInvitedBeginLoadingReducer,
    [a.LIST_INVITED_END_LOADING]: r.listInvitedEndLoadingReducer,
    [a.SEND_CODE_SUCCESS]: r.sendCodeSuccessReducer,
    [a.SEND_CODE_FAIL]: r.sendCodeFailReducer,
    [a.SCAN_CODE_SUCCESS]: r.scanCodeSuccessReducer,
    [a.SCAN_CODE_FAIL]: r.scanCodeFailReducer
  }

export function codeReducer(state: CodeState = initialState, action: Action): CodeState {
    if ( action.type === LOGIN_SUCCESS) {
      state = initialState
    }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

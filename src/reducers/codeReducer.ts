import { CodeState } from '../main/codeMain'
import { Action } from 'redux'
import * as actions from '../actions/codeActions'

export function listInvitedBeginLoadingReducer(state: CodeState, action: Action): CodeState {
    if (action.type === actions.LIST_INVITED_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.listInvitedLoading = true
        return newState
    } else {
        return state
    }
}

export function listInvitedEndLoadingReducer(state: CodeState, action: Action): CodeState {
    if (action.type === actions.LIST_INVITED_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.listInvitedLoading = false
        return newState
    } else {
        return state
    }
}
export function listInvitedSuccessReducer(state: CodeState, action: Action): CodeState {
    if (action.type === actions.LIST_INVITED_SUCCESS) {
        let _action = action as actions.GetAllInvitedAction
        let newState = Object.assign({}, state)
        newState.invitedPeopleList = Object.assign([], _action.invitedPeopleList)
        newState.success = true
        return newState
    } else {
        return state
    }
}
export function listInvitedFailReducer(state: CodeState, action: Action): CodeState {
    if (action.type === actions.LIST_INVITED_FAIL) {
        let newState = Object.assign({}, state)
        newState.invitedPeopleList = null
        newState.success = false
        return newState
    } else {
        return state
    }
}

export function sendCodeSuccessReducer(state: CodeState, action: actions.CodeAction): CodeState {
    if (action.type === actions.SEND_CODE_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.sendCodeToUsersMessage = action.sendCodeMessage
        return newState
    } else {
        return state
    }
}

export function sendCodeFailReducer(state: CodeState, action: actions.CodeAction): CodeState {
    if (action.type === actions.SEND_CODE_FAIL) {
        let newState = Object.assign({}, state)
        newState.sendCodeToUsersMessage = action.sendCodeMessage
        return newState
      } else {
        return state
    }
}

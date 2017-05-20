import { UserState } from '../main/userMain'
import { Action } from 'redux'
import * as actions from '../actions/userActions'

export function userListBeginLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.userListLoading = true
        return newState
    } else {
        return state
    }
}

export function userListEndLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.userListLoading = false
        return newState
    } else {
        return state
    }
}
export function userListSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_SUCCESS) {
        let _action = action as actions.GetUserListAction
        let newState = Object.assign({}, state)
        newState.userList = Object.assign([], _action.userList)
        newState.success = true
        return newState
    } else {
        return state
    }
}
export function userListFailReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_FAIL) {
        let newState = Object.assign({}, state)
        newState.userList = null
        newState.success = false
        return newState
    } else {
        return state
    }
}

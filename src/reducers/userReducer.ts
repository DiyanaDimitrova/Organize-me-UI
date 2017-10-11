import { UserState } from '../main/userMain'
import { Action } from 'redux'
import * as actions from '../actions/userActions'

export function userListBeginLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_BEGIN_LOADING) {
        let newState = (<any>Object).assign({}, state)
        newState.userListLoading = true
        return newState
    } else {
        return state
    }
}

export function userListEndLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_END_LOADING) {
        let newState = (<any>Object).assign({}, state)
        newState.userListLoading = false
        return newState
    } else {
        return state
    }
}
export function userListSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_SUCCESS) {
        let _action = action as actions.GetUserListAction
        let newState = (<any>Object).assign({}, state)
        newState.userList = (<any>Object).assign([], _action.userList)
        newState.success = true
        return newState
    } else {
        return state
    }
}
export function userListFailReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_LIST_FAIL) {
        let newState = (<any>Object).assign({}, state)
        newState.userList = null
        newState.success = false
        return newState
    } else {
        return state
    }
}
export function makeAdminSuccessReducer(state: UserState, action: actions.MakeAdminAction): UserState {
    if (action.type === actions.MAKE_ADMIN_SUCCESS) {
        let newState = (<any>Object).assign({}, state)
        newState.makeAdminMessage = action.makeAdminMessage
        return newState
    } else {
        return state
    }
}

export function makeAdminFailReducer(state: UserState, action: actions.MakeAdminAction): UserState {
    if (action.type === actions.MAKE_ADMIN_FAIL) {
        let newState = (<any>Object).assign({}, state)
        newState.makeAdminMessage = action.makeAdminMessage
        return newState
      } else {
        return state
    }
}

export function userAccountBeginLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_ACCOUNT_BEGIN_LOADING) {
        let newState = (<any>Object).assign({}, state)
        newState.userAccountLoading = true
        return newState
    } else {
        return state
    }
}

export function userAccountEndLoadingReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_ACCOUNT_END_LOADING) {
        let newState = (<any>Object).assign({}, state)
        newState.userAccountLoading = false
        return newState
    } else {
        return state
    }
}
export function userAccountSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_ACCOUNT_SUCCESS) {
        let _action = action as actions.GetUserAccountAction
        let newState = (<any>Object).assign({}, state)
        newState.userAccount = (<any>Object).assign([], _action.userAccount)
        newState.userAccountSuccess = true
        return newState
    } else {
        return state
    }
}
export function userAccountFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.USER_ACCOUNT_FAILURE) {
        let newState = (<any>Object).assign({}, state)
        newState.userAccount = null
        newState.userAccountSuccess = false
        return newState
    } else {
        return state
    }
}

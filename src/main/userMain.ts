import { Action } from 'redux'
import * as r from '../reducers/userReducer'
import * as a from '../actions/userActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface MakeAdminRequest {
    usersToMakeAdmin: Array<any>,
}
export interface UserState {
  userListLoading: Boolean,
  success: Boolean,
  userList: Array<any>,
  makeAdminMessage: String
}

export const initialState: UserState = {
  userListLoading: false,
  success: false,
  userList: null,
  makeAdminMessage: null
}

const reducers = {
  [a.USER_LIST_SUCCESS]: r.userListSuccessReducer,
  [a.USER_LIST_FAIL]: r.userListFailReducer,
  [a.USER_LIST_BEGIN_LOADING]: r.userListBeginLoadingReducer,
  [a.USER_LIST_END_LOADING]: r.userListEndLoadingReducer,
  [a.MAKE_ADMIN_SUCCESS]: r.makeAdminSuccessReducer,
  [a.MAKE_ADMIN_FAIL]: r.makeAdminFailReducer
}

export function userReducer(state: UserState = initialState, action: Action): UserState {
    if ( action.type === LOGIN_SUCCESS) {
      state = initialState
    }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

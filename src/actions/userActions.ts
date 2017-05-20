import axios from 'axios'
import { Action } from 'redux'

export const USER_LIST_BEGIN_LOADING = '@@User/USER_LIST_BEGIN_LOADING'
export const USER_LIST_END_LOADING = '@@User/USER_LIST_END_LOADING'
export const USER_LIST_SUCCESS = '@@User/USER_LIST_SUCCESS'
export const USER_LIST_FAIL = '@@User/USER_LIST_FAIL'

export interface GetUserListAction extends Action {
    userList: Array<any>
}
export function userListBeginLoading(): Action {
    return { type: USER_LIST_BEGIN_LOADING } as Action
}
export function userListEndLoading(): Action {
    return { type: USER_LIST_END_LOADING } as Action
}

export function setUserListFailure(): Action {
    return { type:  USER_LIST_FAIL} as Action
}
export function setUserList(userList: any): GetUserListAction {
    return {
        type: USER_LIST_SUCCESS,
        userList: Object.assign([], userList)
    } as GetUserListAction
}
export function loadUserList(dispatch: any): void {
    dispatch(userListBeginLoading())
    axios.get('/users/all')
      .then((response) => {
          dispatch(setUserList(response.data.users))
          dispatch(userListEndLoading())
      })
      .catch((err) => {
          dispatch(setUserListFailure())
          dispatch(userListEndLoading())
      })
}

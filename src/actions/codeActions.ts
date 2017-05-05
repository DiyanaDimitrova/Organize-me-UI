import axios from 'axios'
import {  } from '../main/codeMain'
import { Action } from 'redux'
export const LIST_INVITED_BEGIN_LOADING = '@@Code/LIST_INVITED_BEGIN_LOADING'
export const LIST_INVITED_END_LOADING = '@@Code/LIST_INVITED_END_LOADING'
export const LIST_INVITED_SUCCESS = '@@Code/LIST_INVITED_SUCCESS'
export const LIST_INVITED_FAIL = '@@Code/LIST_INVITED_FAIL'

export interface GetAllInvitedAction extends Action {
    invitedPeopleList: Array<any>
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
          console.log(response)
          dispatch(setListInvited(response.data.invitedPeople))
          dispatch(listInvitedEndLoading())
      })
      .catch((err) => {
          dispatch(setListInvitedFailure())
          dispatch(listInvitedEndLoading())
      })
}

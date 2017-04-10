import axios from 'axios'
// import { browserHistory } from 'react-router'
import { CreateCategoryRequest } from '../main/categoryMain'
import { Action } from 'redux'
export const NEW_CATEGORY_SUCCESS = '@@Category/NEW_CATEGORY_SUCCESS'
export const NEW_CATEGORY_FAIL = '@@Category/NEW_CATEGORY_FAIL'

export interface NewCategoryAction extends Action {
    createCategoryMessage: string
}


export function createCategorySuccessAction(message: string): NewCategoryAction {
    return {
        type: NEW_CATEGORY_SUCCESS,
        createCategoryMessage: message
    } as NewCategoryAction
}

export function createCategoryFailAction(message: string): NewCategoryAction {
    return {
        type: NEW_CATEGORY_FAIL,
        createCategoryMessage: message
    } as NewCategoryAction
}

export function performCreateCategoryAction(request: CreateCategoryRequest, dispatch: any): void {
    axios.post('/category/add', request)
      .then((response) => {
          dispatch(createCategorySuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(createCategoryFailAction(err.response.data.response))
      })
}

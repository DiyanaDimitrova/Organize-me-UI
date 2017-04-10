import { Action } from 'redux'
import * as r from '../reducers/categoryReducer'
import * as a from '../actions/categoryActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface CreateCategoryRequest {
    title: string
}

export interface CategoryState {
    newCategoryMessage: string
}

export const initialState: CategoryState = {
    newCategoryMessage: null
}

const reducers = {
    [a.NEW_CATEGORY_SUCCESS]: r.newCategorySuccessReducer,
    [a.NEW_CATEGORY_FAIL]: r.newCategoryFailReducer
}


export function categoryReducer(state: CategoryState = initialState, action: Action): CategoryState {
    if ( action.type === LOGIN_SUCCESS) {
      state = initialState
    }
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}

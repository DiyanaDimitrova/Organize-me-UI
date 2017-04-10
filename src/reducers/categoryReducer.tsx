import { CategoryState } from '../main/categoryMain'
import { Action } from 'redux'
import * as actions from '../actions/categoryActions'

export function newCategorySuccessReducer(state: CategoryState, action: actions.NewCategoryAction): CategoryState {
    if (action.type === actions.NEW_CATEGORY_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.newCategoryMessage = action.createCategoryMessage
        return newState
    } else {
        return state
    }
}

export function newCategoryFailReducer(state: CategoryState, action: actions.NewCategoryAction): CategoryState {
    if (action.type === actions.NEW_CATEGORY_FAIL) {
        let newState = Object.assign({}, state)
        newState.newCategoryMessage = action.createCategoryMessage
        return newState
      } else {
        return state
    }
}

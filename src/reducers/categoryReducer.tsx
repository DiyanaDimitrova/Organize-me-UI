import { CategoryState } from '../main/categoryMain'
import { Action } from 'redux'
import * as actions from '../actions/categoryActions'

export function newCategorySuccessReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.NEW_CATEGORY_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.newCategoryMessage = action.categoryMessage
        return newState
    } else {
        return state
    }
}

export function newCategoryFailReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.NEW_CATEGORY_FAIL) {
        let newState = Object.assign({}, state)
        newState.newCategoryMessage = action.categoryMessage
        return newState
      } else {
        return state
    }
}

export function deleteCategorySuccessReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.DELETE_CATEGORY_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.deleteCategoryMessage = action.categoryMessage
        return newState
    } else {
        return state
    }
}

export function deleteCategoryFailReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.DELETE_CATEGORY_FAIL) {
        let newState = Object.assign({}, state)
        newState.deleteCategoryMessage = action.categoryMessage
        return newState
      } else {
        return state
    }
}

export function updateCategorySuccessReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.UPDATE_CATEGORY_SUCCESS) {
        let newState = Object.assign({}, state)
        newState.updateCategoryMessage = action.categoryMessage
        newState.currentItem = null
        newState.itemToBeEdited = false
        return newState
    } else {
        return state
    }
}

export function updateCategoryFailReducer(state: CategoryState, action: actions.CategoryAction): CategoryState {
    if (action.type === actions.UPDATE_CATEGORY_FAIL) {
        let newState = Object.assign({}, state)
        newState.updateCategoryMessage = action.categoryMessage
        newState.currentItem = null
        newState.itemToBeEdited = false
        return newState
      } else {
        return state
    }
}

export function categoriesListBeginLoadingActionReducer(state: CategoryState, action: Action): CategoryState {
    if (action.type === actions.CATEGORIES_LIST_BEGIN_LOADING) {
        let newState = Object.assign({}, state)
        newState.categoriesListLoading = true
        return newState
    } else {
        return state
    }
}

export function categoriesListEndLoadingActionReducer(state: CategoryState, action: Action): CategoryState {
    if (action.type === actions.CATEGORIES_LIST_END_LOADING) {
        let newState = Object.assign({}, state)
        newState.categoriesListLoading = false
        return newState
    } else {
        return state
    }
}
export function setCategoriesListActionReducer(state: CategoryState, action: Action): CategoryState {
    if (action.type === actions.GET_CATEGORIES_LIST) {
        let _action = action as actions.GetAllCategoriesAction
        let newState = Object.assign({}, state)
        newState.categoriesList = Object.assign({}, _action.categoriesList)
        newState.success = true
        return newState
    } else {
        return state
    }
}
export function setCategoriesListFailureActionReducer(state: CategoryState, action: Action): CategoryState {
    if (action.type === actions.GET_CATEGORIES_LIST_FAILURE) {
        let newState = Object.assign({}, state)
        newState.success = false
        return newState
    } else {
        return state
    }
}

export function setCurrentItemReducer(state: CategoryState, action: Action): CategoryState {
    if (action.type === actions.SET_CURRENT_ITEM) {
        let _action = action as actions.CurrentItemAction
        let newState = Object.assign({}, state)
        newState.currentItem = Object.assign({}, _action.currentItem)
        newState.itemToBeEdited = true
        return newState
    } else {
        return state
    }
}

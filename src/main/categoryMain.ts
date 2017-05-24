import { Action } from 'redux'
import * as r from '../reducers/categoryReducer'
import * as a from '../actions/categoryActions'
import { LOGIN_SUCCESS } from '../actions/loginActions'

export interface CreateCategoryRequest {
    title: String
    user: String
}
export interface DeleteCategoryRequest {
    id: String
    user: String
}
export interface UpdateCategoryRequest {
    _id: String
    title: String
    user: String
}
export interface CategoryState {
    newCategoryMessage: String,
    deleteCategoryMessage: String,
    updateCategoryMessage: String,
    categoriesListLoading: Boolean,
    success: Boolean,
    categoriesList: Array<any>,
    currentItem: Object,
    itemToBeEdited: Boolean
}

export const initialState: CategoryState = {
    newCategoryMessage: null,
    deleteCategoryMessage: null,
    updateCategoryMessage: null,
    categoriesListLoading: false,
    success: false,
    categoriesList: [],
    currentItem: null,
    itemToBeEdited: false
}

const reducers = {
    [a.NEW_CATEGORY_SUCCESS]: r.newCategorySuccessReducer,
    [a.NEW_CATEGORY_FAIL]: r.newCategoryFailReducer,
    [a.CATEGORIES_LIST_BEGIN_LOADING]: r.categoriesListBeginLoadingActionReducer,
    [a.CATEGORIES_LIST_END_LOADING]: r.categoriesListEndLoadingActionReducer,
    [a.GET_CATEGORIES_LIST_FAILURE]: r.setCategoriesListFailureActionReducer,
    [a.GET_CATEGORIES_LIST]: r.setCategoriesListActionReducer,
    [a.DELETE_CATEGORY_SUCCESS]: r.deleteCategorySuccessReducer,
    [a.DELETE_CATEGORY_FAIL]: r.deleteCategoryFailReducer,
    [a.UPDATE_CATEGORY_SUCCESS]: r.updateCategorySuccessReducer,
    [a.UPDATE_CATEGORY_FAIL]: r.updateCategoryFailReducer,
    [a.SET_CURRENT_ITEM]: r.setCurrentItemReducer,
    [a.SET_CURRENT_ITEM_FAIL]: r.setCurrentItemFailReducer
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

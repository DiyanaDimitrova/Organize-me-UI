import axios from 'axios'
// import { browserHistory } from 'react-router'
import { CreateCategoryRequest, DeleteCategoryRequest, UpdateCategoryRequest } from '../main/categoryMain'
import { Action } from 'redux'
export const NEW_CATEGORY_SUCCESS = '@@Category/NEW_CATEGORY_SUCCESS'
export const NEW_CATEGORY_FAIL = '@@Category/NEW_CATEGORY_FAIL'
export const CATEGORIES_LIST_BEGIN_LOADING = '@@Category/CATEGORIES_LIST_BEGIN_LOADING'
export const CATEGORIES_LIST_END_LOADING = '@@Category/CATEGORIES_LIST_END_LOADING'
export const GET_CATEGORIES_LIST = '@@Category/GET_CATEGORIES_LIST'
export const GET_CATEGORIES_LIST_FAILURE = '@@Category/GET_CATEGORIES_LIST_FAILURE'
export const DELETE_CATEGORY_SUCCESS = '@@Category/DELETE_CATEGORY_SUCCESS'
export const DELETE_CATEGORY_FAIL = '@@Category/DELETE_CATEGORY_FAIL'
export const UPDATE_CATEGORY_SUCCESS = '@@Category/UPDATE_CATEGORY_SUCCESS'
export const UPDATE_CATEGORY_FAIL = '@@Category/UPDATE_CATEGORY_FAIL'
export const SET_CURRENT_ITEM = '@@Category/SET_CURRENT_ITEM'
export const SET_CURRENT_ITEM_FAIL = '@@Category/SET_CURRENT_ITEM_FAIL'
export interface CategoryAction extends Action {
    categoryMessage: String
}

export interface GetAllCategoriesAction extends Action {
    categoriesList: Array<any>
}

export interface CurrentItemAction extends Action {
    currentItem: Object
}

export function createCategorySuccessAction(categoryMessage: String): CategoryAction {
    return {
        type: NEW_CATEGORY_SUCCESS,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function createCategoryFailAction(categoryMessage: String): CategoryAction {
    return {
        type: NEW_CATEGORY_FAIL,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function deleteCategorySuccessAction(categoryMessage: String): CategoryAction {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function deleteCategoryFailAction(categoryMessage: String): CategoryAction {
    return {
        type: DELETE_CATEGORY_FAIL,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function updateCategorySuccessAction(categoryMessage: String): CategoryAction {
    return {
        type: UPDATE_CATEGORY_SUCCESS,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function updateCategoryFailAction(categoryMessage: String): CategoryAction {
    return {
        type: UPDATE_CATEGORY_FAIL,
        categoryMessage: categoryMessage
    } as CategoryAction
}

export function setCurrentItemAction(currentItem: Object): CurrentItemAction {
    return {
        type: SET_CURRENT_ITEM,
        currentItem: currentItem
    } as CurrentItemAction
}

export function setCurrentItemFailAction(currentItem: Object): CurrentItemAction {
    return {
        type: SET_CURRENT_ITEM_FAIL,
        currentItem: currentItem
    } as CurrentItemAction
}
export function setCurrentItem(id: String, dispatch: any): void {
    axios.get('/category/' + id)
      .then((response) => {
          dispatch(setCurrentItemAction(response.data.category))
      })
      .catch((err) => {
          dispatch(setCurrentItemFailAction(err.response.data.category))
      })
}
export function categoriesListBeginLoading(): Action {
    return { type: CATEGORIES_LIST_BEGIN_LOADING } as Action
}
export function categoriesListEndLoading(): Action {
    return { type: CATEGORIES_LIST_END_LOADING } as Action
}

export function setCategoriesListFailure(): Action {
    return { type: GET_CATEGORIES_LIST_FAILURE } as Action
}
export function setCategoriesList(categoryList: any): GetAllCategoriesAction {
    return {
        type: GET_CATEGORIES_LIST,
        categoriesList: (<any>Object).assign([], categoryList)
    } as GetAllCategoriesAction
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

export function performDeleteCategoryAction(request: DeleteCategoryRequest, dispatch: any): void {
    let reqBody = {
      user: request.user
    }
    axios.delete('/category/delete/' + request.id)
      .then((response) => {
          dispatch(deleteCategorySuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(deleteCategoryFailAction(err.response.data.response))
      })
}
export function performUpdateCategoryAction(request: UpdateCategoryRequest, dispatch: any): void {
    let reqBody = {
      title: request.title,
      user: request.user
    }
    axios.put('/category/update/' + request._id, reqBody)
      .then((response) => {
          dispatch(updateCategorySuccessAction(response.data.response))
      })
      .catch((err) => {
          dispatch(updateCategoryFailAction(err.response.data.response))
      })
}
export function loadCategoriesList(dispatch: any): void {
    dispatch(categoriesListBeginLoading())
    axios.get('/category/all')
      .then((response) => {
          dispatch(setCategoriesList(response.data.categories))
          dispatch(categoriesListEndLoading())
      })
      .catch((err) => {
          dispatch(setCategoriesListFailure())
          dispatch(categoriesListEndLoading())
      })
}

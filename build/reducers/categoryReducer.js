"use strict";
var actions = require("../actions/categoryActions");
function newCategorySuccessReducer(state, action) {
    if (action.type === actions.NEW_CATEGORY_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.newCategoryMessage = action.categoryMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.newCategorySuccessReducer = newCategorySuccessReducer;
function newCategoryFailReducer(state, action) {
    if (action.type === actions.NEW_CATEGORY_FAIL) {
        var newState = Object.assign({}, state);
        newState.newCategoryMessage = action.categoryMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.newCategoryFailReducer = newCategoryFailReducer;
function deleteCategorySuccessReducer(state, action) {
    if (action.type === actions.DELETE_CATEGORY_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.deleteCategoryMessage = action.categoryMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.deleteCategorySuccessReducer = deleteCategorySuccessReducer;
function deleteCategoryFailReducer(state, action) {
    if (action.type === actions.DELETE_CATEGORY_FAIL) {
        var newState = Object.assign({}, state);
        newState.deleteCategoryMessage = action.categoryMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.deleteCategoryFailReducer = deleteCategoryFailReducer;
function updateCategorySuccessReducer(state, action) {
    if (action.type === actions.UPDATE_CATEGORY_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.updateCategoryMessage = action.categoryMessage;
        newState.currentItem = null;
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.updateCategorySuccessReducer = updateCategorySuccessReducer;
function updateCategoryFailReducer(state, action) {
    if (action.type === actions.UPDATE_CATEGORY_FAIL) {
        var newState = Object.assign({}, state);
        newState.updateCategoryMessage = action.categoryMessage;
        newState.currentItem = null;
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.updateCategoryFailReducer = updateCategoryFailReducer;
function categoriesListBeginLoadingActionReducer(state, action) {
    if (action.type === actions.CATEGORIES_LIST_BEGIN_LOADING) {
        var newState = Object.assign({}, state);
        newState.categoriesListLoading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.categoriesListBeginLoadingActionReducer = categoriesListBeginLoadingActionReducer;
function categoriesListEndLoadingActionReducer(state, action) {
    if (action.type === actions.CATEGORIES_LIST_END_LOADING) {
        var newState = Object.assign({}, state);
        newState.categoriesListLoading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.categoriesListEndLoadingActionReducer = categoriesListEndLoadingActionReducer;
function setCategoriesListActionReducer(state, action) {
    if (action.type === actions.GET_CATEGORIES_LIST) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.categoriesList = Object.assign({}, _action.categoriesList);
        newState.success = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCategoriesListActionReducer = setCategoriesListActionReducer;
function setCategoriesListFailureActionReducer(state, action) {
    if (action.type === actions.GET_CATEGORIES_LIST_FAILURE) {
        var newState = Object.assign({}, state);
        newState.success = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCategoriesListFailureActionReducer = setCategoriesListFailureActionReducer;
function setCurrentItemReducer(state, action) {
    if (action.type === actions.SET_CURRENT_ITEM) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.currentItem = Object.assign({}, _action.currentItem);
        newState.itemToBeEdited = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCurrentItemReducer = setCurrentItemReducer;
function setCurrentItemFailReducer(state, action) {
    if (action.type === actions.SET_CURRENT_ITEM_FAIL) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.currentItem = Object.assign({}, _action.currentItem);
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCurrentItemFailReducer = setCurrentItemFailReducer;
//# sourceMappingURL=categoryReducer.js.map
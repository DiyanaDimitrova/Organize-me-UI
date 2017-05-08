"use strict";
var r = require("../reducers/categoryReducer");
var a = require("../actions/categoryActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    newCategoryMessage: null,
    deleteCategoryMessage: null,
    updateCategoryMessage: null,
    categoriesListLoading: false,
    success: false,
    categoriesList: [],
    currentItem: null,
    itemToBeEdited: false
};
var reducers = (_a = {},
    _a[a.NEW_CATEGORY_SUCCESS] = r.newCategorySuccessReducer,
    _a[a.NEW_CATEGORY_FAIL] = r.newCategoryFailReducer,
    _a[a.CATEGORIES_LIST_BEGIN_LOADING] = r.categoriesListBeginLoadingActionReducer,
    _a[a.CATEGORIES_LIST_END_LOADING] = r.categoriesListEndLoadingActionReducer,
    _a[a.GET_CATEGORIES_LIST_FAILURE] = r.setCategoriesListFailureActionReducer,
    _a[a.GET_CATEGORIES_LIST] = r.setCategoriesListActionReducer,
    _a[a.DELETE_CATEGORY_SUCCESS] = r.deleteCategorySuccessReducer,
    _a[a.DELETE_CATEGORY_FAIL] = r.deleteCategoryFailReducer,
    _a[a.UPDATE_CATEGORY_SUCCESS] = r.updateCategorySuccessReducer,
    _a[a.UPDATE_CATEGORY_FAIL] = r.updateCategoryFailReducer,
    _a[a.SET_CURRENT_ITEM] = r.setCurrentItemReducer,
    _a[a.SET_CURRENT_ITEM_FAIL] = r.setCurrentItemFailReducer,
    _a);
function categoryReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    if (action.type === loginActions_1.LOGIN_SUCCESS) {
        state = exports.initialState;
    }
    var reducer = reducers[action.type];
    if (reducer) {
        return reducer(state, action);
    }
    return state;
}
exports.categoryReducer = categoryReducer;
var _a;
//# sourceMappingURL=categoryMain.js.map
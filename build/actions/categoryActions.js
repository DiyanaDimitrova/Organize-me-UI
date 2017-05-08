"use strict";
var axios_1 = require("axios");
exports.NEW_CATEGORY_SUCCESS = '@@Category/NEW_CATEGORY_SUCCESS';
exports.NEW_CATEGORY_FAIL = '@@Category/NEW_CATEGORY_FAIL';
exports.CATEGORIES_LIST_BEGIN_LOADING = '@@Category/CATEGORIES_LIST_BEGIN_LOADING';
exports.CATEGORIES_LIST_END_LOADING = '@@Category/CATEGORIES_LIST_END_LOADING';
exports.GET_CATEGORIES_LIST = '@@Category/GET_CATEGORIES_LIST';
exports.GET_CATEGORIES_LIST_FAILURE = '@@Category/GET_CATEGORIES_LIST_FAILURE';
exports.DELETE_CATEGORY_SUCCESS = '@@Category/DELETE_CATEGORY_SUCCESS';
exports.DELETE_CATEGORY_FAIL = '@@Category/DELETE_CATEGORY_FAIL';
exports.UPDATE_CATEGORY_SUCCESS = '@@Category/UPDATE_CATEGORY_SUCCESS';
exports.UPDATE_CATEGORY_FAIL = '@@Category/UPDATE_CATEGORY_FAIL';
exports.SET_CURRENT_ITEM = '@@Category/SET_CURRENT_ITEM';
exports.SET_CURRENT_ITEM_FAIL = '@@Category/SET_CURRENT_ITEM_FAIL';
function createCategorySuccessAction(message) {
    return {
        type: exports.NEW_CATEGORY_SUCCESS,
        categoryMessage: message
    };
}
exports.createCategorySuccessAction = createCategorySuccessAction;
function createCategoryFailAction(message) {
    return {
        type: exports.NEW_CATEGORY_FAIL,
        categoryMessage: message
    };
}
exports.createCategoryFailAction = createCategoryFailAction;
function deleteCategorySuccessAction(message) {
    return {
        type: exports.DELETE_CATEGORY_SUCCESS,
        categoryMessage: message
    };
}
exports.deleteCategorySuccessAction = deleteCategorySuccessAction;
function deleteCategoryFailAction(message) {
    return {
        type: exports.DELETE_CATEGORY_FAIL,
        categoryMessage: message
    };
}
exports.deleteCategoryFailAction = deleteCategoryFailAction;
function updateCategorySuccessAction(message) {
    return {
        type: exports.UPDATE_CATEGORY_SUCCESS,
        categoryMessage: message
    };
}
exports.updateCategorySuccessAction = updateCategorySuccessAction;
function updateCategoryFailAction(message) {
    return {
        type: exports.UPDATE_CATEGORY_FAIL,
        categoryMessage: message
    };
}
exports.updateCategoryFailAction = updateCategoryFailAction;
function setCurrentItemAction(currentItem) {
    return {
        type: exports.SET_CURRENT_ITEM,
        currentItem: currentItem
    };
}
exports.setCurrentItemAction = setCurrentItemAction;
function setCurrentItemFailAction(currentItem) {
    return {
        type: exports.SET_CURRENT_ITEM_FAIL,
        currentItem: currentItem
    };
}
exports.setCurrentItemFailAction = setCurrentItemFailAction;
function setCurrentItem(id, dispatch) {
    axios_1.default.get('/category/' + id)
        .then(function (response) {
        dispatch(setCurrentItemAction(response.data.category));
    })
        .catch(function (err) {
        dispatch(setCurrentItemFailAction(err.response.data.category));
    });
}
exports.setCurrentItem = setCurrentItem;
function categoriesListBeginLoading() {
    return { type: exports.CATEGORIES_LIST_BEGIN_LOADING };
}
exports.categoriesListBeginLoading = categoriesListBeginLoading;
function categoriesListEndLoading() {
    return { type: exports.CATEGORIES_LIST_END_LOADING };
}
exports.categoriesListEndLoading = categoriesListEndLoading;
function setCategoriesListFailure() {
    return { type: exports.GET_CATEGORIES_LIST_FAILURE };
}
exports.setCategoriesListFailure = setCategoriesListFailure;
function setCategoriesList(categoryList) {
    return {
        type: exports.GET_CATEGORIES_LIST,
        categoriesList: Object.assign([], categoryList),
    };
}
exports.setCategoriesList = setCategoriesList;
function performCreateCategoryAction(request, dispatch) {
    axios_1.default.post('/category/add', request)
        .then(function (response) {
        dispatch(createCategorySuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(createCategoryFailAction(err.response.data.response));
    });
}
exports.performCreateCategoryAction = performCreateCategoryAction;
function performDeleteCategoryAction(request, dispatch) {
    axios_1.default.delete('/category/delete/' + request.id)
        .then(function (response) {
        dispatch(deleteCategorySuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(deleteCategoryFailAction(err.response.data.response));
    });
}
exports.performDeleteCategoryAction = performDeleteCategoryAction;
function performUpdateCategoryAction(request, dispatch) {
    var reqBody = {
        title: request.title
    };
    axios_1.default.put('/category/update/' + request.id, reqBody)
        .then(function (response) {
        dispatch(updateCategorySuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(updateCategoryFailAction(err.response.data.response));
    });
}
exports.performUpdateCategoryAction = performUpdateCategoryAction;
function loadCategoriesList(dispatch) {
    dispatch(categoriesListBeginLoading());
    axios_1.default.get('/category/all')
        .then(function (response) {
        dispatch(setCategoriesList(response.data.categories));
        dispatch(categoriesListEndLoading());
    })
        .catch(function (err) {
        dispatch(setCategoriesListFailure());
        dispatch(categoriesListEndLoading());
    });
}
exports.loadCategoriesList = loadCategoriesList;
//# sourceMappingURL=categoryActions.js.map
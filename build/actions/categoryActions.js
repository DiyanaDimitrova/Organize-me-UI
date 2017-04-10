"use strict";
var axios_1 = require("axios");
exports.NEW_CATEGORY_SUCCESS = '@@Category/NEW_CATEGORY_SUCCESS';
exports.NEW_CATEGORY_FAIL = '@@Category/NEW_CATEGORY_FAIL';
function createCategorySuccessAction(message) {
    return {
        type: exports.NEW_CATEGORY_SUCCESS,
        createCategoryMessage: message
    };
}
exports.createCategorySuccessAction = createCategorySuccessAction;
function createCategoryFailAction(message) {
    return {
        type: exports.NEW_CATEGORY_FAIL,
        createCategoryMessage: message
    };
}
exports.createCategoryFailAction = createCategoryFailAction;
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
//# sourceMappingURL=categoryActions.js.map
"use strict";
var actions = require("../actions/categoryActions");
function newCategorySuccessReducer(state, action) {
    if (action.type === actions.NEW_CATEGORY_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.newCategoryMessage = action.createCategoryMessage;
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
        newState.newCategoryMessage = action.createCategoryMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.newCategoryFailReducer = newCategoryFailReducer;
//# sourceMappingURL=categoryReducer.js.map
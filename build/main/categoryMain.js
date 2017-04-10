"use strict";
var r = require("../reducers/categoryReducer");
var a = require("../actions/categoryActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    newCategoryMessage: null
};
var reducers = (_a = {},
    _a[a.NEW_CATEGORY_SUCCESS] = r.newCategorySuccessReducer,
    _a[a.NEW_CATEGORY_FAIL] = r.newCategoryFailReducer,
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
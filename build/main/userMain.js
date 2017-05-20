"use strict";
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {};
var reducers = {};
function loginReducer(state, action) {
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
exports.loginReducer = loginReducer;
//# sourceMappingURL=userMain.js.map
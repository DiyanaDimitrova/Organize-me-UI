"use strict";
var r = require("../reducers/loginReducer");
var a = require("../actions/loginActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    login: false,
    signup: false,
    user: undefined,
    loading: false,
    error: false,
    messages: []
};
var reducers = (_a = {},
    _a[a.LOGIN_SUCCESS] = r.loginSuccessReducer,
    _a[a.LOGIN_FAIL] = r.loginFailReducer,
    _a[a.DISMISS] = r.dismissReducer,
    _a[a.SIGNUP_SUCCESS] = r.signupSuccessReducer,
    _a[a.SIGNUP_FAIL] = r.signupFailReducer,
    _a[a.BEGIN_LOADING_LOGIN] = r.beginLoadingLoginReducer,
    _a[a.END_LOADING_LOGIN] = r.endLoadingLoginReducer,
    _a);
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
var _a;
//# sourceMappingURL=loginMain.js.map
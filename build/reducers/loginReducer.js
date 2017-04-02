"use strict";
var actions = require("../actions/loginActions");
function loginSuccessReducer(state, action) {
    if (action.type === actions.LOGIN_SUCCESS) {
        console.log('SUCCESS' + JSON.stringify(action));
        var newState = Object.assign({}, state);
        newState.login = true;
        newState.error = false;
        newState.messages = action.payload.messages;
        newState.user = action.payload.user;
        return newState;
    }
    else {
        return state;
    }
}
exports.loginSuccessReducer = loginSuccessReducer;
function loginFailReducer(state, action) {
    if (action.type === actions.LOGIN_FAIL) {
        console.log('FAIL' + JSON.stringify(action));
        var newState = Object.assign({}, state);
        newState.login = false;
        newState.error = true;
        newState.messages = action.payload.messages;
        return newState;
    }
    else {
        return state;
    }
}
exports.loginFailReducer = loginFailReducer;
function dismissReducer(state, action) {
    if (action.type === actions.DISMISS) {
        var newState = Object.assign({}, state);
        newState.error = false;
        newState.messages = [];
        return newState;
    }
    else {
        return state;
    }
}
exports.dismissReducer = dismissReducer;
function signupSuccessReducer(state, action) {
    if (action.type === actions.SIGNUP_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.signup = true;
        newState.error = false;
        newState.messages = action.payload.messages;
        return newState;
    }
    else {
        return state;
    }
}
exports.signupSuccessReducer = signupSuccessReducer;
function signupFailReducer(state, action) {
    if (action.type === actions.SIGNUP_FAIL) {
        var newState = Object.assign({}, state);
        newState.signup = false;
        newState.error = true;
        newState.messages = action.payload.messages;
        return newState;
    }
    else {
        return state;
    }
}
exports.signupFailReducer = signupFailReducer;
function beginLoadingLoginReducer(state, action) {
    if (action.type === actions.BEGIN_LOADING_LOGIN) {
        var newState = Object.assign({}, state);
        newState.loading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.beginLoadingLoginReducer = beginLoadingLoginReducer;
function endLoadingLoginReducer(state, action) {
    if (action.type === actions.END_LOADING_LOGIN) {
        var newState = Object.assign({}, state);
        newState.loading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.endLoadingLoginReducer = endLoadingLoginReducer;
//# sourceMappingURL=loginReducer.js.map
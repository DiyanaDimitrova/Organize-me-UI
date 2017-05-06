"use strict";
var actions = require("../actions/codeActions");
function listInvitedBeginLoadingReducer(state, action) {
    if (action.type === actions.LIST_INVITED_BEGIN_LOADING) {
        var newState = Object.assign({}, state);
        newState.listInvitedLoading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.listInvitedBeginLoadingReducer = listInvitedBeginLoadingReducer;
function listInvitedEndLoadingReducer(state, action) {
    if (action.type === actions.LIST_INVITED_END_LOADING) {
        var newState = Object.assign({}, state);
        newState.listInvitedLoading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.listInvitedEndLoadingReducer = listInvitedEndLoadingReducer;
function listInvitedSuccessReducer(state, action) {
    if (action.type === actions.LIST_INVITED_SUCCESS) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.invitedPeopleList = Object.assign([], _action.invitedPeopleList);
        newState.success = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.listInvitedSuccessReducer = listInvitedSuccessReducer;
function listInvitedFailReducer(state, action) {
    if (action.type === actions.LIST_INVITED_FAIL) {
        var newState = Object.assign({}, state);
        newState.invitedPeopleList = null;
        newState.success = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.listInvitedFailReducer = listInvitedFailReducer;
function sendCodeSuccessReducer(state, action) {
    if (action.type === actions.SEND_CODE_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.sendCodeToUsersMessage = action.sendCodeMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.sendCodeSuccessReducer = sendCodeSuccessReducer;
function sendCodeFailReducer(state, action) {
    if (action.type === actions.SEND_CODE_FAIL) {
        var newState = Object.assign({}, state);
        newState.sendCodeToUsersMessage = action.sendCodeMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.sendCodeFailReducer = sendCodeFailReducer;
function scanCodeSuccessReducer(state, action) {
    if (action.type === actions.SCAN_CODE_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.scanCodeMessage = action.scanCodeMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.scanCodeSuccessReducer = scanCodeSuccessReducer;
function scanCodeFailReducer(state, action) {
    if (action.type === actions.SCAN_CODE_FAIL) {
        var newState = Object.assign({}, state);
        newState.scanCodeMessage = action.scanCodeMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.scanCodeFailReducer = scanCodeFailReducer;
//# sourceMappingURL=codeReducer.js.map
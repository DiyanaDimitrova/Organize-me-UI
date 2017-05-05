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
//# sourceMappingURL=codeReducer.js.map
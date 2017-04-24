"use strict";
var actions = require("../actions/eventActions");
function newEventSuccessReducer(state, action) {
    if (action.type === actions.NEW_EVENT_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.newEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.newEventSuccessReducer = newEventSuccessReducer;
function newEventFailReducer(state, action) {
    if (action.type === actions.NEW_EVENT_FAIL) {
        var newState = Object.assign({}, state);
        newState.newEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.newEventFailReducer = newEventFailReducer;
function deleteEventSuccessReducer(state, action) {
    if (action.type === actions.DELETE_EVENT_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.deleteEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.deleteEventSuccessReducer = deleteEventSuccessReducer;
function deleteEventFailReducer(state, action) {
    if (action.type === actions.DELETE_EVENT_FAIL) {
        var newState = Object.assign({}, state);
        newState.deleteEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.deleteEventFailReducer = deleteEventFailReducer;
function updateEventSuccessReducer(state, action) {
    if (action.type === actions.UPDATE_EVENT_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.updateEventMessage = action.eventMessage;
        newState.currentItem = null;
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.updateEventSuccessReducer = updateEventSuccessReducer;
function updateEventFailReducer(state, action) {
    if (action.type === actions.UPDATE_EVENT_FAIL) {
        var newState = Object.assign({}, state);
        newState.updateEventMessage = action.eventMessage;
        newState.currentItem = null;
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.updateEventFailReducer = updateEventFailReducer;
function eventListBeginLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_LIST_BEGIN_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventListLoading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventListBeginLoadingActionReducer = eventListBeginLoadingActionReducer;
function eventListEndLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_LIST_END_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventListLoading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventListEndLoadingActionReducer = eventListEndLoadingActionReducer;
function setEventListActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_LIST) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.eventList = Object.assign({}, _action.eventList);
        newState.success = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.setEventListActionReducer = setEventListActionReducer;
function setEventListFailureActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_LIST_FAILURE) {
        var newState = Object.assign({}, state);
        newState.success = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.setEventListFailureActionReducer = setEventListFailureActionReducer;
function setCurrentItemReducer(state, action) {
    if (action.type === actions.SET_CURRENT_ITEM) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.currentItem = Object.assign({}, _action.currentItem);
        newState.itemToBeEdited = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCurrentItemReducer = setCurrentItemReducer;
//# sourceMappingURL=eventReducer.js.map
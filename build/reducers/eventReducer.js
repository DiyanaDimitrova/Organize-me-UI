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
function eventImageBeginLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_IMAGE_BEGIN_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventImageLoading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventImageBeginLoadingActionReducer = eventImageBeginLoadingActionReducer;
function eventImageEndLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_IMAGE_END_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventImageLoading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventImageEndLoadingActionReducer = eventImageEndLoadingActionReducer;
function eventDetailsBeginLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_DETAILS_BEGIN_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventDetailsLoading = true;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventDetailsBeginLoadingActionReducer = eventDetailsBeginLoadingActionReducer;
function eventDetailsEndLoadingActionReducer(state, action) {
    if (action.type === actions.EVENT_DETAILS_END_LOADING) {
        var newState = Object.assign({}, state);
        newState.eventDetailsLoading = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.eventDetailsEndLoadingActionReducer = eventDetailsEndLoadingActionReducer;
function setEventListActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_LIST) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.eventList = Object.assign([], _action.eventList);
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
        newState.eventList = [];
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
function setCurrentItemFailReducer(state, action) {
    if (action.type === actions.SET_CURRENT_ITEM_FAIL) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.currentItem = Object.assign({}, _action.currentItem);
        newState.itemToBeEdited = false;
        return newState;
    }
    else {
        return state;
    }
}
exports.setCurrentItemFailReducer = setCurrentItemFailReducer;
function getEventImageActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_IMAGE) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.itemToView.image = _action.image;
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventImageActionReducer = getEventImageActionReducer;
function getEventImageFailureActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_IMAGE_FAILURE) {
        var newState = Object.assign({}, state);
        newState.itemToView.image = null;
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventImageFailureActionReducer = getEventImageFailureActionReducer;
function getEventImageArrayActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_IMAGE_ARRAY) {
        var _action = action;
        var newState = Object.assign({}, state);
        var image = {
            image: _action.image,
            id: _action.id
        };
        var didi = Object.assign([state.images], image);
        newState.images = (state.images || []).concat([image]);
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventImageArrayActionReducer = getEventImageArrayActionReducer;
function getEventImageArrayFailureActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_IMAGE_ARRAY_FAILURE) {
        var newState = Object.assign({}, state);
        newState.images = null;
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventImageArrayFailureActionReducer = getEventImageArrayFailureActionReducer;
function getEventDetailsActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_DETAILS) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.itemToView.details = Object.assign({}, _action.details);
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventDetailsActionReducer = getEventDetailsActionReducer;
function getEventDetailsFailureActionReducer(state, action) {
    if (action.type === actions.GET_EVENT_DETAILS_FAILURE) {
        var newState = Object.assign({}, state);
        newState.itemToView.details = null;
        return newState;
    }
    else {
        return state;
    }
}
exports.getEventDetailsFailureActionReducer = getEventDetailsFailureActionReducer;
function setDisplayedItemActionReducer(state, action) {
    if (action.type === actions.SET_DISPLAYED_ITEM) {
        var _action = action;
        var newState = Object.assign({}, state);
        newState.displayedItem = _action.displayedItem;
        return newState;
    }
    else {
        return state;
    }
}
exports.setDisplayedItemActionReducer = setDisplayedItemActionReducer;
function attendEventSuccessReducer(state, action) {
    if (action.type === actions.ATTEND_EVENT_SUCCESS) {
        var newState = Object.assign({}, state);
        newState.attendEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.attendEventSuccessReducer = attendEventSuccessReducer;
function attendEventFailReducer(state, action) {
    if (action.type === actions.ATTEND_EVENT_FAIL) {
        var newState = Object.assign({}, state);
        newState.attendEventMessage = action.eventMessage;
        return newState;
    }
    else {
        return state;
    }
}
exports.attendEventFailReducer = attendEventFailReducer;
//# sourceMappingURL=eventReducer.js.map
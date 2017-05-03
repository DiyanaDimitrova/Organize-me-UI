"use strict";
var r = require("../reducers/eventReducer");
var a = require("../actions/eventActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    newEventMessage: null,
    deleteEventMessage: null,
    updateEventMessage: null,
    eventListLoading: false,
    success: false,
    eventList: [],
    currentItem: null,
    itemToBeEdited: false,
    displayedItem: null,
    itemToView: {
        image: null,
        details: null
    }
};
var reducers = (_a = {},
    _a[a.NEW_EVENT_SUCCESS] = r.newEventSuccessReducer,
    _a[a.NEW_EVENT_FAIL] = r.newEventFailReducer,
    _a[a.EVENT_LIST_BEGIN_LOADING] = r.eventListBeginLoadingActionReducer,
    _a[a.EVENT_LIST_END_LOADING] = r.eventListEndLoadingActionReducer,
    _a[a.GET_EVENT_LIST_FAILURE] = r.setEventListFailureActionReducer,
    _a[a.GET_EVENT_LIST] = r.setEventListActionReducer,
    _a[a.DELETE_EVENT_SUCCESS] = r.deleteEventSuccessReducer,
    _a[a.DELETE_EVENT_FAIL] = r.deleteEventFailReducer,
    _a[a.UPDATE_EVENT_SUCCESS] = r.updateEventSuccessReducer,
    _a[a.UPDATE_EVENT_FAIL] = r.updateEventFailReducer,
    _a[a.SET_CURRENT_ITEM] = r.setCurrentItemReducer,
    _a[a.GET_EVENT_IMAGE_FAILURE] = r.getEventImageFailureActionReducer,
    _a[a.GET_EVENT_IMAGE] = r.getEventImageActionReducer,
    _a[a.GET_EVENT_DETAILS_FAILURE] = r.getEventDetailsFailureActionReducer,
    _a[a.GET_EVENT_DETAILS] = r.getEventDetailsActionReducer,
    _a[a.SET_DISPLAYED_ITEM] = r.setDisplayedItemActionReducer,
    _a);
function eventReducer(state, action) {
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
exports.eventReducer = eventReducer;
var _a;
//# sourceMappingURL=eventMain.js.map
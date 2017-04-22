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
//# sourceMappingURL=eventReducer.js.map
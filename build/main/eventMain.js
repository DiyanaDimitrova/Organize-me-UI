"use strict";
var r = require("../reducers/eventReducer");
var a = require("../actions/eventActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    newEventMessage: null
};
var reducers = (_a = {},
    _a[a.NEW_EVENT_SUCCESS] = r.newEventSuccessReducer,
    _a[a.NEW_EVENT_FAIL] = r.newEventFailReducer,
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
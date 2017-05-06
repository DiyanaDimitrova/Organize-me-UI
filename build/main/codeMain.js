"use strict";
var r = require("../reducers/codeReducer");
var a = require("../actions/codeActions");
var loginActions_1 = require("../actions/loginActions");
exports.initialState = {
    listInvitedLoading: false,
    success: false,
    invitedPeopleList: null,
    sendCodeToUsersMessage: null,
    scanCodeMessage: null
};
var reducers = (_a = {},
    _a[a.LIST_INVITED_SUCCESS] = r.listInvitedSuccessReducer,
    _a[a.LIST_INVITED_FAIL] = r.listInvitedFailReducer,
    _a[a.LIST_INVITED_BEGIN_LOADING] = r.listInvitedBeginLoadingReducer,
    _a[a.LIST_INVITED_END_LOADING] = r.listInvitedEndLoadingReducer,
    _a[a.SEND_CODE_SUCCESS] = r.sendCodeSuccessReducer,
    _a[a.SEND_CODE_FAIL] = r.sendCodeFailReducer,
    _a[a.SCAN_CODE_SUCCESS] = r.scanCodeSuccessReducer,
    _a[a.SCAN_CODE_FAIL] = r.scanCodeFailReducer,
    _a);
function codeReducer(state, action) {
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
exports.codeReducer = codeReducer;
var _a;
//# sourceMappingURL=codeMain.js.map
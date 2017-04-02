"use strict";
exports.initialState = {
    showRegisterForm: false,
    openLoggedMenu: false,
    logged: false
};
var reducers = {};
function headerReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    state = exports.initialState;
    var reducer = reducers[action.type];
    if (reducer) {
        return reducer(state, action);
    }
    return state;
}
exports.headerReducer = headerReducer;
//# sourceMappingURL=headerMain.js.map
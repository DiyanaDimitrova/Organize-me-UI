"use strict";
var redux_1 = require("redux");
var loginMain_1 = require("../main/loginMain");
var categoryMain_1 = require("../main/categoryMain");
var persistStore = require('redux-persist').persistStore;
var autoRehydrate = require('redux-persist').autoRehydrate;
var appReducer = redux_1.combineReducers({
    login: loginMain_1.loginReducer,
    category: categoryMain_1.categoryReducer
});
var rootReducer = function (state, action) {
    return appReducer(state, action);
};
exports.appStore = redux_1.compose(autoRehydrate())(redux_1.createStore)(rootReducer, window['devToolsExtension'] && window['devToolsExtension']());
persistStore(exports.appStore);
//# sourceMappingURL=AppStore.js.map
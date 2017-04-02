"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var AppContainer_1 = require("./containers/AppContainer/AppContainer");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var react_redux_1 = require("react-redux");
var AppStore_1 = require("./store/AppStore");
injectTapEventPlugin();
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: AppStore_1.appStore },
    React.createElement(MuiThemeProvider_1.default, null,
        React.createElement(AppContainer_1.default, null))), document.getElementById('app-container'));
//# sourceMappingURL=main.js.map
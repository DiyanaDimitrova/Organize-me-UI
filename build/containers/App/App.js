"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var Header_1 = require("../../components/Header/Header");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var material_ui_raw_theme_file_1 = require("./material_ui_raw_theme_file");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(MuiThemeProvider_1.default, { muiTheme: material_ui_raw_theme_file_1.default },
                React.createElement("div", null,
                    React.createElement(Header_1.default, null)))));
    };
    return App;
}(React.Component));
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map
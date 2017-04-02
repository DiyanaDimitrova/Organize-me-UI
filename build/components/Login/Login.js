"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var FlatButton_1 = require("material-ui/FlatButton");
var LoginForm_1 = require("./LoginForm");
var react_redux_1 = require("react-redux");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.showRegisterForm = function () {
            console.log('6548');
            _this.setState({ showResults: true });
        };
        _this.state = {
            showResults: false
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(FlatButton_1.default, __assign({}, this.props, { label: "Login", onClick: this.showRegisterForm }))),
            React.createElement("div", null, this.state.showResults ? React.createElement(LoginForm_1.default, null) : null)));
    };
    return Login;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {};
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login);
//# sourceMappingURL=Login.js.map
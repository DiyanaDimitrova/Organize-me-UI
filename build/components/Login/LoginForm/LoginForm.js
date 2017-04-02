"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var material_ui_1 = require("material-ui");
var actions = require("../../../actions/loginActions");
var classes = require('./LoginForm.css');
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        var _this = _super.call(this, props) || this;
        _this.loginUser = function (event) {
            event.preventDefault();
            console.log('LOG' + JSON.stringify(_this.state));
            var loginRequest = {};
            loginRequest.username = _this.state.username;
            loginRequest.password = _this.state.password;
            _this.props.performLoginAction(loginRequest);
            react_router_1.browserHistory.push('/');
        };
        _this.state = {
            username: '',
            password: '',
        };
        _this.usernameEntered = _this.usernameEntered.bind(_this);
        _this.passwordEntered = _this.passwordEntered.bind(_this);
        return _this;
    }
    LoginForm.prototype.usernameEntered = function (event) {
        if (event.target.value) {
            this.setState({ username: event.target.value });
        }
    };
    LoginForm.prototype.passwordEntered = function (event) {
        if (event.target.value) {
            this.setState({ password: event.target.value });
        }
    };
    LoginForm.prototype.render = function () {
        return (React.createElement("div", { id: 'mainDiv', className: classes.mainDiv },
            React.createElement(material_ui_1.Paper, { id: 'loginPaper', className: classes.loginPaper, style: classes.loginPaper, zDepth: 4 },
                React.createElement("div", { id: 'titleText', className: classes.titleText },
                    React.createElement("h2", null, "Do you have account? Log in")),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Username", floatingLabelText: "Username", floatingLabelFixed: true, type: "text", onChange: this.usernameEntered, value: this.state.username })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Password", floatingLabelText: "Password", floatingLabelFixed: true, type: "password", onChange: this.passwordEntered, value: this.state.password })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.RaisedButton, { label: "Login", primary: true, onClick: this.loginUser })))));
    };
    return LoginForm;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performLoginAction: function (loginRequest) {
            actions.performLoginAction(loginRequest, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoginForm);
//# sourceMappingURL=LoginForm.js.map
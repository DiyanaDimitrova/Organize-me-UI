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
var classes = require('./Register.css');
var Register = (function (_super) {
    __extends(Register, _super);
    function Register(props) {
        var _this = _super.call(this, props) || this;
        _this.registerUser = function (event) {
            event.preventDefault();
            console.log('LOG' + JSON.stringify(_this.state));
            var signupRequest = {};
            signupRequest.username = _this.state.username;
            signupRequest.password = _this.state.password;
            signupRequest.confirmPassword = _this.state.confirmPassword;
            signupRequest.firstName = _this.state.firstName;
            signupRequest.lastName = _this.state.lastName;
            signupRequest.email = _this.state.email;
            _this.props.performSignupAction(signupRequest);
            react_router_1.browserHistory.push('/');
        };
        _this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: ''
        };
        _this.usernameEntered = _this.usernameEntered.bind(_this);
        _this.passwordEntered = _this.passwordEntered.bind(_this);
        _this.confirmPasswordEntered = _this.confirmPasswordEntered.bind(_this);
        _this.firstNameEntered = _this.firstNameEntered.bind(_this);
        _this.lastNameEntered = _this.lastNameEntered.bind(_this);
        _this.emailEntered = _this.emailEntered.bind(_this);
        return _this;
    }
    Register.prototype.usernameEntered = function (event) {
        if (event.target.value) {
            this.setState({ username: event.target.value });
        }
    };
    Register.prototype.passwordEntered = function (event) {
        if (event.target.value) {
            this.setState({ password: event.target.value });
        }
    };
    Register.prototype.confirmPasswordEntered = function (event) {
        if (event.target.value) {
            this.setState({ confirmPassword: event.target.value });
        }
    };
    Register.prototype.firstNameEntered = function (event) {
        if (event.target.value) {
            this.setState({ firstName: event.target.value });
        }
    };
    Register.prototype.lastNameEntered = function (event) {
        if (event.target.value) {
            this.setState({ lastName: event.target.value });
        }
    };
    Register.prototype.emailEntered = function (event) {
        if (event.target.value) {
            this.setState({ email: event.target.value });
        }
    };
    Register.prototype.render = function () {
        return (React.createElement("div", { id: 'registerDiv', className: classes.registerDiv },
            React.createElement(material_ui_1.Paper, { id: 'registerPaper', className: classes.registerPaper, style: classes.registerPaper, zDepth: 4 },
                React.createElement("div", { id: 'titleText', className: classes.titleText },
                    React.createElement("h2", null, "Don't you have account? Register")),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Username", floatingLabelText: "Username", floatingLabelFixed: true, type: "text", onChange: this.usernameEntered, value: this.state.username })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Password", floatingLabelText: "Password", floatingLabelFixed: true, type: "password", onChange: this.passwordEntered, value: this.state.password })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Confirm Password", floatingLabelText: "Confirm Password", floatingLabelFixed: true, type: "password", onChange: this.confirmPasswordEntered, value: this.state.confirmPassword })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "First Name", floatingLabelText: "First Name", floatingLabelFixed: true, type: "text", onChange: this.firstNameEntered, value: this.state.firstName })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Last Name", floatingLabelText: "Last Name", floatingLabelFixed: true, type: "text", onChange: this.lastNameEntered, value: this.state.lastName })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Email", floatingLabelText: "Email", floatingLabelFixed: true, type: "text", onChange: this.emailEntered, value: this.state.email })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.RaisedButton, { label: "Register", primary: true, onClick: this.registerUser })))));
    };
    return Register;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performSignupAction: function (signupRequest) {
            actions.performSignupAction(signupRequest, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Register);
//# sourceMappingURL=Register.js.map
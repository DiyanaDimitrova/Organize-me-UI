"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var material_ui_1 = require("material-ui");
var classes = require('./LoginForm.css');
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        return _super.call(this, props) || this;
    }
    LoginForm.prototype.render = function () {
        return (React.createElement("div", { id: 'mainDiv', className: classes.mainDiv },
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Username", floatingLabelText: "Username", floatingLabelFixed: true, type: "text" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Password", floatingLabelText: "Password", floatingLabelFixed: true, type: "password" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.RaisedButton, { label: "Login", primary: true }))));
    };
    return LoginForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map
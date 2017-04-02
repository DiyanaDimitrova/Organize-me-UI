"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var material_ui_1 = require("material-ui");
var Register = (function (_super) {
    __extends(Register, _super);
    function Register(props) {
        return _super.call(this, props) || this;
    }
    Register.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Username", floatingLabelText: "Username", floatingLabelFixed: true, type: "text" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Password", floatingLabelText: "Password", floatingLabelFixed: true, type: "password" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Confirm Password", floatingLabelText: "Confirm Password", floatingLabelFixed: true, type: "password" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "First Name", floatingLabelText: "First Name", floatingLabelFixed: true, type: "text" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Last Name", floatingLabelText: "Last Name", floatingLabelFixed: true, type: "text" })),
            React.createElement("div", null,
                React.createElement(material_ui_1.RaisedButton, { label: "Register", primary: true }))));
    };
    return Register;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Register;
//# sourceMappingURL=Register.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Register_1 = require("../../components/Register/Register/Register");
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterPage.prototype.render = function () {
        console.log('REGISTER');
        return (React.createElement("div", { id: 'billingPage' },
            React.createElement("div", null,
                React.createElement(Register_1.default, null))));
    };
    return RegisterPage;
}(React.Component));
exports.RegisterPage = RegisterPage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterPage;
//# sourceMappingURL=RegisterPage.js.map
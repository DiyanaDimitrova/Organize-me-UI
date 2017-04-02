"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var material_ui_1 = require("material-ui");
var Test = (function (_super) {
    __extends(Test, _super);
    function Test(props, context) {
        return _super.call(this, props, context) || this;
    }
    Test.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(material_ui_1.FlatButton, { label: "Default" }),
            React.createElement(material_ui_1.FlatButton, { label: "Primary", primary: true }),
            React.createElement(material_ui_1.FlatButton, { label: "Secondary", secondary: true }),
            React.createElement(material_ui_1.FlatButton, { label: "Disabled", disabled: true }),
            React.createElement(material_ui_1.TextField, { value: "Didi" })));
    };
    return Test;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Test;
//# sourceMappingURL=Test.js.map
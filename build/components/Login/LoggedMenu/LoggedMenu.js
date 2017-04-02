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
var IconButton_1 = require("material-ui/IconButton");
var IconMenu_1 = require("material-ui/IconMenu");
var MenuItem_1 = require("material-ui/MenuItem");
var more_vert_1 = require("material-ui/svg-icons/navigation/more-vert");
var react_redux_1 = require("react-redux");
var LoggedMenu = (function (_super) {
    __extends(LoggedMenu, _super);
    function LoggedMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            opened: true
        };
        return _this;
    }
    LoggedMenu.prototype.render = function () {
        console.log(this.props);
        return (React.createElement(IconMenu_1.default, __assign({}, this.props, { iconButtonElement: React.createElement(IconButton_1.default, null,
                React.createElement(more_vert_1.default, null)), anchorOrigin: { horizontal: 'left', vertical: 'top' }, targetOrigin: { horizontal: 'left', vertical: 'top' } }),
            React.createElement(MenuItem_1.default, { primaryText: "Refresh" }),
            React.createElement(MenuItem_1.default, { primaryText: "Send feedback" }),
            React.createElement(MenuItem_1.default, { primaryText: "Settings" }),
            React.createElement(MenuItem_1.default, { primaryText: "Help" }),
            React.createElement(MenuItem_1.default, { primaryText: "Sign out" })));
    };
    return LoggedMenu;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {};
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoggedMenu);
//# sourceMappingURL=LoggedMenu.js.map
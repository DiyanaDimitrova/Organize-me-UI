"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppBar_1 = require("material-ui/AppBar");
var Toggle_1 = require("material-ui/Toggle");
var Drawer_1 = require("material-ui/Drawer");
var MenuItem_1 = require("material-ui/MenuItem");
var LoggedMenu_1 = require("../Login/LoggedMenu/LoggedMenu");
var Login_1 = require("../Login/Login/Login");
var react_redux_1 = require("react-redux");
var classes = require('./Header.css');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event, logged) {
        };
        _this.menuClick = function () {
            _this.setState({ openMenu: !_this.state.openMenu });
        };
        _this.state = {
            openMenu: false
        };
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Toggle_1.default, { label: "Logged", defaultToggled: this.props.logged, onToggle: this.handleChange, labelPosition: "right", style: { margin: 20 } }),
            React.createElement(AppBar_1.default, { id: 'mainDiv', className: classes.mainDiv, title: "Title", onLeftIconButtonTouchTap: this.menuClick, iconElementRight: this.props.logged ? React.createElement(LoggedMenu_1.default, null) : React.createElement(Login_1.default, null) }),
            React.createElement(Drawer_1.default, { open: this.state.openMenu },
                React.createElement(MenuItem_1.default, null, "Create Category"),
                React.createElement(MenuItem_1.default, null, "All Categories"),
                React.createElement(MenuItem_1.default, null, "Create Event"),
                React.createElement(MenuItem_1.default, null, "All Events"),
                React.createElement(MenuItem_1.default, null, "Add Code"),
                React.createElement(MenuItem_1.default, null, "Scan Code"))));
    };
    return Header;
}(React.Component));
var mapStateToProps = function (state) { return ({
    logged: state.login.login
}); };
var mapDispatchToProps = function (dispatch) {
    return {};
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=Header.js.map
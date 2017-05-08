"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var Register_1 = require("../../components/Register/Register/Register");
var LoginForm_1 = require("../../components/Login/LoginForm/LoginForm");
var Category_1 = require("../../components/Category/Category/Category");
var CategoryList_1 = require("../../components/Category/CategoryList/CategoryList");
var Event_1 = require("../../components/Event/Event/Event");
var EventList_1 = require("../../components/Event/EventList/EventList");
var EventGrid_1 = require("../../components/Event/EventGrid/EventGrid");
var EventDetails_1 = require("../../components/Event/EventDetails/EventDetails");
var Code_1 = require("../../components/Code/Code/Code");
var ScanCode_1 = require("../../components/Code/ScanCode/ScanCode");
var App_1 = require("../App/App");
var AppContainer = (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_router_1.Router, { ref: 'routeRef', history: react_router_1.browserHistory },
                React.createElement(react_router_1.Route, { path: '/', component: App_1.default }),
                React.createElement(react_router_1.Route, { path: '/register', component: Register_1.default }),
                React.createElement(react_router_1.Route, { path: '/login', component: LoginForm_1.default }),
                React.createElement(react_router_1.Route, { path: '/newCategory', component: Category_1.default }),
                React.createElement(react_router_1.Route, { path: '/editCategory/:id', component: Category_1.default }),
                React.createElement(react_router_1.Route, { path: '/allCategories', component: CategoryList_1.default }),
                React.createElement(react_router_1.Route, { path: '/newEvent', component: Event_1.default }),
                React.createElement(react_router_1.Route, { path: '/editEvent/:id', component: Event_1.default }),
                React.createElement(react_router_1.Route, { path: '/allEvents', component: EventList_1.default }),
                React.createElement(react_router_1.Route, { path: '/event/all', component: EventGrid_1.default }),
                React.createElement(react_router_1.Route, { path: '/eventDetails/:id', component: EventDetails_1.default }),
                React.createElement(react_router_1.Route, { path: '/newCode/:id', component: Code_1.default }),
                React.createElement(react_router_1.Route, { path: '/scanCode', component: ScanCode_1.default }))));
    };
    return AppContainer;
}(React.Component));
exports.AppContainer = AppContainer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect()(AppContainer);
//# sourceMappingURL=AppContainer.js.map
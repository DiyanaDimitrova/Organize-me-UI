"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var actions = require("../../../actions/eventActions");
var material_ui_1 = require("material-ui");
var more_vert_1 = require("material-ui/svg-icons/navigation/more-vert");
var classes = require('./EventList.css');
var EventList = (function (_super) {
    __extends(EventList, _super);
    function EventList(props) {
        var _this = _super.call(this, props) || this;
        _this.deleteItem = function (e, itemId) {
            e.preventDefault();
            var deleteEvent = {};
            deleteEvent.id = itemId;
            _this.props.performDeleteEventAction(deleteEvent);
        };
        _this.updateItem = function (e, item) {
            e.preventDefault();
            react_router_1.browserHistory.push('/editEvent/' + item._id);
        };
        _this.viewItem = function (e, itemId) {
            _this.props.setDisplayedItem(itemId);
            react_router_1.browserHistory.push('/eventDetails/' + itemId);
        };
        _this.sendCodeItem = function (e, item) {
            react_router_1.browserHistory.push('/newCode/' + item._id);
        };
        _this.iconButtonElement = function () {
            return (React.createElement(material_ui_1.IconButton, { touch: true, tooltip: "actions", tooltipPosition: "bottom-left" },
                React.createElement(more_vert_1.default, null)));
        };
        _this.rightIconMenu = function (item) {
            return (React.createElement(material_ui_1.IconMenu, { iconButtonElement: _this.iconButtonElement() },
                React.createElement(material_ui_1.MenuItem, { onTouchTap: function (event) {
                        _this.updateItem(event, item);
                    } }, "Edit"),
                React.createElement(material_ui_1.MenuItem, { onTouchTap: function (event) {
                        _this.deleteItem(event, item._id);
                    } }, "Delete"),
                React.createElement(material_ui_1.MenuItem, { onTouchTap: function (event) {
                        _this.viewItem(event, item._id);
                    } }, "View"),
                React.createElement(material_ui_1.MenuItem, { onTouchTap: function (event) {
                        _this.sendCodeItem(event, item);
                    } }, "Send Code")));
        };
        return _this;
    }
    EventList.prototype.componentWillMount = function () {
        this.props.loadEventList();
    };
    EventList.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props !== nextProps;
    };
    EventList.prototype.render = function () {
        var _this = this;
        var eventArray;
        if (this.props.eventList !== undefined && this.props.eventList !== null) {
            eventArray = Object.keys(this.props.eventList).map(function (key) { return _this.props.eventList[key]; });
        }
        return (React.createElement("div", { id: 'eventDiv', className: classes.eventDiv },
            React.createElement(material_ui_1.List, null, eventArray.map(function (item, index) {
                return (React.createElement("div", { key: index },
                    React.createElement(material_ui_1.ListItem, { rightIconButton: _this.rightIconMenu(item), primaryText: item.title })));
            }))));
    };
    return EventList;
}(React.Component));
EventList.defaultProps = {
    eventListLoading: false,
    success: true,
    eventList: []
};
var mapStateToProps = function (state) { return ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        loadEventList: function () {
            actions.loadEventList(dispatch);
        },
        performDeleteEventAction: function (deleteEventRequest) {
            actions.performDeleteEventAction(deleteEventRequest, dispatch);
        },
        setDisplayedItem: function (displayedItem) {
            actions.setDisplayedItem(displayedItem, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventList);
//# sourceMappingURL=EventList.js.map
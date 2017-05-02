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
var dateFormat = require("dateformat");
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
            console.log('ITEM' + JSON.stringify(item));
            var updateEvent = {};
            updateEvent.id = item._id;
            updateEvent.title = item.title;
            updateEvent.place = item.place;
            updateEvent.hourValue = dateFormat(item.time);
            updateEvent.dateValue = dateFormat(item.date);
            updateEvent.capacity = item.capacity;
            updateEvent.details = item.details;
            updateEvent.categoryId = item.categoryId;
            console.log('UPDATE' + JSON.stringify(updateEvent));
            _this.props.setCurrentItem(updateEvent);
            react_router_1.browserHistory.push('/newEvent');
        };
        _this.viewItem = function (e, itemId) {
            react_router_1.browserHistory.push('/eventDetails');
            console.log('VIEWWWWW');
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
                    } }, "View")));
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
                console.log('ITEMMMMMM' + JSON.stringify(item));
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
        setCurrentItem: function (currentItem) {
            actions.setCurrentItem(currentItem, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventList);
//# sourceMappingURL=EventList.js.map
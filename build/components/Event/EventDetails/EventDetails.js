"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var Card_1 = require("material-ui/Card");
var RaisedButton_1 = require("material-ui/RaisedButton");
var Chip_1 = require("material-ui/Chip");
var Avatar_1 = require("material-ui/Avatar");
var actions = require("../../../actions/eventActions");
var dateFormat = require("dateformat");
var place_1 = require("material-ui/svg-icons/maps/place");
var Divider_1 = require("material-ui/Divider");
var classes = require('./EventDetails.css');
var EventDetails = (function (_super) {
    __extends(EventDetails, _super);
    function EventDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.goingToEvent = function () {
            var attendEvent = {};
            attendEvent.id = _this.props.displayedItem;
            attendEvent.username = _this.props.username;
            attendEvent.type = 'going';
            _this.props.performAttendEventAction(attendEvent);
        };
        _this.interestedInEvent = function () {
            var attendEvent = {};
            attendEvent.id = _this.props.displayedItem;
            attendEvent.username = _this.props.username;
            attendEvent.type = 'interested';
            _this.props.performAttendEventAction(attendEvent);
        };
        _this.notInterestedInEvent = function () {
            var attendEvent = {};
            attendEvent.id = _this.props.displayedItem;
            attendEvent.username = _this.props.username;
            attendEvent.type = 'notGoing';
            _this.props.performAttendEventAction(attendEvent);
        };
        return _this;
    }
    EventDetails.prototype.getInitialData = function () {
        var eventDetails = {};
        eventDetails.id = this.props.displayedItem;
        this.props.loadEventImageAction(eventDetails);
        this.props.loadEventDetailsAction(eventDetails);
    };
    EventDetails.prototype.componentWillMount = function () {
        var eventDetails = {};
        eventDetails.id = this.props.displayedItem;
        this.props.loadEventImageAction(eventDetails);
        this.props.loadEventDetailsAction(eventDetails);
    };
    EventDetails.prototype.render = function () {
        var imagePreviewUrl = this.props.itemToView.image;
        var $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
        }
        return (React.createElement(Card_1.Card, null,
            React.createElement(Card_1.CardHeader, { title: this.props.itemToView.details.title, subtitle: dateFormat(this.props.itemToView.details.time, 'HH:MM') + ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy') }),
            React.createElement(Card_1.CardMedia, { overlay: React.createElement(Card_1.CardTitle, { title: this.props.itemToView.details.title, subtitle: dateFormat(this.props.itemToView.details.time, 'HH:MM') + ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy') }) },
                React.createElement("div", null,
                    React.createElement("img", { src: imagePreviewUrl, height: "100%", width: "100%" }))),
            React.createElement(Card_1.CardTitle, { title: this.props.itemToView.details.title, subtitle: dateFormat(this.props.itemToView.details.time, 'HH:MM') + ' ' + dateFormat(this.props.itemToView.details.time, 'dS mmmm, yyyy') }),
            React.createElement(Card_1.CardText, null,
                React.createElement("div", null,
                    React.createElement(place_1.default, null),
                    this.props.itemToView.details.place,
                    " "),
                React.createElement(Divider_1.default, null),
                React.createElement("div", null, this.props.itemToView.details.details),
                React.createElement(Divider_1.default, null),
                React.createElement("div", { id: 'wrapper', className: classes.wrapper },
                    "Going: ",
                    this.props.itemToView.details.invitedPeople.map(function (item, index) {
                        if (item.type === 'going') {
                            return React.createElement(Chip_1.default, { id: 'chip', className: classes.chip, key: index },
                                React.createElement(Avatar_1.default, { size: 32 }, item.username.charAt(0)),
                                item.username);
                        }
                    })),
                React.createElement("div", null,
                    "Interested: ",
                    this.props.itemToView.details.invitedPeople.map(function (item, index) {
                        if (item.type === 'interested') {
                            return React.createElement(Chip_1.default, { key: index },
                                React.createElement(Avatar_1.default, { size: 32 }, item.username.charAt(0)),
                                item.username);
                        }
                    })),
                React.createElement("div", null,
                    "Not interested: ",
                    this.props.itemToView.details.invitedPeople.map(function (item, index) {
                        if (item.type === 'notGoing') {
                            return React.createElement(Chip_1.default, { key: index },
                                React.createElement(Avatar_1.default, { size: 32 }, item.username.charAt(0)),
                                item.username);
                        }
                    }))),
            React.createElement(Card_1.CardActions, null,
                React.createElement(RaisedButton_1.default, { label: "Going", secondary: true, onClick: this.goingToEvent }),
                React.createElement(RaisedButton_1.default, { label: "Interested", primary: true, onClick: this.interestedInEvent }),
                React.createElement(RaisedButton_1.default, { label: "Not Interested", primary: false, onClick: this.notInterestedInEvent }))));
    };
    return EventDetails;
}(React.Component));
exports.EventDetails = EventDetails;
var mapStateToProps = function (state) { return ({
    eventImageLoading: state.event.eventImageLoading,
    eventDetailsLoading: state.event.eventDetailsLoading,
    displayedItem: state.event.displayedItem,
    itemToView: state.event.itemToView,
    username: state.login.user ? state.login.user.username : ''
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        loadEventImageAction: function (request) {
            actions.loadEventImageAction(request, dispatch);
        },
        loadEventDetailsAction: function (request) {
            actions.loadEventDetailsAction(request, dispatch);
        },
        performAttendEventAction: function (request) {
            actions.performAttendEventAction(request, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventDetails);
//# sourceMappingURL=EventDetails.js.map
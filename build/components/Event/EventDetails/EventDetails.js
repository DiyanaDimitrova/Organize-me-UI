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
var classes = require('./EventDetails.css');
var EventDetails = (function (_super) {
    __extends(EventDetails, _super);
    function EventDetails(props) {
        return _super.call(this, props) || this;
    }
    EventDetails.prototype.render = function () {
        return (React.createElement(Card_1.Card, null,
            React.createElement(Card_1.CardHeader, { title: "URL Avatar", subtitle: "Subtitle" }),
            React.createElement(Card_1.CardMedia, { overlay: React.createElement(Card_1.CardTitle, { title: "Overlay title", subtitle: "Overlay subtitle" }) },
                React.createElement("img", { src: "images/test.jpg" })),
            React.createElement(Card_1.CardTitle, { title: "Card title", subtitle: "Card subtitle" }),
            React.createElement(Card_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + " " + "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi." + " " + "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." + " " + "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."),
            React.createElement(Card_1.CardActions, null,
                React.createElement(RaisedButton_1.default, { label: "Going", secondary: true }),
                React.createElement(RaisedButton_1.default, { label: "Interested", primary: true }),
                React.createElement(RaisedButton_1.default, { label: "Not Interested", primary: false }))));
    };
    return EventDetails;
}(React.Component));
exports.EventDetails = EventDetails;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {};
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventDetails);
//# sourceMappingURL=EventDetails.js.map
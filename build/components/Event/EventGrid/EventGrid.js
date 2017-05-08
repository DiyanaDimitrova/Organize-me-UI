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
var GridList_1 = require("material-ui/GridList");
var IconButton_1 = require("material-ui/IconButton");
var Subheader_1 = require("material-ui/Subheader");
var info_outline_1 = require("material-ui/svg-icons/action/info-outline");
var EventGrid = (function (_super) {
    __extends(EventGrid, _super);
    function EventGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.viewItem = function (e, itemId) {
            _this.props.setDisplayedItem(itemId);
            react_router_1.browserHistory.push('/eventDetails/' + itemId);
        };
        _this.getImage = function (itemId) {
            var eventDetails = {};
            eventDetails.id = itemId;
            _this.props.loadEventImageListAction(eventDetails);
            var src;
            if (_this.props.images !== null && _this.props.images.length > 0) {
                src = _this.props.images.find(function (image) {
                    if (image.id === itemId) {
                        console.log(image.id);
                        return image;
                    }
                });
            }
            console.log('PROPS' + JSON.stringify(src ? src.id : null));
            return src ? src.image : null;
        };
        return _this;
    }
    EventGrid.prototype.componentWillMount = function () {
        this.props.loadEventList();
    };
    EventGrid.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props.images !== nextProps.images;
    };
    EventGrid.prototype.render = function () {
        var _this = this;
        var eventArray;
        if (this.props.eventList !== undefined && this.props.eventList !== null) {
            eventArray = Object.keys(this.props.eventList).map(function (key) { return _this.props.eventList[key]; });
        }
        var styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 1000,
                height: 600,
                overflowY: 'auto',
            },
        };
        return (React.createElement("div", null,
            React.createElement(GridList_1.GridList, { cellHeight: 300, style: styles.gridList },
                React.createElement(Subheader_1.default, null, "All events"),
                eventArray.map(function (tile) { return (React.createElement(GridList_1.GridTile, { key: tile._id, title: tile.title, subtitle: React.createElement("span", null,
                        "at ",
                        React.createElement("b", null, tile.place)), actionIcon: React.createElement(IconButton_1.default, { onTouchTap: function (event) { _this.viewItem(event, tile._id); } },
                        React.createElement(info_outline_1.default, { color: "white" })) },
                    React.createElement("img", { src: _this.getImage(tile._id) }))); }))));
    };
    return EventGrid;
}(React.Component));
EventGrid.defaultProps = {
    eventListLoading: false,
    success: true,
    eventList: [],
    imageToView: null,
    images: []
};
var mapStateToProps = function (state) { return ({
    eventListLoading: state.event.eventListLoading,
    success: state.event.success,
    eventList: state.event.eventList,
    imageToView: state.event.itemToView.image,
    images: state.event.images
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        loadEventList: function () {
            actions.loadEventList(dispatch);
        },
        setDisplayedItem: function (displayedItem) {
            actions.setDisplayedItem(displayedItem, dispatch);
        },
        loadEventImageListAction: function (request) {
            actions.loadEventImageListAction(request, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventGrid);
//# sourceMappingURL=EventGrid.js.map
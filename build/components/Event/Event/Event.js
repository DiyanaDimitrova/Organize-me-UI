"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var material_ui_1 = require("material-ui");
var actions = require("../../../actions/eventActions");
var classes = require('./Event.css');
var Event = (function (_super) {
    __extends(Event, _super);
    function Event(props) {
        var _this = _super.call(this, props) || this;
        _this.titleEntered = function (event) {
            if (event.target.value) {
                _this.setState({ title: event.target.value });
            }
        };
        _this.placeEntered = function (event) {
            if (event.target.value) {
                _this.setState({ place: event.target.value });
            }
        };
        _this.detailsEntered = function (event) {
            if (event.target.value) {
                _this.setState({ details: event.target.value });
            }
        };
        _this.capacityEntered = function (event) {
            if (event.target.value) {
                _this.setState({ capacity: event.target.value });
            }
        };
        _this.saveEvent = function (event) {
            var createEvent = {};
            createEvent.title = _this.state.title;
            createEvent.hourValue = _this.state.hourValue;
            createEvent.dateValue = _this.state.dateValue;
            createEvent.place = _this.state.place;
            createEvent.file = _this.state.file;
            createEvent.imagePreviewUrl = _this.state.imagePreviewUrl;
            createEvent.type = _this.state.type;
            createEvent.capacity = _this.state.capacity;
            createEvent.details = _this.state.details;
            _this.props.performCreateEventAction(createEvent);
        };
        _this.cancelEvent = function (event) {
        };
        _this.handleChangeTimePicker = function (event, date) {
            _this.setState({ hourValue: date });
        };
        _this.handleChangeDatePicker = function (event, date) {
            _this.setState({ dateValue: date });
        };
        _this.handleFile = function (event) {
            event.preventDefault();
            var reader = new FileReader();
            console.log('File' + JSON.stringify(event.target.files[0].path));
            var file = event.target.files[0];
            reader.onloadend = function () {
                _this.setState({
                    file: file.name,
                    imagePreviewUrl: reader.result,
                    type: file.type
                });
            };
            reader.readAsDataURL(file);
        };
        _this.state = {
            title: '',
            place: '',
            hourValue: null,
            dateValue: null,
            file: '',
            imagePreviewUrl: '',
            type: '',
            capacity: 0,
            details: ''
        };
        _this.titleEntered = _this.titleEntered.bind(_this);
        _this.saveEvent = _this.saveEvent.bind(_this);
        _this.cancelEvent = _this.cancelEvent.bind(_this);
        _this.handleChangeTimePicker = _this.handleChangeTimePicker.bind(_this);
        _this.handleChangeDatePicker = _this.handleChangeDatePicker.bind(_this);
        _this.handleFile = _this.handleFile.bind(_this);
        _this.placeEntered = _this.placeEntered.bind(_this);
        _this.detailsEntered = _this.detailsEntered.bind(_this);
        _this.capacityEntered = _this.capacityEntered.bind(_this);
        return _this;
    }
    Event.prototype.render = function () {
        console.log('STATE' + JSON.stringify(this.state.type));
        var imagePreviewUrl = this.state.imagePreviewUrl;
        var $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
        }
        return (React.createElement("div", { id: 'registerDiv', className: classes.registerDiv },
            React.createElement("div", { id: 'titleText', className: classes.titleText },
                React.createElement("h2", null, "New Event")),
            React.createElement("form", { encType: 'multipart/form-data' },
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Title", floatingLabelText: "Title", floatingLabelFixed: true, type: "text", onChange: this.titleEntered, value: this.state.title })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.DatePicker, { hintText: "Pick Date", floatingLabelText: "Pick Date", value: this.state.dateValue, onChange: this.handleChangeDatePicker })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TimePicker, { format: "24hr", hintText: "Pick Time", floatingLabelText: "Pick Time", value: this.state.hourValue, onChange: this.handleChangeTimePicker })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Place", floatingLabelText: "Place", floatingLabelFixed: true, type: "text", onChange: this.placeEntered, value: this.state.place })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Capacity", floatingLabelText: "Capacity", floatingLabelFixed: true, type: "number", onChange: this.capacityEntered, value: this.state.capacity })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Details", floatingLabelText: "Details", floatingLabelFixed: true, type: "text", onChange: this.detailsEntered, value: this.state.details })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.RaisedButton, { containerElement: "label", label: "Choose an Image", labelPosition: "before", secondary: true },
                        React.createElement("input", { type: "file", style: { display: 'none' }, onChange: this.handleFile }))),
                React.createElement("div", null,
                    React.createElement(material_ui_1.RaisedButton, { label: "Cancel", secondary: true, onClick: this.cancelEvent }),
                    React.createElement(material_ui_1.RaisedButton, { label: "Submit", primary: true, onClick: this.saveEvent })))));
    };
    return Event;
}(React.Component));
exports.Event = Event;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performCreateEventAction: function (createEventRequest) {
            actions.performCreateEventAction(createEventRequest, dispatch);
        },
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Event);
//# sourceMappingURL=Event.js.map
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
var categoryActions = require("../../../actions/categoryActions");
var dateFormat = require("dateformat");
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
            event.preventDefault();
            if (_this.props.itemToBeEdited === true) {
                var updateEvent = {};
                updateEvent.id = _this.props.currentItem._id;
                updateEvent.title = _this.state.title;
                updateEvent.hourValue = _this.state.hourValue;
                updateEvent.dateValue = _this.state.dateValue;
                updateEvent.place = _this.state.place;
                updateEvent.file = _this.state.file;
                updateEvent.imagePreviewUrl = _this.state.imagePreviewUrl;
                updateEvent.type = _this.state.type;
                updateEvent.capacity = _this.state.capacity;
                updateEvent.details = _this.state.details;
                updateEvent.categoryId = _this.state.categoryValue;
                _this.props.performUpdateEventAction(updateEvent);
                _this.setState({ title: '' });
                _this.setState({ hourValue: '' });
                _this.setState({ dateValue: null });
                _this.setState({ place: '' });
                _this.setState({ file: '' });
                _this.setState({ imagePreviewUrl: '' });
                _this.setState({ type: '' });
                _this.setState({ details: '' });
                _this.setState({ capacity: 0 });
                _this.setState({ categoryValue: '' });
            }
            else {
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
                createEvent.categoryId = _this.state.categoryValue;
                _this.props.performCreateEventAction(createEvent);
            }
        };
        _this.cancelEvent = function (event) {
            event.preventDefault();
            _this.setState({ title: '' });
            _this.setState({ hourValue: '' });
            _this.setState({ dateValue: null });
            _this.setState({ place: '' });
            _this.setState({ file: '' });
            _this.setState({ imagePreviewUrl: '' });
            _this.setState({ type: '' });
            _this.setState({ details: '' });
            _this.setState({ capacity: 0 });
            _this.setState({ categoryValue: '' });
        };
        _this.handleChangeTimePicker = function (event, date) {
            console.log('HOUR' + date);
            _this.setState({ hourValue: date });
        };
        _this.handleChangeDatePicker = function (event, date) {
            console.log('DATE' + date);
            _this.setState({ dateValue: date });
        };
        _this.handleCategoryChange = function (event, index, value) {
            console.log('index' + index + ' ' + value);
            _this.setState({ categoryValue: value });
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
        console.log('CURRENT' + JSON.stringify(props.currentItem));
        _this.state = {
            title: props.itemToBeEdited === true ? props.currentItem.title : '',
            place: props.itemToBeEdited === true ? props.currentItem.place : '',
            hourValue: props.itemToBeEdited === true ? dateFormat(props.currentItem.hourValue) : null,
            dateValue: props.itemToBeEdited === true ? dateFormat(props.currentItem.dateValue) : null,
            file: props.itemToBeEdited === true ? props.currentItem.file : '',
            imagePreviewUrl: props.itemToBeEdited === true ? props.currentItem.imagePreviewUrl : '',
            type: props.itemToBeEdited === true ? props.currentItem.type : '',
            capacity: props.itemToBeEdited === true ? props.currentItem.capacity : 0,
            details: props.itemToBeEdited === true ? props.currentItem.details : '',
            categoryValue: props.itemToBeEdited === true ? props.currentItem.categoryId : '',
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
        _this.handleCategoryChange = _this.handleCategoryChange.bind(_this);
        return _this;
    }
    Event.prototype.componentWillMount = function () {
        this.props.loadCategoriesList();
        if (this.props.params.id !== undefined && this.props.params.id !== null) {
            console.log('CURRENT' + this.props.params.id);
            this.props.setCurrentItem(this.props.params.id);
        }
    };
    Event.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props !== nextProps && nextProps.itemToBeEdited === true) {
            this.setState({ title: nextProps.currentItem.title });
        }
    };
    Event.prototype.render = function () {
        var _this = this;
        var imagePreviewUrl = this.state.imagePreviewUrl;
        var $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (React.createElement("img", { src: imagePreviewUrl }));
        }
        var categoryArray;
        if (this.props.categoriesList !== undefined && this.props.categoriesList !== null) {
            categoryArray = Object.keys(this.props.categoriesList).map(function (key) { return _this.props.categoriesList[key]; });
        }
        var name;
        if (this.props.itemToBeEdited === true) {
            name = 'Edit event';
        }
        else {
            name = 'Add new event';
        }
        console.log('STATE' + this.state.categoryValue);
        return (React.createElement("div", { id: 'registerDiv', className: classes.registerDiv, width: "100%" },
            React.createElement("div", { id: 'titleText', className: classes.titleText },
                React.createElement("h2", null, name)),
            React.createElement("form", { encType: 'multipart/form-data' },
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Title", floatingLabelText: "Title", floatingLabelFixed: true, type: "text", value: this.state.title, onChange: this.titleEntered })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.DatePicker, { hintText: "Pick Date", floatingLabelText: "Pick Date", value: new Date(this.state.dateValue), onChange: this.handleChangeDatePicker })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TimePicker, { format: "24hr", hintText: "Pick Time", floatingLabelText: "Pick Time", value: new Date(this.state.hourValue), onChange: this.handleChangeTimePicker })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Place", floatingLabelText: "Place", floatingLabelFixed: true, type: "text", value: this.state.place, onChange: this.placeEntered })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Capacity", floatingLabelText: "Capacity", floatingLabelFixed: true, type: "number", value: this.state.capacity, onChange: this.capacityEntered })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.TextField, { hintText: "Details", floatingLabelText: "Details", floatingLabelFixed: true, type: "text", value: this.state.details, onChange: this.detailsEntered })),
                React.createElement("div", null,
                    React.createElement(material_ui_1.DropDownMenu, { value: this.state.categoryValue, onChange: this.handleCategoryChange, autoWidth: true }, categoryArray.map(function (item, index) {
                        return (React.createElement(material_ui_1.MenuItem, { value: item._id, key: index, primaryText: item.title }));
                    }))),
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
var mapStateToProps = function (state) { return ({
    categoriesListLoading: state.category.categoriesListLoading,
    success: state.category.success,
    categoriesList: state.category.categoriesList,
    currentItem: state.event.currentItem,
    itemToBeEdited: state.event.itemToBeEdited
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performCreateEventAction: function (createEventRequest) {
            actions.performCreateEventAction(createEventRequest, dispatch);
        },
        performUpdateEventAction: function (updateEventRequest) {
            actions.performUpdateEventAction(updateEventRequest, dispatch);
        },
        loadCategoriesList: function () {
            categoryActions.loadCategoriesList(dispatch);
        },
        setCurrentItem: function (currentItem) {
            actions.setCurrentItem(currentItem, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Event);
//# sourceMappingURL=Event.js.map
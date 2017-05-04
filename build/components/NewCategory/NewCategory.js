"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var material_ui_1 = require("material-ui");
var actions = require("../../actions/categoryActions");
var classes = require('./NewCategory.css');
var NewCategory = (function (_super) {
    __extends(NewCategory, _super);
    function NewCategory(props) {
        var _this = _super.call(this, props) || this;
        _this.saveCategory = function (event) {
            event.preventDefault();
            var createCategory = {};
            createCategory.title = _this.state.title;
            _this.props.performCreateCategoryAction(createCategory);
        };
        _this.cancelCategory = function (event) {
            event.preventDefault();
            _this.setState({ title: '' });
        };
        _this.state = {
            title: ''
        };
        _this.titleEntered = _this.titleEntered.bind(_this);
        return _this;
    }
    NewCategory.prototype.titleEntered = function (event) {
        if (event.target.value) {
            this.setState({ title: event.target.value });
        }
    };
    NewCategory.prototype.render = function () {
        return (React.createElement("div", { id: 'registerDiv', className: classes.registerDiv },
            React.createElement("div", null),
            React.createElement("div", { id: 'titleText', className: classes.titleText },
                React.createElement("h2", null, "Add new category")),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Title", floatingLabelText: "Title", floatingLabelFixed: true, type: "text", onChange: this.titleEntered, value: this.state.title })),
            React.createElement("div", null,
                React.createElement(material_ui_1.RaisedButton, { label: "Cancel", secondary: true, onClick: this.cancelCategory }),
                React.createElement(material_ui_1.RaisedButton, { label: "Submit", primary: true, onClick: this.saveCategory }))));
    };
    return NewCategory;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performCreateCategoryAction: function (createCategoryRequest) {
            actions.performCreateCategoryAction(createCategoryRequest, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewCategory);
//# sourceMappingURL=NewCategory.js.map
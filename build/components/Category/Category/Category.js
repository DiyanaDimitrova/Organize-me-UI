"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var material_ui_1 = require("material-ui");
var actions = require("../../../actions/categoryActions");
var classes = require('./Category.css');
var Category = (function (_super) {
    __extends(Category, _super);
    function Category(props) {
        var _this = _super.call(this, props) || this;
        _this.titleEntered = function (event) {
            if (event.target.value) {
                _this.setState({ title: event.target.value });
            }
        };
        _this.saveCategory = function (event) {
            event.preventDefault();
            if (_this.props.itemToBeEdited === true) {
                var updateCategory = {};
                updateCategory.title = _this.state.title;
                updateCategory.id = _this.props.currentItem._id;
                console.log('UPDATE' + JSON.stringify(updateCategory));
                _this.props.performUpdateCategoryAction(updateCategory);
                _this.setState({ title: '' });
            }
            else {
                var createCategory = {};
                createCategory.title = _this.state.title;
                _this.props.performCreateCategoryAction(createCategory);
            }
            react_router_1.browserHistory.push('/');
        };
        _this.cancelCategory = function (event) {
            event.preventDefault();
            _this.setState({ title: '' });
        };
        console.log('PROPS' + JSON.stringify(props));
        _this.state = {
            title: props.itemToBeEdited === true ? props.currentItem.title : ''
        };
        _this.titleEntered = _this.titleEntered.bind(_this);
        _this.saveCategory = _this.saveCategory.bind(_this);
        _this.cancelCategory = _this.cancelCategory.bind(_this);
        return _this;
    }
    Category.prototype.componentWillMount = function () {
        if (this.props.params.id !== undefined && this.props.params.id !== null) {
            console.log('CURRENT' + this.props.params.id);
            this.props.setCurrentItem(this.props.params.id);
        }
    };
    Category.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props !== nextProps && nextProps.itemToBeEdited === true) {
            this.setState({ title: nextProps.currentItem.title });
        }
    };
    Category.prototype.render = function () {
        var title;
        if (this.props.itemToBeEdited === true) {
            title = 'Edit category';
        }
        else {
            title = 'Add new category';
        }
        return (React.createElement("div", { id: 'registerDiv', className: classes.registerDiv },
            React.createElement("div", { id: 'titleText', className: classes.titleText },
                React.createElement("h2", null, title)),
            React.createElement("div", null,
                React.createElement(material_ui_1.TextField, { hintText: "Title", floatingLabelText: "Title", floatingLabelFixed: true, type: "text", value: this.state.title, onChange: this.titleEntered })),
            React.createElement("div", null,
                React.createElement(material_ui_1.RaisedButton, { label: "Cancel", secondary: true, onClick: this.cancelCategory }),
                React.createElement(material_ui_1.RaisedButton, { label: "Submit", primary: true, onClick: this.saveCategory }))));
    };
    return Category;
}(React.Component));
exports.Category = Category;
var mapStateToProps = function (state) { return ({
    currentItem: state.category.currentItem,
    itemToBeEdited: state.category.itemToBeEdited
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performCreateCategoryAction: function (createCategoryRequest) {
            actions.performCreateCategoryAction(createCategoryRequest, dispatch);
        },
        performUpdateCategoryAction: function (updateCategoryRequest) {
            actions.performUpdateCategoryAction(updateCategoryRequest, dispatch);
        },
        setCurrentItem: function (currentItem) {
            actions.setCurrentItem(currentItem, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Category);
//# sourceMappingURL=Category.js.map
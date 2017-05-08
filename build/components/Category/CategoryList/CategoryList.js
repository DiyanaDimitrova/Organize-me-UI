"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var actions = require("../../../actions/categoryActions");
var material_ui_1 = require("material-ui");
var more_vert_1 = require("material-ui/svg-icons/navigation/more-vert");
var classes = require('./CategoryList.css');
var CategoryList = (function (_super) {
    __extends(CategoryList, _super);
    function CategoryList(props) {
        var _this = _super.call(this, props) || this;
        _this.deleteItem = function (e, itemId) {
            e.preventDefault();
            var deleteCategory = {};
            deleteCategory.id = itemId;
            _this.props.performDeleteCategoryAction(deleteCategory);
        };
        _this.updateItem = function (e, item) {
            e.preventDefault();
            react_router_1.browserHistory.push('/editCategory/' + item._id);
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
                    } }, "Delete")));
        };
        return _this;
    }
    CategoryList.prototype.componentWillMount = function () {
        this.props.loadCategoriesList();
    };
    CategoryList.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props !== nextProps;
    };
    CategoryList.prototype.render = function () {
        var _this = this;
        var categoryArray;
        if (this.props.categoriesList !== undefined && this.props.categoriesList !== null) {
            categoryArray = Object.keys(this.props.categoriesList).map(function (key) { return _this.props.categoriesList[key]; });
        }
        return (React.createElement("div", { id: 'categoryDiv', className: classes.categoryDiv },
            React.createElement(material_ui_1.List, null, categoryArray.map(function (item, index) {
                return (React.createElement("div", { key: index },
                    React.createElement(material_ui_1.ListItem, { rightIconButton: _this.rightIconMenu(item), primaryText: item.title })));
            }))));
    };
    return CategoryList;
}(React.Component));
CategoryList.defaultProps = {
    categoriesListLoading: false,
    success: true,
    categoriesList: []
};
var mapStateToProps = function (state) { return ({
    categoriesListLoading: state.category.categoriesListLoading,
    success: state.category.success,
    categoriesList: state.category.categoriesList
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        loadCategoriesList: function () {
            actions.loadCategoriesList(dispatch);
        },
        performDeleteCategoryAction: function (deleteCategoryRequest) {
            actions.performDeleteCategoryAction(deleteCategoryRequest, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CategoryList);
//# sourceMappingURL=CategoryList.js.map
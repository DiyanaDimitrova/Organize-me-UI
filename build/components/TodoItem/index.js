"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var classNames = require("classnames");
var TodoTextInput_1 = require("../TodoTextInput");
var style = require("./style.css");
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            editing: false
        };
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
        return _this;
    }
    TodoItem.prototype.handleDoubleClick = function () {
        this.setState({ editing: true });
    };
    TodoItem.prototype.handleSave = function (id, text) {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        }
        else {
            this.props.editTodo({ id: id, text: text });
        }
        this.setState({ editing: false });
    };
    TodoItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, todo = _a.todo, completeTodo = _a.completeTodo, deleteTodo = _a.deleteTodo;
        var element;
        if (this.state.editing) {
            element = (React.createElement(TodoTextInput_1.default, { text: todo.text, editing: this.state.editing, onSave: function (text) { return _this.handleSave(todo.id, text); } }));
        }
        else {
            element = (React.createElement("div", { className: style.view },
                React.createElement("input", { className: style.toggle, type: "checkbox", checked: todo.completed, onChange: function () { return completeTodo(todo.id); } }),
                React.createElement("label", { onDoubleClick: this.handleDoubleClick }, todo.text),
                React.createElement("button", { className: style.destroy, onClick: function () { return deleteTodo(todo.id); } })));
        }
        var classes = classNames((_b = {},
            _b[style.completed] = todo.completed,
            _b[style.editing] = this.state.editing,
            _b[style.normal] = !this.state.editing,
            _b));
        return (React.createElement("li", { className: classes }, element));
        var _b;
    };
    return TodoItem;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoItem;
//# sourceMappingURL=index.js.map
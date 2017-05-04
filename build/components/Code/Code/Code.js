"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var Table_1 = require("material-ui/Table");
var tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];
var Code = (function (_super) {
    __extends(Code, _super);
    function Code(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.setState({ height: event.target.value });
        };
        _this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px'
        };
        return _this;
    }
    Code.prototype.render = function () {
        console.log(JSON.stringify(this.props));
        return (React.createElement("div", { id: 'registerDiv', width: "100%" },
            React.createElement(Table_1.Table, { height: this.state.height, fixedHeader: this.state.fixedHeader, fixedFooter: this.state.fixedFooter, selectable: this.state.selectable, multiSelectable: this.state.multiSelectable },
                React.createElement(Table_1.TableHeader, { displaySelectAll: this.state.showCheckboxes, adjustForCheckbox: this.state.showCheckboxes, enableSelectAll: this.state.enableSelectAll },
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, { colSpan: "3", tooltip: "Super Header", style: { textAlign: 'center' } }, "Super Header")),
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, { tooltip: "The ID" }, "ID"),
                        React.createElement(Table_1.TableHeaderColumn, { tooltip: "The Name" }, "Name"),
                        React.createElement(Table_1.TableHeaderColumn, { tooltip: "The Status" }, "Status"))),
                React.createElement(Table_1.TableBody, { displayRowCheckbox: this.state.showCheckboxes, deselectOnClickaway: this.state.deselectOnClickaway, showRowHover: this.state.showRowHover, stripedRows: this.state.stripedRows }, tableData.map(function (row, index) { return (React.createElement(Table_1.TableRow, { key: index },
                    React.createElement(Table_1.TableRowColumn, null, index),
                    React.createElement(Table_1.TableRowColumn, null, row.name),
                    React.createElement(Table_1.TableRowColumn, null, row.status))); })),
                React.createElement(Table_1.TableFooter, { adjustForCheckbox: this.state.showCheckboxes },
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableRowColumn, null, "ID"),
                        React.createElement(Table_1.TableRowColumn, null, "Name"),
                        React.createElement(Table_1.TableRowColumn, null, "Status")),
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableRowColumn, { colSpan: "3", style: { textAlign: 'center' } }, "Super Footer"))))));
    };
    return Code;
}(React.Component));
exports.Code = Code;
var mapStateToProps = function (state) { return ({
    displayedItem: state.event.displayedItem
}); };
var mapDispatchToProps = function (dispatch) {
    return {};
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Code);
//# sourceMappingURL=Code.js.map
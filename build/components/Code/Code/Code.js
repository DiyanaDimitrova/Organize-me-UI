"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var material_ui_1 = require("material-ui");
var Table_1 = require("material-ui/Table");
var actions = require("../../../actions/codeActions");
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
        _this.sendCodeEvent = function (event) {
            event.preventDefault();
        };
        _this.cancelEvent = function (event) {
            event.preventDefault();
        };
        _this.handleRowSelection = function (selectedRows) {
            _this.setState({
                selected: selectedRows
            });
            console.log('SELECTED' + selectedRows);
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
            height: '300px',
            selected: [],
            mailList: []
        };
        return _this;
    }
    Code.prototype.componentWillMount = function () {
        this.props.loadListInvited(this.props.params.id);
    };
    Code.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props !== nextProps;
    };
    Code.prototype.render = function () {
        console.log(JSON.stringify(this.props));
        return (React.createElement("div", { id: 'registerDiv', width: "100%" },
            this.props.success === true && this.props.listInvitedLoading === false &&
                React.createElement(Table_1.Table, { height: this.state.height, fixedHeader: this.state.fixedHeader, fixedFooter: this.state.fixedFooter, selectable: this.state.selectable, multiSelectable: this.state.multiSelectable, onRowSelection: this.handleRowSelection },
                    React.createElement(Table_1.TableHeader, { displaySelectAll: this.state.showCheckboxes, adjustForCheckbox: this.state.showCheckboxes, enableSelectAll: this.state.enableSelectAll },
                        React.createElement(Table_1.TableRow, null,
                            React.createElement(Table_1.TableHeaderColumn, { colSpan: "3", tooltip: "Invited to the event", style: { textAlign: 'center' } }, "Invited to the event")),
                        React.createElement(Table_1.TableRow, null,
                            React.createElement(Table_1.TableHeaderColumn, { tooltip: "ID" }, "ID"),
                            React.createElement(Table_1.TableHeaderColumn, { tooltip: "Username" }, "Username"),
                            React.createElement(Table_1.TableHeaderColumn, { tooltip: "Status" }, "Status"))),
                    React.createElement(Table_1.TableBody, { displayRowCheckbox: this.state.showCheckboxes, deselectOnClickaway: this.state.deselectOnClickaway, showRowHover: this.state.showRowHover, stripedRows: this.state.stripedRows }, this.props.invitedPeopleList !== null && this.props.invitedPeopleList.map(function (row, index) { return (React.createElement(Table_1.TableRow, { key: index },
                        React.createElement(Table_1.TableRowColumn, null, index),
                        React.createElement(Table_1.TableRowColumn, null, row.username),
                        React.createElement(Table_1.TableRowColumn, null, row.type))); })),
                    React.createElement(Table_1.TableFooter, { adjustForCheckbox: this.state.showCheckboxes },
                        React.createElement(Table_1.TableRow, null,
                            React.createElement(Table_1.TableRowColumn, null, "ID"),
                            React.createElement(Table_1.TableRowColumn, null, "Username"),
                            React.createElement(Table_1.TableRowColumn, null, "Status")),
                        React.createElement(Table_1.TableRow, null,
                            React.createElement(Table_1.TableRowColumn, { colSpan: "3", style: { textAlign: 'center' } }, "Invited to the event")))),
            React.createElement("div", null,
                React.createElement(material_ui_1.RaisedButton, { label: "Cancel", secondary: true, onClick: this.cancelEvent }),
                React.createElement(material_ui_1.RaisedButton, { label: "Send Code", primary: true, onClick: this.sendCodeEvent }))));
    };
    return Code;
}(React.Component));
Code.defaultProps = {
    listInvitedLoading: false,
    success: true,
    invitedPeopleList: null
};
exports.Code = Code;
var mapStateToProps = function (state) { return ({
    listInvitedLoading: state.code.listInvitedLoading,
    success: state.code.success,
    invitedPeopleList: state.code.invitedPeopleList
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        loadListInvited: function (id) {
            actions.loadListInvited(id, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Code);
//# sourceMappingURL=Code.js.map
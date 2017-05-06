"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var QrReader = require("react-qr-reader");
var material_ui_1 = require("material-ui");
var actions = require("../../../actions/codeActions");
var ScanCode = (function (_super) {
    __extends(ScanCode, _super);
    function ScanCode(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            delay: 1000,
            result: 'No result',
        };
        _this.handleScan = _this.handleScan.bind(_this);
        return _this;
    }
    ScanCode.prototype.handleScan = function (data) {
        if (data !== null) {
            this.setState({ result: data });
            var scanCodeRequest = {};
            scanCodeRequest.scanedCode = data;
            this.props.performScanCodeAction(scanCodeRequest);
        }
    };
    ScanCode.prototype.handleError = function (err) {
        console.error(err);
    };
    ScanCode.prototype.render = function () {
        var previewStyle = {
            height: 240,
            width: 320,
        };
        var style = {
            height: 250,
            width: 330,
            margin: 10,
            padding: 5,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (React.createElement("div", null,
            React.createElement(material_ui_1.Paper, { style: style, zDepth: 5 },
                React.createElement(QrReader, { delay: this.state.delay, style: previewStyle, onError: this.handleError, onScan: this.handleScan }),
                React.createElement("p", null, this.state.result))));
    };
    return ScanCode;
}(React.Component));
exports.ScanCode = ScanCode;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        performScanCodeAction: function (scanCodeRequest) {
            actions.performScanCodeAction(scanCodeRequest, dispatch);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ScanCode);
//# sourceMappingURL=ScanCode.js.map
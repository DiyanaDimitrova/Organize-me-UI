"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var colorManipulator_1 = require("material-ui/utils/colorManipulator");
var Colors = require("material-ui/styles/colors");
var styles_1 = require("material-ui/styles");
var rawBaseTheme = __assign({}, styles_1.spacing, { fontFamily: 'Roboto, sans-serif', palette: {
        primary1Color: Colors.orange500,
        primary2Color: Colors.yellow500,
        primary3Color: Colors.lightGreen500,
        accent1Color: Colors.indigo500,
        accent2Color: Colors.purple500,
        accent3Color: Colors.pink500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: colorManipulator_1.fade(Colors.darkBlack, 0.3)
    } });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles_1.getMuiTheme(rawBaseTheme);
//# sourceMappingURL=material_ui_raw_theme_file.js.map
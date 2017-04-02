"use strict";
function loggerMiddleware(store) {
    return function (next) { return function (action) {
        console.log(action);
        return next(action);
    }; };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map
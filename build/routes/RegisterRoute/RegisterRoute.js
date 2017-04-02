"use strict";
var routes = [
    { path: '/register', getComponent: getRegisterPage }
];
function getRegisterPage(nextState, cb) {
    require.ensure([], function (require) {
        cb(null, require('../../pages/RegisterPage/RegisterPage'));
    }, 'register');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routes;
//# sourceMappingURL=RegisterRoute.js.map
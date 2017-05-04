"use strict";
var axios_1 = require("axios");
exports.LOGIN_SUCCESS = '@@Login/LOGIN_SUCCESS';
exports.LOGIN_FAIL = '@@Login/LOGIN_FAIL';
exports.DISMISS = '@@Login/DISMISS';
exports.SIGNUP_SUCCESS = '@@Login/SIGNUP_SUCCESS';
exports.SIGNUP_FAIL = '@@Login/SIGNUP_FAIL';
exports.BEGIN_LOADING_LOGIN = '@@Login/BEGIN_LOADING_LOGIN';
exports.END_LOADING_LOGIN = '@@Login/END_LOADING_LOGIN';
function beginLoadingLogin() {
    return { type: exports.BEGIN_LOADING_LOGIN };
}
exports.beginLoadingLogin = beginLoadingLogin;
function endLoadingLogin() {
    return { type: exports.END_LOADING_LOGIN };
}
exports.endLoadingLogin = endLoadingLogin;
function loginSuccessAction(messages, user) {
    return {
        type: exports.LOGIN_SUCCESS,
        payload: { messages: messages, user: user }
    };
}
exports.loginSuccessAction = loginSuccessAction;
function loginFailAction(messages) {
    return {
        type: exports.LOGIN_FAIL,
        payload: { messages: messages }
    };
}
exports.loginFailAction = loginFailAction;
function signupSuccessAction(messages) {
    return {
        type: exports.SIGNUP_SUCCESS,
        payload: { messages: messages }
    };
}
exports.signupSuccessAction = signupSuccessAction;
function signupFailAction(messages) {
    return {
        type: exports.SIGNUP_FAIL,
        payload: { messages: messages }
    };
}
exports.signupFailAction = signupFailAction;
function dismissAction() {
    return { type: exports.DISMISS };
}
exports.dismissAction = dismissAction;
function performLoginAction(request, dispatch) {
    dispatch(dismissAction());
    dispatch(beginLoadingLogin());
    axios_1.default.post('http://localhost:3001/users/authenticate', request)
        .then(function (response) {
        if (response.data) {
            var user = {
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
                username: response.data.user.username
            };
            dispatch(loginSuccessAction(response.data.messages, user));
            dispatch(endLoadingLogin());
        }
        else {
            dispatch(loginFailAction(response.data.messages));
            dispatch(endLoadingLogin());
        }
    })
        .catch(function (err) {
        if (err.response && err.response.data && err.response.data.messages) {
            dispatch(loginFailAction(err.response.data.messages));
            dispatch(endLoadingLogin());
        }
        else {
            var messages = [{
                    'message': 'Please try again later...'
                }];
            dispatch(loginFailAction(messages));
            dispatch(endLoadingLogin());
        }
    });
}
exports.performLoginAction = performLoginAction;
function performSignupAction(request, dispatch) {
    dispatch(dismissAction());
    axios_1.default.post('/users/create', request)
        .then(function (response) {
        if (response.data.success) {
            dispatch(signupSuccessAction(response.data.messages));
        }
        else {
            dispatch(signupFailAction(response.data.messages));
        }
    })
        .catch(function (err) {
        var messages = [{
                'message': 'Please try again later...'
            }];
        dispatch(signupFailAction(messages));
    });
}
exports.performSignupAction = performSignupAction;
//# sourceMappingURL=loginActions.js.map
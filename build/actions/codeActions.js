"use strict";
var axios_1 = require("axios");
exports.LIST_INVITED_BEGIN_LOADING = '@@Code/LIST_INVITED_BEGIN_LOADING';
exports.LIST_INVITED_END_LOADING = '@@Code/LIST_INVITED_END_LOADING';
exports.LIST_INVITED_SUCCESS = '@@Code/LIST_INVITED_SUCCESS';
exports.LIST_INVITED_FAIL = '@@Code/LIST_INVITED_FAIL';
exports.SEND_CODE_SUCCESS = '@@Code/SEND_CODE_SUCCESS';
exports.SEND_CODE_FAIL = '@@Code/SEND_CODE_FAIL';
exports.SCAN_CODE_SUCCESS = '@@Code/SCAN_CODE_SUCCESS';
exports.SCAN_CODE_FAIL = '@@Code/SCAN_CODE_FAIL';
function listInvitedBeginLoading() {
    return { type: exports.LIST_INVITED_BEGIN_LOADING };
}
exports.listInvitedBeginLoading = listInvitedBeginLoading;
function listInvitedEndLoading() {
    return { type: exports.LIST_INVITED_END_LOADING };
}
exports.listInvitedEndLoading = listInvitedEndLoading;
function setListInvitedFailure() {
    return { type: exports.LIST_INVITED_FAIL };
}
exports.setListInvitedFailure = setListInvitedFailure;
function setListInvited(invitedPeopleList) {
    return {
        type: exports.LIST_INVITED_SUCCESS,
        invitedPeopleList: Object.assign([], invitedPeopleList)
    };
}
exports.setListInvited = setListInvited;
function loadListInvited(id, dispatch) {
    dispatch(listInvitedBeginLoading());
    axios_1.default.get('/code/listInvited/' + id)
        .then(function (response) {
        dispatch(setListInvited(response.data.invitedPeople));
        dispatch(listInvitedEndLoading());
    })
        .catch(function (err) {
        dispatch(setListInvitedFailure());
        dispatch(listInvitedEndLoading());
    });
}
exports.loadListInvited = loadListInvited;
function sendCodeSuccessAction(message) {
    return {
        type: exports.SEND_CODE_SUCCESS,
        sendCodeMessage: message
    };
}
exports.sendCodeSuccessAction = sendCodeSuccessAction;
function sendCodeFailAction(message) {
    return {
        type: exports.SEND_CODE_FAIL,
        sendCodeMessage: message
    };
}
exports.sendCodeFailAction = sendCodeFailAction;
function performSendCodeAction(request, dispatch) {
    axios_1.default.post('/code/send', request)
        .then(function (response) {
        dispatch(sendCodeSuccessAction(response.data.message));
    })
        .catch(function (err) {
        dispatch(sendCodeFailAction(err.response.data.message));
    });
}
exports.performSendCodeAction = performSendCodeAction;
function scanCodeSuccessAction(message) {
    return {
        type: exports.SCAN_CODE_SUCCESS,
        scanCodeMessage: message
    };
}
exports.scanCodeSuccessAction = scanCodeSuccessAction;
function scanCodeFailAction(message) {
    return {
        type: exports.SCAN_CODE_FAIL,
        scanCodeMessage: message
    };
}
exports.scanCodeFailAction = scanCodeFailAction;
function performScanCodeAction(request, dispatch) {
    axios_1.default.post('/code/scan', request)
        .then(function (response) {
        console.log(response.data);
        dispatch(scanCodeSuccessAction(response.data.message));
    })
        .catch(function (err) {
        dispatch(scanCodeFailAction(err.response.data.message));
    });
}
exports.performScanCodeAction = performScanCodeAction;
//# sourceMappingURL=codeActions.js.map
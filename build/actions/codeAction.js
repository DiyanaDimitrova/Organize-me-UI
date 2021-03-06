"use strict";
var axios_1 = require("axios");
exports.LIST_INVITED_BEGIN_LOADING = '@@Code/LIST_INVITED_BEGIN_LOADING';
exports.LIST_INVITED_END_LOADING = '@@Code/LIST_INVITED_END_LOADING';
exports.LIST_INVITED_SUCCESS = '@@Code/LIST_INVITED_SUCCESS';
exports.LIST_INVITED_FAIL = '@@Code/LIST_INVITED_FAIL';
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
function setListInvited(goingList, interestedList, notGoingList) {
    return {
        type: exports.LIST_INVITED_SUCCESS,
        goingList: Object.assign([], goingList),
        interestedList: Object.assign([], interestedList),
        notGoingList: Object.assign([], notGoingList),
    };
}
exports.setListInvited = setListInvited;
function loadListInvited(id, dispatch) {
    dispatch(listInvitedBeginLoading());
    axios_1.default.get('/code/listInvited/' + id)
        .then(function (response) {
        dispatch(setListInvited(response.data.going, response.data.interested, response.data.notGoing));
        dispatch(listInvitedEndLoading());
    })
        .catch(function (err) {
        dispatch(setListInvitedFailure());
        dispatch(listInvitedEndLoading());
    });
}
exports.loadListInvited = loadListInvited;
//# sourceMappingURL=codeAction.js.map
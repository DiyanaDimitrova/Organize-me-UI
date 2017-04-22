"use strict";
var axios_1 = require("axios");
exports.NEW_EVENT_SUCCESS = '@@Event/NEW_EVENT_SUCCESS';
exports.NEW_EVENT_FAIL = '@@Event/NEW_EVENT_FAIL';
function createEventSuccessAction(message) {
    return {
        type: exports.NEW_EVENT_SUCCESS,
        eventMessage: message
    };
}
exports.createEventSuccessAction = createEventSuccessAction;
function createEventFailAction(message) {
    return {
        type: exports.NEW_EVENT_FAIL,
        eventMessage: message
    };
}
exports.createEventFailAction = createEventFailAction;
function performCreateEventAction(request, dispatch) {
    console.log('AAAA' + JSON.stringify(request));
    axios_1.default.post('/event/add', request)
        .then(function (response) {
        dispatch(createEventSuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(createEventFailAction(err.response.data.response));
    });
}
exports.performCreateEventAction = performCreateEventAction;
//# sourceMappingURL=eventActions.js.map
"use strict";
var axios_1 = require("axios");
exports.NEW_EVENT_SUCCESS = '@@Event/NEW_EVENT_SUCCESS';
exports.NEW_EVENT_FAIL = '@@Event/NEW_EVENT_FAIL';
exports.EVENT_LIST_BEGIN_LOADING = '@@Event/EVENT_LIST_BEGIN_LOADING';
exports.EVENT_LIST_END_LOADING = '@@Event/EVENT_LIST_END_LOADING';
exports.GET_EVENT_LIST_FAILURE = '@@Event/GET_EVENT_LIST_FAILURE';
exports.GET_EVENT_LIST = '@@Event/GET_EVENT_LIST';
exports.DELETE_EVENT_SUCCESS = '@@Event/DELETE_EVENT_SUCCESS';
exports.DELETE_EVENT_FAIL = '@@Event/DELETE_EVENT_FAIL';
exports.UPDATE_EVENT_SUCCESS = '@@Event/UPDATE_EVENT_SUCCESS';
exports.UPDATE_EVENT_FAIL = '@@Event/UPDATE_EVENT_FAIL';
exports.SET_CURRENT_ITEM = '@@Event/SET_CURRENT_ITEM';
exports.SET_DISPLAYED_ITEM = '@@Event/SET_DISPLAYED_ITEM';
exports.GET_EVENT_IMAGE_FAILURE = '@@Event/GET_EVENT_IMAGE_FAILURE';
exports.GET_EVENT_IMAGE = '@@Event/GET_EVENT_IMAGE';
exports.GET_EVENT_DETAILS_FAILURE = '@@Event/GET_EVENT_DETAILS_FAILURE';
exports.GET_EVENT_DETAILS = '@@Event/GET_EVENT_DETAILS';
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
function deleteEventSuccessAction(message) {
    return {
        type: exports.DELETE_EVENT_SUCCESS,
        eventMessage: message
    };
}
exports.deleteEventSuccessAction = deleteEventSuccessAction;
function deleteEventFailAction(message) {
    return {
        type: exports.DELETE_EVENT_FAIL,
        eventMessage: message
    };
}
exports.deleteEventFailAction = deleteEventFailAction;
function updateEventSuccessAction(message) {
    return {
        type: exports.UPDATE_EVENT_SUCCESS,
        eventMessage: message
    };
}
exports.updateEventSuccessAction = updateEventSuccessAction;
function updateEventFailAction(message) {
    return {
        type: exports.UPDATE_EVENT_FAIL,
        eventMessage: message
    };
}
exports.updateEventFailAction = updateEventFailAction;
function setCurrentItemAction(currentItem) {
    return {
        type: exports.SET_CURRENT_ITEM,
        currentItem: currentItem
    };
}
exports.setCurrentItemAction = setCurrentItemAction;
function setCurrentItem(currentItem, dispatch) {
    dispatch(setCurrentItemAction(currentItem));
}
exports.setCurrentItem = setCurrentItem;
function setDisplayedItemAction(displayedItem) {
    console.log('DDDD' + displayedItem);
    return {
        type: exports.SET_DISPLAYED_ITEM,
        displayedItem: displayedItem
    };
}
exports.setDisplayedItemAction = setDisplayedItemAction;
function setDisplayedItem(displayedItem, dispatch) {
    dispatch(setDisplayedItemAction(displayedItem));
}
exports.setDisplayedItem = setDisplayedItem;
function eventListBeginLoading() {
    return { type: exports.EVENT_LIST_BEGIN_LOADING };
}
exports.eventListBeginLoading = eventListBeginLoading;
function eventListEndLoading() {
    return { type: exports.EVENT_LIST_END_LOADING };
}
exports.eventListEndLoading = eventListEndLoading;
function setEventListFailure() {
    return { type: exports.GET_EVENT_LIST_FAILURE };
}
exports.setEventListFailure = setEventListFailure;
function setEventList(eventList) {
    return {
        type: exports.GET_EVENT_LIST,
        eventList: Object.assign([], eventList),
    };
}
exports.setEventList = setEventList;
function performDeleteEventAction(request, dispatch) {
    console.log('DIDID' + JSON.stringify(request));
    axios_1.default.delete('/event/delete/' + request.id)
        .then(function (response) {
        console.log('OK');
        dispatch(deleteEventSuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(deleteEventFailAction(err.response.data.response));
    });
}
exports.performDeleteEventAction = performDeleteEventAction;
function performUpdateEventAction(request, dispatch) {
    var reqBody = {
        title: request.title,
        place: request.place,
        hourValue: request.hourValue,
        dateValue: request.dateValue,
        file: request.file,
        imagePreviewUrl: request.imagePreviewUrl,
        type: request.type,
        capacity: request.capacity,
        details: request.details,
        categoryId: request.categoryId
    };
    axios_1.default.put('/event/update/' + request.id, reqBody)
        .then(function (response) {
        dispatch(updateEventSuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(updateEventFailAction(err.response.data.response));
    });
}
exports.performUpdateEventAction = performUpdateEventAction;
function loadEventList(dispatch) {
    dispatch(eventListBeginLoading());
    axios_1.default.get('/event/all')
        .then(function (response) {
        dispatch(setEventList(response.data.events));
        dispatch(eventListEndLoading());
    })
        .catch(function (err) {
        dispatch(setEventListFailure());
        dispatch(eventListEndLoading());
    });
}
exports.loadEventList = loadEventList;
function setEventImageFailure() {
    return { type: exports.GET_EVENT_IMAGE_FAILURE };
}
exports.setEventImageFailure = setEventImageFailure;
function setEventImage(image) {
    return {
        type: exports.GET_EVENT_IMAGE,
        image: Object.assign([], image),
    };
}
exports.setEventImage = setEventImage;
function loadEventImageAction(request, dispatch) {
    axios_1.default.get('/event/image/' + request.id)
        .then(function (response) {
        console.log('Resp IMAGE' + JSON.stringify(response));
        dispatch(setEventImage(response.data));
    })
        .catch(function (err) {
        dispatch(setEventImageFailure());
    });
}
exports.loadEventImageAction = loadEventImageAction;
function setEventDetailsFailure() {
    return { type: exports.GET_EVENT_DETAILS_FAILURE };
}
exports.setEventDetailsFailure = setEventDetailsFailure;
function setEventDetails(details) {
    return {
        type: exports.GET_EVENT_DETAILS,
        details: Object.assign([], details),
    };
}
exports.setEventDetails = setEventDetails;
function loadEventDetailsAction(request, dispatch) {
    axios_1.default.get('/event/details/' + request.id)
        .then(function (response) {
        console.log('Resp DETAILS' + JSON.stringify(response));
        dispatch(setEventDetails(response.data.event));
    })
        .catch(function (err) {
        dispatch(setEventDetailsFailure());
    });
}
exports.loadEventDetailsAction = loadEventDetailsAction;
//# sourceMappingURL=eventActions.js.map
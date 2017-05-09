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
exports.SET_CURRENT_ITEM_FAIL = '@@Event/SET_CURRENT_ITEM_FAIL';
exports.SET_DISPLAYED_ITEM = '@@Event/SET_DISPLAYED_ITEM';
exports.GET_EVENT_IMAGE_FAILURE = '@@Event/GET_EVENT_IMAGE_FAILURE';
exports.GET_EVENT_IMAGE = '@@Event/GET_EVENT_IMAGE';
exports.GET_EVENT_DETAILS_FAILURE = '@@Event/GET_EVENT_DETAILS_FAILURE';
exports.GET_EVENT_DETAILS = '@@Event/GET_EVENT_DETAILS';
exports.EVENT_IMAGE_BEGIN_LOADING = '@@Event/EVENT_IMAGE_BEGIN_LOADING';
exports.EVENT_IMAGE_END_LOADING = '@@Event/EVENT_IMAGE_END_LOADING';
exports.EVENT_DETAILS_BEGIN_LOADING = '@@Event/EVENT_DETAILS_BEGIN_LOADING';
exports.EVENT_DETAILS_END_LOADING = '@@Event/EVENT_DETAILS_END_LOADING';
exports.ATTEND_EVENT_SUCCESS = '@@Event/ATTEND_EVENT_SUCCESS';
exports.ATTEND_EVENT_FAIL = '@@Event/ATTEND_EVENT_FAIL';
exports.GET_EVENT_IMAGE_ARRAY_FAILURE = '@@Event/GET_EVENT_IMAGE_ARRAY_FAILURE';
exports.GET_EVENT_IMAGE_ARRAY = '@@Event/GET_EVENT_IMAGE_ARRAY';
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
function setCurrentItemFailAction(currentItem) {
    return {
        type: exports.SET_CURRENT_ITEM_FAIL,
        currentItem: currentItem
    };
}
exports.setCurrentItemFailAction = setCurrentItemFailAction;
function setCurrentItem(id, dispatch) {
    axios_1.default.get('/event/' + id)
        .then(function (response) {
        dispatch(setCurrentItemAction(response.data.event));
    })
        .catch(function (err) {
        dispatch(setCurrentItemFailAction(err.response.data.event));
    });
}
exports.setCurrentItem = setCurrentItem;
function setDisplayedItemAction(displayedItem) {
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
function eventImageBeginLoading() {
    return { type: exports.EVENT_IMAGE_BEGIN_LOADING };
}
exports.eventImageBeginLoading = eventImageBeginLoading;
function eventImageEndLoading() {
    return { type: exports.EVENT_IMAGE_END_LOADING };
}
exports.eventImageEndLoading = eventImageEndLoading;
function eventDetailsBeginLoading() {
    return { type: exports.EVENT_IMAGE_BEGIN_LOADING };
}
exports.eventDetailsBeginLoading = eventDetailsBeginLoading;
function eventDetailsEndLoading() {
    return { type: exports.EVENT_DETAILS_END_LOADING };
}
exports.eventDetailsEndLoading = eventDetailsEndLoading;
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
    axios_1.default.delete('/event/delete/' + request.id)
        .then(function (response) {
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
        image: image
    };
}
exports.setEventImage = setEventImage;
function loadEventImageAction(request, dispatch) {
    dispatch(eventImageBeginLoading());
    axios_1.default.get('/event/image/' + request.id)
        .then(function (response) {
        dispatch(setEventImage(response.data));
        dispatch(eventImageEndLoading());
    })
        .catch(function (err) {
        dispatch(setEventImageFailure());
        dispatch(eventImageEndLoading());
    });
}
exports.loadEventImageAction = loadEventImageAction;
function setEventImageArrayFailure() {
    return { type: exports.GET_EVENT_IMAGE_ARRAY_FAILURE };
}
exports.setEventImageArrayFailure = setEventImageArrayFailure;
function setEventImageArray(image, id) {
    return {
        type: exports.GET_EVENT_IMAGE_ARRAY,
        image: image,
        id: id
    };
}
exports.setEventImageArray = setEventImageArray;
function loadEventImageListAction(request, dispatch) {
    axios_1.default.get('/event/image/' + request.id)
        .then(function (response) {
        dispatch(setEventImageArray(response.data, request.id));
    })
        .catch(function (err) {
        dispatch(setEventImageArrayFailure());
    });
}
exports.loadEventImageListAction = loadEventImageListAction;
function setEventDetailsFailure() {
    return { type: exports.GET_EVENT_DETAILS_FAILURE };
}
exports.setEventDetailsFailure = setEventDetailsFailure;
function setEventDetails(details) {
    return {
        type: exports.GET_EVENT_DETAILS,
        details: Object.assign([], details)
    };
}
exports.setEventDetails = setEventDetails;
function loadEventDetailsAction(request, dispatch) {
    dispatch(eventDetailsBeginLoading());
    axios_1.default.get('/event/details/' + request.id)
        .then(function (response) {
        dispatch(setEventDetails(response.data.event));
        dispatch(eventDetailsEndLoading());
    })
        .catch(function (err) {
        dispatch(setEventDetailsFailure());
        dispatch(eventDetailsEndLoading());
    });
}
exports.loadEventDetailsAction = loadEventDetailsAction;
function attendEventSuccessAction(message) {
    return {
        type: exports.ATTEND_EVENT_SUCCESS,
        eventMessage: message
    };
}
exports.attendEventSuccessAction = attendEventSuccessAction;
function attendEventFailAction(message) {
    return {
        type: exports.ATTEND_EVENT_FAIL,
        eventMessage: message
    };
}
exports.attendEventFailAction = attendEventFailAction;
function performAttendEventAction(request, dispatch) {
    var reqBody = {
        username: request.username,
        type: request.type
    };
    axios_1.default.put('/event/attend/' + request.id, reqBody)
        .then(function (response) {
        dispatch(attendEventSuccessAction(response.data.response));
    })
        .catch(function (err) {
        dispatch(attendEventFailAction(err.response.data.response));
    });
}
exports.performAttendEventAction = performAttendEventAction;
//# sourceMappingURL=eventActions.js.map
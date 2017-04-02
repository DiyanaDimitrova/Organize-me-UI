"use strict";
var redux_actions_1 = require("redux-actions");
var Actions = require("../constants/actions");
exports.addTodo = redux_actions_1.createAction(Actions.ADD_TODO);
exports.editTodo = redux_actions_1.createAction(Actions.EDIT_TODO);
exports.deleteTodo = redux_actions_1.createAction(Actions.DELETE_TODO);
exports.completeTodo = redux_actions_1.createAction(Actions.COMPLETE_TODO);
exports.completeAll = redux_actions_1.createAction(Actions.COMPLETE_ALL);
exports.clearCompleted = redux_actions_1.createAction(Actions.CLEAR_COMPLETED);
//# sourceMappingURL=todos.js.map
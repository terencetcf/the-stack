import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import todosSaga from "./todos/todosSagas";
import { todosReducer } from "./todos/todosReducer";
import { TodosState } from "./todos/todosTypes";

export interface ApplicationState {
  todos: TodosState;
}

export const createRootReducer = () =>
  combineReducers({
    todos: todosReducer,
  });

export function* rootSaga() {
  yield all([fork(todosSaga)]);
}

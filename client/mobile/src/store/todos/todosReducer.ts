import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";

import { TodosState, TodosActionTypes } from "./todosTypes";
import * as todos from "./todosActions";

export type TodosAction = ActionType<typeof todos>;

export const initialState: TodosState = {
  data: {},
  errors: undefined,
  loading: false,
};

export const todosReducer: Reducer<TodosState> = (
  state = initialState,
  action: TodosAction
) => {
  switch (action.type) {
    case TodosActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case TodosActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case TodosActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

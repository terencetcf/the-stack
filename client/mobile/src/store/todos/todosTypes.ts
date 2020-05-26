import { TodosVm } from "../../../generated/models/api-models";

// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux `@@INIT` action.
export enum TodosActionTypes {
  FETCH_REQUEST = "@@todo/FETCH_REQUEST",
  FETCH_SUCCESS = "@@todo/FETCH_SUCCESS",
  FETCH_ERROR = "@@todo/FETCH_ERROR",
  SELECT_TODO_LIST = "@@todo/SELECT_TODO_LIST",
  SELECTED = "@@todo/SELECTED",
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface TodosState {
  readonly loading: boolean;
  readonly data: TodosVm;
  readonly errors?: string;
}

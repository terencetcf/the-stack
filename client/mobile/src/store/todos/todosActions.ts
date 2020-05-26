import { action } from "typesafe-actions";

import { TodosActionTypes } from "./todosTypes";
import { TodosVm } from "../../../generated/models/api-models";

export const fetchRequest = () => action(TodosActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: TodosVm) =>
  action(TodosActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(TodosActionTypes.FETCH_ERROR, message);

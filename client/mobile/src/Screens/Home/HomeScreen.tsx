import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "../../store";
import { TodosVm } from "../../../generated/models/api-models";
import { fetchRequest } from "../../store/todos/todosActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector<ApplicationState, TodosVm>(
    (state) => state.todos.data
  );

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const shoppingList =
    todos.lists && todos.lists.find((l) => l.title === "Shopping");

  return (
    <View>
      <FlatList
        data={shoppingList?.items}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

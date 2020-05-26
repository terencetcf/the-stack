import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { fetchRequest } from "./src/store/todos/todosActions";

import configureStore from "./src/store/configureStore";
import { ApplicationState } from "./src/store";
import { TodosVm } from "./generated/models/api-models";
import HomeScreen from "./src/Screens/Home/HomeScreen";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

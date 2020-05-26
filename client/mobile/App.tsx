import React from "react";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";

import configureStore from "./src/store/configureStore";
import { Routes } from "./src/Screens/Routes";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

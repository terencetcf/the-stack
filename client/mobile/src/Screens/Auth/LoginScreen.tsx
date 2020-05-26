import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Center from "../../Components/Center";
import { AuthNavProps } from "./AuthParamList";

const LoginScreen = ({ navigation }: AuthNavProps<"Login">) => {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button title="log me in" onPress={() => {}} />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

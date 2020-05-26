import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthNavProps } from "./AuthParamList";

import Center from "../../Components/Center";

const SignUpScreen = ({ navigation, route }: AuthNavProps<"Register">) => {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthParamList } from "./AuthParamList";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
        }}
        name="Register"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

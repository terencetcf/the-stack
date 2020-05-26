import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";

import { HomeParamList, HomeStackNavProps } from "./HomeParamList";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

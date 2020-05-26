import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import Center from "../Components/Center";
import { AuthStack } from "./Auth/AuthStack";
import { AppTabs } from "./Tabs/AppTabs";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const task = setTimeout(() => {
      setLoading(false);
      //   setAuthenticated(true);
    }, 1000);
    return () => {
      clearTimeout(task);
    };
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

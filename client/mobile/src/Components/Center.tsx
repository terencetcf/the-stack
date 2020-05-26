import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Center: React.FC = (props) => {
  return <View style={styles.center}>{props.children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

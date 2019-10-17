import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = () => {
  return (
    <View style={styles.text}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;

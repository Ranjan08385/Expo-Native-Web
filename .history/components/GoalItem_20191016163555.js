import React from "react";
import { View, Text } from "react-native";

const GoalItem = () => {
  return (
    <View style={styles.text}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

export default GoalItem;

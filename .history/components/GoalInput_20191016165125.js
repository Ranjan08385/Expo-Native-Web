import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const GoalInput = props => {
  return (
    <View style={styles.textButton}>
      <TextInput
        placeholder="Enter Something..."
        style={styles.textInput}
        onChangeText={props.textHandler}
        value={text}
      />
      <Button title="Add" onPress={props.addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "80%"
  },
  textButton: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default GoalInput;

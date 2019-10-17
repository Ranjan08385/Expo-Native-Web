import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [text, setText] = useState("");

  const textHandler = text => {
    setText(text);
  };

  return (
    <View style={styles.textButton}>
      <TextInput
        placeholder="Enter Something..."
        style={styles.textInput}
        onChangeText={textHandler}
        value={text}
      />
      <Button title="Add" onPress={props.addHandler.bind(this, text)} />
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

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  // const [text, setText] = useState("Hello, Ranjan");
  return (
    <View style={styles.container}>
      <View style={styles.textButton}>
        <TextInput placeholder="Enter Something..." style={styles.textInput} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  textButton: {
    flexDirection: "space-arround",
    justifyContent: "center"
  }
});

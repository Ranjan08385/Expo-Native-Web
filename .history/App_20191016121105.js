import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  // const [text, setText] = useState("Hello, Ranjan");
  return (
    <View style={styles.container}>
      <TextInput />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30;
  }
});

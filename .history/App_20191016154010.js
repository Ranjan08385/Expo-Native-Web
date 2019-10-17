import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  const textHandler = text => {
    setText(text);
  };

  const addHandler = () => {
    // console.log(text);
    setItem(items => [...items, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textButton}>
        <TextInput
          placeholder="Enter Something..."
          style={styles.textInput}
          onChangeText={textHandler}
          value={text}
        />
        <Button title="Add" onPress={addHandler} />
      </View>
      <View>
        {item.map(goal => (
          <View style={styles.text} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
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
    borderBottomWidth: 1,
    width: "80%"
  },
  textButton: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

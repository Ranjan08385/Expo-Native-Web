import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  const textHandler = text => {
    setText(text);
  };

  const addHandler = () => {
    // console.log(text);
    setItem(items => [...items, { id: Math.random().toString(), value: text }]);
  };

  return (
    <View style={styles.container}>
      <GoalInput />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={item}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

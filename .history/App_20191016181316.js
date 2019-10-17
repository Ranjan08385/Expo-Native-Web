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
  const [item, setItem] = useState([]);

  const addHandler = someText => {
    // console.log(text);
    setItem(items => [
      ...items,
      { id: Math.random().toString(), value: someText }
    ]);
  };

  const removeText = textId => {
    setItem(items => {
      return items.filter(item => item.id != textId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput addHandler={addHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={item}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeText}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

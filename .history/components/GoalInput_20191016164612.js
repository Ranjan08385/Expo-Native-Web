import React from "react";

const GoalInput = () => {
  return (
    <View style={styles.textButton}>
      <TextInput
        placeholder="Enter Something..."
        style={styles.textInput}
        onChangeText={textHandler}
        value={text}
      />
      <Button title="Add" onPress={addHandler} />
    </View>
  );
};

export default GoalInput;

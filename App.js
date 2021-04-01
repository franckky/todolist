import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Task from "./components/Task";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    { text: "add task" },
  ]);
  const addTask = () => {
    setTasks([...tasks, { text: value }]);
    setValue("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.titleTodoList}>Todo today</Text>
        <View style={styles.tasksSection}>
          <Task text={"Work out 30 minutes"}></Task>
          <Task text={"Ace the reacte native test"}></Task>
          <Task text={"Chill out"}></Task>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add Task"
          value={value}
          onChange={(text) => setValue(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => addTask()}>
          <View>
            <Text style={styles.addtaskStyle}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  titleTodoList: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  inputStyle: {
    height: 50,
    width: 200,
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  addtaskStyle: {
    width: 50,
    backgroundColor: "#fff",
    textAlign:"center"
  },
});

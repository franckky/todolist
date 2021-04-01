import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#8C82FF",
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  itemText: {
    maxWidth: "80%",
    marginLeft: 10
  },
  circular: {
    backgroundColor: "#2F69FF",
    borderWidth: 5,
    marginRight: 10,
    borderRadius: 5,
    height: 5,
    width : 5
  },
});

export default Task;

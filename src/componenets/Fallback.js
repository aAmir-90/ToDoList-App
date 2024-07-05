import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/Todo-list-image.webp")}
        style={{
          height: 300,
          widht: 300,
        }}
      />
      <Text style={styles.fallText}>Start Adding your Task</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  fallText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    fontStyle: "italic",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

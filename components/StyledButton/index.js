import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFF";
  const color = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={{ ...styles.button, backgroundColor }}
        onPress={() => onPress()}
      >
        <Text style={{ ...styles.text, color }}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

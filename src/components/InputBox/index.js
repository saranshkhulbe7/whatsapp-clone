import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function index() {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    if (newMessage === "") return;
    console.warn("sending a new message", newMessage);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nestedContainer}>
        {/* Icons */}
        <AntDesign name="plus" size={24} color="#1aa983" />
        {/* Text Input */}
        <TextInput
          selectionColor={"#118069"}
          style={styles.input}
          placeholder="Message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
      </View>
      {/* Icon */}
      <MaterialIcons
        style={styles.send}
        name="send"
        size={24}
        color="white"
        onPress={onSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  nestedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    flex: 1,
    margin: 5,
    borderRadius: 50,
  },
  input: {
    // flex: 1,
    backgroundColor: "none",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,

    fontSize: 17,
  },
  send: {
    backgroundColor: "#1aa983",
    padding: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
});

import { View, Text, StyleSheet } from "react-native";

export default function Message({ message }) {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage(message) ? "#dcf8c5" : "white",
          alignSelf: isMyMessage(message) ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{message.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

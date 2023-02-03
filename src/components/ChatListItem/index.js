import { Text, View, Image, StyleSheet } from "react-native";
const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Lukas
          </Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          Hello there
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;

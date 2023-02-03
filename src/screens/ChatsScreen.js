import { View, Text, FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

export default function ChatsScreens() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
}

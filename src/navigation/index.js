import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../screens/ChatsScreen";

export default function Navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

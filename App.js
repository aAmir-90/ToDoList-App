import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./src/Screen/TodoScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

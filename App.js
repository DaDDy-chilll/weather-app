import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/Main.screen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#9FD8CB", "#CACFD6"]} style={styles.container}>
        <MainScreen />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});


import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/Main.screen";
import { LinearGradient } from "expo-linear-gradient";
import { useFetch } from "./src/hooks/api";
import Config from "react-native-config";
export default function App() {
  console.log(Config);
// const [data,setName] = useFetch(API);
// setName('landon')
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


import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/Main.screen";
import { LinearGradient } from "expo-linear-gradient";
import { useFetch } from "./src/hooks/api";

import {API_URL} from '@env'
import { useState } from "react";

export default  function App() {
const [name,setName] = useState('myanmar')
const [data,loading,error] =  useFetch(API_URL,name);



// const weather = {
//   name: data.name || '',
//   main:data.main || '',
//   description:data.description || '',
//   icon:data.icon || '',
//   temp:data.temp || 0,
//   wind:data.speed || 0,
//   cloud:data.all || 0

// }

if(loading) return <View>Loading....</View>

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#9FD8CB", "#CACFD6"]} style={styles.container}>
        <MainScreen data={data} loading={loading} setName={setName} />
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

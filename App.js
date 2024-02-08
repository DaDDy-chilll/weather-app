
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/Main.screen";
import { LinearGradient } from "expo-linear-gradient";
import {API_URL,LOCAL} from '@env'
import { useEffect, useState } from "react";
import axios from "axios";
import { Platform } from 'react-native';


export default  function App() {
const [name,setName] = useState('myanmar');
const [data,setData] = useState({})
const [loading, setloading] = useState(true);

const baseUrl = Platform.OS === 'android' ? API_URL: LOCAL
const fetchWeather = async () => {
 try {
  const response = await axios.get(`${baseUrl}/api/${name}`);
  console.log(response.data);
  setData(response.data);
  setloading(false)
 } catch (error) {
  console.log("error",error);
 }
}
useEffect(()=>{
  fetchWeather()
},[name])

if(loading) return <View style={styles.text_loading}><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#9FD8CB", "#CACFD6"]} style={styles.container}>
        <MainScreen data={data} setName={setName} setloading={setloading} />
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
  text_loading:{
    width:'100%',
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'red'
}
});

import { StyleSheet, View, Text, Image } from "react-native";

const WeatherData = () => {
    // const imgSrc = require('../../../assets/icons/')
  return (
    <View style={styles.data_container}>
      <View style={styles.img_container} >
        <Image source={require('../../../assets/icons/weather.svg')} />
        <Image source={require('../../../assets/icons/temp.svg')} />
      </View>
      <View>
        <Text>dizzle</Text>
        <Text>37C</Text>
      </View>
      <View>
        <View>
          <Text>wind</Text>
          <Image src={'../../../assets/icons/wind.svg'} />
        </View>
        <Text>17km/h</Text>
      </View>
      <View>
        <View>
          <Text>cloud cover</Text>
          <Image src={'../../../assets/icons/cloud.svg'} />
        </View>
        <Text>90%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  data_container: {
    width: "100%",
  },
  data_text: {
    color: "white",
  },
  img_container:{
    width:'100%',
    height:100
  },
  img_weather:{
    width:300,
    height:300
  },
  img_temp:{
    width:50,
    height:50
  }
});

export default WeatherData;

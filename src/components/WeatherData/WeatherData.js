import { StyleSheet, Text, Image,View } from "react-native";
import { Container, ImageContainer,WeatherImage,TempImage,DataContainer,Status } from "./styles";
import { useFonts } from "expo-font";

const WeatherData = ({setloading}) => {
  // const [fontLoaded] = useFonts({
  //   Jaldi: require("../../../assets/fonts/Jaldi-Bold.ttf"),
  // });
  const imageurl = `https://openweathermap.org/img/wn/10d@2x.png`

  // if (!fontLoaded) {
  //   setloading(true)
  // }
  return (
    <Container>
      <ImageContainer>
        <WeatherImage source={{ uri: imageurl}}/>
        <TempImage source={require('../../../assets/icons/temp.png')}/>
      </ImageContainer>
      <DataContainer>
        <Status>Dizzle</Status>
        <Text>37 C</Text>
      </DataContainer>
      <DataContainer>
        <DataContainer>
          <Text>wind</Text>
          <Image source={require( '../../../assets/icons/wind.png' )} />
        </DataContainer>
        <Text>17 km/h</Text>
      </DataContainer>
      <DataContainer>
        <DataContainer>
          <Text>Cloud</Text>
          <Image source={require( '../../../assets/icons/cloud.png' )} />
        </DataContainer>
        <Text>90%</Text>
      </DataContainer>
    </Container>
  );
};



export default WeatherData;

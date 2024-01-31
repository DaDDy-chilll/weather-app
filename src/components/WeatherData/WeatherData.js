import { StyleSheet, Text, Image } from "react-native";
import { Container,ImageContainer } from "./styles";

const WeatherData = () => {

  return (
    <Container>
    <ImageContainer>

<Image source={require('../../../assets/icons/weather.svg')} style={{width: 100, height: 100,zIndex:10}} />
        <Image source={require('../../../assets/icons/temp.svg')} />
    </ImageContainer>
    </Container>
  );
};



export default WeatherData;

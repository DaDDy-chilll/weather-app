import { StyleSheet, Text, Image } from "react-native";
import { Container, ImageContainer } from "./styles";

const WeatherData = () => {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: "https://source.unsplash.com/random"}}/>
      </ImageContainer>
    </Container>
  );
};

export default WeatherData;

import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
const UserAction = () => {
  const [fontLoaded] = useFonts({
    KumbhSans: require("../../../assets/fonts/KumbhSans-VariableFont_YOPQ,wght.ttf"),
  });
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e);
  };

  const onSubmit = _ => {
    console.log(value);
  }
  if (!fontLoaded) {
    return <Text>Loading....</Text>;
  }
  return (
    <View style={styles.useraction_container}>
      <TextInput
        style={styles.UserInput}
        placeholder="City Name"
        placeholderTextColor="#9FD8CB"
        value={value}
        onChangeText={onChangeHandler}
        autoCapitalize="none" //need
        autoCorrect={false} 
      />
      <Pressable style={styles.userButton} onPress={onSubmit}>
        <Text style={styles.userButton_text}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  useraction_container: {
    width: "100%",
  },
  UserInput: {
    backgroundColor: "white",
    fontSize: 25,
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
    fontFamily: "KumbhSans",
    fontWeight: "bold",
  },
  userButton: {
    backgroundColor: "#9FD8CB",
    paddingVertical: 10,
    marginHorizontal: 30,
    marginVertical: 25,
    borderRadius: 6,
  },

  userButton_text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontFamily: "KumbhSans",
    fontWeight: "bold",
  },
});

export default UserAction;

import {StyleSheet,View,Text} from 'react-native'
import {useFonts} from 'expo-font'
const Header = ({name,description}) => {
    const [fontsLoaded] = useFonts({
        "Koulen":require('../../../assets/fonts/Koulen-Regular.ttf'),
        "Jaldi":require('../../../assets/fonts/Jaldi-Regular.ttf')
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }
    return (
        <View style={styles.textContainer}>
            <Text style={styles.textColor_name}>{name}</Text>
            <Text style={styles.textColor_description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        width:'100%',
    },

    textColor_name:{
        color:'white',
        textAlign:'center',
        fontFamily: 'Koulen',
        fontSize:48
    },
    textColor_description:{
        textAlign:'center',
        fontFamily:'Jaldi',
        color:'white',
        fontWeight:"bold",
        fontSize:16,
        textTransform:'capitalize'
    }

})

export default Header;
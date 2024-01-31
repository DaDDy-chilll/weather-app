import {StyleSheet,View} from 'react-native'
import Header from '../components/Header/Header'
import WeatherData from '../components/WeatherData/WeatherData'
import UserAction from '../components/UserAction/UserAction'

export default Main = () => {
    return (
        <View style={styles.container}>
            <Header name='landon' description='light intensity drizzle'/>
            <WeatherData />
            <UserAction />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:'80%',
        color:'white',
        backgroundColor:'#517664',
        borderRadius:12,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
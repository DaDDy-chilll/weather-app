import {StyleSheet,View} from 'react-native'
import Header from '../components/Header/Header'
import WeatherData from '../components/WeatherData/WeatherData'
import UserAction from '../components/UserAction/UserAction'

export default Main = ({data,loading,setName}) => {
   const {name,description} = data;

    if(loading)  return <View>Loading...</View>
    return (
        <View style={styles.container}>
            <Header name={name} description={description}/>
            <WeatherData />
            <UserAction setName={setName}/>
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
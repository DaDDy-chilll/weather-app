import {styled} from 'styled-components'

const Container = styled.View`
    width: 90%;
    background-color: #9FD8CB;
    border-radius: 10px;
`

const ImageContainer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    background-color: red;
    
`

const WeatherImage = styled.Image`
    width: 150px;
    height: 150px;
`
const TempImage = styled.Image`
    width: 45px;
    height: 105px;
    margin-right: 10px;
`

const DataContainer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`
const Status = styled.Text`
    font-size: 26px;
`

export {
    Container,
    ImageContainer,
    WeatherImage,
    TempImage,
    DataContainer,
    Status
}
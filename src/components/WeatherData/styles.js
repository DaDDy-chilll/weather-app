import {styled} from 'styled-components'

const Container = styled.View`
width: 100%;
    background-color: red;
`

const ImageContainer = styled.View`
    background-color: green;
    display: flex;
`

const HeaderImage = styled.Image`
    background-color: blue;
    width:40;
`

export {
    Container,
    ImageContainer,
    HeaderImage
}
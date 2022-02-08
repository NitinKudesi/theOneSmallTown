import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const taxDecScreenStyle = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    headTitle: {
        fontSize: 17,
        color: 'black'
    }
})

export default taxDecScreenStyle;
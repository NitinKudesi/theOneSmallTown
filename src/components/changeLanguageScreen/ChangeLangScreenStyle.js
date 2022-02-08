import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const ChangeLangScreenStyle = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 30,
        backgroundColor: 'white'
    }
})

export default ChangeLangScreenStyle;
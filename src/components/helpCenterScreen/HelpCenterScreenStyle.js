import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const HelpCenterScreenStyle = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    icon: {
        width: 30,
        height: 30
    },
    contain: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        padding: 5,
        justifyContent: 'space-around',
        marginTop: 15
    }
})

export default HelpCenterScreenStyle;
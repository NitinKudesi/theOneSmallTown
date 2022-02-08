import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const NotificationScreenStyle = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20
    },
    headingText: {
        fontSize: 15,
        color: 'black',
        marginTop: 20,
    },
    subText: {
        marginTop: 14,
        fontSize: 12,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default NotificationScreenStyle;
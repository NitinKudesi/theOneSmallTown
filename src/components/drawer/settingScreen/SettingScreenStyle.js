import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const SettingScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20
    },
    icons: {
        width: 24,
        height: 24,
    },
    con: {
        flexDirection: 'row',
        marginTop: 30
    },
    text: {
        marginLeft: 20,
        fontSize: 15,
        color: 'black',
        fontFamily: 'Muli-Regular',
    }
})

export default SettingScreenStyle;
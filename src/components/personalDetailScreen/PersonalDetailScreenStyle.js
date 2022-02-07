import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const PersonalDetailScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20
    },
    inputTextContainer: {
        width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 15,
        padding: 2,
        elevation: 3,
      },
})

export default PersonalDetailScreenStyle;
import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const getStartedScreenStyle = StyleSheet.create({
    mainConatiner:{
        // flex: 1,
        backgroundColor: 'transparent',
        // padding: 20
    },
    img:{
        width: width * 0.88,
        height: width * 0.58,
        alignSelf: 'center',
        marginBottom: 30
    },
    loginButton: {
        width: width * 0.8,
        padding: 10,
        backgroundColor: '#5A55CA',
        alignSelf: 'center',
        marginTop : 10,
        borderRadius: 5
    },
    createAccountScreen : {
        width: width * 0.8,
        padding: 10, 
        backgroundColor: '#232323',
        alignSelf: 'center',
        marginTop : 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Muli-Regular'
    },
    normalText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Muli-Regular',
        marginTop : 10,
    },
    background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
      },
      vi:{
          flex: 1
      }
})

export default getStartedScreenStyle;
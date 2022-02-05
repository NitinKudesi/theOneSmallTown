import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const Step4Style = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        backgroundColor: 'transparent',
      },
      background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
      },
      loginContainer: {
        width: width,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        padding: 10,
        justifyContent: 'space-around',
      },
      loginButton: {
        width: width * 0.25,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 4,
      },
      loginText: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Muli-Regular',
        color: 'black',
      },
      button: {
        width: width * 0.8,
        padding: 10,
        backgroundColor: '#5A55CA',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 5,
        marginBottom: 20
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Muli-Regular',
      },
      backButton: {
        width: 25,
        height: 25,
    },
    textView:{
      padding: 20
    },
    titleText:{
      fontSize: 15,
      fontFamily: 'Muli-Regular',
      color: '#6A6A6A',
      marginTop: 10,
    },
    checkBoxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 2,
      marginTop: 10
    },
    checkBoxContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      marginTop: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      elevation: 3
    }

})

export default Step4Style;
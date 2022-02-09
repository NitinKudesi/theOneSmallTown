import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const FeedBackStyle = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        backgroundColor: '#009387',
      },
      background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
      },
      footer: {
        // flex: 1,
        height: height * 0.93,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginTop: 30,
      },
      menuImg: {
          width: width * 0.07,
          height: width * 0.07
      },
      HomeText: {
          fontSize: 20,
          color: 'white',
          marginTop: 6
      },
      profileText: {
          fontSize: 15,
          color: 'white'
      },
      setting:{
        width: width * 0.05,
        height: width * 0.05,
        
      },
      innerView:{
        // width: width * 0.09,
        // height: width * 0.09
        padding: 20,
        backgroundColor: 'white'
      },
      titleText:{
        fontSize: 15,
        fontFamily: 'Muli-Regular',
        color: '#6A6A6A',
        marginTop: 20,
      },
      checkBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        marginTop: 10
      },
      button: {
        width: width * 0.26,
        padding: 10,
        backgroundColor: '#5A55CA',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Muli-Regular',
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

export default FeedBackStyle;
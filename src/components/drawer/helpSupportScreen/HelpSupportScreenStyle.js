import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const HelpSupportScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    img: {
        width: width * 0.6,
        height: width * 0.42,
        alignSelf: 'center',
        marginBottom: 30,
      },
      containerView:{
          width: width * 0.9,
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 12,
          elevation: 5
      },
      inputTextContainer: {
        // width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 10,
        // alignSelf: 'center',
        marginTop: 15,
        padding: 2,
        elevation: 3,
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
      icon:{
          width: 30,
          height: 30
      },
      innerContainer: {
          flexDirection: 'row',
          marginTop: 15
      },
      Headtext:{
        fontSize: 13,
        fontFamily: 'Muli-Regular',
        textAlign: 'justify',
        // marginTop: 10
    },
    text:{
        fontSize: 13,
        fontFamily: 'Muli-Regular',
        textAlign: 'justify',
        // marginTop: 10
    }
})

export default HelpSupportScreenStyle;
import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const PasswordResetScreenStyle = StyleSheet.create({
    mainConatiner:{
        // flex: 1,
        backgroundColor: 'transparent',
        // padding: 20
    },
    img:{
        width: width * 0.65,
        height: width * 0.42,
        alignSelf: 'center',
        marginBottom: 30
    },
    background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
      },

      middleView: {
          width: width * 0.85
      }

})

export default PasswordResetScreenStyle;
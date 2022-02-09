import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const ProfileScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
        height: height * 0.73,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        // marginTop: 30,
      },
})

export default ProfileScreenStyle;
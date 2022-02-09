import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');


const HomeScreenStyle = StyleSheet.create({
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
      profileImg:{
        width: width * 0.09,
        height: width * 0.09
      }
})

export default HomeScreenStyle;
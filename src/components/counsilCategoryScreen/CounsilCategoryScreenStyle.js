import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const CounsilCategoryScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        // justifyContent: 'center',
      },
      button: {
        width: width * 0.8,
        padding: 10,
        backgroundColor: '#7C77F6',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white'
      },
      button2: {
        width: width * 0.8,
        padding: 10,
        backgroundColor: '#C1C1C1',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      },
      buttonText2: {
        textAlign: 'center',
        fontSize: 14,
        color: 'black'
      },
      backView:{
          width: 80,
          height: 80,
          backgroundColor: '#FFD7A2',
          justifyContent: 'center',
          borderRadius: 12,
          elevation: 2
      },
      backView2:{
        width: 80,
        height: 80,
        backgroundColor: '#FFCBF5',
        justifyContent: 'center',
        borderRadius: 12,
        elevation: 2
    },
    backView3:{
        width: 80,
        height: 80,
        backgroundColor: '#CEE3FF',
        justifyContent: 'center',
        borderRadius: 12,
        elevation: 2
    },
      icons:{
          width: 39,
          height: 39,
          alignSelf: 'center'
      },
      touch: {
          width: width * 0.9,
          flexDirection: 'row',
          marginTop: 20
      },
      text:{
          marginLeft: 15,
          marginTop: 10,
          fontSize: 14,
          color: 'black'
      }
})

export default CounsilCategoryScreenStyle;
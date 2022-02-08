import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const CounsilListScreenStyle = StyleSheet.create({
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
      backView:{
        width: 100,
        height: 100,
        backgroundColor: '#FFD7A2',
        justifyContent: 'center',
        borderRadius: 12,
        elevation: 2,
        alignSelf: 'center',
        marginTop: 20
    },
    icons:{
        width: 39,
        height: 39,
        alignSelf: 'center'
    },
})

export default CounsilListScreenStyle;
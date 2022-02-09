import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const FaqScreenStyle = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20
    },
    expandalbe: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        // backgroundColor: 'red',
        width: width * 0.8,
        padding: 5
    }

})

export default FaqScreenStyle;
import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const Step7Style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
      },
      background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
      },
})

export default Step7Style;
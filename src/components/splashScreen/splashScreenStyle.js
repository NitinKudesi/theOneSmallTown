import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const splashScreenStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  img: {
    width: width * 0.9,
    height: width * 0.7,
    alignSelf: 'center',
  },
});

export default splashScreenStyle;

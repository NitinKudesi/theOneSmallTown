import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const JobWorkScreenStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  midContainer: {
    //   flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white'
    marginTop: width / 2
  },
  buttonContainer: {
    width: width * 0.85,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    flexDirection: 'row'
  },
  iconImg: {
    width: 40,
    height: 40,
  },
});

export default JobWorkScreenStyle;

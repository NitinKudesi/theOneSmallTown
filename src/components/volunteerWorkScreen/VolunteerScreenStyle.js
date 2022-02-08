import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const VolunteerScreenStyle = StyleSheet.create({
  container: {
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
    height: height * 0.85,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    // marginTop: 30,
  },
  
});

export default VolunteerScreenStyle;

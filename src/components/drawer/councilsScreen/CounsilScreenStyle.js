import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const CounsilScreenStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
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
    marginTop: 10,
  },
  buttonText2: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black'
  },
});

export default CounsilScreenStyle;

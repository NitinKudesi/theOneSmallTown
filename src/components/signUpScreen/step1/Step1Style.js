import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const Step1Style = StyleSheet.create({
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
  loginContainer: {
    width: width,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'space-around',
  },
  loginButton: {
    width: width * 0.25,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 4,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Muli-Regular',
    color: 'black',
  },
  inputTextContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    padding: 2,
    elevation: 3,
  },
  textView:{
    padding: 20
  },
  titleText:{
    fontSize: 15,
    fontFamily: 'Muli-Regular',
    color: '#6A6A6A',
    marginTop: 20,
  },
  button: {
    width: width * 0.8,
    padding: 10,
    backgroundColor: '#5A55CA',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Muli-Regular',
  },
  backButton: {
      width: 25,
      height: 25,
  }
});

export default Step1Style;

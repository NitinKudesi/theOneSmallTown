import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const loginScreenStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    // padding: 20,
  },
  img: {
    width: width * 0.6,
    height: width * 0.42,
    alignSelf: 'center',
    marginBottom: 30,
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
    marginTop: 15,
    padding: 2,
    elevation: 3,
  },
  button: {
    width: width * 0.26,
    padding: 10,
    backgroundColor: '#5A55CA',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Muli-Regular',
  },
  forgetPasswordText: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Muli-Regular',
    marginTop: 20,
  },
  memberButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#5A55CA',
    backgroundColor: 'white',
    padding: 10,
    width: width * 0.8,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 5,
  },
  memberText: {
    color: '#5A55CA',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Muli-Regular',
  },
  icon: {
    width: width * 0.16,
    height: width * 0.16,
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  footerIconView: {
    width: width,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
});

export default loginScreenStyle;

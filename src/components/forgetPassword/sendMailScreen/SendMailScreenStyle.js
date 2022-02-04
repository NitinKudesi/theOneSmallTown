import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const SendMailScreenStyle = StyleSheet.create({
  mainConatiner: {
    // flex: 1,
    backgroundColor: 'transparent',
    // padding: 20
  },
  img: {
    width: width * 0.65,
    height: width * 0.42,
    alignSelf: 'center',
    marginBottom: 30,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  middleView: {
    width: width * 0.92,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    elevation: 5
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
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
  },
  verificationButton: {
    padding: 10,
    width: width * 0.4,
    hieght: 39,
    borderRadius: 5,
  },
  normalText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Muli-Regular',
    marginTop : 10,
},
});

export default SendMailScreenStyle;

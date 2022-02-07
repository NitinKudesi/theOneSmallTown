import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const PrivacyPolicyScreenStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Muli-Regular',
    textAlign: 'justify',
    marginTop: 10,
  },
});

export default PrivacyPolicyScreenStyle;

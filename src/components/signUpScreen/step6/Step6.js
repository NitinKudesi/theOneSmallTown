import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Step6Style from './Step6Style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const Step6 = ({navigation}) => {
  return (
    <View style={Step6Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step6Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <View style={Step6Style.Modal}>
        <Text style={Step6Style.titleText}>
          "Before Continuing, please read and agree to our Co-op's Terms and
          Conditions"
        </Text>
        <Text style={Step6Style.titleText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          Remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
        <View style={{marginTop: 20}}>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            text="I agree with  Co-op's Terms and Conditions"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Step2')}
          style={Step6Style.button}>
          <Text style={Step6Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step6;

import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Step5Style from './Step5Style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Step5 = ({navigation}) => {
  return (
    <View style={Step5Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step5Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <View style={{padding: 20}}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/backbutton.png')}
            style={Step5Style.backButton}
          />
        </TouchableOpacity>
      </View>
      <View style={Step5Style.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={Step5Style.loginButton}>
          <Text style={Step5Style.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={Step5Style.loginButton}>
          <Text style={Step5Style.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View style={Step5Style.textView}>
        <Text style={Step5Style.titleText}>
          Skills that you are capable of performing or Learning.
        </Text>

        <View style={Step5Style.checkBoxContainer2}>
          <Text style={Step5Style.titleText}>Skill 1</Text>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            // text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <View style={Step5Style.checkBoxContainer2}>
          <Text style={Step5Style.titleText}>Skill 2</Text>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            // text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <View style={Step5Style.checkBoxContainer2}>
          <Text style={Step5Style.titleText}>Skill 3</Text>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            // text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <View style={Step5Style.checkBoxContainer2}>
          <Text style={Step5Style.titleText}>Skill 4</Text>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            // text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <View style={Step5Style.checkBoxContainer2}>
          <Text style={Step5Style.titleText}>Skill 5</Text>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            // text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
      </View>
      <Text>Step5</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Step6')}
        style={Step5Style.button}>
        <Text style={Step5Style.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step5;

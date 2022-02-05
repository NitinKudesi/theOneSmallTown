import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Step4Style from './Step4Style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Step4 = ({navigation}) => {
  return (
    <View style={Step4Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step4Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <View style={{padding: 20}}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/backbutton.png')}
            style={Step4Style.backButton}
          />
        </TouchableOpacity>
      </View>
      <View style={Step4Style.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={Step4Style.loginButton}>
          <Text style={Step4Style.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={Step4Style.loginButton}>
          <Text style={Step4Style.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View style={Step4Style.textView}>
        <Text style={Step4Style.titleText}>
          Do you have a degree from a recognized college/ University?*
        </Text>
        <View style={Step4Style.checkBoxContainer}>
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            text="Yes"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="#5A55CA"
            unfillColor="#FFFFFF"
            text="No"
            iconStyle={{borderColor: '#707070', borderRadius: 3}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
              fontSize: 11,
            }}
            // onPress={(isChecked: boolean) => {}}
          />
        </View>
        <View style={Step4Style.checkBoxContainer2}>
          <Text style={Step4Style.titleText}>Skill 1</Text>
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
        <View style={Step4Style.checkBoxContainer2}>
          <Text style={Step4Style.titleText}>Skill 2</Text>
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
        <View style={Step4Style.checkBoxContainer2}>
          <Text style={Step4Style.titleText}>Skill 3</Text>
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
        <View style={Step4Style.checkBoxContainer2}>
          <Text style={Step4Style.titleText}>Skill 4</Text>
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
        <View style={Step4Style.checkBoxContainer2}>
          <Text style={Step4Style.titleText}>Skill 5</Text>
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

      <TouchableOpacity
        onPress={() => navigation.navigate('Step5')}
        style={Step4Style.button}>
        <Text style={Step4Style.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step4;

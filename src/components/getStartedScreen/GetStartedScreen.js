import {View, Text, Image, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';
import React from 'react';

import getStartedScreenStyle from './getStartedScreenStyle';

const GetStartedScreen = ({navigation}) => {
  return (
    <View style={getStartedScreenStyle.mainConatiner}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={getStartedScreenStyle.background}
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
      />
      {/* <View style={getStartedScreenStyle.vi}> */}
      <Image
        style={getStartedScreenStyle.img}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={getStartedScreenStyle.normalText}>Already Have an Account..!</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('LoginScreen')}
      style={getStartedScreenStyle.loginButton}>
        <Text style={getStartedScreenStyle.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={getStartedScreenStyle.normalText}>OR</Text>
      <TouchableOpacity 
       onPress={() => navigation.navigate('Step1')}
      style={getStartedScreenStyle.createAccountScreen}>
        <Text style={getStartedScreenStyle.buttonText}>Create New Account</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default GetStartedScreen;

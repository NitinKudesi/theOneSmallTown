import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

import PasswordResetScreenStyle from './PasswordResetScreenStyle';

const PasswordResetScreen = () => {
  return (
    <View style={PasswordResetScreenStyle.mainConatiner}>
       <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={PasswordResetScreenStyle.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <Image
          style={PasswordResetScreenStyle.img}
          source={require('../../../assets/images/logo.png')}
        />
    </View>
  );
};

export default PasswordResetScreen;

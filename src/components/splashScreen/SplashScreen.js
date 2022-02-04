import {View, Text, Image} from 'react-native';
import React from 'react';

import splashScreenStyle from './splashScreenStyle';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('GetStartedScreen');
    // <-- This is the View you go
  }, 4000);
  return (
    <View style={splashScreenStyle.mainContainer}>
      <Image
        style={splashScreenStyle.img}
        source={require('../../assets/images/logo.png')}
      />
      {/* <Text>splashScreen</Text> */}
    </View>
  );
};

export default SplashScreen;

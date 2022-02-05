import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import React from 'react';

import Step7Style from './Step7Style';

const Step7 = ({navigation}) => {
  return (
    <View style={Step7Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step7Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <Text>Step7</Text>
    </View>
  );
};

export default Step7;

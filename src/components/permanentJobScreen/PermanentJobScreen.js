import { View, Text, TouchableOpacity, Image, ImageBackground  } from 'react-native';
import React from 'react';
import PermanentJobScreenStyle from './PermanentJobScreenStyle';
import * as Animatable from 'react-native-animatable';

const PermanentJobScreen = () => {
  return (
    <View style={PermanentJobScreenStyle.mainContainer}>
      <ImageBackground
        style={PermanentJobScreenStyle.background}
        source={require('../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <Animatable.View
        style={PermanentJobScreenStyle.footer}
        animation="fadeInUpBig"></Animatable.View>
    </View>
  );
};

export default PermanentJobScreen;

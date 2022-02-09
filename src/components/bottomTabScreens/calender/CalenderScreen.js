import { View, Text, TouchableOpacity, Image, ImageBackground  } from 'react-native';
import React from 'react';

import CalenderScreenStyle from './CalenderScreenStyle';
import * as Animatable from 'react-native-animatable';

const CalenderScreen = () => {
  return (
    <View style={CalenderScreenStyle.mainContainer}>
     <ImageBackground
        style={CalenderScreenStyle.background}
        source={require('../../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <Animatable.View
        style={CalenderScreenStyle.footer}
        animation="fadeInUpBig"></Animatable.View>
    </View>
  );
};

export default CalenderScreen;

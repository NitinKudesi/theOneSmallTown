import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

import VolunteerScreenStyle from './VolunteerScreenStyle';
import * as Animatable from 'react-native-animatable';

const VolunteerScreen = () => {
  return (
    <View style={VolunteerScreenStyle.container}>
      <ImageBackground
        style={VolunteerScreenStyle.background}
        source={require('../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <Animatable.View
        style={VolunteerScreenStyle.footer}
        animation="fadeInUpBig"></Animatable.View>
    </View>
  );
};

export default VolunteerScreen;

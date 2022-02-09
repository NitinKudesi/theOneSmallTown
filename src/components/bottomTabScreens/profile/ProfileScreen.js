import { View, Text, TouchableOpacity, Image, ImageBackground  } from 'react-native';
import React from 'react';

import ProfileScreenStyle from './ProfileScreenStyle';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = () => {
  return (
    <View style={ProfileScreenStyle.mainContainer}>
     <ImageBackground
        style={ProfileScreenStyle.background}
        source={require('../../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <Animatable.View
        style={ProfileScreenStyle.footer}
        animation="fadeInUpBig"></Animatable.View>
    </View>
  );
};

export default ProfileScreen;

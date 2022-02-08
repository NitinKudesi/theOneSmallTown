import {View, Text, ImageBackground, StatusBar, Image} from 'react-native';
import React from 'react';

import JobWorkScreenStyle from './JobWorkScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

const JobWorkScreen = ({navigation}) => {
  return (
    <View style={JobWorkScreenStyle.mainContainer}>
      <StatusBar backgroundColor="#5A55CA" barStyle="light-content" />
      <ImageBackground
        style={JobWorkScreenStyle.background}
        source={require('../../../assets/images/notiBack.png')}
        resizeMode="cover"
      />
      <View style={JobWorkScreenStyle.midContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('PermanentJobScreen')}
        style={JobWorkScreenStyle.buttonContainer}
        >
          <Image
            style={JobWorkScreenStyle.iconImg}
            source={require('../../../assets/images/permanent.png')}
          />
          <Text>Permanent Job</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('VolunteerScreen')}
        style={JobWorkScreenStyle.buttonContainer}
        >
          <Image
            style={JobWorkScreenStyle.iconImg}
            source={require('../../../assets/images/clock.png')}
          />
          <Text>Permanent Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobWorkScreen;

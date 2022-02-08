import {View, Text, Image} from 'react-native';
import React from 'react';

import HelpCenterScreenStyle from './HelpCenterScreenStyle';

const HelpCenterScreen = () => {
  return (
    <View style={HelpCenterScreenStyle.mainContainer}>
      <Text>Here are our help centers that you can visit</Text>
      <View style={HelpCenterScreenStyle.contain}>
        <Image
          style={HelpCenterScreenStyle.icon}
          source={require('../../assets/images/arrow.png')}
        />
        <Text>123/b , xyz Lane, Pqr Street City, Province</Text>
        <Image
          style={HelpCenterScreenStyle.icon}
          source={require('../../assets/images/location.png')}
        />
      </View>
      <View style={HelpCenterScreenStyle.contain}>
        <Image
          style={HelpCenterScreenStyle.icon}
          source={require('../../assets/images/arrow.png')}
        />
        <Text>123/b , xyz Lane, Pqr Street City, Province</Text>
        <Image
          style={HelpCenterScreenStyle.icon}
          source={require('../../assets/images/location.png')}
        />
      </View>
    </View>
  );
};

export default HelpCenterScreen;

import {View, Text} from 'react-native';
import React from 'react';

import taxDecScreenStyle from './TaxScreenStyle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TaxScreen = () => {
  return (
    <View style={taxDecScreenStyle.mainContainer}>
      <Text style={taxDecScreenStyle.headTitle}>
        Please determine your tax status
      </Text>
      <View style={{padding: 10}}>
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="It is a long established fact that a reader will be
        distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum
        is that it has a more-or-less normal distribution of
        letters"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
          textAlign: 'justify',
        }}
        style={{marginTop: 16}}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="It is a long established fact that a reader will be
        distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum
        is that it has a more-or-less normal distribution of
        letters"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
          textAlign: 'justify',
        }}
        style={{marginTop: 16}}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="It is a long established fact that a reader will be
        distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum
        is that it has a more-or-less normal distribution of
        letters"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
          textAlign: 'justify',
        }}
        style={{marginTop: 16}}
        // onPress={(isChecked: boolean) => {}}
      />
      </View>
    </View>
  );
};

export default TaxScreen;

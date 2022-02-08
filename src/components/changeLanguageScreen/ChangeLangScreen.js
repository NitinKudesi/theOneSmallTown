import {View, Text} from 'react-native';
import React from 'react';

import ChangeLangScreenStyle from './ChangeLangScreenStyle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const ChangeLangScreen = () => {
  return (
    <View style={ChangeLangScreenStyle.mainContainer}>
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="English"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Spanish"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Hindi"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Bengali"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Japanese"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Russian"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />

      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Vietnamese"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Italian"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Nepali"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#5A55CA"
        unfillColor="#FFFFFF"
        text="Hungarian"
        iconStyle={{borderColor: '#707070'}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
          fontSize: 15,
        }}
        style={{ marginTop: 16 }}
        // onPress={(isChecked: boolean) => {}}
      />
    </View>
  );
};

export default ChangeLangScreen;

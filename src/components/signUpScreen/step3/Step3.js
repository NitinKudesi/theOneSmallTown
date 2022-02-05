import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import Step3Style from './Step3Style';
import {TextInput} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const Step3 = ({navigation}) => {
  return (
    <View style={Step3Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step3Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/backbutton.png')}
              style={Step3Style.backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={Step3Style.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step3Style.loginButton}>
            <Text style={Step3Style.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step3Style.loginButton}>
            <Text style={Step3Style.loginText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
        <View style={Step3Style.textView}>
          <Text style={Step3Style.titleText}>
            Fill Your Personal details marked with *
          </Text>
          <View style={Step3Style.inputTextContainer}>
            <TextInput
              // value={phone}
              mode="flat"
              // onChangeText={value => dispatch(setEmail(value))}
              // style={styles.input}
              placeholder="Skill 1"
              placeholderTextColor="#707070"
              theme={{
                colors: {
                  primary: '#5A55CA',
                  underlineColor: 'transparent',
                  background: 'transparent',
                },
              }}
            />
          </View>
          <Text style={Step3Style.titleText}>Profiency</Text>
          <View style={Step3Style.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Average"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Very Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Expert"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={Step3Style.inputTextContainer}>
            <TextInput
              // value={phone}
              mode="flat"
              // onChangeText={value => dispatch(setEmail(value))}
              // style={styles.input}
              placeholder="Skill 2"
              placeholderTextColor="#707070"
              theme={{
                colors: {
                  primary: '#5A55CA',
                  underlineColor: 'transparent',
                  background: 'transparent',
                },
              }}
            />
          </View>
          <Text style={Step3Style.titleText}>Profiency</Text>
          <View style={Step3Style.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Average"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Very Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Expert"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={Step3Style.inputTextContainer}>
            <TextInput
              // value={phone}
              mode="flat"
              // onChangeText={value => dispatch(setEmail(value))}
              // style={styles.input}
              placeholder="Skill 3"
              placeholderTextColor="#707070"
              theme={{
                colors: {
                  primary: '#5A55CA',
                  underlineColor: 'transparent',
                  background: 'transparent',
                },
              }}
            />
          </View>
          <Text style={Step3Style.titleText}>Profiency</Text>
          <View style={Step3Style.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Average"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Very Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Expert"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={Step3Style.inputTextContainer}>
            <TextInput
              // value={phone}
              mode="flat"
              // onChangeText={value => dispatch(setEmail(value))}
              // style={styles.input}
              placeholder="Skill 5"
              placeholderTextColor="#707070"
              theme={{
                colors: {
                  primary: '#5A55CA',
                  underlineColor: 'transparent',
                  background: 'transparent',
                },
              }}
            />
          </View>
          <Text style={Step3Style.titleText}>Profiency</Text>
          <View style={Step3Style.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Average"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Very Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Expert"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={Step3Style.inputTextContainer}>
            <TextInput
              // value={phone}
              mode="flat"
              // onChangeText={value => dispatch(setEmail(value))}
              // style={styles.input}
              placeholder="Skill 5"
              placeholderTextColor="#707070"
              theme={{
                colors: {
                  primary: '#5A55CA',
                  underlineColor: 'transparent',
                  background: 'transparent',
                },
              }}
            />
          </View>
          <Text style={Step3Style.titleText}>Profiency</Text>
          <View style={Step3Style.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Average"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Very Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Expert"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Step4')}
          style={Step3Style.button}>
          <Text style={Step3Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Step3;

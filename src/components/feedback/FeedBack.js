import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

import FeedBackStyle from './FeedBackStyle';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FeedBack = () => {
  return (
    <View style={FeedBackStyle.mainContainer}>
      <ImageBackground
        style={FeedBackStyle.background}
        source={require('../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <View
        style={{
          backgroundColor: 'transparent',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          //   onPress={() => navigation.openDrawer()}
          style={{backgroundColor: 'transparent'}}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={FeedBackStyle.menuImg}
          />
        </TouchableOpacity>
        <Text style={FeedBackStyle.HomeText}>FeedBack</Text>

        <View style={{backgroundColor: 'transparent'}}>
          <Image
            source={require('../../assets/images/setting.png')}
            style={FeedBackStyle.setting}
          />
        </View>
      </View>

      <Animatable.View style={FeedBackStyle.footer} animation="fadeInUpBig">
        <View style={FeedBackStyle.innerView}>
          <Text style={FeedBackStyle.titleText}>Give your feedback, so we can Improve everyday</Text>
          <Text style={FeedBackStyle.titleText}>Handover</Text>
          <View style={FeedBackStyle.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Great"
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
              text="Not Good"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>

          <Text style={FeedBackStyle.titleText}>Training Required</Text>
          <View style={FeedBackStyle.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Yes"
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
              text="No"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>

          <Text style={FeedBackStyle.titleText}>Training Required</Text>
          <View style={FeedBackStyle.checkBoxContainer}>
            <BouncyCheckbox
              size={15}
              fillColor="#5A55CA"
              unfillColor="#FFFFFF"
              text="Yes"
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
              text="No"
              iconStyle={{borderColor: '#707070', borderRadius: 3}}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
                fontSize: 11,
              }}
              // onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={FeedBackStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Any Comments"
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
          <TouchableOpacity 
        onPress={() => navigation.navigate('SlideDrawer')}
        style={FeedBackStyle.button}>
          <Text style={FeedBackStyle.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default FeedBack;

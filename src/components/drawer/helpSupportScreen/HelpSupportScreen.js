import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';

import HelpSupportScreenStyle from './HelpSupportScreenStyle';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {TextInput} from 'react-native-paper';

const HelpSupportScreen = () => {
  return (
    <View style={HelpSupportScreenStyle.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <Image
        style={HelpSupportScreenStyle.img}
        source={require('../../../assets/images/logo.png')}
      />
      <View style={HelpSupportScreenStyle.containerView}>
        <View style={HelpSupportScreenStyle.innerContainer}>
          <View>
            <Image
              style={HelpSupportScreenStyle.icon}
              source={require('../../../assets/images/location.png')}
            />
          </View>
          <View>
            <Text style={HelpSupportScreenStyle.Headtext}>Address</Text>
            <Text style={HelpSupportScreenStyle.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </View>
        </View>
        <View style={HelpSupportScreenStyle.innerContainer}>
          <View>
            <Image
              style={HelpSupportScreenStyle.icon}
              source={require('../../../assets/images/contact.png')}
            />
          </View>
          <View>
            <Text style={HelpSupportScreenStyle.Headtext}>Contact</Text>
            <Text style={HelpSupportScreenStyle.text}>+91 1234567890</Text>
          </View>
        </View>
        <View style={HelpSupportScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Your Full Name"
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
        <View style={HelpSupportScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Mobile Number"
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
        <View style={HelpSupportScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Email Address"
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
        <View style={HelpSupportScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Message for us"
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
          // onPress={() => navigation.navigate('SlideDrawer')}
          style={HelpSupportScreenStyle.button}>
          <Text style={HelpSupportScreenStyle.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default HelpSupportScreen;

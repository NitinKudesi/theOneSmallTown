import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import React from 'react';

import loginScreenStyle from './loginScreenStyle';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  return (
    <View style={loginScreenStyle.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={loginScreenStyle.background}
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={loginScreenStyle.img}
          source={require('../../assets/images/logo.png')}
        />
        <View style={loginScreenStyle.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={loginScreenStyle.loginButton}>
            <Text style={loginScreenStyle.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={loginScreenStyle.loginButton}>
            <Text style={loginScreenStyle.loginText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
        <View style={loginScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Email"
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
        <View style={loginScreenStyle.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Password"
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
        style={loginScreenStyle.button}>
          <Text style={loginScreenStyle.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SendMailScreen')}>
          <Text style={loginScreenStyle.forgetPasswordText}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginScreenStyle.memberButton}>
          <Text style={loginScreenStyle.memberText}>Co-op Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginScreenStyle.memberButton}>
          <Text style={loginScreenStyle.memberText}>
            One Small Town Members
          </Text>
        </TouchableOpacity>
        <Text style={loginScreenStyle.forgetPasswordText}>OR</Text>
        <Text style={loginScreenStyle.forgetPasswordText}>Login with</Text>
        <View style={loginScreenStyle.footerIconView}>
          <Image
            style={loginScreenStyle.icon}
            source={require('../../assets/images/google.png')}
          />
          <Image
            style={loginScreenStyle.icon}
            source={require('../../assets/images/meta.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

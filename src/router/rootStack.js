import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../components/splashScreen/SplashScreen';
import GetStartedScreen from '../components/getStartedScreen/GetStartedScreen';
import LoginScreen from '../components/loginScreen/LoginScreen';
import SignUpScreen from '../components/signUpScreen/SignUpScreen';
import PasswordResetScreen from '../components/forgetPassword/passwordResetScreen/PasswordResetScreen';
import SendMailScreen from '../components/forgetPassword/sendMailScreen/SendMailScreen';

const bottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStartedScreen"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PasswordResetScreen"
        component={PasswordResetScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SendMailScreen"
        component={SendMailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

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
import Step1 from '../components/signUpScreen/step1/Step1';
import Step2 from '../components/signUpScreen/step2/Step2';
import Step3 from '../components/signUpScreen/step3/Step3';
import Step4 from '../components/signUpScreen/step4/Step4';
import Step5 from '../components/signUpScreen/step5/Step5';
import Step6 from '../components/signUpScreen/step6/Step6';
import Step7 from '../components/signUpScreen/step7/Step7';

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

      <Stack.Screen
        name="Step1"
        component={Step1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step2"
        component={Step2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step3"
        component={Step3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step4"
        component={Step4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step5"
        component={Step5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step6"
        component={Step6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step7"
        component={Step7}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

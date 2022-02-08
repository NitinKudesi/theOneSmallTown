import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {View, TouchableOpacity, Image, Text} from 'react-native';

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

// DRAWER

import CounsilScreen from '../components/drawer/councilsScreen/CouncilScreen';
import HelpSupportScreen from '../components/drawer/helpSupportScreen/HelpSupportScreen';
import HomeScreen from '../components/drawer/homeScreen/HomeScreen';
import JobWorkScreen from '../components/drawer/jobWorkScreen/JobWorkScreen';
import PaymentScreen from '../components/drawer/paymentScreen/PaymentScreen';
import PrivacyPolicyScreen from '../components/drawer/privacyPolicyScreen/PrivacyPolicyScreen';
import SettingScreen from '../components/drawer/settingScreen/SettingScreen';
import TermConditionScreen from '../components/drawer/termConditionScreen/TermConditionScreen';

import PersonalDetailScreen from '../components/personalDetailScreen/PersonalDetailScreen';
import ChangeLangScreen from '../components/changeLanguageScreen/ChangeLangScreen';
import TaxScreen from '../components/taxDecScreen/TaxScreen';
import HelpCenterScreen from '../components/helpCenterScreen/HelpCenterScreen';
import NotificationScreen from '../components/notification/NotificationScreen';

import PermanentJobScreen from '../components/permanentJobScreen/PermanentJobScreen';
import VolunteerScreen from '../components/volunteerWorkScreen/VolunteerScreen';
import CounsilCategoryScreen from '../components/counsilCategoryScreen/CounsilCategoryScreen';
import CounsilListScreen from '../components/counsilListScreen/CounsilListScreen';
import FaqScreen from '../components/faqScreen/FaqScreen';

// const bottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SlideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" />
          </DrawerContentScrollView>
        );
      }}>
      {/* <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
          title: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 17,
                fontFamily: 'BwModelicaSS01-Bold',
              }}>
              Sneaker{'  '}
              <Image
                style={{width: 20, height: 20}}
                // source={require('./assets/icon.png')}
              />
              ault HQ
            </Text>
          ),
          // headerLeft: () => (
          //   <TouchableOpacity
          //   // onPress={() => navigation.openDrawer()}
          //   >
          //     <Image
          //       style={{
          //         width: 14,
          //         height: 14,
          //         marginLeft: 25,
          //       }}
          //       source={require('./assets/icon.png')}
          //     />
          //   </TouchableOpacity>
          // ),
        }}></Drawer.Screen> */}

      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // headerShown: false,
          title: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tisa Sans Pro Medium',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'Tisa Sans Pro Medium',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Test & Assignments
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: 9,
                  height: 16,
                  marginLeft: 25,
                }}
                // source={require('../../assets/images/leftArrow.png')}
              />
            </TouchableOpacity>
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          // headerShown: false,
          title: 'Payments',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Tisa Sans Pro Medium',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'Tisa Sans Pro Medium',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Raised Queries
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              // source={require('../../assets/images/leftArrow.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="JobWorkScreen"
        component={JobWorkScreen}
        options={{
          // headerShown: false,
          title: 'JobWork',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         
          headerStyle: {
            // height: 72,
            backgroundColor: '#5A55CA',
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                // textAlign: 'left',
              }}>
             Welcome, Username 
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="CounsilScreen"
        component={CounsilScreen}
        options={{
          // headerShown: false,
          title: 'Counsil',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                // textAlign: 'left',
              }}>
              Counsil
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          // headerShown: false,
          title: 'SettingScreen',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Settings
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              // source={require('../../assets/images/leftArrow.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="HelpSupportScreen"
        component={HelpSupportScreen}
        options={{
          // headerShown: false,
          title: 'Help Support',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Help Support
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              // source={require('../../assets/images/leftArrow.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="TermConditionScreen"
        component={TermConditionScreen}
        options={{
          // headerShown: false,
          title: 'Term Condition',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Term Conditions
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              // source={require('../../assets/images/leftArrow.png')}
            />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{
          // headerShown: false,
          title: 'Privacy Policy',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={['#158FE4', '#5EBDFF']}
          //     style={{flex: 1, borderBottomLeftRadius: 30}}
          //     start={{x: 0, y: 0}}
          //     end={{x: 1, y: 0}}
          //   />
          //   // </LinearGradient>
          // ),
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Privacy Policy
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{
                width: 9,
                height: 16,
                marginLeft: 25,
              }}
              // source={require('../../assets/images/leftArrow.png')}
            />
          ),
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export const AuthStack = ({navigation}) => {
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
      <Stack.Screen
        name="SlideDrawer"
        component={SlideDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDetailScreen"
        component={PersonalDetailScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Personal Details
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ChangeLangScreen"
        component={ChangeLangScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Change Language
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TaxScreen"
        component={TaxScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Tax Declaration
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="HelpCenterScreen"
        component={HelpCenterScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Visit help center
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              NotificationScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PermanentJobScreen"
        component={PermanentJobScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              NotificationScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="VolunteerScreen"
        component={VolunteerScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              NotificationScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="CounsilCategoryScreen"
        component={CounsilCategoryScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              CounsilCategoryScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="CounsilListScreen"
        component={CounsilListScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              CounsilListScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="FaqScreen"
        component={FaqScreen}
        options={{
          // headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 72,
            backgroundColor: '#5A55CA',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                // fontWeight: 'bold',
                textAlign: 'center',
              }}>
              FaqScreen
            </Text>
          ),
          headerLeft: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
            <Image
              style={{
                width: 8.35,
                height: 14,
                marginLeft: 25,
              }}
              source={require('../assets/images/backbutton.png')}
            />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

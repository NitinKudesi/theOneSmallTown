import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Step1Style from './Step1Style';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';

const Step1 = ({navigation}) => {
  return (
    <View style={Step1Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step1Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/backbutton.png')}
              style={Step1Style.backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={Step1Style.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step1Style.loginButton}>
            <Text style={Step1Style.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step1Style.loginButton}>
            <Text style={Step1Style.loginText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
        <View style={Step1Style.textView}>
          <Text style={Step1Style.titleText}>
            Fill Your Personal details marked with *
          </Text>
        </View>
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Title*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="First Name*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Second Name*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Surname/Last Name*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Date of Birth*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Please specify Your Gender"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Upload Id Proof "
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
        <View style={Step1Style.textView}>
          <Text style={Step1Style.titleText}>
            Please upload your Resume, if availale
          </Text>
        </View>
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Physical Address*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Postal Code/Zip Code*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Town/ City*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="State/Province*"
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
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Upload Address Proof "
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
        <View style={Step1Style.textView}>
          <Text style={Step1Style.titleText}>
            Please upload your Resume, if availale
          </Text>
        </View>
        <View style={Step1Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Upload resume"
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
          onPress={() => navigation.navigate('Step2')}
          style={Step1Style.button}>
          <Text style={Step1Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Step1;

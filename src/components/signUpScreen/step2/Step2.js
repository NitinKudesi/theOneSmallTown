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

import Step2Style from './Step2Style';
import {TextInput} from 'react-native-paper';
const Step2 = ({navigation}) => {
  return (
    <View style={Step2Style.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={Step2Style.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/backbutton.png')}
              style={Step2Style.backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={Step2Style.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step2Style.loginButton}>
            <Text style={Step2Style.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Step2Style.loginButton}>
            <Text style={Step2Style.loginText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
        <View style={Step2Style.textView}>
          <Text style={Step2Style.titleText}>
            Fill Your Personal details marked with *
          </Text>
        </View>
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Mobile Number*"
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

        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Email Address*"
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
        <View style={Step2Style.textView}>
          <Text style={Step2Style.titleText}>Qualifications</Text>
        </View>
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Level of Education*"
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
        <View style={Step2Style.textView}>
          <Text style={Step2Style.titleText}>
            Do you have a degree from a recognized college/ University?*
          </Text>
        </View>
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="-------------*"
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
        <View style={Step2Style.textView}>
          <Text style={Step2Style.titleText}>Enter Bank Details*</Text>
        </View>
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Bank Name"
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
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Account Name"
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
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Sort Code"
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
        <View style={Step2Style.inputTextContainer}>
          <TextInput
            // value={phone}
            mode="flat"
            // onChangeText={value => dispatch(setEmail(value))}
            // style={styles.input}
            placeholder="Account Number"
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
          onPress={() => navigation.navigate('Step3')}
          style={Step2Style.button}>
          <Text style={Step2Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Step2;

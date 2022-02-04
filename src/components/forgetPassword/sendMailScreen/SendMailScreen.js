import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import SendMailScreenStyle from './SendMailScreenStyle';
import {TextInput} from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const SendMailScreen = () => {
  return (
    <View style={SendMailScreenStyle.mainConatiner}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ImageBackground
        style={SendMailScreenStyle.background}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover"
      />
      <Image
        style={SendMailScreenStyle.img}
        source={require('../../../assets/images/logo.png')}
      />
      <View style={SendMailScreenStyle.middleView}>
        <Text style={SendMailScreenStyle.normalText}>Enter the Email that you have registered previously</Text>
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
        <TouchableOpacity style={SendMailScreenStyle.button}>
          <Text style={SendMailScreenStyle.buttonText}>Send</Text>
        </TouchableOpacity>
        <Text style={SendMailScreenStyle.normalText}>Enter the Email that you have registered previously</Text>
        <TouchableOpacity style={SendMailScreenStyle.button}>
          <Text style={SendMailScreenStyle.buttonText}>Verify</Text>
        </TouchableOpacity>
        {/* <OTPInputView
        style={{
        //   width: '100%',
        //   height: 60,
          backgroundColor: '#F8FCFF',
          alignSelf: 'center',
        //   padding: 10,
        //   marginTop: 40,
        }}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged={code => {
        //   setOtp(code);
        // }}
        autoFocusOnLoad
        codeInputFieldStyle={SendMailScreenStyle.underlineStyleBase}
        codeInputHighlightStyle={SendMailScreenStyle.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      /> */}
      </View>
    </View>
  );
};

export default SendMailScreen;

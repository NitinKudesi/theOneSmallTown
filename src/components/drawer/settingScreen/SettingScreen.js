import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import SettingScreenStyle from './SettingScreenStyle';

const SettingScreen = ({navigation}) => {
  return (
    <View style={SettingScreenStyle.mainContainer}>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/user.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonalDetailScreen')}>
          <Text style={SettingScreenStyle.text}>Personal Details</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/questionMark.png')}
        />
        <TouchableOpacity>
          <Text style={SettingScreenStyle.text}>F.A.Q.</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/update.png')}
        />
        <TouchableOpacity>
          <Text style={SettingScreenStyle.text}>Check for App Updates</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/bell.png')}
        />
        <TouchableOpacity
        onPress={() => navigation.navigate('NotificationScreen')}
        >
          <Text style={SettingScreenStyle.text}>Notification Setting</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/lang.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeLangScreen')}>
          <Text style={SettingScreenStyle.text}>Change Language</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/center.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('HelpCenterScreen')}>
          <Text style={SettingScreenStyle.text}>Visit Help Center</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingScreenStyle.con}>
        <Image
          style={SettingScreenStyle.icons}
          source={require('../../../assets/images/tax.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('TaxScreen')}>
          <Text style={SettingScreenStyle.text}>Tax Declaration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

import React, {useState} from 'react';

import {View, Text, Switch} from 'react-native';

import NotificationScreenStyle from './NotificationScreenStyle';

const NotificationScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={NotificationScreenStyle.mainContainer}>
      <Text style={NotificationScreenStyle.headingText}>Marketing Updates</Text>
      <View style={NotificationScreenStyle.row}>
        <Text style={NotificationScreenStyle.subText}>Email</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={NotificationScreenStyle.headingText}>Marketing Updates</Text>
      <View style={NotificationScreenStyle.row}>
        <Text style={NotificationScreenStyle.subText}>Email</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={NotificationScreenStyle.row}>
        <Text style={NotificationScreenStyle.subText}>Notification</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={NotificationScreenStyle.headingText}>Daily Job Matches</Text>
      <View style={NotificationScreenStyle.row}>
        <Text style={NotificationScreenStyle.subText}>Email</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default NotificationScreen;

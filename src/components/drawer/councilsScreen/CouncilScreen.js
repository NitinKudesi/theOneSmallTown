import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import CounsilScreenStyle from './CounsilScreenStyle';

const CouncilScreen = ({navigation}) => {
  return (
    <View style={CounsilScreenStyle.mainContainer}>

      <TouchableOpacity 
      onPress={() => navigation.navigate('CounsilCategoryScreen')}
      style={CounsilScreenStyle.button}>
        <Text style={CounsilScreenStyle.buttonText}>Voting and Elections</Text>
      </TouchableOpacity>

      <TouchableOpacity style={CounsilScreenStyle.button2}>
        <Text style={CounsilScreenStyle.buttonText2}>Past Meetings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CouncilScreen;

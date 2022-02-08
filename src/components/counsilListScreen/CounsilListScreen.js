import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import CounsilListScreenStyle from './CounsilListScreenStyle';

const CounsilListScreen = () => {
  return (
    <View style={CounsilListScreenStyle.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CounsilCategoryScreen')}
        style={CounsilListScreenStyle.button}>
        <Text style={CounsilListScreenStyle.buttonText}>
          Voting and Elections
        </Text>
      </TouchableOpacity>
      <View style={CounsilListScreenStyle.backView}>
            <Image
              style={CounsilListScreenStyle.icons}
              source={require('../../assets/images/boy.png')}
            />
          </View>

          <Text>Women's Council</Text>
    </View>
  );
};

export default CounsilListScreen;

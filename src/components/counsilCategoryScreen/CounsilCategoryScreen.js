import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import CounsilCategoryScreenStyle from './CounsilCategoryScreenStyle';

const CounsilCategoryScreen = ({navigation}) => {
  return (
    <View style={CounsilCategoryScreenStyle.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CounsilCategoryScreen')}
        style={CounsilCategoryScreenStyle.button}>
        <Text style={CounsilCategoryScreenStyle.buttonText}>
          Voting and Elections
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity 
        onPress={() => navigation.navigate('CounsilListScreen')}
        style={CounsilCategoryScreenStyle.touch}>
          <View style={CounsilCategoryScreenStyle.backView}>
            <Image
              style={CounsilCategoryScreenStyle.icons}
              source={require('../../assets/images/boy.png')}
            />
          </View>
          <Text style={CounsilCategoryScreenStyle.text}>Youth Council</Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={() => navigation.navigate('CounsilListScreen')}
        style={CounsilCategoryScreenStyle.touch}>
          <View style={CounsilCategoryScreenStyle.backView2}>
            <Image
              style={CounsilCategoryScreenStyle.icons}
              source={require('../../assets/images/girl.png')}
            />
          </View>
          <Text style={CounsilCategoryScreenStyle.text}>Women's Council</Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={() => navigation.navigate('CounsilListScreen')}
        style={CounsilCategoryScreenStyle.touch}>
          <View style={CounsilCategoryScreenStyle.backView3}>
            <Image
              style={CounsilCategoryScreenStyle.icons}
              source={require('../../assets/images/people.png')}
            />
          </View>
          <Text style={CounsilCategoryScreenStyle.text}>
            The People's Council
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={CounsilCategoryScreenStyle.button2}>
        <Text style={CounsilCategoryScreenStyle.buttonText2}>
          Past Meetings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounsilCategoryScreen;

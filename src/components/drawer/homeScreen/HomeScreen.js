import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

import HomeScreenStyle from './HomeSceenStyle';

import * as Animatable from 'react-native-animatable';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
const height_logo = height * 0.69;

const HomeScreen = ({navigation}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const CustomTabBarButtom = () => {
    return (
      <TouchableOpacity
        style={{
          top: height_logo,
          left: 320,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          //backgroundColor: 'red',
          //...styles.shadow
        }}
        onPress={() => navigation.navigate('FeedBack')}>
        <Text>FeedBack</Text>
        <View
          style={{
            width: 58,
            height: 58,
            borderRadius: 35,
            backgroundColor: 'white',
            elevation: 3,
          }}>
          <Image
            source={require('../../../assets/images/feedBack.png')}
            //resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginTop: 13,
              alignSelf: 'center',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeScreenStyle.mainContainer}>
      <ImageBackground
        style={HomeScreenStyle.background}
        source={require('../../../assets/images/notiBack.png')}
        resizeMode="cover"
      />

      <View
        style={{
          backgroundColor: 'transparent',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{backgroundColor: 'transparent'}}>
          <Image
            source={require('../../../assets/images/menu.png')}
            style={HomeScreenStyle.menuImg}
          />
        </TouchableOpacity>
        <Text style={HomeScreenStyle.HomeText}>Home</Text>

        <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
          <View style={{backgroundColor: 'transparent'}}>
            <Image
              source={require('../../../assets/images/profileHome.png')}
              style={HomeScreenStyle.profileImg}
            />
            <Text style={HomeScreenStyle.profileText}>Home</Text>
          </View>
          <View>
            <Image
              source={require('../../../assets/images/setting.png')}
              style={HomeScreenStyle.setting}
            />
          </View>
        </View>
      </View>

      <Animatable.View style={HomeScreenStyle.footer} animation="fadeInUpBig">
        {/* <LineChart
          data={data}
          width= {width}
          height={220}
          chartConfig={chartConfig}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        /> */}
      </Animatable.View>

      <CustomTabBarButtom />
    </View>
  );
};

export default HomeScreen;

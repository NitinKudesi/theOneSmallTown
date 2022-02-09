import {View, Text, Image} from 'react-native';
import React from 'react';

import FaqScreenStyle from './FaqScreenStyle';
import {ExpandableListView} from 'react-native-expandable-listview';
const FaqScreen = () => {
  const CONTENT = [
    {
      id: '42',
      categoryName: 'Item 1',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [
        {
          id: '1',
          name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
        {id: '2', name: 'Sub Item 2'},
      ],
    },
    {
      id: '95',
      categoryName: 'Item 2',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
    {
      id: '94',
      categoryName: 'Item 3',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
    {
      id: '93',
      categoryName: 'Item 4',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
    {
      id: '92',
      categoryName: 'Item 5',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
    {
      id: '96',
      categoryName: 'Item 6',
      customItem: (
        <View style={FaqScreenStyle.expandalbe}>
          <Text>Lorem Ipsum is randomly generated text?</Text>
          <Image
          source={require('../../assets/images/down.png')}
          style={{width: 7, height: 12}}/>
        </View>
      ),
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
  ];

  function handleItemClick({index}) {
    console.log(index);
  }

  function handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  }

  return (
    <View style={FaqScreenStyle.mainContainer}>
      <ExpandableListView
        data={CONTENT} // required
        onInnerItemClick={handleInnerItemClick}
        onItemClick={handleItemClick}
      />
    </View>
  );
};

export default FaqScreen;

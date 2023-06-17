import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../styles/global';

export default function Porfile({navigation}) {
    return (
      <View>
        <Text>profile</Text>
        <Button title='go to setting' onPress={()=> navigation.navigate('Setting')}/>
        <Button title='go to friend list'onPress={()=> navigation.navigate('FriendList')}/>
      </View>
    );
  }
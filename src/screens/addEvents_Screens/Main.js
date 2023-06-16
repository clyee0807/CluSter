// 選擇你要create/ join的頁面

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../styles/global';

export default function AddEvent({navigation}) {
  return (
    <View>
      <Text>Create or Join</Text>
      <Text>Would you like to join or create a new event?</Text>
      <Button onPress={() => navigation.navigator('CreateEvent')}>Go to create event</Button>
    </View>
  );
}
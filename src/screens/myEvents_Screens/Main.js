import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../styles/global';

export default function MyEvent({navigation}) {
  return (
    <View>
      <Text>My event list</Text>
      <Button onPress={() => navigation.navigator('AddEvent')}>Go to add Event</Button>
      <Button onPress={() => navigation.navigator('Notification')}>Go to notification</Button>
      <Button onPress={() => navigation.navigator('EventScreen')}>Go to event screen</Button>
    </View>
  );
}
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../styles/global';

export default function MyEvent({navigation}) {
  return (
    <View>
      <Text>My event list</Text>
      <Button title='Go to add Event' onPress={() => navigation.navigate('AddEvent')} />
      <Button title='Go to notification' onPress={() => navigation.navigate('Notification')} />
      <Button title='Go to event screen' onPress={() => navigation.navigate('EventScreen')} />
    </View>
  );
}
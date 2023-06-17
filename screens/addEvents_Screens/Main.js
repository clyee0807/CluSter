// 選擇你要create/ join的頁面

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function AddEvent({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.headingText}>Create or Join</Text>
      <Text>Would you like to join or create a new event?</Text>
      <Button title='Go to create event' onPress={() => navigation.navigate('CreateEvent')} />
      <Button title='Go to join event' onPress={() => navigation.navigate('JoinEvent')} />
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    paddingRight: 30,
    paddingLeft: 30,
  },

});
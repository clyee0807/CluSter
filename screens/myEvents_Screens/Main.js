import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
// import Search from 'react-native-search-box';
import BottomBar from '../../components/bottomBar';
import SearchBar from '../../components/searchBar.js';

export default function MyEvent({navigation}) {


  return (
    <View style={styles.container}>
      <View style={styles.topSections}>
        <Text style={globalStyles.titleText}>MY EVENTs</Text>
        <Text style={globalStyles.instructionText}>Your all events will be displayed here.</Text>
        <SearchBar/>
        <Button title='Go to add Event' onPress={() => navigation.navigate('AddEvent')} />
        <Button title='Go to notification' onPress={() => navigation.navigate('Notification')} />
        <Button title='Go to event screen' onPress={() => navigation.navigate('EventScreen')} />
      </View>
      <BottomBar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
  },
	topSections: {
    flex: 1,
    padding: 30,

	}
});
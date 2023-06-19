import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import BottomBar from '../../components/bottomBar';
import SearchBar from '../../components/searchBar.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as FileSystem from 'expo-file-system';

import { getUserEvents } from '../../Server/event-request';
import { getUserEventsArray } from '../../Server/user-request';

export default function MyEvent({navigation}) {
  const cur_user = 'Domingo';
  const [events, setEvent] = useState([]);
  useEffect(() => {
    const loadEvents = async () => {
      try {
		const user_events = await getUserEventsArray(cur_user);
		console.log('user_events =', user_events);
	    const all_events = await getUserEvents(user_events);
		console.log('all_events =', all_events);
		setEvent(all_events);
	  } catch (error) {
  	    console.log('Error reading JSON file:', error);
	  }
	};
	loadEvents();
  }, []);

  const submitHandler = (text) => {  
    // console.log(todos);

	}



	return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}> 
		<View style={styles.container}>
			<View style={styles.topSections}>
				<View style={styles.rows}>
					<Text style={globalStyles.titleText}>MY EVENTs</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Notification')}><Ionicons name="notifications-outline" style={styles.notificationIcon} size={24} color="#A29EB6" /></TouchableOpacity>
				</View>
				<Text style={globalStyles.instructionText}>Your all events will be displayed here.</Text>
				<SearchBar submitHandler={submitHandler}/>
				<View style={styles.list}>
					<FlatList
					data={events}
					renderItem={ ({item})=>(
						<TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
						<View style={styles.eventCard}>
							<View style={styles.rows}>
								<Text style={styles.event_name}>{item.event_name}</Text>
								<Text style={styles.status}>{item.status}</Text>
							</View>
							{item.status==='In progress'?(
								<Text style={styles.time}>{'Deadline:  '+ item.deadline }</Text>
							) : (
								<Text style={styles.time}>{'Event Date:  ' + item.confirmTime}</Text>
							)}
							<Text key={item.id} style={styles.name}>{item.members.join(' ')}</Text>
						</View>
						</TouchableOpacity>
						)}
					/>
				</View>
			</View>
			<BottomBar navigation={navigation}/>
		</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	topSections: {
		flex: 15,
		padding: 30,
		// backgroundColor: 'yellow',
	},
	rows: {
		flexDirection: 'row',
		justifyContent: 'space-between', 
		alignItems: 'flex-start',
	},
	notificationIcon: {
		marginTop: 40,
	},
	list: {
		flex: 1,
	},
	eventCard: {
		height: 140,
		borderRadius: 16,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#809BBF',
		marginHorizontal: 4,
		marginVertical: 6,
	},
	event_name: {
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 18,
		fontWeight: 'semibold',
		marginLeft: 15,
		marginTop: 10,
	},
	status: {
		fontFamily: 'Inter_400Regular',
		margin: 15,
		marginTop: 12,
	},
	time: {
		fontFamily: 'Inter_400Regular',
		// margin: 15,
		marginLeft: 15,
		marginTop: 45,
		fontSize: 12,
	},
	name: {
		fontFamily: 'Inter_400Regular',
		fontSize: 12,
		marginLeft: 15,
		marginBottom: 10,
	},
});
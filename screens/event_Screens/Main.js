// my event 點進去會顯示result

import React, {useState}from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
// import ScheduleSelector from 'react-schedule-selector'
import TimeSelector from '../../components/TimeSelector'


export default function EventScreen() {
	const [event, setEvent] = useState(
		{ id: '1',
		  event_name: 'MyEvent1',
		  dates: ['2023/5/20', '2023/5/21', '2023/5/22', '2023/5/23'], // array of string, storing dates
		  host: 'NOT911', // string, storing user_id of 'user'
		  members: ['John', 'Peggy', 'Daphne'], // array of string, storing user_id of 'user'
		  interval: ['9:00', '10:00', '11:00', '12:00'], // array of string, storing times
		  description: 'This is description.', // string
		  deadline: '2023-05-04 22:00', // string, storing date and time
		  status: 'In progress',
		  event_code: '809BBF', // string
		  // Use (date, time) to access the time block.
		  // For example, (0, 0) stands for 2023/5/20 9:00.
		  available_member: [
			  [['111111', '222222', '333333'], ['111111', '222222'], []],
			  [['333333'], ['333333'], []],
			  [[], [], []],
		  ], // 3-D array of string, storing user_id of 'user'
		  confirmTime: 'na' // string, storing date and time
		}
	);

  	return (
		<View style={styles.container}>
			<Text style={styles.time}>event screen</Text>
			{/* <TimeSelector dates={event.dates} available_member={event.available_member} interval={event.interval}/> */}
			{/* <Text>Event Screen</Text> */}
		</View>
  	);
}
const styles=StyleSheet.create({
	time: {
		fontFamily: 'Inter_400Regular',
		// flex:1,
		fontSize: 12,
	},
	container: {
		backgroundColor: '#FFF',
		flex: 1,
		// padding: 30,
		// alignContent: 'center',
		alignItems: 'center',
		// justifyContent: 'center',
	},
})
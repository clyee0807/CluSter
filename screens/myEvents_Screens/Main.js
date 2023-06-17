import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import BottomBar from '../../components/bottomBar';
import SearchBar from '../../components/searchBar.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function MyEvent({navigation}) {

  const [events, setEvent] = useState([
    { id: '1',
      event_name: 'MyEvent1',
      dates: ['2023/5/20', '2023/5/21', '2023/5/22'], // array of string, storing dates
      host: 'NOT911', // string, storing user_id of 'user'
      members: ['John', 'Peggy', 'Daphne'], // array of string, storing user_id of 'user'
      interval: ['9:00', '10:00', '11:00'], // array of string, storing times
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
    },
    { id: '2',
      event_name: 'MyEvent2',
      dates: ['2023/5/20', '2023/5/21', '2023/5/22'], 
      host: 'NOT911', 
      members: ['Domingo', 'xincc'], 
      interval: ['9:00', '10:00', '11:00'], 
      description: 'This is description.', 
      deadline: 'na', 
      status: 'Settled',
      event_code: '809BBF', 
      available_member: [
          [['111111', '222222', '333333'], ['111111', '222222'], []],
          [['333333'], ['333333'], []],
          [[], [], []],
      ],
      confirmTime: 'na' 
    },
    { id: '3',
      event_name: 'MyEvent2',
      dates: ['2023/5/20', '2023/5/21', '2023/5/22'], 
      host: 'NOT911', 
      members: ['111111', '222222', '333333'], 
      interval: ['9:00', '10:00', '11:00'], 
      description: 'This is description.', 
      deadline: '2023-05-05  19:00', 
      status: 'In progress',
      event_code: '809BBF', 
      available_member: [
          [['111111', '222222', '333333'], ['111111', '222222'], []],
          [['333333'], ['333333'], []],
          [[], [], []],
      ],
      confirmTime: 'na' 
    },
    { id: '4',
      event_name: 'MyEvent2',
      dates: ['2023/5/20', '2023/5/21', '2023/5/22'], 
      host: 'NOT911', 
      members: ['111111', '222222', '333333'], 
      interval: ['9:00', '10:00', '11:00'], 
      description: 'This is description.', 
      status: 'Settled',
      deadline: 'na', 
      event_code: '809BBF', 
      available_member: [
          [['111111', '222222', '333333'], ['111111', '222222'], []],
          [['333333'], ['333333'], []],
          [[], [], []],
      ],
      confirmTime: 'na' 
    },
	]);

  const submitHandler = (text) => {  
    // console.log(todos);

	}



	return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}> 
		<View style={styles.container}>
			<View style={styles.topSections}>
				<View style={styles.rows}>
					<Text style={globalStyles.titleText}>MY EVENTs</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name="notifications-outline" style={styles.notificationIcon} size={24} color="#A29EB6" /></TouchableOpacity>
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
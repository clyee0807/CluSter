import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import BottomBar from '../../components/bottomBar';
import SearchBar from '../../components/searchBar.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function MyEvent({navigation}) {
	const cur_user = 'Domingo';
  const [events, setEvent] = useState([
    {
		id: '1',
		event_name: 'MyEvent1',
		dates: ['2023/7/20', '2023/7/21', '2023/7/22'], // array of string, storing dates
		host: 'Domingo', // string, storing username of 'user'
		members: ['Guavaaa', 'Jason', 'Tony', 'Bear'], // array of string, storing username of 'user'
		interval: ['9:00', '10:00', '11:00'], // array of string, storing times
		description: 'This is the description.', // string
		deadline: '2023/7/4 22:00', // string, storing date and time
		status: 'In progress', // string, indicating the event is in progress or settled
		event_code: '809BBF', // string
		// Use (date, time) to access the time block.
		// For example, (0, 0) stands for 2023/5/20 9:00.
		available_member: [
		  [['Domingo', 'Guavaaa', 'Jason', 'Tony', 'Bear'], ['Domingo', 'Guavaaa', 'Jason', 'Tony'], ['Domingo', 'Guavaaa', 'Jason', 'Tony']],
		  [['Guavaaa', 'Jason', 'Bear'], ['Guavaaa', 'Tony'], ['Guavaaa', 'Tony']],
		  [['Guavaaa', 'Jason', 'Bear'], ['Guavaaa'], []],
		], // 3-D array of string, storing username of 'user'
		topTimeBlock: [
		  [[0, 0]],
		  [[0, 1], [0, 2]],
		  [[1, 0], [2, 0]]
		], // 3-D array of number, storimg correpsonding time block
		confirmTime: 'na' // string, storing date and time
	  },
	  { 
		id: '2',
		event_name: 'FOOBAR',
		dates: ['2023/7/1', '2023/7/2'],
		host: 'Guavaaa',
		members: ['Domingo', 'Jason', 'Tony'],
		interval: ['18:00', '19:00', '20:00', '21:00'],
		description: 'FOOBAR',
		deadline: '2023/5/1 23:59',
		status: 'Settled',
		event_code: '1A2B3C',
		available_member: [
		  [['Domingo', 'Guavaaa'], ['Domingo', 'Guavaaa'], ['Domingo', 'Guavaaa', 'Jason'], ['Domingo', 'Guavaaa', 'Jason', 'Tony']],
		  [[], ['Tony'], ['Guavaaa', 'Jason', 'Tony'], ['Guavaaa', 'Jason', 'Tony']],
		],
		topTimeBlock: [
		  [[0, 3]],
		  [[0, 2], [1, 2], [1, 3]],
		  [[0, 1], [0, 1]]
		],
		confirmTime: '2023/7/1 18:00'
	  },
	  { 
		id: '3',
		event_name: 'Emotional Damage',
		dates: ['2023/6/26', '2023/6/27', '2023/6/28', '2023/6/29', '2023/6/30'],
		host: 'Domingo',
		members: ['Guavaaa', 'Jason', 'Tony', 'Bear'],
		interval: ['9:00', '10:00'],
		description: 'I will send you to Jesus.',
		deadline: '2023/6/20  23:59',
		status: 'In progress',
		event_code: 'STEVEN', 
		available_member: [
		  [['Domingo', 'Guavaaa', 'Jason', 'Bear'], ['Domingo', 'Guavaaa', 'Tony']],
		  [['Domingo', 'Guavaaa', 'Jason', 'Bear'], ['Domingo', 'Guavaaa', 'Tony']],
		  [['Domingo', 'Guavaaa', 'Jason'], ['Domingo', 'Guavaaa', 'Tony']],
		  [['Domingo', 'Jason'], ['Domingo', 'Tony']],
		  [['Domingo', 'Jason'], ['Domingo', 'Tony']]
		],
		topTimeBlock: [
		  [[0, 0], [1, 0]],
		  [[0, 1], [1, 1], [2, 0], [2, 1]],
		  [[3, 0], [3, 1], [4, 0], [4, 1]]
		],
		confirmTime: 'na'
	  },
	  {
		id: '4',
		event_name: 'heyyeyaaeyaaaeyaeyaa',
		dates: ['2023/10/1', '2023/10/2', '2023/10/8', '2023/10/9'],
		host: 'Jason',
		members: ['Domingo', 'Guavaaa', 'Tony'],
		interval: ['9:00', '11:00', '13:00', '15:00'],
		description: 'Whats up.',
		deadline: '2023/9/1  23:59',
		status: 'In progress',
		event_code: '0H0E2E', 
		available_member: [
		  [['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
		  [['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
		  [['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Jason', 'Tony']],
		  [['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Guavaaa','Jason', 'Tony']],
		],
		topTimeBlock: [
		  [[3, 3]],
		  [[2, 3]],
		  [[0, 3], [1, 3]]
		],
		confirmTime: 'na'
	  },
	  {
		id: '5',
		event_name: 'Badminton',
		dates: ['2023/6/26', '2023/6/27', '2023/6/28'],
		host: 'Bear',
		members: ['Domingo', 'Guavaaa', 'Jason'],
		interval: ['16:00', '17:00', '18:00', '19:00'],
		description: 'Hit badminton',
		deadline: '2023/6/21  23:59',
		status: 'In progress',
		event_code: '6969SX', 
		available_member: [
		  [['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear', 'Jason']],
		  [['Domingo', 'Bear'], ['Domingo', 'Bear'], ['Domingo', 'Bear'], ['Domingo', 'Bear']],
		  [['Jason'], ['Jason'], ['Jason'], ['Jason']]
		],
		topTimeBlock: [
		  [[0, 3]],
		  [[0, 0], [0, 1], [0, 2]],
		  [[1, 0], [1, 1], [1, 2], [1, 3]]
		],
		confirmTime: 'na'
	  }
	]);

	const [filtEvent, setFiltEvent] = useState(events);
	const submitHandler = (text) => {  
		if(text === ''){
			setFiltEvent((prevState) => {
				return [...events]
			})
		} else {
			setFiltEvent((prevState) => {
				let filted = events.filter(item => item.event_name.includes(text));
				return [...filted]
			})
		}
					
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
					data={filtEvent}
					renderItem={ ({item})=>(
						<TouchableOpacity onPress={() => navigation.navigate( (item.status === 'Settled') ?'Expired': (cur_user===item.host)?'EventScreen':'EventJoiner' )}>
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
							<View style={styles.rows}>
								<Text key={item.id} style={styles.name}>{item.members.join(' ')}</Text>
								<Text style={styles.hostName}>{'host: ' + item.host}</Text>
							</View>
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
		marginRight: 20,
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
		marginVertical: 15,
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
	hostName: {
		fontFamily: 'Inter_400Regular',
		color: '#A29EB6',
		fontSize: 12,
		marginLeft: 15,
		marginBottom: 10,
	},
});
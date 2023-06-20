// my event 點進去會顯示result

import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import Result from '../../components/result';
import { SimpleLineIcons } from '@expo/vector-icons';
import TimeSelector from '../../components/TimeSelector';
import BottomBar from '../../components/bottomBar';
import { useFocusEffect } from '@react-navigation/native';

import { getEvent } from '../../Server/event-request';
import { getAllUser } from '../../Server/user-request';


export default function EventScreen({navigation, route}) {
    const {eventID, cur_user} = route.params;
	// const eventID = '1';
	const [event, setEvent] = useState({
		id: '1',
		event_name: 'MyEvent1',
		dates: ['2023-07-20', '2023-07-21', '2023-07-22'], // array of string, storing dates
		host: 'Domingo', // string, storing username of 'user'
		members: ['Guavaaa', 'Jason', 'Tony', 'Bear'], // array of string, storing username of 'user'
		interval: ['9:00', '10:00', '11:00'], // array of string, storing times
		deadline: '2023-07-04 22:00', // string, storing date and time
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
	  });
	const [user, setUser] = useState([]);
	
	// useEffect(() => {
	// 	const loadEvents = async () => {
	// 		try {
	// 			const cur_event = await getEvent(eventID);
	// 			setEvent(cur_event);
	// 			const user_data = await getAllUser(cur_event.members);
	// 			setUser(user_data);
	// 			console.log("user set successfully!");
	// 		} catch (error) {
	// 		    console.log('Error reading JSON file:', error);
	// 		}
	// 	}
	// 	loadEvents();
	// }, []);

	useFocusEffect(
		React.useCallback(() => {
			const loadEvents = async () => {
				try {
					const cur_event = await getEvent(eventID);
					setEvent(cur_event);
					const user_data = await getAllUser(cur_event.members);
					setUser(user_data);
					// console.log('result ava: ',event.available_member);
					console.log("user set successfully!");
				} catch (error) {
					console.log('Error reading JSON file:', error);
				}
			}
			loadEvents();
		  return () => {};
		}, [])
	);
	
	var ava_people=[];
	var tmp=[];
	var tmp2=[];
	const [cur_date,setcurdate]=useState(0);
	const [chosentime, setchosen]=useState(['na','na']);
	// confirmTime = chosenTime;

	for(let i=0;i<event.available_member.length;i++){
		for(let j=0;j<event.available_member[i].length;j++){
			event.available_member[i][j].forEach((item)=>{
				for(let k=0;k<user.length;k++){
					if(user[k].username === item){
						// console.log(user[k].username)
						tmp.push(user[k].user_photo);
						break;
					}
				}
			})
			tmp2.push(tmp);
			tmp=[]
		}
		ava_people.push(tmp2)
		tmp2=[];
	}

	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

	const onPressButton = (index) => {
		setSelectedButtonIndex(index);
		setcurdate(index);
	}

	const onChooseDate = (rank,time) => {
		setchosen([rank,time]);
		// console.log(chosentime);
	}

  	return (
		<View style={styles.container}>
			<View style={styles.topSection}>
				<FlatList
					data={[1]}
					renderItem={({item})=>(
						<View>
							<FlatList
								style={styles.dateinterval}
								data={event.dates}
								horizontal={true}
								renderItem={({item,index}) =>
									<TouchableOpacity  style={[styles.date, selectedButtonIndex === index ? styles.selectedDate : styles.date]} key={index} onPress={()=> onPressButton(index)}><Text>{item.slice(5)}</Text></TouchableOpacity>
								}
							/>
							<Result ava_people={ava_people} cur_date={cur_date} interval={event.interval}/>
							<Text style={[globalStyles.instructionText,{paddingTop:30}]}>Choose a final even time!</Text>
							<FlatList
								data={event.topTimeBlock}
								renderItem={({item:rank,index:ranking})=>(
									<View style={styles.toptime}>
										<SimpleLineIcons style={{paddingHorizontal:10}} name="trophy" size={24} color="black" />
										<FlatList
											data={rank}
											renderItem={({item,index}) => (
												<View>
													<Text>{event.dates[item[0]]}</Text>
													<View>
														<TouchableOpacity style={(chosentime[0] === ranking && chosentime[1] === index?styles.selectedTop:styles.top)} onPress={() => onChooseDate(ranking,index)}><Text>{event.interval[item[1]]}</Text></TouchableOpacity>
													</View>
												</View>
											)}
											nestedScrollEnabled={true}/>
									</View>
								)}
							></FlatList>
							<TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('VoteScreen',{eventID:eventID,cur_user: cur_user})}>
								<Text style={{color:'#FFF',}}>Edit</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Expired',{eventID:eventID,cur_user: cur_user})}>
								<Text style={{color:'#FFF',}}>confirmTime</Text>
							</TouchableOpacity>
						</View>
					)}
				>
				</FlatList>
			</View>
			<BottomBar eventID={eventID} cur_user={cur_user} navigation={navigation}/>
		</View>
  	);
}
const styles=StyleSheet.create({
	time: {
		fontFamily: 'Inter_400Regular',
		fontSize: 12,
	},
	container: {
		backgroundColor: '#FFF',
	},
	topSection: {
		marginBottom: 70,
		marginHorizontal:25,
	},
	toptime:{
		marginVertical: 10,
		flexDirection: 'row',
	},
	submit: {
		height: 40,
		margin:5,
		width: 350,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#809BBF',
		color: '#FFF',
		borderRadius: 16,
	},
	top: {
		borderWidth: 1,
		// width:50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		margin: 5,
		paddingHorizontal:10,
		paddingVertical:2,
	},
	selectedTop: {
		borderWidth: 1,
		// width:50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		backgroundColor: '#809BBF',
		margin: 5,
		paddingHorizontal:10,
		paddingVertical:2,
	},
	date: {
		borderWidth: 1,
		height:30,
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		backgroundColor: '#FFF',
		margin: 5,
		padding: 5
	},
	selectedDate: {
		borderWidth: 1,
		height:30,
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		backgroundColor: '#809BBF',
		margin: 5,
		padding: 5
	},
})
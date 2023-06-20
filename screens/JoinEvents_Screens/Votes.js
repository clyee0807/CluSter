import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList,Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { globalStyles } from '../../styles/global';
import CalendarBottomBar from '../../components/calendarbottomBar';
import Timeline from '../../components/timeline';
import TimeInterval from '../../components/TimeInterval';
import Blueblock from '../../components/blueblock';
import SlidableDrawer from '../../components/slidableDrawer';
import {Calendar} from 'react-native-calendars';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

import { getEvent, updateAvailable, getUserEvents } from '../../Server/event-request';
import { getUserEventsArray } from '../../Server/user-request';


export default function VoteScreen({navigation,route}) {
	// const cur_user = 'Guavaaa';
	const {cur_user,eventID} = route.params;

	const [events, setEvents] = useState([]);
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
	
	useFocusEffect(
		React.useCallback(() => {
		  const loadEvents = async () => {
			try {
			  const cur_event = await getEvent(eventID);
			  setEvent(cur_event);
			  const user_events = await getUserEventsArray(cur_user);
			  const all_events = await getUserEvents(user_events);
			  console.log('events =', user_events);
			  
			  setEvents(all_events);
			  console.log('events read successfully');
			  
			  console.log(cur_event.available_member);
			  console.log("user set successfully!");
			} 
			catch (error) {
			  console.log('Error reading JSON file events:', error);
			} 
		  };
		  loadEvents();
			  return () => {};
		}, [])
	);
	
	const initialArray = Array(event.interval.length)
    .fill(0)
    .map(() => Array(event.dates.length).fill(0));

	const [isclicked, setisclick] = useState(initialArray);


	// useFocusEffect(
	// 	React.useCallback(() => {
	// 	  const loadEvents = async () => {
	// 		try {
	// 			for (let i = 0; i < event.available_member.length; i++) {
	// 				for (let j = 0; j < event.available_member[i].length; j++) {
	// 				  if (event.available_member[i][j].find(member => member === cur_user) !== undefined) {
	// 					setisclick(prevArray => {
	// 					  const tmp = [...prevArray];
	// 					  tmp[i][j] = 1;
	// 					  return tmp;
	// 					});
	// 				  }
	// 				}
	// 			  }
	// 		} catch (error) {
	// 		  console.log('click error: ', error);
	// 		}
	// 	  };
	// 	  loadEvents();
	// 	  return () => {};
	// 	}, [])
	// );
	useEffect(() => {
		for (let i = 0; i < event.available_member.length; i++) {
		  for (let j = 0; j < event.available_member[i].length; j++) {
			if (event.available_member[i][j].find(member => member === cur_user) !== undefined) {
			  setisclick(prevArray => {
				const tmp = [...prevArray];
				tmp[i][j] = 1;
				return tmp;
			  });
			}
		  }
		}
	  }, [event]);

	function clickhandler(row,column){
		setisclick(prevArray => {
			const tmp = [...prevArray];
			tmp[row][column] = tmp[row][column] === 1 ? 0 : 1;
			return tmp;
		});
	}
	async function submithandler(){
		var new_event = event;
		for (let i = 0; i < event.available_member.length; i++) {
			for (let j = 0; j < event.available_member[i].length; j++) {
				if(isclicked[i][j]===1 && !event.available_member[i][j].includes(cur_user)){
					new_event.available_member[i][j].push(cur_user);
				}
				else if(isclicked[i][j] === 0 && event.available_member[i][j].includes(cur_user)){
					new_event.available_member[i][j].filter(({element}) => element !== cur_user)
				}
			}
		}
		setEvent(new_event);
		// console.log(event.available_member);
		await updateAvailable(new_event);
		navigation.navigate('EventScreen',{eventID:eventID,cur_user:cur_user});
	}

	const [showDrawer, setShowDrawer] = useState(false);
	const [drawerevent, setDrawerEvent] = useState('none');

	const closeDrawer = () => {
		setDrawerEvent('close');
	};
	const showDrawerFn = () => {
		setShowDrawer(true);
	};
	const onSlideEnd = () => {
		setShowDrawer(false);
		setDrawerEvent('none');
	};
	const markdates = {};
	events.forEach(date => {
		// console.log(date.confirmTime);
		if(date.confirmTime!=='na' && date.confirmTime!== undefined){
			// console.log(date.confirmTime);
			markdates[date.confirmTime.slice(0,10)] = {selected: true, selectedDayBackgroundColor: '#809BBF'};
		}
	});

  	return (
    	<View style={styles.outercontainer}>
			{/* <TouchableOpacity onPress={showDrawerFn}>
				<Image source={profileImgPath} style={styles.profileImg}/>
			</TouchableOpacity> */}
			{showDrawer && (
				<SlidableDrawer
					onSlideEnd={onSlideEnd}
					drawerOpenSpeed={4}
					drawerHeight={0.8}
					event={drawerevent}>
					<Calendar
						markedDates={markdates}
						style={{
							// width: 300,
							marginHorizontal: 35,
							marginBottom: 15,
							borderWidth: 1,
							borderRadius: 12,
							borderColor: '#809BBF',
							// backgroundColor: 'pink',
						}}
						headerStyle={{
							fontFamily: 'SpaceGrotesk_400Regular',

						}}
						theme={{
							selectedDayBackgroundColor: '#809BBF',
							selectedDayTextColor: '#ffffff',
							todayTextColor: '#FF63A5',
							textDayFontSize: 14,
							textMonthFontSize: 16,
							arrowColor: '#1C1243',
						}}
						/>
				</SlidableDrawer>
			
			)}
			<FlatList
				data={[1]}
				style={styles.topSection}
				renderItem={({item})=>(
					<View>
						<View style={styles.container}>
							<Text style={styles.time}>{'Deadline:  '+ event.deadline }</Text>
							<Text style={styles.instructionText}>Minimum Time Unit: 1hr</Text>
							{/* <TimeSelector dates={Exampledata[0].event.dates} interval={Exampledata[0].event.interval}/> */}
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<View style={styles.timeselectorcontainer}>
									<Timeline style={styles.timeline} data={event.dates} direction='horizontal' customStyle={styles.timeline}/>
									<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										<TimeInterval interval={event.interval}/>
										<FlatList
											horizontal = {true}
											style={{paddingBottom:20}}
											data={event.dates}
											renderItem={({item,index:column_index})=>(
												<View style={styles.container}>
													<FlatList
														data={event.interval}
														renderItem={({item,index:row_index})=>(
															<View style={styles.circlecontainer}>
																<TouchableOpacity style={styles.clickbox} onPress={()=>{clickhandler(row_index,column_index)}}>
																	<View style={[{backgroundColor: isclicked[row_index][column_index]?'#809BBF':'#FFF'},styles.clickcircle]}></View>
																	{/* <Text>{isclicked}</Text> */}
																</TouchableOpacity>
															</View>
														)}>
													</FlatList>
												</View>
											)}>
									</FlatList>
									<Blueblock interval={event.interval}/>
									</ScrollView>
								</View>
								</ScrollView>
						</View>
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
													<View style={styles.top}>
														<Text>{event.interval[item[1]]}</Text>
													</View>
												</View>
											)}
											nestedScrollEnabled={true}/>
									</View>
								)}
							></FlatList>
						<TouchableOpacity style={styles.submit} onPress={() => submithandler()}>
							<Text style={{color:'#FFF',}}>Submit</Text>
						</TouchableOpacity>
					</View>
				)}
			>
			</FlatList>
			<CalendarBottomBar showDrawerFn={showDrawerFn} cur_user={cur_user} navigation={navigation}/>
		</View>
  );
}

const styles = StyleSheet.create({
  	time: {
		fontFamily: 'Inter_400Regular',
		// flex:1,
		fontSize: 12,
	},
	topSection: {
		// backgroundColor: 'pink',
		marginBottom: 70,
		// flex: 1,
		marginHorizontal:25,
		// justifyContent:'center',
	},
	outercontainer: {
		backgroundColor: '#FFF',
	},
	container: {
		backgroundColor: '#FFF',
		// margin:30,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toptime:{
		// flex:1,
		marginVertical: 10,
		flexDirection: 'row',
	},
	submit: {
		height: 40,
		marginVertical:5,
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
	// topdate: {},
	instructionText: {
		fontFamily: 'Inter_400Regular',
		fontSize: 14,
		color: '#A29EB6',
		marginTop:15,
	},
	circlecontainer:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:5,
        width: 90,
        height: 30,
    },
	clickbox:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 10,
        borderColor: '#809BBF',
        borderWidth: 1,
        width: 28,
        height:28,
        backgroundColor: '#FFF'
    },
    clickcircle: {
        borderRadius: 50,
        margin: 10,
        // borderColor: '#809BBF',
        // borderWidth: 1,
        width: 20,
        height:20,
        // backgroundColor: '#FFF'
    },
	timeselectorcontainer: {
        flex: 1,
        minWidth:350,
        borderColor: '#809BBF',
        borderRadius: 16,
        borderWidth: 2,
        // padding: 170,
        // margin: 30,
        marginTop: 3,
        alignContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    timeline: {
        dotHorizontal: {
            backgroundColor: '#809BBF',
        },
        dotContainerHorizontal: {
            backgroundColor:'#809BBF',
            width:10,
            height:10,
        },
        dotConnectorHorizontalWrapper: {
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 10,
            // marginLeft: 10
        }
    },
    blueblock: {
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:10,
        width: 38,
        height: 30,
    },

});

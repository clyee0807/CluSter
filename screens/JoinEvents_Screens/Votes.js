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

const events = [
    {
		id: '4',
		event_name: 'heyyeyaaeyaaaeyaeyaa',
		dates: ['2023-10-01', '2023-10-02', '2023-10-08', '2023-10-09'],
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
		confirmTime: '2023-07-01 18:00'
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
];
var event = {
	id: '4',
	event_name: 'heyyeyaaeyaaaeyaeyaa',
	dates: ['2023-10-01', '2023-10-02', '2023-10-08', '2023-10-09'],
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
}
var event = {
	id: '4',
	event_name: 'heyyeyaaeyaaaeyaeyaa',
	dates: ['2023-10-01', '2023-10-02', '2023-10-08', '2023-10-09'],
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
};

export default function VoteScreen({navigation,route}) {
	// const cur_user = 'Guavaaa';
	const {cur_user,eventID} = route.params;
	// console.log(cur_user);
	// const {cur_user,eventID} = route.params;
	// const [event, setEvent]=useState(
	// {
	// 	id: '4',
	// 	event_name: 'heyyeyaaeyaaaeyaeyaa',
	// 	dates: ['2023-10-01', '2023-10-02', '2023-10-08', '2023-10-09'],
	// 	host: 'Jason',
	// 	members: ['Domingo', 'Guavaaa', 'Tony'],
	// 	interval: ['9:00', '11:00', '13:00', '15:00'],
	// 	description: 'Whats up.',
	// 	deadline: '2023/9/1  23:59',
	// 	status: 'In progress',
	// 	event_code: '0H0E2E', 
	// 	available_member: [
	// 	[['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
	// 	[['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
	// 	[['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Jason', 'Tony']],
	// 	[['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Guavaaa','Jason', 'Tony']],
	// 	],
	// 	topTimeBlock: [
	// 	[[3, 3]],
	// 	[[2, 3]],
	// 	[[0, 3], [1, 3]]
	// 	],
	// 	confirmTime: 'na'  
    // })
	
	const initialArray = Array(event.interval.length)
    .fill(0)
    .map(() => Array(event.dates.length).fill(0));

	const [isclicked, setisclick] = useState(initialArray);

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
	  }, []);

	function clickhandler(row,column){
		setisclick(prevArray => {
			const tmp = [...prevArray];
			tmp[row][column] = tmp[row][column] === 1 ? 0 : 1;
			return tmp;
		});
	}
	function submithandler(){
		var new_event = event;
		for (let i = 0; i < event.available_member.length; i++) {
			for (let j = 0; j < event.available_member[i].length; j++) {
				if(isclicked[i][j]===1 && !event.available_member[i][j].includes(cur_user)){
					event.available_member[i][j].push(cur_user);
				}
				else if(isclicked[i][j] === 0 && event.available_member[i][j].includes(cur_user)){
					event.available_member[i][j].filter(({element}) => element !== cur_user)
				}
			}
		}
		// console.log(new_event.available_member);
		// setEvent(new_event);
		console.log(event.available_member);
		//post
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

// my event 點進去會顯示result

import React, {useState}from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import Result from '../../components/result';
import { SimpleLineIcons } from '@expo/vector-icons';
import TimeSelector from '../../components/TimeSelector';
import BottomBar from '../../components/bottomBar';


const Exampledata = [
    {
        event: {
            eventName: 'MyEvent',
            dates: ['2023/5/20', '2023/5/21', '2023/5/22'],
            host: 'Anna',
            member: ['Bob', 'Cathy', 'Domingo'],
            interval: ['9:00', '10:00', '11:00','12:00','13:00','14:00'],
            description: 'This is description.',
            deadline: '2023/6/11',
            eventCode: '809BBF',
            // Use (date, time) to access the time block.
            // For example, (0, 0) stands for 2023/5/20 9:00.
            availablePeople: [
                [['Bob', 'Cathy', 'Domingo'], ['Bob', 'Cathy'], [],[],[],[]],
                [['Domingo'], ['Domingo'], [],[],[],[]],
                [[], [], [],[],[],[]],
            ],
            topTimeBlock: [
                [[0, 0]], 
                [[0, 1]],
                [[1, 0], [1, 1]]
            ],
            confirmTime: ['na','na']
        }
    }
];
export default function EventJoiner({navigation}) {
	// const cur_user = ''
	const [user, setUser] = useState([
		{
			id: '1',
			username: 'Domingo', // string
			user_id: 'NOT911', // string
			user_photo: 1, // integer, used when accessing database
			// We use integers to access photos in case of multiple photos with same name.
			events: ['809BBF'], // array of string, storing event_code of 'event'
			friends: ['520KEI'], // array of string, storing user_id of 'user'
			email: "test1234@gmail.com", // string, unchangeable
			phone_number: "0911451419", // string, unchangeable
			language: "English", // string
			notifs: [0, 1], // array of integer, storing notif_id of "notifs"
			notif_on: true // bool
		},
		{
			id: '2',
			username: 'Bob', // string
			user_id: '520KEI', // string
			user_photo: 2, // integer, used when accessing database
			// We use integers to access photos in case of multiple photos with same name.
			events: ['809BBF'], // array of string, storing event_code of 'event'
			friends: ['520KEI'], // array of string, storing user_id of 'user'
			email: "test1234@gmail.com", // string, unchangeable
			phone_number: "0911451419", // string, unchangeable
			language: "English", // string
			notifs: [0, 1], // array of integer, storing notif_id of "notifs"
			notif_on: true // bool
		},
		{
			id: '3',
			username: 'Cathy', // string
			user_id: '123456', // string
			user_photo: 3, // integer, used when accessing database
			// We use integers to access photos in case of multiple photos with same name.
			events: ['809BBF'], // array of string, storing event_code of 'event'
			friends: ['520KEI'], // array of string, storing user_id of 'user'
			email: "test1234@gmail.com", // string, unchangeable
			phone_number: "0911451419", // string, unchangeable
			language: "English", // string
			notifs: [0, 1], // array of integer, storing notif_id of "notifs"
			notif_on: true // bool
		},
	]);
	var ava_people=[];
	var tmp=[];
	var tmp2=[];
	const [cur_date,setcurdate]=useState(0);
	const [chosentime, setchosen]=useState(['na','na']);
	// confirmTime = chosenTime;

	for(let i=0;i<Exampledata[0].event.availablePeople.length;i++){
		for(let j=0;j<Exampledata[0].event.availablePeople[i].length;j++){
			Exampledata[0].event.availablePeople[i][j].forEach((item)=>{
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
								data={Exampledata[0].event.dates}
								horizontal={true}
								renderItem={({item,index}) =>
									<TouchableOpacity  style={[styles.date, selectedButtonIndex === index ? styles.selectedDate : styles.date]} key={index} onPress={()=> onPressButton(index)}><Text>{item.slice(5)}</Text></TouchableOpacity>
								}
							/>
							<Result ava_people={ava_people} cur_date={cur_date} interval={Exampledata[0].event.interval}/>
							<Text style={[globalStyles.instructionText,{paddingTop:30}]}>Choose a final even time!</Text>
							<FlatList
								data={Exampledata[0].event.topTimeBlock}
								renderItem={({item:rank,index:ranking})=>(
									<View style={styles.toptime}>
										<SimpleLineIcons style={{paddingHorizontal:10}} name="trophy" size={24} color="black" />
										<FlatList
											data={rank}
											renderItem={({item,index}) => (
												<View>
													<Text>{Exampledata[0].event.dates[item[0]]}</Text>
													<View>
														<Text style={styles.top}>{Exampledata[0].event.interval[item[1]]}</Text>
													</View>
												</View>
											)}
											nestedScrollEnabled={true}/>
									</View>
								)}
							></FlatList>
							<TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('VoteScreen')}>
								<Text style={{color:'#FFF',}}>Edit</Text>
							</TouchableOpacity>
						</View>
					)}
				>
				</FlatList>
			</View>
			<BottomBar navigation={navigation}/>
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
        textAlign:'center',
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
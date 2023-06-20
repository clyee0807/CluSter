// createEvent - weekday/date 
import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list';
import DatePicker from 'react-native-neat-date-picker';
// 去node_modules/react-native-neat-date-picker/src/components/NeatDatePicker.tsx的第187行false改成true
// pop出來的calendar才不會跑版

import { AntDesign } from '@expo/vector-icons'; 
import Buttons from '../../components/buttons.js';
import BottomBar from '../../components/bottomBar';
import TextBar from '../../components/textBar.js';
import WeekdayPicker from '../../components/weekdayPicker.js';
import { Dialog } from 'react-native-simple-dialogs';
import { useFocusEffect } from '@react-navigation/native';

import { createEvent } from '../../Server/event-request.js';
import { getUser, getAllUser } from '../../Server/user-request.js';

export default function CreateEvent({navigation,route}) {
	const {cur_user} = route.params;
	const [events, setEvent] = useState();
	const [user, setUser] = useState(['Guavaaa', 'Jason', 'Tony', 'Bear']);
	const [allUser, setAllUser] = useState([]);

	useFocusEffect(
		React.useCallback(() => {
			const loadEvents = async () => {
				try {
				    const all_user = await getAllUser();
				  	setAllUser(all_user);
				  	const user_data = await getUser(cur_user);
				  	const user_friends = user_data.friends;
				  	setUser(user_friends);
				  	console.log('user read successfully');
				} catch (error) {
					console.log('Error reading JSON file:', error);
				}
			};
			loadEvents();
			return () => {};
		}, [])
	);

	// useEffect(() => {
	// 	const loadEvents = async () => {
	// 	  try {
	// 		const all_user = await getAllUser();
	// 		setAllUser(all_user);
	// 		const user_data = await getUser(cur_user);
	// 		const user_friends = user_data.friends;
	// 		setUser(user_friends);
	// 		console.log('user read successfully');
	// 	  } catch (error) {
	// 		  console.log('Error reading JSON file:', error);
	// 	  }
	// 	};
	// 	loadEvents();
	// }, []);


	function getUserPhoto(userName) {
		// console.log(userName)
		// console.log(allUser)
		let photoID;
		for(let i=0; i<allUser.length; i++){  // userlist
			if(allUser[i].username === userName){  // 要拿user's friend list
				photoID = allUser[i].user_photo;
				// console.log(photoID)
				break;
			}
		}
		  
		let profileImgPath;  // 根據user_photo決定要render哪一張照片
		if (photoID === 1) {
			profileImgPath = require('../../assets/profiles/profile1.png');
		} else if (photoID === 2) {
			profileImgPath = require('../../assets/profiles/profile2.png');
		} else if (photoID === 3) {
			profileImgPath = require('../../assets/profiles/profile3.png');
		} else if (photoID === 4) {
			profileImgPath = require('../../assets/profiles/profile4.png');
		} else if (photoID === 5) {
			profileImgPath = require('../../assets/profiles/profile5.png');
		} else {
			profileImgPath = require('../../assets/profiles/profile6.png');
		}
		return profileImgPath;
	}
	
	const [selectedDate, setSelected] = useState([]);  // 選所有要的日期
	const [mode, setMode] = useState('Specific Dates');  // 存mode

	const handleSetMode = (buttonMode) =>{
		setMode(buttonMode);
		// console.log(mode);
	};
	const handleSetSelected = (day) => {
		if(selectedDate.includes(day.dateString)){  // 選過的再點要把她刪掉
			setSelected((prevSelected) => {
				let filtSelected = prevSelected.filter(item => item !== day.dateString);
				return [...filtSelected];
			})
		} else {
			setSelected((prevSelected) => {
				return [...prevSelected, day.dateString];
			})
		}
	};
	// console.log(selectedDate);
	const markdates = {};
	selectedDate.forEach(date => {
		// console.log(date);
		markdates[date] = {selected: true, selectedDayBackgroundColor: '#809BBF'};
	});

	const [eventName, setEventName] = useState('My Event');  // 設定event name
	const submitEventNameHandler = (text) => {  
		console.log(text);
		setEventName(text);

	
	}

	// dropDown
	const [dropSelected, setdropelected] = useState("");   // 選minimum time unit

	// time select list
	const [beginTimeSelected, setbeginTime] = useState("");  // 選interval的begin time
	const [endTimeSelected, setendTime] = useState("");    // 選interval的end time
	const timelist = [
		{key:'1', value:'01:00'},
		{key:'2', value:'02:00'},
		{key:'3', value:'03:00'},
		{key:'4', value:'04:00'},
		{key:'5', value:'05:00'},
		{key:'6', value:'06:00'},
		{key:'7', value:'07:00'},
		{key:'8', value:'08:00'},
		{key:'9', value:'09:00'},
		{key:'10', value:'10:00'},
		{key:'11', value:'11:00'},
		{key:'12', value:'12:00'},
		{key:'13', value:'13:00'},
		{key:'14', value:'14:00'},
		{key:'15', value:'15:00'},
		{key:'16', value:'16:00'},
		{key:'17', value:'17:00'},
		{key:'18', value:'18:00'},
		{key:'19', value:'19:00'},
		{key:'20', value:'20:00'},
		{key:'21', value:'21:00'},
		{key:'22', value:'22:00'},
		{key:'23', value:'23:00'},
		{key:'24', value:'24:00'},
	];

	// selectDeadline modal
	const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);  

	const [date, setDate] = useState('2023-06-20');  // 選deadline

	const openDatePickerSingle = () => setShowDatePickerSingle(true);
	const onCancelSingle = () => {
		// You should close the modal in here
		setShowDatePickerSingle(false)
	}

	const onConfirmSingle = (output) => {
		// You should close the modal in here
		setShowDatePickerSingle(false)

		// The parameter 'output' is an object containing date and dateString (for single mode).
		// For range mode, the output contains startDate, startDateString, endDate, and EndDateString
		console.log(output)
		setDate(output.dateString)
	}

	const [showEndDatePicker, setShowEndDatePicker] = useState(false);

	const [endDate, setEndDate] = useState('2023-06-20');

	const openEndDatePicker = () => setShowEndDatePicker(true);
	const onCancelEndDatePicker = () => {
		setShowEndDatePicker(false);
	}

	const onConfirmEndDatePicker = (output) => {
		// You should close the modal in here
		setShowEndDatePicker(false);

		console.log(output)
		setEndDate(output.dateString)
	}

	// 選members
	const [showMemberPopup, setShowMemberPopup] = useState(false);
	const [memberList, setMemberList] = useState([]);   // 存member list

	const handleMemberList = (name) => {
		if(!memberList.includes(name)){
			setMemberList((prevState) => {
				return [...prevState, name];
			})
		}
	}

	const deleteMember = (name) => {
		setMemberList((prevState) => {
			let filtSelected = prevState.filter(item => item !== name);
			return [...filtSelected];
		})
	}
	// console.log(memberList)
	
	// 選weekDay
	const [isPressed, setIsPressed] = useState({
        Sun: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
    });

	const handlePress = (day) => {
		setIsPressed((prevState) => ({
            ...prevState,
            [day]: !prevState[day],
        }));
	};

	// console.log(isPressed);

	// save data to backend
	const createButtonHandler = async () => {
		const event = await createEvent(eventName,  // event name
			cur_user,   // host
			memberList,  // members
			date,  // deadline
			mode,  // mode
			selectedDate, // dates or weekday
			isPressed,  // weekDay
			endDate,  // end_date
			dropSelected,  // time unit
			beginTimeSelected,  // start time
			endTimeSelected,  // end time
		);
		console.log(event.code);
		navigation.navigate('EventCode',{cur_user:cur_user, event_code: event.event_code});
	}
				

	return (
		<View style={styles.container}>
			<View style={styles.modeButton}>
				<Buttons buttonText='Specific Dates' height={36} width={144} onPress={()=>handleSetMode('Specific Dates')} mode={mode}/>
				<Buttons buttonText='Days of the Week' height={36} width={144} onPress={()=>handleSetMode('Days of the Week')} mode={mode}/>
			</View>
			{(mode==='Days of the Week') ? 
				(<ScrollView style={styles.topSection}>
					{/* <WeekdayPicker/> */}
					<View style={styles.weekDayContainer}>
						<Text style={styles.headerText}>WeekDays</Text>
						<View style={styles.headerWeekday}>
								<View>
									<Text style={styles.WeekdayText}>Sun</Text>
									<TouchableOpacity onPress={() => handlePress('Sun')} style={[styles.block, { backgroundColor: isPressed['Sun'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>
								</View>
								<View>
									<Text style={styles.WeekdayText}>Mon</Text>
									<TouchableOpacity onPress={() => handlePress('Mon')} style={[styles.block, { backgroundColor: isPressed['Mon'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

								</View>
								<View>
									<Text style={styles.WeekdayText}>Tue</Text>
									<TouchableOpacity onPress={() => handlePress('Tue')} style={[styles.block, { backgroundColor: isPressed['Tue'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

								</View>
								<View>
									<Text style={styles.WeekdayText}>Wed</Text>
									<TouchableOpacity onPress={() => handlePress('Wed')} style={[styles.block, { backgroundColor: isPressed['Wed'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

								</View>
								<View>
									<Text style={styles.WeekdayText}>Thu</Text>
									<TouchableOpacity onPress={() => handlePress('Thu')} style={[styles.block, { backgroundColor: isPressed['Thu'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

								</View>
								<View>
									<Text style={styles.WeekdayText}>Fri</Text>
									<TouchableOpacity onPress={() => handlePress('Fri')} style={[styles.block, { backgroundColor: isPressed['Fri'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

								</View>
								<View>
								<Text style={styles.WeekdayText}>Sat</Text>
								<TouchableOpacity onPress={() => handlePress('Sat')} style={[styles.block, { backgroundColor: isPressed['Sat'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

							</View>
						</View>
					</View>

					<Text style={styles.settingText}>Event Name: </Text>
					<TextBar placeholder="Type a name..." submitHandler={submitEventNameHandler}/>
					<Text style={styles.settingText}>Team Members: </Text>
					<View style={styles.memberList}>
						<TouchableOpacity onPress={()=>setShowMemberPopup(true)}><Image source={require('../../assets/profiles/plus.png')}/></TouchableOpacity>
						<Dialog
							visible={showMemberPopup}
							onTouchOutside={() => setShowMemberPopup(false)} >
							<View>
								<Text style={styles.popupHeader}>Select Members</Text>
								<FlatList
									style={styles.memberPhotos}
									data={user}   // 要拿user's friend list
									renderItem={ ({item})=>(
										<View style={styles.frendList}>
											<TouchableOpacity onPress={()=>handleMemberList(item)}>
											<Image source={getUserPhoto(item)} style={styles.selectPhoto}/>
											</TouchableOpacity>
											<Text style={styles.name}>{item}</Text>
										</View>
									)}
									horizontal
								/>
								<TouchableOpacity onPress={()=>setShowMemberPopup(false)} style={styles.addButton}>
									<Text style={styles.createButtonText}>Add</Text>
								</TouchableOpacity>
							</View>
						</Dialog>
						<FlatList
							data={memberList}
							renderItem={({item}) => (
								<View>
									<TouchableOpacity onPress={() => deleteMember(item)}>
									<Image source={getUserPhoto(item)} style={styles.selectedPhoto}/>
									</TouchableOpacity>
									<Text style={styles.name}>{item}</Text>
								</View>
							)}
							horizontal
						/>
					</View>
					{/* 大頭照是要怎麼搞== */}
					<Text style={styles.settingText}>Setting: </Text>
					<Text style={styles.subsettingText}>Minimum Time Unit: </Text>
					<SelectList 
						setSelected={(val) => setdropelected(val)} 
						data={[{key:'1', value:'1 hour'},
							  {key:'2', value:'2 hour'}]} 
						save="value"
						search={false}
						boxStyles={{marginHorizontal:32,
									marginTop: 10,
									marginBottom: 10,
									fontFamily: 'SpaceGrotesk_400Regular',
									borderColor: '#809BBF',
									borderRadius: 16, }}
						dropdownStyles={{marginHorizontal:32,
									borderColor: '#809BBF',
									fontFamily: 'SpaceGrotesk_400Regular',
									marginTop: 2,
									marginBottom: 10,
									}}
						defaultOption={{ key:'1', value:'1 hour' }}
					/>
					<Text style={styles.subsettingText}>Interval: </Text>
					<Text style={styles.descText}>Members can only select time in the interval.</Text>
					<View style={styles.timeText}>
						<Text style={styles.beginText}>begin</Text>
						<Text style={styles.endText}>end</Text>
					</View>
					<View style={styles.timeInterval}>
						<Image source={require('../../assets/beginTime.png')}/>
						<SelectList
							setSelected={(val) => setbeginTime(val)} 
							data={timelist}
							boxStyles={{marginHorizontal:0,
										borderColor: '#809BBF',}}
							dropdownStyles={{marginHorizontal:5,
								borderColor: '#809BBF',
								fontFamily: 'SpaceGrotesk_400Regular',
								marginTop: 2,
								marginBottom: 10,}}
							defaultOption={{ key:'7', value:'07:00' }}
							search={false} />
						<Image styles={styles.TimeImg} source={require('../../assets/endTime.png')}/>
						<SelectList
							setSelected={(val) => setendTime(val)} 
							data={timelist}
							boxStyles={{marginHorizontal:0,
										borderColor: '#809BBF',}}
							dropdownStyles={{marginHorizontal:5,
								borderColor: '#809BBF',
								fontFamily: 'SpaceGrotesk_400Regularr',
								marginTop: 2,
								marginBottom: 10,}}
							defaultOption={{ key:'19', value:'19:00' }}
							search={false} />
					</View>
					<Text style={styles.subsettingText}>Deadline: </Text>
					<Text style={styles.descText}>Memebers should vote their available time before deadline.</Text>
					<TouchableOpacity onPress={openDatePickerSingle} style={styles.selectDateBox}>
						<View style={{ flexDirection: 'row', alignContent: 'center' }}>
							<AntDesign name="calendar" size={18} color="black" />
							<Text style={styles.DLtimeText}>{date}</Text>
						</View>
					</TouchableOpacity>
					<DatePicker
						isVisible={showDatePickerSingle}
						mode={'single'}
						onCancel={onCancelSingle}
						onConfirm={onConfirmSingle}
						colorOptions={{ selectedDateBackgroundColor: '#809BBF',
										headerColor: '#809BBF',
										weekDaysColor: '#1C1243',}}
					/>
					<Text style={styles.subsettingText}>Event End Date: </Text>
					<Text style={styles.descText}>Event will continue every week until this date.</Text>
					<TouchableOpacity onPress={openEndDatePicker} style={styles.selectDateBox}>
						<View style={{ flexDirection: 'row', alignContent: 'center' }}>
							<AntDesign name="calendar" size={18} color="black" />
							<Text style={styles.DLtimeText}>{endDate}</Text>
						</View>
					</TouchableOpacity>
					<DatePicker
						isVisible={showEndDatePicker}
						mode={'single'}
						onCancel={onCancelEndDatePicker}
						onConfirm={onConfirmEndDatePicker}
						colorOptions={{ selectedDateBackgroundColor: '#809BBF',
										headerColor: '#809BBF',
										weekDaysColor: '#1C1243',

						}}
						modalStyles={{  transparent: 'true',
										// justifyContent: 'flex-end',

						}}
					/>
					<TouchableOpacity onPress={() => navigation.navigate('EventCode',{event_code:'event.event_code',cur_user: cur_user})} style={styles.createButton}>
						<Text style={styles.createButtonText}>create</Text>
					</TouchableOpacity>
				</ScrollView>) : 
				(<ScrollView style={styles.topSection}>
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
						onDayPress={day => {
							handleSetSelected(day);
							
						}}
						/>
					<Text style={styles.settingText}>Event Name: </Text>
					<TextBar placeholder="Type a name..." submitHandler={submitEventNameHandler}/>
					<Text style={styles.settingText}>Team Members: </Text>
					<View style={styles.memberList}>
						<TouchableOpacity onPress={()=>setShowMemberPopup(true)}><Image source={require('../../assets/profiles/plus.png')}/></TouchableOpacity>
						<Dialog
							visible={showMemberPopup}
							onTouchOutside={() => setShowMemberPopup(false)} >
							<View>
								<Text style={styles.popupHeader}>Select Members</Text>
								<FlatList
									style={styles.memberPhotos}
									data={user}  // 要拿user's friend list
									renderItem={ ({item})=>(
										<View style={styles.frendList}>
											<TouchableOpacity onPress={()=>handleMemberList(item)}>
											<Image source={getUserPhoto(item)} style={styles.selectPhoto}/>
											</TouchableOpacity>
											<Text style={styles.name}>{item}</Text>
										</View>
									)}
									horizontal
								/>
								<TouchableOpacity onPress={()=>setShowMemberPopup(false)} style={styles.addButton}>
									<Text style={styles.createButtonText}>Add</Text>
								</TouchableOpacity>
							</View>
						</Dialog>
						<FlatList
							data={memberList}
							renderItem={({item}) => (
								<View>
									<TouchableOpacity onPress={() => deleteMember(item)}>
									<Image source={getUserPhoto(item)} style={styles.selectedPhoto}/>
									</TouchableOpacity>
									<Text style={styles.name}>{item}</Text>
								</View>
							)}
							horizontal
						/>
					</View>
					<Text style={styles.settingText}>Setting: </Text>
					<Text style={styles.subsettingText}>Minimum Time Unit: </Text>
					<SelectList 
						setSelected={(val) => setdropelected(val)} 
						data={[{key:'1', value:'1 hour'},
							  {key:'2', value:'2 hour'}]} 
						save="value"
						search={false}
						boxStyles={{marginHorizontal:32,
									marginTop: 10,
									marginBottom: 10,
									fontFamily: 'SpaceGrotesk_400Regular',
									borderColor: '#809BBF',
									borderRadius: 16, }}
						dropdownStyles={{marginHorizontal:32,
									borderColor: '#809BBF',
									// fontFamily: 'SpaceGrotesk_400Regular',
									marginTop: 2,
									marginBottom: 10,
									}}
						defaultOption={{ key:'1', value:'1 hour' }}
					/>
					<Text style={styles.subsettingText}>Interval: </Text>
					<Text style={styles.descText}>Members can only select time in the interval.</Text>
					<View style={styles.timeText}>
						<Text style={styles.beginText}>begin</Text>
						<Text style={styles.endText}>end</Text>
					</View>
					<View style={styles.timeInterval}>
						<Image source={require('../../assets/beginTime.png')}/>
						<SelectList
							setSelected={(val) => setbeginTime(val)} 
							data={timelist}
							boxStyles={{marginHorizontal:0,
										borderColor: '#809BBF',}}
							dropdownStyles={{marginHorizontal:5,
								borderColor: '#809BBF',
								// fontFamily: 'SpaceGrotesk_400Regular',
								marginTop: 2,
								marginBottom: 10,}}
							defaultOption={{ key:'7', value:'07:00' }}
							search={false} />
						<Image styles={styles.TimeImg} source={require('../../assets/endTime.png')}/>
						<SelectList
							setSelected={(val) => setendTime(val)} 
							data={timelist}
							boxStyles={{marginHorizontal:0,
										borderColor: '#809BBF',}}
							dropdownStyles={{marginHorizontal:5,
								borderColor: '#809BBF',
								// fontFamily: 'SpaceGrotesk_400Regularr',
								marginTop: 2,
								marginBottom: 10,}}
							defaultOption={{ key:'19', value:'19:00' }}
							search={false} />
					</View>
					<Text style={styles.subsettingText}>Deadline: </Text>
					<Text style={styles.descText}>Memebers should vote their available time before deadline.</Text>
					<TouchableOpacity onPress={openDatePickerSingle} style={styles.selectDateBox}>
						<View style={{ flexDirection: 'row', alignContent: 'center' }}>
							<AntDesign name="calendar" size={18} color="black" />
							<Text style={styles.DLtimeText}>{date}</Text>
						</View>
					</TouchableOpacity>
					<DatePicker
						isVisible={showDatePickerSingle}
						mode={'single'}
						onCancel={onCancelSingle}
						onConfirm={onConfirmSingle}
						colorOptions={{ selectedDateBackgroundColor: '#809BBF',
										headerColor: '#809BBF',
										weekDaysColor: '#1C1243',
						}}
					/>
					<TouchableOpacity onPress={createButtonHandler} style={styles.createButton}>
						<Text style={styles.createButtonText}>create</Text>
					</TouchableOpacity>
				</ScrollView>
				)}

		<BottomBar cur_user={cur_user} navigation={navigation}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
	topSection: { 
		// backgroundColor: 'pink',
		marginBottom: 70,
		// flex: 1,
	},
	modeButton: {
		marginVertical: 15,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-around', 
		alignItems: 'flex-start',
	},
	memberList: {
		flexDirection: 'row',
		marginHorizontal: 35,
		marginBottom: 8,
	},
	popupHeader: {
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 5,
	},
	frendList: {
		marginHorizontal: 5,
	},
	selectPhoto: {
		height: 60,
		width: 60,
		// marginHorizontal: 5,
		marginTop: 8,
	},
	name:{
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 10,
		textAlign: 'center',
	},
	selectedPhoto: {
		height: 40,
		width: 40,
		margin: 2,
	},
	addButton: {
		backgroundColor: '#809BBF',
		borderRadius: 5,
		width: 100,
		height: 30,
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	
	settingText: {
		marginLeft: 35,
		marginBottom: 10,
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 16,
	},
	subsettingText: {
		marginTop: 5,
		marginLeft: 37,
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 14,
	},
	timeInterval:{
		flexDirection: 'row',
		marginHorizontal: 35,
		marginTop: 3,
		marginBottom: 10,
		justifyContent: 'space-between',
		alignContent: 'flex-start',
	},
	timeText:{
		marginHorizontal: 38,
		flexDirection: 'row',
	},
	beginText: {
		marginTop: 2,
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#1C1243',
		fontSize: 10,
	},
	endText: {
		marginTop: 2,
		paddingLeft: 160,
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#1C1243',
		fontSize: 10,
	},
	descText: {
		marginHorizontal: 38,
		marginTop: 2,
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#1C1243',
		fontSize: 10,
	},
	selectDateBox: {
		marginHorizontal: 35,
		marginVertical: 5,
		borderWidth: 1,
		borderColor: '#809BBF',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
	},
	DLtimeText: {
		paddingLeft: 10,
	},
	createButton:{
		marginHorizontal: 35,
		marginVertical: 8,
		height: 45,
		backgroundColor: '#809BBF',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	createButtonText: {
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#fff',
	},
	weekDayContainer: {
        marginHorizontal:32,
        marginTop: 10,	
        marginBottom: 15,
        // height: 100,
        borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 16,
    },
    headerText: {
        fontFamily: 'SpaceGrotesk_400Regular',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 15,
    },
    headerWeekday: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    WeekdayText: {
        fontFamily: 'SpaceGrotesk_400Regular',
        fontSize: 12,
        color: '#b6c1cd',
    },
    block:{
        borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        width: 25,
        height: 180,
    }

});
// createEvent - weekday/date 
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Buttons from '../../components/buttons.js';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import BottomBar from '../../components/bottomBar';
import TextBar from '../../components/textBar.js';
// import ModalDropdown from 'react-native-modal-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from 'react-native-dropdown-select-list'

const Exampledata = [
    {
        event: {
            eventName: 'MyEvent',
            dates: ['2023/5/20', '2023/5/21', '2023/5/22'],
            host: 'Anna',
            member: ['Bob', 'Cathy', 'Domingo'],
            interval: ['9:00', '10:00', '11:00'],
            description: 'This is description.',
            deadline: 'na',
            eventCode: '809BBF',
            // Use (date, time) to access the time block.
            // For example, (0, 0) stands for 2023/5/20 9:00.
            availablePeople: [
                [['Bob', 'Cathy', 'Domingo'], ['Bob', 'Cathy'], []],
                [['Domingo'], ['Domingo'], []],
                [[], [], []],
            ],
            topTimeBlock: [
                [(0, 0)], 
                [(0, 1)],
                [(1, 0), (1, 1)]
            ],
            confirmTime: (0, 0)
        }
    }
];



export default function CreateEvent({navigation}) {
	const [selectedDate, setSelected] = useState([]);
	const [mode, setMode] = useState('Specific Dates'); 

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

	const submitEventNameHandler = (text) => {  
		// console.log(todos);
	
	}

	// dropDown
	const [dropSelected, setSdropelected] = React.useState("");

	return (
		<View style={styles.container}>
			<View style={styles.modeButton}>
				<Buttons buttonText='Specific Dates' height={36} width={144} onPress={()=>handleSetMode('Specific Dates')} mode={mode}/>
				<Buttons buttonText='Days of the Week' height={36} width={144} onPress={()=>handleSetMode('Days of the Week')} mode={mode}/>
			</View>
			{(mode==='Days of the Week') ? 
				(<View>
					<Text>Days of the Week</Text>
				</View>) : 
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
					{/* 大頭照是要怎麼搞== */}
					<Text style={styles.settingText}>Setting: </Text>
					<Text style={styles.subsettingText}>Minimum Time Unit: </Text>
					<SelectList 
						setSelected={(val) => setSdropelected(val)} 
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

				</ScrollView>
				)}

		<BottomBar navigation={navigation}/>
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
	settingText: {
		marginLeft: 35,
		marginBottom: 10,
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 16,
	},
	subsettingText: {
		marginLeft: 38,

		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 12,
	},
});
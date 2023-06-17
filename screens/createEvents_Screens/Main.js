// createEvent - weekday/date 
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';
import Buttons from '../../components/buttons.js';
import {Calendar, LocaleConfig} from 'react-native-calendars';

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



export default function CreateEvent() {
	const [selectedDate, setSelected] = useState([]);
	const [mode, setMode] = useState('Specific Dates'); 

	const handleSetMode = (buttonMode) =>{
		setMode(buttonMode);
		// console.log(mode);
	};
	const handleSetSelected = (day) => {
		if(selectedDate.includes(day.dateString)){
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
				(<View>
					<Calendar
					  	// markingType={'period'}
						markedDates={markdates}
						style={{
							marginHorizontal: 35,
							borderWidth: 1,
							borderRadius: 12,
							borderColor: '#809BBF',
							// backgroundColor: 'pink',
						}}
						theme={{
							selectedDayBackgroundColor: '#809BBF',
							selectedDayTextColor: '#ffffff',
							todayTextColor: '#FF63A5',
						}}
						onDayPress={day => {
							handleSetSelected(day);

						}}
					/>
				</View>)}

		</View>
	);
}

const styles = StyleSheet.create({
	container: {

	},
	modeButton: {
		margin: 15,
		flexDirection: 'row',
		justifyContent: 'space-around', 
		alignItems: 'flex-start',
	},
});
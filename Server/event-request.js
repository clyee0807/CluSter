import * as FileSystem from 'expo-file-system';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { addEventToUser } from './user-request';
import { createNotif } from './notif-request';

function generateRandomString() {
	const uuid = uuidv4().replace(/-/g, ''); // Remove dashes from the UUID
	const alphanumericOnly = uuid.replace(/[^A-Z0-9]/gi, ''); // Filter out non-alphanumeric characters
	const length = 6;
	return alphanumericOnly.substr(0, length).toUpperCase(); // Convert to uppercase and take the first 6 characters
}

function getWeekdayDates(start, end, weekdays) {
	const startDate = new Date(start.replace(/-/g, '/'));
  	const endDate = new Date(end.replace(/-/g, '/'));

	let dates = [];
	const current = new Date(startDate);

	while (current <= endDate) {
	  const currentWeekday = current.getDay();
	  if (weekdays.includes(currentWeekday)) {
		dates.push(new Date(current));
	  }
	  current.setDate(current.getDate() + 1);
	}
  
	return dates;
}

// Create a new event using the given parameters.
export async function createEvent(
	event_name, host, members, deadline, mode, dates, days, end_date, time_unit, start_time, end_time) {
    try {
		// console.log("createEvent: start, event_name =", event_name);
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
		let start_date = new Date();
		const year = start_date.getFullYear();
		const month = String(start_date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const day = String(start_date.getDate()).padStart(2, '0');
		start_date = year.toString + '-' + month + '-' + day;

      	let event = {
			id: (existingData.length + 1).toString(),
			event_name: event_name,
			dates: [],
			host: host,
			members: members,
			interval: [],
			deadline: deadline,
			status: 'In progress',
			event_code: generateRandomString(),
			available_member: [],
			topTimeBlock: [
				[],
				[],
				[]
			],
			confirmTime: 'na'
		}
		members.push(host);

		if (mode === 'Specific Dates') {
			event.dates = dates;
		} else {
			let weekdays = [];
			if (days['Sunday'] === true) weekdays.push(0);
			if (days['Monday'] === true) weekdays.push(1);
			if (days['Tuesday'] === true) weekdays.push(2);
			if (days['Wednesday'] === true) weekdays.push(3);
			if (days['Thursday'] === true) weekdays.push(4);
			if (days['Friday'] === true) weekdays.push(5);
			if (days['Saturday'] === true) weekdays.push(6);
			event.dates = getWeekdayDates(start_date, end_date, weekdays);
		}
		console.log('time_unit =' ,time_unit);
		for (let i = Number(start_time); i < Number(end_time); ) {
			const timeString = i.toString() + ":00";
			event.interval.push(timeString);
			if (time_unit === '1') {
				i = i + 1;
			} else {
				i = i + 2;
			}
		}
		for (let i = 0; i < event.dates.length; i++) {
			const arr_temp = [];
			for (let j = 0; j < event.interval.length; j++) {
				arr_temp.push([]);
			}
			event.available_member.push(arr_temp);
		}
		
		existingData.push(event);
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
		console.log(event);
      	console.log('createEvent: events.json updated successfully.');

		addEventToUser(host, event.event_code);
		createNotif(event.id, event.members, event.event_code);
		console.log('createEvent: success');
    } catch (error) {
      	console.error('createEvent: Error occurred while writing to JSON file:', error);
    }
}

// Get the data of event using event_id.
export async function getEvent(event_id) {
    try {
		console.log("getEvent: start, event_id =", event_id);
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
		let ret = '';
      	existingData.map((event) => {
			if (event.id === event_id) {
				ret = event;
			}
		});
		console.log('getEvent: success');
		return ret;
    } catch (error) {
      	console.error('getEvent: Error occurred while writing to JSON file:', error);
    }
}

// Get all event data a user is attending using user.events.
export async function getUserEvents(user_events) {
    try {
		// console.log("getUserEvents: start, user_events =", user_events);
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
		const allEvents = [];
      	existingData.map((event) => {
			if (user_events.includes(event.event_code)) {
				allEvents.push(event);
			}
		});

		console.log("getUserEvents: success");
		return allEvents;

    } catch (error) {
      	console.error('getUserEvents: Error occurred while writing to JSON file:', error);
    }
}
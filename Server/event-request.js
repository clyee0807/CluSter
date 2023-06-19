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

export async function createEvent(
	event_name, host, members, deadline, mode, dates, start_date, end_date, time_unit, start_time, end_time) {
    try {
		// console.log("creating event : ", event_name);
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
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
		// console.log('DATES: mode =', mode);
		if (mode === 'Specific Dates') {
			event.dates = dates;
		} else {
			let weekdays = [];
			if (dates['Sunday'] === true) weekdays.push(0);
			if (dates['Monday'] === true) weekdays.push(1);
			if (dates['Tuesday'] === true) weekdays.push(2);
			if (dates['Wednesday'] === true) weekdays.push(3);
			if (dates['Thursday'] === true) weekdays.push(4);
			if (dates['Friday'] === true) weekdays.push(5);
			if (dates['Saturday'] === true) weekdays.push(6);
			event.dates = getWeekdayDates(start_date, end_date, weekdays);
		}
		// console.log('INTERVAL: time_unit =', time_unit);
		let [hour_s, minute_s] = start_time.split(':');
		let [hour_e, minute_e] = end_time.split(':');
		hour_s = Number(hour_s), minute_s = Number(minute_s);
		hour_e = Number(hour_e), minute_e = Number(minute_e);
		for (let i = hour_s; i <= hour_e; ) {
			if (minute_s < minute_e) {
				const hour_string = i.toString(), minute_string = j.toString();
				const timeString = hour_string + ':' + minute_string;
				interval.push(timeString);
			}
			if (time_unit === '1 hour') {
				i++;
			} else {
				i += 2;
			}
		}
		// console.log('AVAIL_MEM');
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
      	console.log('JSON file updated successfully!');

		addEventToUser(host, event.event_code);
		createNotif(event.id, event.members, event.event_code);

    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}

export async function readEvent(event_id) {
    try {
		// console.log("reading event of event_id =", event_id");
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((event) => {
			if (event.event_id === event_id) {
				return event;
			}
		});

    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}

export async function getUserEvents(user_events) {
    try {
		// console.log("get all events in", events);
      	const fileUri = FileSystem.documentDirectory + 'events.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
		const allEvents = [];
      	existingData.map((event) => {
			if (user_events.includes(event.event_code)) {
				allEvents.push(event);
			}
		});

		return allEvents;

    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}
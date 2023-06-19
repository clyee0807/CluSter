import * as FileSystem from 'expo-file-system';

import { addNotifToUser } from './user-request';

// Create a new notif using the given parameters.
export async function createNotif(event_id, members, event_code) {
    try {
		// console.log("creating notif :", event_id);
      	const fileUri = FileSystem.documentDirectory + 'notifs.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	let notif = {
			id: event_id,
			type: 1,
            event: event_code
		}
		
		existingData.push(notif);
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
        addNotifToUser(members, notif_id);
      	console.log('JSON file updated successfully!');
    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}


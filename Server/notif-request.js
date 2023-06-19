import * as FileSystem from 'expo-file-system';

import { addNotifToUsers } from './user-request';

// Create a new notif using the given parameters.
export async function createNotif(event_id, members, event_code) {
    try {
		// console.log("createNotif: start, event_id =", event_id);
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
        addNotifToUsers(members, notif.id);
      	console.log('createNotif: success!');
    } catch (error) {
      	console.error('createNotif: Error occurred while writing to JSON file:', error);
    }
}

// Get all notifs of the user using user.notifs
export async function getAllNotifs(notifs = 'All') {
    try {
		// console.log("getAllNotifs: start, members =", members);
      	const fileUri = FileSystem.documentDirectory + 'notifs.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let ret = [];
        if (notifs === 'All') {
            existingData.map((n) => {
                ret.push(n);
            });
        } else {
            existingData.map((n) => {
                if (notifs.includes(Number(n.id))) {
                    ret.push(n);
                }
            });
        }
      	
        console.log('getAllNotifs: success');
        return ret;
    } catch (error) {
      	console.error('getAllNotifs: Error occurred while writing to JSON file:', error);
    }
}


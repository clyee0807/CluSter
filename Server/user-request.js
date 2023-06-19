import * as FileSystem from 'expo-file-system';

export async function addEventToUser(user, event_code) {
    try {
		// console.log("add event:", event_code, "to user", user);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (u.username === user) {
                u.events.push(event_code);
            }
        });
		
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('JSON file updated successfully!');
    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}

export async function addNotifToUser(members, notif_id) {
    try {
		// console.log("add notif:", notif, "to users:", members);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (members.include(u.username)) {
                u.notifs.push(notif_id);
            }
        });
		
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('JSON file updated successfully!');
    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}

export async function deleteNotifFromUser(user, notif_id) {
    try {
		// console.log("delete notif:", notif, "from user", user);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (u.username === user) {
                const index = u.notifs.indexOf(notif_id);
                if (index > -1) {
                    u.notifs.splice(index, 1);
                }
            }
        });
		
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('JSON file updated successfully!');
    } catch (error) {
      	console.error('Error occurred while writing to JSON file:', error);
    }
}
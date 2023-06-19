import * as FileSystem from 'expo-file-system';

// Check the user's login information.
export async function userLogin(username, password) {
    try {
		// console.log("userLogin: start, username =", username);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let loginSuccess = false;
      	existingData.map((u) => {
            if (u.username === username && u.password === password) {
                loginSuccess = true;
            }
        });
        console.log('userLogin: success');
        return loginSuccess;
    } catch (error) {
      	console.error('userLogin: Error occurred while writing to JSON file:', error);
    }
}

// Add an event to user.events.
export async function addEventToUser(user, event_code) {
    try {
		// console.log("addEventToUser: start, user =", user);
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
      	console.log('addEventToUser: success');
    } catch (error) {
      	console.error('addEventToUser: Error occurred while writing to JSON file:', error);
    }
}

// Return user.
export async function getUser(username) {
    try {
		// console.log("getUser: start, username =", username);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let ret = [];
      	existingData.map((u) => {
            if (u.username === username) {
                ret = u;
            }
        });
        console.log('getUser: success');
        return ret;
    } catch (error) {
      	console.error('getUser: Error occurred while writing to JSON file:', error);
    }
}

// Return user.events.
export async function getUserEventsArray(username) {
    try {
		// console.log("getUserEventsArray: start, username =", username);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let ret = [];
      	existingData.map((u) => {
            if (u.username === username) {
                ret = u.events;
            }
        });
        console.log('getUserEventsArray: success');
        return ret;
    } catch (error) {
      	console.error('getUserEventsArray: Error occurred while writing to JSON file:', error);
    }
}

// Return user.notifs.
export async function getUserNotifsArray(username) {
    try {
		// console.log("getUserNotifsArray: start, username =", username);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let ret = [];
      	existingData.map((u) => {
            if (u.username === username) {
                ret = u.notifs;
            }
        });
        console.log('getUserNotifsArray: success');
        return ret;
    } catch (error) {
      	console.error('getUserNotifsArray: Error occurred while writing to JSON file:', error);
    }
}

// Get all users attending the event using event.members.
export async function getAllUser(members = 'All') {
    try {
		// console.log("getAllUsers: start, members =", members);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let ret = [];
        if (members === 'All') {
            existingData.map((u) => {
                ret.push(u);
            });
        } else {
            existingData.map((u) => {
                if (members.includes(u.username)) {
                    ret.push(u);
                }
            });
        }
      	
        console.log('getAllUsers: success');
        return ret;
    } catch (error) {
      	console.error('getAllUsers: Error occurred while writing to JSON file:', error);
    }
}

// Add a notif to user.notifs.
export async function addNotifToUsers(members, notif_id) {
    try {
		// console.log("addNotifToUsers: start, members =", members);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (members.includes(u.username)) {
                u.notifs.push(notif_id);
            }
        });
		
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('addNotifToUsers: success');
    } catch (error) {
      	console.error('addNotifToUsers: Error occurred while writing to JSON file:', error);
    }
}

// Delete a notif from user.notifs.
export async function deleteNotifFromUser(user, notif_id) {
    try {
		// console.log("deleteNotifFromUsers: start, user =", user);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (u.username === user) {
                const index = u.notifs.indexOf(notif_id);
                console.log('index =', index);
                if (index > -1) {
                    u.notifs.splice(index, 1);
                }
            }
        });
		
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('deleteNotifFromUser: success');
    } catch (error) {
      	console.error('deleteNotifFromUser: Error occurred while writing to JSON file:', error);
    }
}

// Add a friend to user.friends.
export async function addFriendToUser(username, friend_name) {
    try {
		// console.log("addFriendToUser: start, members =", members);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
        let found = false;
      	existingData.map((u) => {
            if (u.username === username) {
                existingData.map((v) => {
                    if (v.username === friend_name && !u.friends.includes(friend_name)) {
                        u.friends.push(friend_name);
                        found = true;
                    }
                })
            }
        });
        
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('addFriendToUser: success');
        return found;
    } catch (error) {
      	console.error('addFriendToUser: Error occurred while writing to JSON file:', error);
    }
}

export async function toggleUserNotif(username) {
    try {
		// console.log("toggleUserNotif: start, members =", members);
      	const fileUri = FileSystem.documentDirectory + 'users.json';
      	const existingContent = await FileSystem.readAsStringAsync(fileUri);
      	const existingData = JSON.parse(existingContent);
        
      	existingData.map((u) => {
            if (u.username === username) {
                u.notif_on = !u.notif_on;
            }
        });
        
      	const updatedContent = JSON.stringify(existingData);
      	await FileSystem.writeAsStringAsync(fileUri, updatedContent);
      	console.log('toggleUserNotif: success');
    } catch (error) {
      	console.error('toggleUserNotif: Error occurred while writing to JSON file:', error);
    }
}
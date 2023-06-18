import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';
import BottomBar from '../../components/bottomBar';
import { Feather } from '@expo/vector-icons';

export default function Profile({navigation}) {
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
			username: 'Peggy', // string
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
	]);


	let profileImgPath;  // 根據user_photo決定要render哪一張照片(不能dynamic path)
	if (user[0].user_photo === 1) {
		profileImgPath = require('../../assets/profiles/profile1.png');
	} else if (user[0].user_photo === 2) {
		profileImgPath = require('../../assets/profiles/profile2.png');
	} else {
		profileImgPath = require('../../assets/profiles/profile3.png');
	}

	return (
		<View style={styles.container}>
			<View style={styles.topSections}>
				<Image source={profileImgPath} style={styles.profileImg}/>
				<Text style={styles.userName}>{user[0].username}</Text>
				<View style={styles.eventcodeContainer}>
					<Feather name="mail" size={20} color="black" />
					<Text style={styles.eventcode}>Email@gmail.com</Text>
				</View>
				<View style={styles.eventcodeContainer}>
					<Feather name="phone" size={20} color="black" />
					<Text style={styles.eventcode}>0912345678</Text>
				</View>
				<View style={styles.rowButton}>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setting')}><Text style={styles.buttonText}>Setting</Text></TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendList')}><Text style={styles.buttonText}>Friends</Text></TouchableOpacity>
				</View>
			</View>
			<BottomBar navigation={navigation}/>
      </View>
    );
}
const styles = StyleSheet.create({
    eventcode: {
        padding: 5
    },
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	topSections: {
		flex: 15,
		padding: 30,
		// justifyContent: 'center'
		// backgroundColor: 'yellow',
	},
	profileImg: {
		width: 120,
		height: 120,
		marginBottom: 5, 
		alignSelf: 'center',
	},
	userName: {
		textAlign: 'center',
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 18,
		marginBottom: 20, 

	},
    eventcodeContainer: {
        borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 16,
        height: 50,
        width: 300,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',

    },
	rowButton: {
		marginVertical: 10,
		alignSelf: 'center',
        flexDirection: 'row',
	},
    button: {
        backgroundColor: '#809BBF',
        alignItems: 'center',
        borderRadius: 16, 
        height: 40,
        width: 145,
        padding: 10,
    	marginHorizontal: 5,
		alignSelf: 'center',

    },
    buttonText: {
        color: '#FFF',
    }
})
import React, {useState} from 'react';
import { StyleSheet, View, Text, Modal, Image, SafeAreaView, TouchableOpacity, 
	TouchableWithoutFeedback,Keyboard, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';
import BottomBar from '../../components/bottomBar';
import { Feather } from '@expo/vector-icons';
import SlidableDrawer from '../../components/slidableDrawer';

export default function Profile({navigation,route}) {
	const {cur_user} = route.params;
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

	// edit profile photo
	const [showDrawer, setShowDrawer] = useState(false);
	const [event, setEvent] = useState('none');
	const [selectedPhoto, setPhoto] = useState(user[0].user_photo);

	const handleSelectPhoto = (id) => {
		setPhoto(id)
	}

	const closeDrawer = () => {
		setEvent('close');
	};
	const showDrawerFn = () => {
		setShowDrawer(true);
	};
	const onSlideEnd = () => {
		setShowDrawer(false);
		setEvent('none');
	};

	let profileImgPath;  // 根據user_photo決定要render哪一張照片(不能dynamic path)
	if (selectedPhoto === 1) {
		profileImgPath = require('../../assets/profiles/profile1.png');
	} else if (selectedPhoto === 2) {
		profileImgPath = require('../../assets/profiles/profile2.png');
	} else if (selectedPhoto === 3) {
		profileImgPath = require('../../assets/profiles/profile3.png');
	} else if (selectedPhoto === 4) {
		profileImgPath = require('../../assets/profiles/profile4.png');
	} else if (selectedPhoto === 5) {
		profileImgPath = require('../../assets/profiles/profile5.png');
	} else {
		profileImgPath = require('../../assets/profiles/profile6.png');
	}
	// console.log(selectedPhoto)

	return (
		<View style={styles.container}>
			<View style={styles.topSections}>
				{/* <SafeAreaView> */}
					<TouchableOpacity onPress={showDrawerFn}>
						<Image source={profileImgPath} style={styles.profileImg}/>
					</TouchableOpacity>
					{showDrawer && (
						<SlidableDrawer
							onSlideEnd={onSlideEnd}
							drawerOpenSpeed={4}
							drawerHeight={0.8}
							event={event}>
							<Text style={styles.DrawerHeader}>Edit Photo</Text>
							<View style={styles.photoRow}>
								<TouchableOpacity onPress={()=>handleSelectPhoto(1)}>
									<Image source={require('../../assets/profiles/profile1.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={()=>handleSelectPhoto(2)}>
									<Image source={require('../../assets/profiles/profile2.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={()=>handleSelectPhoto(3)}>
									<Image source={require('../../assets/profiles/profile3.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
							</View>
							<View style={styles.photoRow}>
								<TouchableOpacity onPress={()=>handleSelectPhoto(4)}>
									<Image source={require('../../assets/profiles/profile4.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={()=>handleSelectPhoto(5)}>
									<Image source={require('../../assets/profiles/profile5.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={()=>handleSelectPhoto(6)}>
									<Image source={require('../../assets/profiles/profile6.png')} style={styles.editPhoto}/>
								</TouchableOpacity>
							</View>
							<TouchableOpacity onPress={closeDrawer} style={styles.ChangePhotoButton}>
								<Text style={styles.buttonText}>Save Change</Text>
							</TouchableOpacity>
						</SlidableDrawer>
					
					)}
				{/* </SafeAreaView> */}
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
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setting',{cur_user: cur_user})}><Text style={styles.buttonText}>Setting</Text></TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendList',{cur_user: cur_user})}><Text style={styles.buttonText}>Friends</Text></TouchableOpacity>
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
		fontFamily: 'SpaceGrotesk_400Regular',
        color: '#FFF',
    },
	DrawerHeader: {
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 18,
	},
	photoRow: {
		flexDirection: 'row',
		// justifyContent:'space-evenly'
	},
	editPhoto: {
		width: 100,
		height: 100,
		marginHorizontal: 10,
		marginVertical: 10,
	},
	ChangePhotoButton:{
		marginHorizontal: 35,
		marginTop: 23,
		marginBottom: 8,
		height: 45,
		width: 350,
		backgroundColor: '#809BBF',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},

})
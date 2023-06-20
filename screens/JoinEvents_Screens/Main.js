// enter event code
import React from 'react';
import { useState } from 'react'
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';

import { joinEvent } from '../../Server/event-request';

export default function JoinEvent({navigation,route}) {
	const {cur_user} = route.params;
	const [input, setInput]=useState('na');

	const changeHandler = (text) => {
		setInput(text);
	}

	const EnterHandler = async () => {
		const event_id = await joinEvent(cur_user, input);
		if (event_id !== 'na') {
			navigation.navigate('VoteScreen',{eventID: event_id, cur_user: cur_user});
		}
	}

    return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
			<View style={globalStyles.container}>
			<Image style={styles.img} source={require('../../assets/illustration.png')}></Image>
			<Text style={styles.Code}>Event Code</Text>
			<Text style={styles.instructionText}>Enter event code then the event will be added to your event list automatically.</Text>
			<View style={styles.eventcodeContainer}>
				<AntDesign name="lock" size={24} color="black" />
				<TextInput onChangeText={changeHandler} style={styles.eventcode} placeholder="Please enter event code"/>
			</View>
			<TouchableOpacity style={styles.enter} onPress={EnterHandler}><Text style={styles.entercolor}>Enter</Text></TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
    );
  }

const Exampledata = [
    {
        action: 'join',
        eventCode: '809BBF'
    }
];
const styles = StyleSheet.create({
	instructionText: {
		textAlign: 'center',
		fontFamily: 'Inter_400Regular',
		fontSize: 12,
		color: '#A29EB6',
	},
	img: {
		// backgroundColor: '#FFF',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	Code: {
		// backgroundColor: '#FFF',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		fontSize: 25,

	},
	eventcode: {
		// alignContent: 'center',
		// justifyContent: 'center',
		// alignItems: 'center',
		// height: 40,
		// width: 300,
		// padding: 10,
		// margin: 15,
		padding: 5
	},
	eventcodeContainer: {
		borderColor: '#643FDB',
		borderWidth: 1,
		borderRadius: 16,
		height: 50,
		width: 300,
		padding: 10,
		margin: 15,
		flexDirection: 'row',
	},
	enter: {
		backgroundColor: '#809BBF',
		alignItems: 'center',
		borderRadius: 16,
		height: 40,
		width: 300,
		padding: 10,
	},
	entercolor: {
		color: '#FFF',
	}
})


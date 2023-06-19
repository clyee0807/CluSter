// 選擇你要create/ join的頁面

import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function AddEvent({navigation,route}) {
	const {cur_user} = route.params;
	// console.log(cur_user);
	return (
		<View style={styles.container}>
			<Text style={globalStyles.headingText}>Create or Join</Text>
			<Text style={globalStyles.instructionText}>Would you like to join or create a new event?</Text>
			<TouchableOpacity style={styles.CreateButtun} onPress={() => navigation.navigate('CreateEvent',{cur_user: cur_user})}>
				<Image source={require('../../assets/create.png')} ></Image>
				<Text style={styles.title}>CREATE</Text>
				<Text style={styles.description}>if you are an initiator</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.JoinButton} onPress={() => navigation.navigate('JoinEvent',{cur_user: cur_user})}>
				<Image source={require('../../assets/join.png')}></Image>
				<Text style={styles.title}>JOIN</Text>
				<Text style={styles.description}>if you are an invited member</Text>
			</TouchableOpacity>

		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: '#FF63A5',
		fontSize: 18,
		padding: 10,
	},
	description: {
		color: '#A29EB6',
		fontSize: 16,
	},
	container: {
		flex:1,
		padding: 20,
		backgroundColor: '#FFF',
	},
	CreateButtun: {
		margin:10,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		borderRadius: 16,
		backgroundColor: '#E5EAEF',
		shadowColor: '#aaa',  
		shadowOffset:{width:0,height:0},  
		shadowOpacity: 1,
		shadowRadius: 1.5,  
		elevation:1.5,
	},
	JoinButton: {
		padding: 10,
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		flex: 1,
		borderRadius: 16,
		backgroundColor: '#E5EAEF',
		shadowColor: '#aaa',  
		shadowOffset:{width:0,height:0},  
		shadowOpacity: 1,
		shadowRadius: 1.5,  
		elevation:1.5,
	},
})
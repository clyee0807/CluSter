import React, {useState} from 'react';
import {TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard, View} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({submitHandler}) {

	const [text, setSearchText] = useState('');	
	const changeHandler = (val) => {
		setSearchText(val);
	};

	return (
		<View style={styles.container}>
			<Feather name="search" style={styles.searchIcon} size={18} color="#A29EB6" />
			<TextInput 
				style={styles.searching} 
				placeholder="Searching..."
				onChangeText={changeHandler}
				onSubmitEditing={() => {submitHandler(text)}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		height: 50,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#809BBF',
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	searchIcon: {
		marginRight: 10,
		marginLeft: 8,
	},
	searching: {
		// height: 50,
		// borderWidth: 1,
		// color: '#000',
		// fontSize: 16,
		// paddingLeft: 15,
		fontSize: 16,
		flex: 1,
	}
});
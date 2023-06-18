import React, {useState} from 'react';
import {TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard, View} from 'react-native';

export default function TextBar({submitHandler, placeholder}) {

	const [text, setSearchText] = useState('');	
	const changeHandler = (val) => {
		setSearchText(val);
	};

	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.searching} 
				placeholder={placeholder}
				onChangeText={changeHandler}
				onSubmitEditing={() => {submitHandler(text)}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 10,
        marginHorizontal: 35,
		marginBottom: 10,
		height: 50,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#809BBF',
		paddingHorizontal: 10,
		paddingVertical: 15,
		backgroundColor: '#fff'
	},
	searching: {
		// height: 50,
		// borderWidth: 1,
		// color: '#000',
		// fontSize: 16,
		// paddingLeft: 15,
		fontSize: 14,
		flex: 1,
	}
});
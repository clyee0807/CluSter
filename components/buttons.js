// create mode button
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttons = ({buttonText, onPress, height, width, mode}) => {
	// const [isPressed, setIsPressed] = useState(false);

	// const handlePress = () => {
	// 	setIsPressed(!isPressed);
	// };

	isPressed = (buttonText === mode) ? true : false;
	const TextColor = isPressed ? 'white' : '#A29EB6';

	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: isPressed ? '#809BBF' : '#fff' }, {height: height}, {width: width}]}
			onPress={onPress}  // onPress={handlePress}
			>
			<Text style={[styles.buttonText, {color: TextColor}]}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	button: {
		// width: 200,
		// height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
	},
	buttonText: {
		fontSize: 14,
		fontFamily: 'SpaceGrotesk_400Regular',
	},
});

export default Buttons;

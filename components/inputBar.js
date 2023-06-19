import React, {useState} from 'react';
import {TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function InputBarBar({submitHandler}) {

	const [text, setSearchText] = useState('');	
	const changeHandler = (val) => {
		setSearchText(val);
	};

	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.searching} 
				onChangeText={changeHandler}
				onSubmitEditing={() => {submitHandler(text)}} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={submitHandler}  // onPress={handlePress}
                        >
                        <Text style={styles.buttonText}> ADD</Text>
                    </TouchableOpacity>
		        </View>

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
		// paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: '#fff',
        // marginLeft: '10',

	},

    button: {
		width: 90,
		height: 50,
        backgroundColor: '#809BBF',
		justifyContent: 'center',
		// alignItems: 'flex-end',
		borderRadius: 16,
        // marginLeft: 10,
	},
    buttonContainer: {
        marginLeft: 'auto',
        paddingRight: 0,
		// alignItems: 'flex-end',

    },
	buttonText: {
        color: 'white',
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'SpaceGrotesk_400Regular',
	},
    searching: {
        flex: 1,
        height: '100%',
        marginLeft: 15,
        fontSize: 16,
    },
	
});
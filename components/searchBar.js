import React from 'react';
import {TextInput,StyleSheet, Text, View} from 'react-native';

export default function SearchBar() {
	return (
		<View style={styles.header}>
			<TextInput style={styles.searching} placeholder="searching"/>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 38,
		backgroundColor: 'coral',
    borderStyle: 'dashed',
    borderColor: '#bbb',
	},
	searching: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	}
});
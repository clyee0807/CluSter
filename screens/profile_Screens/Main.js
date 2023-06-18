import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Porfile({navigation}) {
    return (
      <View style={globalStyles.container}>
        <View style={styles.eventcodeContainer}>
          <Feather name="mail" size={24} color="black" />
          <Text style={styles.eventcode}>Email@gmail.com</Text>
        </View>
        <View style={styles.eventcodeContainer}>
          <Feather name="phone" size={24} color="black" />
          <Text style={styles.eventcode}>0912345678</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}><Text style={styles.buttoncolor}>Setting</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttoncolor}>Friends</Text></TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
	eventcode: {
		padding: 5
	},
	eventcodeContainer: {
		borderColor: '#643FDB',
		borderWidth: 1,
		borderRadius: 16,
		height: 50,
		width: 300,
		padding: 10,
		margin: 5,
		flexDirection: 'row',
	},
	button: {
		backgroundColor: '#809BBF',
		alignItems: 'center',
		borderRadius: 16,
		height: 40,
		width: 300,
		padding: 10,
    margin:5
	},
	buttoncolor: {
		color: '#FFF',
	}
})
// enter event code
import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';

export default function JoinEvent({navigation}) {
    return (
      <View style={globalStyles.container}>
        <Image style={styles.img} source={require('../../assets/illustration.png')}></Image>
        <Text style={styles.Code}>Event Code</Text>
        <Text style={styles.instructionText}>Enter event code then the event will be added to your event list automatically.</Text>
			  <TextInput style={styles.eventcode} placeholder="Please enter event code"/>
        <TouchableOpacity style={styles.enter}><Text>Enter</Text></TouchableOpacity>
      </View>
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
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#643FDB',
    borderWidth: 1,
    borderRadius: 16,
    height: 40,
    width: 300,
    padding: 10,
    margin: 15,
  },
  enter: {
    backgroundColor: '#809BBF',
    alignItems: 'center',
    borderRadius: 16,
    height: 40,
    width: 300,
    padding: 10,
  
  }
})


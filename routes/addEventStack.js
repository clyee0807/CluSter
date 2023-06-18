import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import { View, Text, StyleSheet } from 'react-native';

import MyEvent from '../screens/myEvents_Screens/Main';
import AddEvent from '../screens/addEvents_Screens/Main';
import CreateEvent from '../screens/createEvents_Screens/Main';
import JoinEvent from '../screens/JoinEvents_Screens/Main';
import EventScreen from '../screens/event_Screens/Main';
import Notice from '../screens/myEvents_Screens/notification';
import AddFriend from '../screens/profile_Screens/addFriend';
import FriendList from '../screens/profile_Screens/FriendList';
import Porfile from '../screens/profile_Screens/Main';
import Setting from '../screens/profile_Screens/Setting';
import VoteScreen from '../screens/JoinEvents_Screens/Votes';

const Stack = createNativeStackNavigator();

export default function AddEventStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='MyEvent' component={MyEvent} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='EventScreen' component={EventScreen}options={{headerShadowVisible: false,headerTitleAlign: 'center',headerTitle: () => ( <Text style={styles.headerTitle}>Event</Text>)}}></Stack.Screen>
            <Stack.Screen name='VoteScreen' component={VoteScreen}options={{headerShadowVisible: false,headerTitleAlign: 'center',headerTitle: () => ( <Text style={styles.headerTitle}>Event</Text>)}}></Stack.Screen>
            <Stack.Screen name='Notification' component={Notice}></Stack.Screen>
            <Stack.Screen name='AddEvent' component={AddEvent} options={{headerTitleAlign: 'center', headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Add Events</Text>) }}></Stack.Screen>
            <Stack.Screen name='CreateEvent' component={CreateEvent}></Stack.Screen>
            <Stack.Screen name='JoinEvent' component={JoinEvent} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Join Events</Text>)}}></Stack.Screen>
            <Stack.Screen name='AddFriend' component={AddFriend}></Stack.Screen>
            <Stack.Screen name='FriendList' component={FriendList}></Stack.Screen>
            <Stack.Screen name='Profile' component={Porfile}></Stack.Screen>
            <Stack.Screen name='Setting' component={Setting}></Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
	headerTitle: {
        fontFamily: 'SpaceGrotesk_400Regular',
        fontSize: 20,
        fontWeight: 600,
	},
})

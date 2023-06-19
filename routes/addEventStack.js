import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import { View, Text, StyleSheet } from 'react-native';

import MyEvent from '../screens/myEvents_Screens/Main';
import LogIn from '../screens/login';

import AddEvent from '../screens/addEvents_Screens/Main';
import CreateEvent from '../screens/createEvents_Screens/Main';
import JoinEvent from '../screens/JoinEvents_Screens/Main';
import EventScreen from '../screens/event_Screens/Main';
import Notice from '../screens/myEvents_Screens/notification';
import AddFriend from '../screens/profile_Screens/addFriend';
import FriendList from '../screens/profile_Screens/FriendList';
import Profile from '../screens/profile_Screens/Main';
import Setting from '../screens/profile_Screens/Setting';
import VoteScreen from '../screens/JoinEvents_Screens/Votes';

import EventCode from '../screens/createEvents_Screens/alien_code';
import Expired from '../screens/event_Screens/alien_expired';

const Stack = createNativeStackNavigator();

export default function AddEventStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='MyEvent' component={MyEvent} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='EventScreen' component={EventScreen}options={{headerShadowVisible: false,headerTitleAlign: 'center',headerTitle: () => ( <Text style={styles.headerTitle}>Event</Text>)}}></Stack.Screen>
            <Stack.Screen name='VoteScreen' component={VoteScreen}options={{headerShadowVisible: false,headerTitleAlign: 'center',headerTitle: () => ( <Text style={styles.headerTitle}>Event</Text>)}}></Stack.Screen>
            <Stack.Screen name='Notification' component={Notice}options={{headerTitleAlign: 'center', headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Notificatios</Text>) }}></Stack.Screen>            
            <Stack.Screen name='AddEvent' component={AddEvent} options={{headerTitleAlign: 'center', headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Add Events</Text>) }}></Stack.Screen>
            <Stack.Screen name='CreateEvent' component={CreateEvent} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Create Events</Text>)}}></Stack.Screen>
            <Stack.Screen name='JoinEvent' component={JoinEvent} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Join Events</Text>)}}></Stack.Screen>
            <Stack.Screen name='AddFriend' component={AddFriend} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Add Friends</Text>)}}></Stack.Screen>
            <Stack.Screen name='FriendList' component={FriendList} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Friends</Text>)}}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile} options={{headerTitleAlign: 'center', headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Profile</Text>) }}></Stack.Screen>
            <Stack.Screen name='Setting' component={Setting} options={{headerTitleAlign: 'center', headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>Setting</Text>) }}></Stack.Screen>

            <Stack.Screen name='EventCode' component={EventCode} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>My Events</Text>)}}></Stack.Screen>
            <Stack.Screen name='Expired' component={Expired} options={{headerTitleAlign: 'center',headerShadowVisible: false,headerTitle: () => ( <Text style={styles.headerTitle}>My Events</Text>)}}></Stack.Screen>

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

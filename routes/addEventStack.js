import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
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

const Stack = createNativeStackNavigator();

export default function AddEventStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='MyEvent' component={MyEvent} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='EventScreen' component={EventScreen}></Stack.Screen>
            <Stack.Screen name='Notification' component={Notice}></Stack.Screen>
            <Stack.Screen name='AddEvent' component={AddEvent} options={{headerTitleAlign: 'center', headerShadowVisible: false}}></Stack.Screen>
            <Stack.Screen name='CreateEvent' component={CreateEvent}></Stack.Screen>
            <Stack.Screen name='JoinEvent' component={JoinEvent} options={{headerTitle: ' ',headerShadowVisible: false}}></Stack.Screen>
            <Stack.Screen name='AddFriend' component={AddFriend}></Stack.Screen>
            <Stack.Screen name='FriendList' component={FriendList}></Stack.Screen>
            <Stack.Screen name='Profile' component={Porfile}></Stack.Screen>
            <Stack.Screen name='Setting' component={Setting}></Stack.Screen>
        </Stack.Navigator>
    );
}

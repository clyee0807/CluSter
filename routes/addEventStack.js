import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import Header from '../shared/header';
// import App from '../App';
import Home from '../screens/home';
import MyEvent from '../screens/myEvents_Screens/Main';
import AddEvent from '../screens/addEvents_Screens/Main';
import CreateEvent from '../screens/createEvents_Screens/Main';
import JoinEvent from '../screens/JoinEvents_Screenns/Main';
import EventScreen from '../screens/event_Screens/Main';
import { Component } from 'react/cjs/react.production.min';
import Notice from '../screens/myEvents_Screens/notification';


const Stack = createNativeStackNavigator();

export default function AddEventStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='MyEvent' component={MyEvent}></Stack.Screen>
            <Stack.Screen name='EventScreen' component={EventScreen}></Stack.Screen>
            <Stack.Screen name='Notification' component={Notice}></Stack.Screen>
            <Stack.Screen name='AddEvent' component={AddEvent}></Stack.Screen>
            <Stack.Screen name='CreateEvent' component={CreateEvent}></Stack.Screen>
            <Stack.Screen name='JoinEvent' component={JoinEvent}></Stack.Screen>
        </Stack.Navigator>
    );
}
// // home stack navigator screens
// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: '#444',
//         headerStyle: { backgroundColor: '#eee', height: 60 }
//     }
// });

// export default addEventStack;


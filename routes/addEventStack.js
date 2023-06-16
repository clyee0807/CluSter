import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
// import Header from '../shared/header';
// import App from '../App';
import Home from '../src/screens/home';
import MyEvent from '../src/screens/myEvents_Screens/Main';
import AddEvent from '../src/screens/addEvents_Screens/Main';
import CreateEvent from '../src/screens/createEvents_Screens/Main';
import JoinEvent from '../src/screens/JoinEvents_Screenns/Main';
import EventScreen from '../src/screens/event_Screens/Main';
import { Component } from 'react/cjs/react.production.min';
import Notice from '../src/screens/myEvents_Screens/notification';

// const screens = {
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             title: 'App',
//         }
//     },
//     MyEvent: {
//         screen: MyEvent,
//         navigationOptions: {
//             title: 'my Event',
//         }
//     },
//     EventScreen: {
//         screen: EventScreen,
//         navigationOptions: {
//             title: 'Event screen'
//         }
//     },
//     Notification: {
//         screen: Notice,
//         title: 'notice'
//     },
//     AddEvent: {
//         screen: AddEvent,
//         navigationOptions: {
//             title: 'add Event',
//         }
//     },
//     CreateEvent: {
//         screen: CreateEvent,
//         navigationOptions: {
//             title: 'create Event',
//         }
//     },
//     JoinEvent: {
//         screen: JoinEvent,
//         navigationOptions: {
//             title: 'join Event',
//         }
//     },
// };

const Stack = createStackNavigator();

export default function addEventStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}></Stack.Screen>
                <Stack.Screen name='MyEvent' component={MyEvent}></Stack.Screen>
                <Stack.Screen name='EventScreen' component={EventScreen}></Stack.Screen>
                <Stack.Screen name='Notification' component={Notice}></Stack.Screen>
                <Stack.Screen name='AddEvent' component={AddEvent}></Stack.Screen>
                <Stack.Screen name='CreateEvent' component={CreateEvent}></Stack.Screen>
                <Stack.Screen name='JoinEvent' component={JoinEvent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

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


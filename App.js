import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';
import { useEffect } from 'react';
import { createJSONFile, readJSONFile } from './expo-file-system';
import { createEvent } from './event-request';

import AddEventStack from './routes/addEventStack';

const Stack = createNativeStackNavigator();

const init_events = [
  {
    id: '1',
    event_name: 'MyEvent1',
    dates: ['2023/7/20', '2023/7/21', '2023/7/22'], // array of string, storing dates
    host: 'Domingo', // string, storing username of 'user'
    members: ['Guavaaa', 'Jason', 'Tony', 'Bear'], // array of string, storing username of 'user'
    interval: ['9:00', '10:00', '11:00'], // array of string, storing times
    deadline: '2023/7/4 22:00', // string, storing date and time
    status: 'In progress', // string, indicating the event is in progress or settled
    event_code: '809BBF', // string
    // Use (date, time) to access the time block.
    // For example, (0, 0) stands for 2023/5/20 9:00.
    available_member: [
      [['Domingo', 'Guavaaa', 'Jason', 'Tony', 'Bear'], ['Domingo', 'Guavaaa', 'Jason', 'Tony'], ['Domingo', 'Guavaaa', 'Jason', 'Tony']],
      [['Guavaaa', 'Jason', 'Bear'], ['Guavaaa', 'Tony'], ['Guavaaa', 'Tony']],
      [['Guavaaa', 'Jason', 'Bear'], ['Guavaaa'], []],
    ], // 3-D array of string, storing username of 'user'
    topTimeBlock: [
      [[0, 0]],
      [[0, 1], [0, 2]],
      [[1, 0], [2, 0]]
    ], // 3-D array of number, storimg correpsonding time block
    confirmTime: 'na' // string, storing date and time
  },
  { 
    id: '2',
    event_name: 'FOOBAR',
    dates: ['2023/7/1', '2023/7/2'],
    host: 'Guavaaa',
    members: ['Domingo', 'Jason', 'Tony'],
    interval: ['18:00', '19:00', '20:00', '21:00'],
    deadline: '2023/5/1 23:59',
    status: 'Settled',
    event_code: '1A2B3C',
    available_member: [
      [['Domingo', 'Guavaaa'], ['Domingo', 'Guavaaa'], ['Domingo', 'Guavaaa', 'Jason'], ['Domingo', 'Guavaaa', 'Jason', 'Tony']],
      [[], ['Tony'], ['Guavaaa', 'Jason', 'Tony'], ['Guavaaa', 'Jason', 'Tony']],
    ],
    topTimeBlock: [
      [[0, 3]],
      [[0, 2], [1, 2], [1, 3]],
      [[0, 1], [0, 1]]
    ],
    confirmTime: '2023/7/1 18:00'
  },
  { 
    id: '3',
    event_name: 'Emotional Damage',
    dates: ['2023/6/26', '2023/6/27', '2023/6/28', '2023/6/29', '2023/6/30'],
    host: 'Domingo',
    members: ['Guavaaa', 'Jason', 'Tony', 'Bear'],
    interval: ['9:00', '10:00'],
    deadline: '2023/6/20  23:59',
    status: 'In progress',
    event_code: 'STEVEN', 
    available_member: [
      [['Domingo', 'Guavaaa', 'Jason', 'Bear'], ['Domingo', 'Guavaaa', 'Tony']],
      [['Domingo', 'Guavaaa', 'Jason', 'Bear'], ['Domingo', 'Guavaaa', 'Tony']],
      [['Domingo', 'Guavaaa', 'Jason'], ['Domingo', 'Guavaaa', 'Tony']],
      [['Domingo', 'Jason'], ['Domingo', 'Tony']],
      [['Domingo', 'Jason'], ['Domingo', 'Tony']]
    ],
    topTimeBlock: [
      [[0, 0], [1, 0]],
      [[0, 1], [1, 1], [2, 0], [2, 1]],
      [[3, 0], [3, 1], [4, 0], [4, 1]]
    ],
    confirmTime: 'na'
  },
  {
    id: '4',
    event_name: 'heyyeyaaeyaaaeyaeyaa',
    dates: ['2023/10/1', '2023/10/2', '2023/10/8', '2023/10/9'],
    host: 'Jason',
    members: ['Domingo', 'Guavaaa', 'Tony'],
    interval: ['9:00', '11:00', '13:00', '15:00'],
    deadline: '2023/9/1  23:59',
    status: 'In progress',
    event_code: '0H0E2E', 
    available_member: [
      [['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
      [['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
      [['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Jason', 'Tony']],
      [['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Guavaaa','Jason', 'Tony']],
    ],
    topTimeBlock: [
      [[3, 3]],
      [[2, 3]],
      [[0, 3], [1, 3]]
    ],
    confirmTime: 'na'
  },
  {
    id: '5',
    event_name: 'Badminton',
    dates: ['2023/6/26', '2023/6/27', '2023/6/28'],
    host: 'Bear',
    members: ['Domingo', 'Guavaaa', 'Jason'],
    interval: ['16:00', '17:00', '18:00', '19:00'],
    deadline: '2023/6/21  23:59',
    status: 'In progress',
    event_code: '6969SX', 
    available_member: [
      [['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear'], ['Domingo', 'Guavaaa', 'Bear', 'Jason']],
      [['Domingo', 'Bear'], ['Domingo', 'Bear'], ['Domingo', 'Bear'], ['Domingo', 'Bear']],
      [['Jason'], ['Jason'], ['Jason'], ['Jason']]
    ],
    topTimeBlock: [
      [[0, 3]],
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2], [1, 3]]
    ],
    confirmTime: 'na'
  }
];

const init_users = [
  {
    id: '1',
    username: 'Domingo', // string
    // user_id: 'IAMGAY', // string, removed since we won't have multiple users with same username
    user_photo: 0, // integer, used when accessing database. We use integers to access photos in case of multiple photos with same name.
    events: ['809BBF', '1A2B3C', 'STEVEN', '0H0E2E', '6969SX'], // array of string, storing event_code of 'event'
    friends: ['Guavaaa', 'Jason', 'Tony', 'Bear'], // array of string, storing user_id of 'user'
    email: "IAMGAY@gmail.com", // string, unchangeable
    phone_number: "0911451419", // string, unchangeable
    language: "English", // string
    notifs: [2, 4, 5], // array of integer, storing id of "notifs"
    notif_on: true // bool
  },
  {
    id: '2',
    username: 'Guavaaa',
    user_photo: 1,
    events: ['809BBF', '1A2B3C', 'STEVEN', '0H0E2E', '6969SX'],
    friends: [],
    email: "IAMNOTGAY@gmail.com",
    phone_number: "0986960440",
    language: "English",
    notifs: [1, 2, 3, 4, 5],
    notif_on: true
  },
  {
    id: '3',
    username: 'Jason',
    user_photo: 2,
    events: ['809BBF', '1A2B3C', 'STEVEN', '6969SX'],
    friends: ['Guavaaa', 'Domingo', 'Tony'],
    email: "IHAVEGF@gmail.com",
    phone_number: "0969696969",
    language: "English",
    notifs: [1, 2, 3, 5],
    notif_on: false
  },
  {
    id: '4',
    username: 'Tony',
    user_photo: 3,
    events: ['809BBF', '1A2B3C', 'STEVEN', '0H0E2E'],
    friends: ['Domingo', 'Guavaaa', 'Jason'],
    email: "tonylin@gmail.com",
    phone_number: "0920151425",
    language: "English",
    notifs: [1, 2, 3, 4],
    notif_on: false
  },
  {
    id: '5',
    username: 'Bear',
    user_photo: 4,
    events: ['809BBF', 'STEVEN', '6969SX'],
    friends: ['Domingo', 'Guavaaa'],
    email: "B6E1A5R2@gmail.com",
    phone_number: "0912345689",
    language: "English",
    notifs: [1, 3, 5],
    notif_on: true
  }
];

const init_notifs = [
  {
    id: '1',
    type: 1, // integer, 0: the event is coming, 1: event invitation
    event: '809BBF' // string, storing event_code of 'event'
  },
  {
    id: '2',
    type: 0,
    event: '1A2B3C'
  },
  {
    id: '3',
    type: 1,
    event: 'STEVEN'
  },
  {
    id: '4',
    type: 1,
    event: '0H0E2E'
  },
  {
    id: '5',
    type: 1,
    event: '6969SX'
  }
];

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddEventstack" component={AddEventStack} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      await createJSONFile('events.json', init_events);
      await createJSONFile('users.json', init_users);
      await createJSONFile('notifs.json', init_notifs);
    };
    fetchData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Feed" component={Feed} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
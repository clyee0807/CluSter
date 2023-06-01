import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Exampledata = [
    {
        event: {
            eventName: 'MyEvent',
            dates: ['2023/5/20', '2023/5/21', '2023/5/22'],
            host: 'Anna',
            member: ['Bob', 'Cathy', 'Domingo'],
            interval: ['9:00', '10:00', '11:00'],
            description: 'This is description.',
            deadline: 'na',
            eventCode: '809BBF',
            // Use (date, time) to access the time block.
            // For example, (0, 0) stands for 2023/5/20 9:00.
            availablePeople: [
                [['Bob', 'Cathy', 'Domingo'], ['Bob', 'Cathy'], []],
                [['Domingo'], ['Domingo'], []],
                [[], [], []],
            ],
            topTimeBlock: [
                [(0, 0)], 
                [(0, 1)],
                [(1, 0), (1, 1)]
            ],
            confirmTime: (0, 0)
        }
    }
];


export default function App() {
  return (
    <View>
      <Text>CluSter</Text>
    </View>
  );
}
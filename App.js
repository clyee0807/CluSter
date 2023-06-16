import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import AddEventStack from './routes/addEventStack';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddEventstack" component={AddEventStack} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default function App() {
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import 'react-native-gesture-handler';
import Home from './src/screens/home';

import addEventListener from './routes/addEventStack'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// import Navigator from './routes/drawer'
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AddEvent" component={addEventListener} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
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
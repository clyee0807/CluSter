import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BottomBar({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => navigation.navigate('MyEvent')}><Ionicons name="home-outline" size={30} color="#A29EB6" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}><AntDesign name="pluscircle" size={30} color="#A29EB6" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name="person-outline" size={30} color="#A29EB6" /></TouchableOpacity>
        </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
    homeicon: {
      flex: 1,
    },
    profileicon: {
      flex: 1,
    },
    plusicon: {
      flex: 1,
    },
    bottomBar: {
      shadowColor: '#EEE',
      borderRadius: 30,
      backgroundColor: '#E5EAEF',
      height: 70,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
})

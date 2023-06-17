import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../styles/global';

export default function FriendList({navigation}) {
    return (
      <View>
        <Text>friend list</Text>
        <Button title='go to add friend' onPress={()=> navigation.navigate('AddFriend')}/>
      </View>
    );
}
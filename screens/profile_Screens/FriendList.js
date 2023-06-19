import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import { globalStyles } from '../../styles/global';
import { AntDesign } from '@expo/vector-icons'; 

export default function FriendList({navigation}) {
    const [user, setUser] = useState([
      { username: 'Domingo',
        user_id: '8787',
        user_photo: '1' ,
        events: ['MyEvent1', 'MyEvent2', 'MyEvent3'],
        friends: ['John', 'Peggy', 'Daphne'],
        email: 'Domingo8787@gmail.com',
        phone_number: '0978787878' ,
        language: 'Chinise' ,
        notifs: 'na'
      }
    ]);
    const friends = user[0].friends;
    const renderFriend = ({ item }) => (
      <View style={styles.friendContainer}>
        <View style={styles.rows}>
          <Text style={globalStyles.headingText}>{item}</Text>
          <TouchableOpacity onPress={() => removeFriend(item)}><AntDesign name="minus" size={30} color="black"/></TouchableOpacity>
        </View>
        <View style={styles.separator} />
      </View>
    );
    const removeFriend = (friend) => {
      const updatedFriends = friends.filter((item) => item !== friend);
      setUser((prevState) => [{ ...prevState[0], friends: updatedFriends }]);
    };

    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <Text style={globalStyles.headingText}>friend list</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}><AntDesign name="pluscircle" size={24} color="black" /></TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#C5C5C5', borderBottomWidth: 1, padding: 8}} />
        <View style={{marginBottom: 80}}>
          <FlatList
            data={friends}
            renderItem={renderFriend}
          />
        </View>
      </View>
      
    );
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		padding: 20,
		backgroundColor: '#FFF',
  },
  rows: {
		flexDirection: 'row',
		justifyContent: 'space-between', 
		alignItems: 'flex-start',
	},
  friendContainer: {
    flexDirection: 'column',
    marginTop: 9,
    marginBottom: 8,
  },
  separator: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    padding: 8
  },
})
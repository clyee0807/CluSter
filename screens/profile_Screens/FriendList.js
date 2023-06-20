import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Pressable, Image} from 'react-native';
import { globalStyles } from '../../styles/global';
import { AntDesign } from '@expo/vector-icons'; 

export default function FriendList({navigation,route}) {
    const {cur_user} = route.params;
    const user = [
      {
        id: '1',
        username: 'Domingo', // string
        // user_id: 'IAMGAY', // string, removed since we won't have multiple users with same username
        user_photo: 0, // integer, used when accessing database. We use integers to access photos in case of multiple photos with same name.
        events: ['809BBF', '1A2B3C', 'STEVEN', '0H0E2E', '6969SX'], // array of string, storing event_code of 'event'
        friends: ['Guavaaa', 'Jason', 'Tony'], // array of string, storing user_id of 'user'
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

    const [friends,setFriends] = useState(user[0].friends);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const renderFriend = ({ item }) => {
      const friendObj = user.find((user) => user.username === item);
      let photoSource = null;
      switch (friendObj.user_photo) {
        case 1:
          photoSource = require('../../assets/profiles/profile1.png');
          break;
        case 2:
          photoSource = require('../../assets/profiles/profile2.png');
          break;
        case 3:
          photoSource = require('../../assets/profiles/profile3.png');
          break;
        case 4:
          photoSource = require('../../assets/profiles/profile4.png');
          break;
        case 5:
          photoSource = require('../../assets/profiles/profile5.png');
          break;
        case 6:
          photoSource = require('../../assets/profiles/profile6.png');
          break;
        default:
          photoSource = require('../../assets/profiles/profile1.png');
          break;
      }
      return (
        <View style={styles.friendContainer}>
          <View style={styles.rows}>
            <Image source={photoSource} style={styles.friendPhoto} />
            <Text style={globalStyles.headingText}>{item}</Text>
            <TouchableOpacity onPress={() => openConfirmModal(item)}>
              <AntDesign name="minus" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
        </View>
      )
    };

    const openConfirmModal = (friend) => {
      setSelectedFriend(friend);
      setConfirmModalVisible(true);
    };
  
    const closeConfirmModal = () => {
      setConfirmModalVisible(false);
      setSelectedFriend(null);
    };
  
    const removeFriend = () => {
      const updatedFriends = friends.filter((item) => item !== selectedFriend);
      setFriends(updatedFriends);
      closeConfirmModal();
    };

    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <Text style={globalStyles.headingText}>friend list</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddFriend',{cur_user: cur_user})}><AntDesign name="pluscircle" size={24} color="black" /></TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#C5C5C5', borderBottomWidth: 1, padding: 8}} />
        <View style={{marginBottom: 80}}>
          <FlatList
            data={friends}
            renderItem={renderFriend}
          />
        </View>
        <Modal visible={confirmModalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Are you sure you want to remove {selectedFriend}?</Text>
              <View style={styles.modalButtons}>
                <Pressable style={[styles.modalButton,{borderRadius:10,backgroundColor: '#809BBF'}]} onPress={removeFriend}>
                  <Text style={[styles.modalButtonText,{color: 'white'}]}>Confirm</Text>
                </Pressable>
                <Pressable style={[styles.modalButton,{borderWidth:1,borderRadius:10,borderColor:'#809BBF',backgroundColor: 'white'}]} onPress={closeConfirmModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
		alignItems: 'center',
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#DDDDDD',
  },
  modalButtonText: {
    fontSize: 16,
  },
  friendPhoto: {
    width: 60,
    height: 60,
  }
})
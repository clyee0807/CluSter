//要user id
//傳friend code給後端 且要verify

import React, { useState, useEffect } from 'react';
import { Switch, Alert, StyleSheet, View, Text, Button, TouchableOpacity, ToastAndroid, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';

import { getUser, addFriendToUser } from '../../Server/user-request';

export default function AddFriend({navigation}) {
  const cur_user = 'Domingo';
  const [user, setUser] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
	  const loadEvents = async () => {
  		try {
	  	  const user_data = await getUser(cur_user);
		    setUser(user_data);
		    console.log('user read successfully');
		  } catch (error) {
			  console.log('Error reading JSON file:', error);
		  }
	  };
	  loadEvents();
	}, []);

  const handleButtonPress = async () => {
    const result = await addFriendToUser(cur_user, FriendCode);

      if (result === true) {
        Alert.alert('Successfully add friend!');
        navigation.navigate('FriendList');
      } else {
        Alert.alert('Friend not found!', 'Please enter correct friend code.');
        // [{ style: globalStyles.paragraph }]
      }
  };

  // copy
  const handleCopy = () => {
    setIsCopied(true);
    showToastMessage('copied', ToastAndroid.LONG); // 顯示 Toast 訊息
  };
  const showToastMessage = (message, duration) => {
    ToastAndroid.show(message, duration);
  };

  //TextInput
  const [FriendCode, setFriendCode] = useState('');
  const FriendCode_submitHandler = (text) => {  
    // console.log(todos);
      setFriendCode(text);
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Text style={globalStyles.headingText}> Your friend code: </Text>
      </View>

      <View style={styles.container_1}>
        <View style={styles.rows_1}>
          <Text style={globalStyles.headingText}>{user.username}</Text>
          <TouchableOpacity onPress={handleCopy}>
            <Feather name="copy" size={20} color="black" style={{ padding: 8}} />
          </TouchableOpacity>
        </View>

        <View style={{ borderBottomColor: '#c5c5c5', borderBottomWidth: 1, padding: 10 }} />

        <Text style={[globalStyles.headingText, { padding: 8 }]}>Enter friend's code: </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter friend's code"
            onChangeText={FriendCode_submitHandler}
            value={FriendCode}
          />
          {/* <TouchableOpacity style={styles.button} onPress={() => submitHandler(FriendCode)}> */}
          <TouchableOpacity style={styles.button} onPress = {handleButtonPress}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const submitHandler = () => {
  // Perform your desired logic here
  console.log('Submit button pressed');
  console.log('Friend Code:', FriendCode);
  // Add your code to handle the submission of friend code
};


const styles = StyleSheet.create({
	container: {
		flex:1,
		padding: 20,
		backgroundColor: '#FFF',
	},
  
  rows_1: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop:30,
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'flex-start',
  },

  textInput: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
  },

  inputContainer: {
		marginTop: 10,
		paddingLeft: 10,
		marginBottom: 10,
		height: 50,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#809BBF',
		paddingVertical: 10,
		backgroundColor: '#fff',

	},

  //button
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  button: {
		width: 90,
		height: 50,
    backgroundColor: '#809BBF',
		justifyContent: 'center',
		borderRadius: 16,
	},
  buttonContainer: {
    marginLeft: 'auto',
    paddingRight: 0,
  },
})
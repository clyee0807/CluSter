//還沒可以加朋友和COPY
//id寫死
import React, {useState} from 'react';
import { Switch, StyleSheet, View, Text, Button, TouchableOpacity, ToastAndroid,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import InputBar from '../../components/inputBar';

export default function AddFriend() {
  const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      setIsCopied(true);
      showToastMessage('copied', ToastAndroid.LONG); // 顯示 Toast 訊息
    };

    const showToastMessage = (message, duration) => {
      ToastAndroid.show(message, duration);
    };
  return (
		<View style={styles.container}>
      <View style={styles.rows}>
        <Text style={globalStyles.headingText}> Your friend code: </Text>
      </View>
      <View style={styles.container_1}>
        <View style={styles.rows_1}>
          <Text style={globalStyles.headingText}>BEHAPPY666 </Text>
          <TouchableOpacity onPress={handleCopy}><Feather name="copy" size={20} color="black" /></TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#c5c5c5', borderBottomWidth: 1, paddingBottom: 20 }} />			
      </View>
        <Text style={globalStyles.headingText}>Enter friend's code:</Text>
        <InputBar submitHandler={submitHandler}/>
    </View>
	);
}

const submitHandler = (text) => {  
  // console.log(todos);
}

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
})

//還沒可以加朋友和COPY
//id寫死
import React from 'react';
import { Switch, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import InputBar from '../../components/inputBar';

export default function Setting() {
  return (
		<View style={styles.container}>
  <View style={styles.rows}>
    <Text style={globalStyles.headingText}> Your friend code: </Text>
  </View>
  <View style={styles.container_1}>
    <View style={styles.rows_1}>
      <Text style={globalStyles.headingText}>BEHAPPY666 </Text>
      <TouchableOpacity><Feather name="copy" size={24} color="black" /></TouchableOpacity>
    </View>
    <View style={{ borderBottomColor: '#c5c5c5', borderBottomWidth: 1, paddingBottom: 20 }} />			
  </View>

  <View style={styles.container}>
  <Text style={globalStyles.headingText}>Enter friend's code:</Text>
  <InputBar submitHandler={submitHandler}/>

  </View>
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

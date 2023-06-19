//notification, language功能還沒做
import React, { useState, useEffect } from 'react';
import { Switch, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { AntDesign } from '@expo/vector-icons';

import { toggleUserNotif, getUser } from '../../Server/user-request';


export default function Setting() {
  return (
		<View style={styles.container}>
      <View style={styles.rows}>
        <Text style={globalStyles.headingText}><AntDesign name="setting" size={24} color="black" /> General</Text>
			</View>
      <View style={{ borderBottomColor: '#c5c5c5', borderBottomWidth: 1, padding: 8 }} />			
		  <View style={styles.container}>
        <View style={styles.rows}>
          <Text style={globalStyles.headingText}>Notification</Text>
          <ToggleButton ></ToggleButton>
        </View>
      </View>
		</View>
	);
}

const ToggleButton = () => {
  const cur_user = 'Domingo';
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    await toggleUserNotif(cur_user);
  };

  useEffect(() => {
    const loadEvents = async () => {
  		try {
	  	  const user_data = await getUser(cur_user);
        const userEnabled = user_data.notif_on;
		    setIsEnabled(userEnabled);
		    console.log('user read successfully');
		  } catch (error) {
			  console.log('Error reading JSON file:', error);
		  }
	  };
    loadEvents();
  }, []);

  return (
    <View>
      <Switch
        trackColor={{ false: '#e8ebe8', true: '#26ab2c' }}
        thumbColor= '#f4f3f4'
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {/* <Text>{isEnabled ? 'ON' : 'OFF'}</Text> */}
    </View>
  );
};



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
    // alignItems: 'center',

  },
    
},

)


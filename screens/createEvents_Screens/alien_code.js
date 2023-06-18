// 顯示event code讓你複製的三眼怪頁面import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';


export default function Porfile({navigation}) {
    return (
      <View style={globalStyles.container}>
        <Image
          source={require('../../assets/alien.png')}
          style={styles.image}
        />
        <Text>eventCode</Text>
      </View>
    );
}
const styles = StyleSheet.create({

})
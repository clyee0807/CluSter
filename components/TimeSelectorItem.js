import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native';

export default function TimeSelectorItem() {
    const [isclicked,setisclicked]=useState('0');

	return (
        <View style={styles.circlecontainer}>
            <TouchableOpacity style={styles.clickbox} onPress={()=>{setisclicked(!isclicked)}}>
                <View style={[{backgroundColor: isclicked?'#FFF':'#809BBF'},styles.clickcircle]}></View>
                {/* <Text>{isclicked}</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    clickbox:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 10,
        borderColor: '#809BBF',
        borderWidth: 1,
        width: 28,
        height:28,
        backgroundColor: '#FFF'
    },
    clickcircle: {
        borderRadius: 50,
        margin: 10,
        // borderColor: '#809BBF',
        // borderWidth: 1,
        width: 20,
        height:20,
        // backgroundColor: '#FFF'
    },
    circlecontainer:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:10,
        width: 90,
        height: 30,
    }
});

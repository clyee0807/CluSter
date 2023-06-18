import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native';
import TimeSelectorItem from './TimeSelectorItem';

export default function TimeSelectorItemLine({interval}) {
	return (
        <View style={styles.container}>
            <FlatList
                data={interval}
                renderItem={({item})=>(
                    <View style={styles.circlecontainer}>
                        <TimeSelectorItem />
                    </View>
                )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
        // flex: 1,
        // backgroundColor: 'red',
        // padding: 24,
        // borderColor: '#809BBF',
        // borderRadius: 16,
        // borderWidth: 2,
        // margin: 20,
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // Timeline: {
    //     dot: {color: 'blue'}
    // },
    circlecontainer:{
        // flex:1,
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:10,
        width: 90,
        height: 30,
    }
    
});

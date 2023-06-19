import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native';
import TimeSelectorItem from './TimeSelectorItem';

export default function TimeInterval({interval}) {
	return (
        <View style={styles.container}>
            <FlatList
                data={interval}
                renderItem={({item})=>(
                    <View style={styles.circlecontainer}>
                        <Text style={styles.time}>{item}</Text>
                    </View>
                )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    circlecontainer:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:5,
        paddingLeft:10,
        marginLeft:0,
        width: 90,
        height: 30,
        color: '#FFF',
    },
    time: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    }
});

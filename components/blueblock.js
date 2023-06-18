import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native';
import TimeSelectorItem from './TimeSelectorItem';

export default function Blueblock({interval}) {
	return (
        <View style={styles.container}>
            <FlatList
                data={interval}
                renderItem={({item})=>(
                    <View style={styles.circlecontainer}>
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
        marginVertical:10,
        width: 38,
        height: 30,
    },
});

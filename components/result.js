import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Keyboard, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import Timeline from './timeline';
// import { HorizontalTimeline } from 'react-native-horizontal-timeline';
// import TimeSelectorItemLine from './TimeSelectorItemLine';
import TimeInterval from './TimeInterval';
import Blueblock from './blueblock';
import ResultPeople from './resultpeople';


export default function Result({available_member,interval}) {
	return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TimeInterval interval={interval}/>
                    <ResultPeople interval={interval}/>
                    <Blueblock interval={interval}/>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        minWidth:350,
        borderColor: '#809BBF',
        borderRadius: 16,
        borderWidth: 2,
        // padding: 170,
        margin: 20,
        marginTop: 3,
        alignContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    timeline: {
        dotHorizontal: {
            backgroundColor: '#809BBF',
        },
        dotContainerHorizontal: {
            backgroundColor:'#809BBF',
            width:10,
            height:10,
        },
        dotConnectorHorizontalWrapper: {
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 10,
            // marginLeft: 10
        }
    },
    blueblock: {
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:10,
        width: 38,
        height: 30,
    }
});
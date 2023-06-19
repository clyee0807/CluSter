import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Keyboard, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import Timeline from './timeline';
// import { HorizontalTimeline } from 'react-native-horizontal-timeline';
// import TimeSelectorItemLine from './TimeSelectorItemLine';
import TimeInterval from './TimeInterval';
import Blueblock from './blueblock';
import ResultPeople from './resultpeople';


export default function Result({ava_people,cur_date,interval}) {
	return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={{paddingBottom:20}}>Minimum Time Unit: 1hr</Text>
                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <TimeInterval interval={interval}/>
                    <ResultPeople style={{flex:1}} ava_people={ava_people} cur_date={cur_date} interval={interval}/>
                    {/* <Blueblock interval={interval}/> */}
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
        paddingBottom: 30,
        // margin: 20,
        marginTop: 3,
        alignContent: 'center',
        alignItems: 'center',
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
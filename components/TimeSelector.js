import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Keyboard, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import Timeline from './timeline';
// import { HorizontalTimeline } from 'react-native-horizontal-timeline';
import TimeSelectorItemLine from './TimeSelectorItemLine';


export default function TimeSelector({dates,interval}) {
	return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Timeline style={styles.timeline} data={dates} direction='horizontal' customStyle={styles.timeline}/>
            {/* <View style={styles.box}> */}
            <Text style={globalStyles.instructionText}>Minimum Time Unit: 1hr</Text>
            <FlatList
                horizontal = {true}
                data={dates}
                renderItem={({item})=>(
                    <TimeSelectorItemLine interval={interval}/>
                    // <TouchableOpacity style={styles.clickbox}></TouchableOpacity>
                )}>
            </FlatList>
            {/* </View> */}
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
        containerHorizontalText: {
            // alignContent: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        dotConnectorHorizontalWrapper: {
            // padding: 5,
        },
    },
});


// const data = [
//     {
//       id: 0,
//       date: '03-03-2023'
//     },
//     {
//       id: 1,
//     //   status: 'Paid',
//       date: '04-03-2023'
//     },
//     {
//       id: 3,
//       status: 'Finish',
//       date: '05-03-2023'
//     },
//     {
//       id: 3,
//       status: 'Finish',
//       date: '05-03-2023'
//     },
//     {
//       id: 3,
//       status: 'Finish',
//       date: '05-03-2023'
//     },
//   ]
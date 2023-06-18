import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const WeekdayPicker = ({}) => {
	const [isPressed, setIsPressed] = useState({
        Sun: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
    });

	const handlePress = (day) => {
		setIsPressed((prevState) => ({
            ...prevState,
            [day]: !prevState[day],
        }));
	};

    // console.log(isPressed);  

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>WeekDays</Text>
            <View style={styles.headerWeekday}>
                <View>
                    <Text style={styles.WeekdayText}>Sun</Text>
                    <TouchableOpacity onPress={() => handlePress('Sun')} style={[styles.block, { backgroundColor: isPressed['Sun'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.WeekdayText}>Mon</Text>
                    <TouchableOpacity onPress={() => handlePress('Mon')} style={[styles.block, { backgroundColor: isPressed['Mon'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.WeekdayText}>Tue</Text>
                    <TouchableOpacity onPress={() => handlePress('Tue')} style={[styles.block, { backgroundColor: isPressed['Tue'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.WeekdayText}>Wed</Text>
                    <TouchableOpacity onPress={() => handlePress('Wed')} style={[styles.block, { backgroundColor: isPressed['Wed'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.WeekdayText}>Thu</Text>
                    <TouchableOpacity onPress={() => handlePress('Thu')} style={[styles.block, { backgroundColor: isPressed['Thu'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.WeekdayText}>Fri</Text>
                    <TouchableOpacity onPress={() => handlePress('Fri')} style={[styles.block, { backgroundColor: isPressed['Fri'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.WeekdayText}>Sat</Text>
                    <TouchableOpacity onPress={() => handlePress('Sat')} style={[styles.block, { backgroundColor: isPressed['Sat'] ? '#809BBF' : '#fff' }]}></TouchableOpacity>

                </View>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal:32,
        marginTop: 10,	
        marginBottom: 15,
        // height: 100,
        borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 16,
    },
    headerText: {
        fontFamily: 'SpaceGrotesk_400Regular',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 15,
    },
    headerWeekday: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    WeekdayText: {
        fontFamily: 'SpaceGrotesk_400Regular',
        fontSize: 12,
        color: '#b6c1cd',
    },
    // weekdayBlocks: {
    //     backgroundColor: 'yellow',
    //     marginHorizontal: 20,
    //     marginVertical: 5,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    block:{
        borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        width: 25,
        height: 180,
    }
});
//'#BBC5D0',
export default WeekdayPicker;

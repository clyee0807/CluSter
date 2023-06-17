// card.js 沒用到!!!
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Card(props) {
	return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}  
                {/* <Text>123</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 16,
		backgroundColor: '#fff',
        borderWidth: 1,
		borderColor: '#809BBF',
		marginHorizontal: 4,
		marginVertical: 6,
	},
	cardSheet: {
		marginHorizontal: 18,
		marginVertical: 10 ,
	},
})
;
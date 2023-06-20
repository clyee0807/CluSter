import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Keyboard,Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native';
import TimeSelectorItem from './TimeSelectorItem';
// import { element } from 'prop-types';

export default function ResultPeople({ava_people,cur_date,interval}) {
    function getPhotoPath(num){
		let profileImgPath;  // 根據user_photo決定要render哪一張照片(不能dynamic path)
		if (num === 1) {
			profileImgPath = require('../assets/profiles/profile1.png');
		} else if (num === 2) {
			profileImgPath = require('../assets/profiles/profile2.png');
		} else if (num === 3) {
			profileImgPath = require('../assets/profiles/profile3.png');
		} else if (num === 4) {
			profileImgPath = require('../assets/profiles/profile4.png');
		} else if (num === 5) {
			profileImgPath = require('../assets/profiles/profile5.png');
		} else {
			profileImgPath = require('../assets/profiles/profile6.png');
		}
		return profileImgPath;
	}
	return (
        <View style={styles.container}>
            <FlatList
                data={interval}
                renderItem={({item,index})=>(
                    <View style={styles.circlecontainer}>
                        {/* <Image source={getPhotoPath(ava_people[cur_date][index][0])}/> */}
                        <FlatList
                            horizontal={true}
                            data={ava_people[cur_date][index]}
                            renderItem={({item})=>(
                                // <Text>{item}</Text>
                                <Image style={styles.img} source={getPhotoPath(item)}/>
                            )}
                        ></FlatList>
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
        // alignItems: 'center',
        backgroundColor: '#E5EAEF', 
        marginVertical:5,
        height: 30,
        minWidth:255,
    },
    img: {
        width:25,
        height:25,
    },
});

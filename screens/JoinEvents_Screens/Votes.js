import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import TimeSelector from '../../components/TimeSelector';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { useState } from 'react';

const Exampledata = [
    {
        event: {
            eventName: 'MyEvent',
            dates: ['2023/5/20', '2023/5/21', '2023/5/22','2023/5/23','2023/5/24'],
            host: 'Anna',
            member: ['Bob', 'Cathy', 'Domingo'],
            interval: ['9:00', '10:00', '11:00','12:00','13:00','14:00','15:00'],
            description: 'This is description.',
            deadline: '2023/6/11',
            eventCode: '809BBF',
            // Use (date, time) to access the time block.
            // For example, (0, 0) stands for 2023/5/20 9:00.
            availablePeople: [
                [['Bob', 'Cathy', 'Domingo'], ['Bob', 'Cathy'], []],
                [['Domingo'], ['Domingo'], []],
                [[], [], []],
            ],
            topTimeBlock: [
                [[0, 0]], 
                [[0, 1]],
                [[1, 0], [1, 1]]
            ],
            confirmTime: (0, 0)
        }
    }
];

export default function VoteScreen({navigation}) {
	const [isclicked, setisclick] = useState([]);
  	return (
    	<View style={styles.container}>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.time}>{'Deadline:  '+ Exampledata[0].event.deadline }</Text>
					{/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}

					<TimeSelector dates={Exampledata[0].event.dates} interval={Exampledata[0].event.interval}/>
					{/* </ScrollView> */}
					{/* <Text>Event Screen</Text> */}
				</View>
				<View style={styles.toptime}>
					<SimpleLineIcons style={{paddingHorizontal:10,}} name="trophy" size={24} color="black" />
					<FlatList
						data={Exampledata[0].event.topTimeBlock[0]}
						renderItem={({item}) => (
							<View>
								<Text>{Exampledata[0].event.dates[item[0]]}</Text>
								<View style={styles.top}>
									<Text>{Exampledata[0].event.interval[item[1]]}</Text>
								</View>
							</View>
						)}
						nestedScrollEnabled={true}/>
				</View>
				<View style={styles.toptime}>
					<SimpleLineIcons style={{paddingHorizontal:10,}} name="trophy" size={24} color="black" />
					<FlatList
						data={Exampledata[0].event.topTimeBlock[1]}
						renderItem={({item}) => (
							<View>
								<Text>{Exampledata[0].event.dates[item[0]]}</Text>
								<View style={styles.top}>
									<Text>{Exampledata[0].event.interval[item[1]]}</Text>
								</View>
							</View>
						)}
						nestedScrollEnabled={true}/>
				</View>
				<View style={styles.toptime}>
					<SimpleLineIcons style={{paddingHorizontal:10,}} name="trophy" size={24} color="black" />
					<FlatList
						data={Exampledata[0].event.topTimeBlock[2]}
						renderItem={({item}) => (
							<View>
								<Text>{Exampledata[0].event.dates[item[0]]}</Text>
								<View style={styles.top}>
									<Text>{Exampledata[0].event.interval[item[1]]}</Text>
								</View>
							</View>
						)} nestedScrollEnabled={true}/>
				</View>
				<TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('EventScreen')}>
					<Text style={{color:'#FFF',}}>Submit</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
  );
}

const styles = StyleSheet.create({
  	time: {
		fontFamily: 'Inter_400Regular',
		// flex:1,
		fontSize: 12,
	},
	container: {
		backgroundColor: '#FFF',
		// flexWrap: 'wrap',
		// flex: 6,
		// padding: 30,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toptime:{
		// flex:1,
		marginHorizontal: 30,
		flexDirection: 'row',
	},
	submit: {
		height: 40,
		margin:30,
		width: 330,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#809BBF',
		color: '#FFF',
		borderRadius: 16,
	},
	top: {
		borderWidth: 1,
		width:50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		margin: 5,
	},
	topdate: {},

});

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { globalStyles } from '../../styles/global';
import CalendarBottomBar from '../../components/calendarbottomBar';
import Timeline from '../../components/timeline';
import TimeInterval from '../../components/TimeInterval';
import Blueblock from '../../components/blueblock';

const Exampledata = [
    {
        event: {
            id: '4',
			event_name: 'heyyeyaaeyaaaeyaeyaa',
			dates: ['2023/10/1', '2023/10/2', '2023/10/8', '2023/10/9'],
			host: 'Jason',
			members: ['Domingo', 'Guavaaa', 'Tony'],
			interval: ['9:00', '11:00', '13:00', '15:00'],
			description: 'Whats up.',
			deadline: '2023/9/1  23:59',
			status: 'In progress',
			event_code: '0H0E2E', 
			available_member: [
			[['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
			[['Guavaaa'], ['Guavaaa'], ['Guavaaa'], ['Domingo', 'Guavaaa']],
			[['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Jason', 'Tony']],
			[['Jason'], ['Jason'], ['Jason'], ['Domingo', 'Guavaaa','Jason', 'Tony']],
			],
			topTimeBlock: [
			[[3, 3]],
			[[2, 3]],
			[[0, 3], [1, 3]]
			],
			confirmTime: 'na'
            
        }
    }
];

export default function VoteScreen({navigation}) {
	const cur_user = 'Guavaaa';

	const initialArray = Array(Exampledata[0].event.interval.length)
    .fill(0)
    .map(() => Array(Exampledata[0].event.dates.length).fill(0));
	const [isclicked, setisclick] = useState(initialArray);

	useEffect(() => {
		for (let i = 0; i < Exampledata[0].event.available_member.length; i++) {
		  for (let j = 0; j < Exampledata[0].event.available_member[i].length; j++) {
			if (Exampledata[0].event.available_member[i][j].find(member => member === cur_user) !== undefined) {
			  setisclick(prevArray => {
				const tmp = [...prevArray];
				tmp[i][j] = 1;
				return tmp;
			  });
			}
		  }
		}
	  }, []);

	function clickhandler(row,column){
		setisclick(prevArray => {
			const tmp = [...prevArray];
			tmp[row][column] = tmp[row][column] === 1 ? 0 : 1;
			return tmp;
		  });
	}
	function submithandler(){
		navigation.navigate('EventScreen');
	}
	
  	return (
    	<View style={styles.outercontainer}>
			<FlatList
				data={[1]}
				style={styles.topSection}
				renderItem={({item})=>(
					<View>
						<View style={styles.container}>
							<Text style={styles.time}>{'Deadline:  '+ Exampledata[0].event.deadline }</Text>
							<Text style={styles.instructionText}>Minimum Time Unit: 1hr</Text>
							{/* <TimeSelector dates={Exampledata[0].event.dates} interval={Exampledata[0].event.interval}/> */}
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<View style={styles.timeselectorcontainer}>
									<Timeline style={styles.timeline} data={Exampledata[0].event.dates} direction='horizontal' customStyle={styles.timeline}/>
									<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										<TimeInterval interval={Exampledata[0].event.interval}/>
										<FlatList
											horizontal = {true}
											style={{paddingBottom:20}}
											data={Exampledata[0].event.dates}
											renderItem={({item,index:column_index})=>(
												<View style={styles.container}>
													<FlatList
														data={Exampledata[0].event.interval}
														renderItem={({item,index:row_index})=>(
															<View style={styles.circlecontainer}>
																<TouchableOpacity style={styles.clickbox} onPress={()=>{clickhandler(row_index,column_index)}}>
																	<View style={[{backgroundColor: isclicked[row_index][column_index]?'#809BBF':'#FFF'},styles.clickcircle]}></View>
																	{/* <Text>{isclicked}</Text> */}
																</TouchableOpacity>
															</View>
														)}>
													</FlatList>
												</View>
											)}>
									</FlatList>
									<Blueblock interval={Exampledata[0].event.interval}/>
									</ScrollView>
								</View>
								</ScrollView>
						</View>
						<FlatList
								data={Exampledata[0].event.topTimeBlock}
								renderItem={({item:rank,index:ranking})=>(
									<View style={styles.toptime}>
										<SimpleLineIcons style={{paddingHorizontal:10}} name="trophy" size={24} color="black" />
										<FlatList
											data={rank}
											renderItem={({item,index}) => (
												<View>
													<Text>{Exampledata[0].event.dates[item[0]]}</Text>
													<View style={styles.top}>
														<Text>{Exampledata[0].event.interval[item[1]]}</Text>
													</View>
												</View>
											)}
											nestedScrollEnabled={true}/>
									</View>
								)}
							></FlatList>
						<TouchableOpacity style={styles.submit} onPress={() => submithandler()}>
							<Text style={{color:'#FFF',}}>Submit</Text>
						</TouchableOpacity>
					</View>
				)}
			>
			</FlatList>
			<CalendarBottomBar navigation={navigation}/>
		</View>
  );
}

const styles = StyleSheet.create({
  	time: {
		fontFamily: 'Inter_400Regular',
		// flex:1,
		fontSize: 12,
	},
	topSection: {
		// backgroundColor: 'pink',
		marginBottom: 70,
		// flex: 1,
		marginHorizontal:25,
		// justifyContent:'center',
	},
	outercontainer: {
		backgroundColor: '#FFF',
	},
	container: {
		backgroundColor: '#FFF',
		// margin:30,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toptime:{
		// flex:1,
		marginVertical: 10,
		flexDirection: 'row',
	},
	submit: {
		height: 40,
		marginVertical:5,
		width: 350,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#809BBF',
		color: '#FFF',
		borderRadius: 16,
	},
	top: {
		borderWidth: 1,
		// width:50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderColor: '#809BBF',
		margin: 5,
		paddingHorizontal:10,
		paddingVertical:2,
	},
	// topdate: {},
	instructionText: {
		fontFamily: 'Inter_400Regular',
		fontSize: 14,
		color: '#A29EB6',
		marginTop:15,
	},
	circlecontainer:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E5EAEF',
        marginVertical:5,
        width: 90,
        height: 30,
    },
	clickbox:{
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 10,
        borderColor: '#809BBF',
        borderWidth: 1,
        width: 28,
        height:28,
        backgroundColor: '#FFF'
    },
    clickcircle: {
        borderRadius: 50,
        margin: 10,
        // borderColor: '#809BBF',
        // borderWidth: 1,
        width: 20,
        height:20,
        // backgroundColor: '#FFF'
    },
	timeselectorcontainer: {
        flex: 1,
        minWidth:350,
        borderColor: '#809BBF',
        borderRadius: 16,
        borderWidth: 2,
        // padding: 170,
        // margin: 30,
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
    },

});

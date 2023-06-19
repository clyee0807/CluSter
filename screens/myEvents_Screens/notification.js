//按鈕功能還沒做 不確定有沒有按到
//目前notification是寫死的

import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import BottomBar from '../../components/bottomBar';
import { Ionicons } from '@expo/vector-icons';

// CREATE TABLE notifs(
//   notif_id int,
//   type int,
//   event text
//   host text
//   deadline text
//   host_pic INT
//   );



export default function Notice({navigation}) {

  //type: 0 for event, 1 for personal invitation
  const [notifs, setNotifs] = useState([
    { notif_id: '0',
      type: 0,
      event: 'ss lab', 
      host: 'penny',
      deadline: '2023-08-20 23:59',
      host_pic: 1,
  
    },
    { notif_id: '1',
      type: 1,
      event: 'birthday party', 
      host: 'PEI',
      deadline: '2023-10-10 23:59',
      host_pic: 2,
    },
    { notif_id: '2',
      type: 1,
      event: 'study group', 
      host: 'Domigo',
      deadline: '2023-08-07 23:59',
      host_pic: 3,
    },
    
  ]);

  function getPicPath(num){
      let profileImgPath ;  // 根據user_photo決定要render哪一張照片(不能dynamic path)

      if (num === 1) {
        profileImgPath = require('../../assets/profiles/profile1.png');
      } else if (num === 2) {
        profileImgPath = require('../../assets/profiles/profile2.png');
      } else {
        profileImgPath = require('../../assets/profiles/profile3.png');
      }

      return profileImgPath;
  }
  const cardWidth = Dimensions.get('window').width * 0.9; // Adjust the width proportion as needed
  const cardHeight = Dimensions.get('window').height * 0.2; // Adjust the height proportion as needed
  const fontSize = Math.min(cardWidth, cardHeight) * 0.1; // Adjust the font size proportion as needed

  const handleClose = () => {
    // Perform any desired actions here
    console.log("Close button is clicked!"); // 示範：在控制台輸出一條訊息
    
  };

  return (
		<View style={[styles.container]}>
			<View style={styles.topSections}>
				
				<View style={styles.list}>
					<FlatList
					data={notifs}
					renderItem={ ({item})=>(
            //導到event page
						<View style={[styles.notifCard, { width: cardWidth }]}>
              
              <View style={styles.container}>
                <TouchableOpacity style={[styles.closeButtonContainer , {borderRadius: 16}]} onPress={handleClose} >
                  <Ionicons name="ios-close" size={18} color="black" />
                </TouchableOpacity>
              </View>

              {/* card touchable */}
		
              <View style={[{width : cardWidth*0.9,borderRadius: 16,} ]}> 
              
                <TouchableOpacity style={{ borderRadius: 16}} onPress={() => navigation.navigate('EventScreen')}> 

                  <View style={styles.rows}>

                    {/* pic */}
                    <View >
                      <Image source={ getPicPath(item.host_pic)} style={styles.profileImg}/>
                    </View>

                    {/* text */}
                    <View style={styles.rows_1}>
                      {item.type === 0 ? ( //by event
                        <View style = {styles.content}>
                          <Text style={styles.headingText}>{item.event}</Text>
                          <Text style={[styles.status, {fontSize}] }>You have an event tomorrow!</Text>
                        </View>
                      ) : ( //by host
                        <View style = {styles.content} >
                          <Text style={styles.headingText}>{item.host}</Text>
                          <Text style={[styles.status, {fontSize}] }> <Text style={styles.boldText}>{item.host}</Text> invites you to join <Text style={styles.boldText}>{item.event}!</Text></Text> 
                          <Text style={[styles.status, {fontSize}] }> <Text style={styles.boldText}>Deadline: </Text> <Text style={styles.deadline}>{item.deadline}</Text></Text>
                        </View>
                      )}
                    </View>

                  </View>
                   
                </TouchableOpacity>

              </View>
              
						</View>

					)}
					/>
				</View>
			</View>
			<BottomBar navigation={navigation}/>
		</View>
	);
}


const styles = StyleSheet.create({

	headingText: {
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 20,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center
	},
  content: {
		marginLeft: 15,
	},
	topSections: {
		flex: 15,
		padding: 10,
	},
	rows: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
  rows_1: {
		flexDirection: 'row',
		alignItems: 'flex-start',
    marginVertical: 8,
	},
 
	list: {
		flex: 1,
	},
	notifCard: {
		height: 100,
		borderRadius: 16,
		backgroundColor: '#fff',
		// backgroundColor: 'pink',
		marginHorizontal: 4,
		marginVertical: 6,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5, 
	},
	status: {
		fontFamily: 'Inter_400Regular',
	},
  boldText: {
		fontFamily: 'Inter_400Regular',
    fontWeight: 'bold',
	},
  deadline: {
    fontFamily: 'Inter_400Regular',
    fontWeight: 'bold',
  },
  profileImg: {
		width: 70,
		height: 70,
		marginVertical: 10, 
		marginLeft: 10, 
		alignSelf: 'flex-start',
	},
	
  closeButtonContainer: {
    position: 'absolute',
    top: 10, // Adjust as needed
    right: 10, // Adjust as needed
  },
});
// 
import { StyleSheet, View, Text, Button, Image, Dimensions, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Entypo } from '@expo/vector-icons';

export default function Porfile({navigation}) {
    const Exampledata = [{
        event: {
          id: '1',
          event_name: 'MyEvent1',
          dates: ['2023/5/20', '2023/5/21', '2023/5/22'], // array of string, storing dates
          host: 'NOT911', // string, storing user_id of 'user'
          members: ['John', 'Peggy', 'Daphne'], // array of string, storing user_id of 'user'
          interval: ['9:00', '10:00', '11:00'], // array of string, storing times
          description: 'This is description.', // string
          deadline: '2023-05-04 22:00', // string, storing date and time
          status: 'In progress',
          event_code: '809BBF', // string
          // Use (date, time) to access the time block.
          // For example, (0, 0) stands for 2023/5/20 9:00.
          available_member: [
              [['111111', '222222', '333333'], ['111111', '222222'], []],
              [['333333'], ['333333'], []],
              [[], [], []],
          ], // 3-D array of string, storing user_id of 'user'
          confirmTime: [0,0] // string, storing date and time
        }
    }];
    const confirmDate = Exampledata[0].event.dates[Exampledata[0].event.confirmTime[0]];
    const confirmInterval = Exampledata[0].event.interval[Exampledata[0].event.confirmTime[1]];

    let content = null;
    if(Exampledata[0].event.status=='In progress') {
      content = (
        <>
          <Text style={globalStyles.instructionText}>The host is deciding the date.</Text>
          <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}>Confirming...</Text>
        </>
      )
    } else {
      content = (
        <>
          <Text style={globalStyles.instructionText}>The chosen date is</Text>
          <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}>{confirmDate}</Text>
          <Text style={[styles.text, { marginBottom: 15 }]}>{confirmInterval}</Text>
        </>
      )
    }


    return (
      <View style={globalStyles.container}>
        <Image
          source={require('../../assets/alien.png')}
          style={styles.img}
        />
        {content}
        <TouchableOpacity onPress={() => navigation.navigate('MyEvent')} style={styles.continueButton}>
						<Text style={styles.continueButtonText}>Continue</Text>
				</TouchableOpacity>
        <View style={styles.shareContainer}>
          {Exampledata[0].event.status !== 'In progress' && (
            <View style={styles.row_2}>
              <Text style={[globalStyles.instructionText,{marginRight: 10}]}>share to friends</Text>
              <TouchableOpacity style={{marginRight: 10}}><Entypo name="facebook" size={24} color="black"/></TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10}}><Entypo name="instagram" size={24} color="black" /></TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    marginTop: 50,
    marginBottom: 10
  },
  text: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton:{
    width: 350,
		marginHorizontal: 35,
		marginVertical: 8,
		height: 45,
		backgroundColor: '#809BBF',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
  continueButtonText: {
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#fff',
	},
  shareContainer: {
    flex: 1,
    padding: 20,
    marginRight: 145
  },
  row_2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
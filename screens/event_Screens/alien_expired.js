// 
import { StyleSheet, View, Text, Button, Image, Dimensions, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Entypo } from '@expo/vector-icons';

export default function Porfile({navigation}) {
    const Exampledata = [
      {
          event: {
              eventName: 'MyEvent',
              dates: ['2023/5/20', '2023/5/21', '2023/5/22'],
              host: 'Anna',
              member: ['Bob', 'Cathy', 'Domingo'],
              interval: ['9:00', '10:00', '11:00'],
              description: 'This is description.',
              deadline: 'na',
              eventCode: '809BBF',
              // Use (date, time) to access the time block.
              // For example, (0, 0) stands for 2023/5/20 9:00.
              availablePeople: [
                  [['Bob', 'Cathy', 'Domingo'], ['Bob', 'Cathy'], []],
                  [['Domingo'], ['Domingo'], []],
                  [[], [], []],
              ],
              topTimeBlock: [
                  [(0, 0)], 
                  [(0, 1)],
                  [(1, 0), (1, 1)]
              ],
              confirmTime: [0, 2]
          }
      }
    ];
    const confirmDate = Exampledata[0].event.dates[Exampledata[0].event.confirmTime[0]];
    const confirmInterval = Exampledata[0].event.interval[Exampledata[0].event.confirmTime[1]];

    return (
      <View style={globalStyles.container}>
        <Image
          source={require('../../assets/alien.png')}
          style={styles.img}
        />
        <Text style={globalStyles.instructionText}>The chosen date is</Text>
        <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}>{confirmDate}</Text>
        <Text style={[styles.text, { marginBottom: 15 }]}>{confirmInterval}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyEvent')} style={styles.continueButton}>
						<Text style={styles.continueButtonText}>Continue</Text>
				</TouchableOpacity>
        <View style={styles.shareContainer}>
          <View style={styles.row_2}>
            <Text style={styles.shareText}>share to friends</Text>
            <TouchableOpacity style={styles.iconContainer}><Entypo name="facebook" size={24} color="black"/></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Entypo name="instagram" size={24} color="black" /></TouchableOpacity>
          </View>
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
  shareText: {
    marginRight: 10,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#A29EB6',
  },
  iconContainer: {
    marginRight: 10
  },
});
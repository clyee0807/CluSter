import React, {useState} from 'react';
import { ImageBackground, Text,StyleSheet,TouchableOpacity, View, Dimensions,Keyboard,TouchableWithoutFeedback, TextInput, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import BottomBar from '../components/bottomBar';
import TextBar from '../components/textBar.js';

export default function Profile({navigation}) {
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
    const handleButtonPress = () => {
        if (isPasswordCorrect) {
          navigation.navigate('MyEvent');
        } else {
          Alert.alert('Login Failed!', 'Please enter correct account and password.');
        }
    };

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

	const account_submitHandler = (text) => {  
		console.log(text);
	    setAccount(text);
	}
    const password_submitHandler = (text) => {  
		// console.log(todos);
	    setPassword(text);
	}

    //responsible design
    const screenWidth = Dimensions.get('window').width;
    const inputWidth = screenWidth ;


	return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <ImageBackground source={require('../assets/LogIn.png')} style={styles.backgroundImage}>
                <View style={styles.container} >
                    <View style={[styles.topSections ,{ width: screenWidth }]}>
                        
                        <Text style={[globalStyles.titleText,{ textAlign: 'center' , marginTop: 150 ,padding: 20, color: 'white'}]}>Welcome Back!</Text>
                        
                        {/* input bar */}
                        <View>
                            <View>
                                <Text style={styles.hint}>Account: </Text>
                                <TextInput 
                                    style={[styles.inputContainer,{ width: screenWidth*0.75 }]} 
                                    placeholder="account : " 
                                    placeholderTextColor="white"
                                    onChangeText={account_submitHandler}
                                    value={account}
                                />
                            </View>
                            
                            <View>
                                <Text style={styles.hint}>password: </Text>
                                <TextInput 
                                    style={[styles.inputContainer,{ width: screenWidth*0.75 }]} 
                                    placeholder="password : " 
                                    placeholderTextColor="white"
                                    onChangeText={password_submitHandler}
                                    secureTextEntry={true} // Displays the input as a password field
                                    value={password} // Display the password value as it is
                                />
                            </View>
                            
                        </View>
                        
                        {/* login button */}
                        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <BottomBar navigation={navigation}/>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain'
    },
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 100,
	},
	topSections: {
		padding: 20,
	},
	
    //font
    hint: {
		textAlign: 'left',
		fontFamily: 'SpaceGrotesk_400Regular',
		fontSize: 18,
        marginLeft: 40,
		marginBottom: 8, 
        color: 'white',
	},

    button: {
        backgroundColor: '#809BBF',
        alignItems: 'center',
        borderRadius: 16, 
        height: 45,
        width: 145,
    	marginHorizontal: 5,
    	marginVertical: 20,
		alignSelf: 'center',

    },

    buttonText: {
		fontFamily: 'SpaceGrotesk_400Regular',
        color: '#FFF',
		alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 9,
        fontSize: 19,
    },
	
    inputContainer: {
		borderColor: '#809BBF',
        borderWidth: 1,
        borderRadius: 16,
        height: 50,
        width: 300,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
        color: 'white',
	},

})

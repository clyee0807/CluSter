import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, FugazOne_400Regular } from '@expo-google-fonts/fugaz-one';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

import { Login } from './Login.js';

function App ({navigation}) {
  let [fontsLoaded] = useFonts({
    FugazOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <LinearGradient colors= {['#0F1A37', '#2C4073', '#07070F']} style={styles.lineargradient}>
    <ImageBackground source={require('./assets/Home.png')} style={styles.backgroundImage}>
      {/* <TouchableOpacity activeOpacity={0.8} style={styles.touchContainer} onPress={()=>navigation.navigate('Login')}> */}
        <View style={styles.container}>  
          <Text style={styles.title}>CluSter</Text>
          <Text style={styles.subtitle}>Tap to Start</Text>
          <Text style={styles.slogan}>Transcending the Universe, Our Encounter Awaits.</Text>
          <StatusBar style="auto" />
        </View> 
      {/* </TouchableOpacity> */}
    </ImageBackground>
    //</LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // lineargradient: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'FugazOne_400Regular',
    color: '#fff',
    fontSize: 64,
    marginTop: 260
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'FugazOne_400Regular',
    fontSize: 24,
    marginTop: 90

  },
  slogan: {
    color: '#fff',
    fontFamily: 'FugazOne_400Regular',
    width: '50%',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 60

  }
});

// export {App, createAppContainer};
export default App;
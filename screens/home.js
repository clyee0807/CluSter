import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, FugazOne_400Regular } from '@expo-google-fonts/fugaz-one';
import { SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';
import { Inter_400Regular } from '@expo-google-fonts/inter';
// import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    FugazOne_400Regular,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return;
  }

  return (
      <ImageBackground source={require('../assets/Home.png')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.title}>CluSter</Text>
          <Text style={styles.subtitle}>Tap to Start</Text>
          <Text style={styles.slogan}>Transcending the Universe, Our Encounter Awaits.</Text>
          <StatusBar style="auto" />
        </TouchableOpacity>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'FugazOne_400Regular',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
    marginTop: 240,
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'FugazOne_400Regular',
    fontSize: 24,
    marginTop: 100
  },
  slogan: {
    color: '#fff',
    fontFamily: 'FugazOne_400Regular',
    width: '50%',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  }
});

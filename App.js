import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CluSter</Text>
      <Text style={styles.subtitle}>Tap to Start</Text>
      <Text style={styles.slogan}>Transcending the Universe, Our Encounter Awaits.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C4073',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // fontFamily: 'Fugaz One',
    color: '#fff',
    fontSize: 60,
    marginBottom: 100
  },
  subtitle: {
    color: '#fff'
  },
  slogan: {
    color: '#fff'
  }
});

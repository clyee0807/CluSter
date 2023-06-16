import { StyleSheet } from 'react-native';
import { useFonts, FugazOne_400Regular } from '@expo-google-fonts/fugaz-one';
import { SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';


export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontFamily: 'SpaceGrotesk_400Regular',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },
  instructionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#A29EB6',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 30,
  },
});
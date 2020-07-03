import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppBotton from './src/routes/bottom.routes';


export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar backgroundColor="#FF101F" />
      <AppBotton />
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppBotton from './src/routes/Bottom.routes';


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

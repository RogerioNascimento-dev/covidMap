import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#FF101F" />
    <Home />
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

import React from 'react';
import { View,Text,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handlenavigateSingle(){    
    navigation.navigate('Single');
  }
  return (
    <View style={styles.container}>
        <Text>Página Inicial</Text>
        <Button title="navegar para Single" onPress={handlenavigateSingle}/>
    </View>    
  );
}

export default Home;
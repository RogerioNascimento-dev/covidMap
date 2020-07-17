import React from 'react';
import { View,Text,Image } from 'react-native';

import styles from './styles';

const ItemList = ({state}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.flag} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}} />
        <View style={styles.containerInfo}>
            <Text style={styles.titleInfo}>{state.state}</Text>
            <View style={styles.containerTextInfo}>
                <Text style={styles.textInfo}>Casos:</Text>
                <Text style={styles.textInfo}>{state.cases}</Text>
            </View>            
            <View style={styles.containerTextInfo}>
                <Text style={styles.textInfo}>Mortos:</Text>
                <Text style={styles.textInfo}>{state.deaths}</Text>
            </View>            
        </View>
    </View>
  );
}

export default ItemList;
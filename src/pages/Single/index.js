import React,{useEffect,useState} from 'react';
import { View,Text,Image } from 'react-native';
import api from '../../services/api';

import styles from './styles';

const Single = ({route}) => {
  const {state:uf} = route.params;  
  const [state,setState] = useState([]);
  useEffect(() =>{    
    async function loadState(){
      const response = await api.get(`/api/report/v1/brazil/uf/${uf}`);               
      setState(response.data)
    }
    loadState()    
  },[uf])
  return (
  <View style={styles.container}>
    <View style={styles.containerData}>
      <View style={styles.containerFlag}>
        <Image style={styles.flag} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}} />
        <Text style={styles.stateText}>{state.state}</Text>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerInfoDetail}>
          <Text style={{color:'#9fb5c8'}}>Casos:</Text>
          <Text style={{color:'#9fb5c8'}}>{state.cases}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={{color:'#9fb5c8'}}>Mortos:</Text>
          <Text style={{color:'#9fb5c8'}}>{state.deaths}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={{color:'#9fb5c8'}}>Suspeitos:</Text>
          <Text style={{color:'#9fb5c8'}}>{state.suspects}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={{color:'#9fb5c8'}}>Negativo:</Text>
          <Text style={{color:'#9fb5c8'}}>{state.refuses}</Text>
        </View>
      </View>
    </View>
  </View>    
  );
}

export default Single;
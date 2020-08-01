import React,{useEffect,useState} from 'react';
import { View,Text,Image,TouchableOpacity,ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

const Single = ({route}) => {
  const navigation = useNavigation();
  const {state:uf} = route.params;  
  const [state,setState] = useState([]);
  const [loading,setLoading]  = useState(true);

  useEffect(() =>{    
    async function loadState(){
      const response = await api.get(`/api/report/v1/brazil/uf/${uf}`);               
      setState(response.data)
      setLoading(false);
    }
    loadState()    
  },[uf])

  if(loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
  return (
  <View style={styles.container}>
    <View style={styles.containerData}>
      <View style={styles.containerFlag}>
        <Image style={styles.flag} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}} />
        <Text style={styles.stateText}>{state.state}</Text>
      </View>
      
        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Casos:</Text>
          <Text style={styles.textInfo}>{state.cases}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Mortos:</Text>
          <Text style={styles.textInfo}>{state.deaths}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Suspeitos:</Text>
          <Text style={styles.textInfo}>{state.suspects}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Negativo:</Text>
          <Text style={styles.textInfo}>{state.refuses}</Text>
        </View>        
      </View>
      
      <TouchableOpacity style={styles.bottomBack} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={15} color="red" />
        <Text style={styles.bottomBackText}>Voltar</Text>          
      </TouchableOpacity>
    </View>  
  );
}
export default Single;
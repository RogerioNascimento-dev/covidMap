import React,{useState,useEffect} from 'react';
import { View,Text,Image } from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from './styles';


const Home = () => {
  const navigation = useNavigation();
  const [currentPosition,setCurrentPosition] = useState();
  const [dados,setDados] = useState([]);

  function handlenavigateSingle(){    
    navigation.navigate('Single');
  }

  function handleRegionChange(region){
    console.log(region);
  }

  useEffect(()=>{
    setCurrentPosition({
      latitude:-11.265109356202254,
      longitude:-54.29489677771926,
      latitudeDelta:70.35107716298356,
      longitudeDelta:41.35656204074622,
    })
    let dados = [{
      "uid": 35,
      "uf": "SP",
      "state": "São Paulo",
      "cases": 302179,
      "deaths": 15351,
      "suspects": 5334,
      "refuses": 596,
      "datetime": "2020-07-02T21:33:46.215Z"
    }]
    setDados(dados)
  },[])
  return (
    <View style={styles.container}>
        <MapView 
        style={styles.map}
        /*onRegionChangeComplete={handleRegionChange}*/        
        initialRegion={currentPosition} >
          
          {dados.map(state =>(
            <Marker key={`${state.uid}`} coordinate={{latitude:-21.9503805,longitude:-49.7304105}}>
            <Image style={styles.marker} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}} />
            <Callout onPress={() =>{
              navigation.navigate('Single',{state:state.uf})
            }}>
              <View style={styles.callout}>
          <Text style={styles.stateName}>{state.state}</Text>
                  <Text style={styles.cases}><AntDesign name="frowno" size={15} color="#9fb5c8" /> {state.cases} Casos confirmados</Text>
                  <Text style={styles.cases}><MaterialCommunityIcons name="skull" size={15} color="#9fb5c8" /> {state.deaths} Óbitos confirmados</Text>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.cases}>Clique para ver mais</Text>
                  </View>
              </View>
            </Callout>
          </Marker>
          ))}


        </MapView>
    </View>    
  );
}

export default Home;
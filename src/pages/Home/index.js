import React,{useState,useEffect} from 'react';
import { View,Text,Image,TextInput,TouchableOpacity } from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'
import { AntDesign,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons'; 
import styles from './styles';
import api from '../../services/api'
import {currentPositionCountry,cordinates} from '../../commons/cordinates';

const Home = () => {   
  const navigation = useNavigation();  
  const [dataApi,setDataApi] = useState([]);   
  const [states,setStates] = useState([]);   
  const [textFilter,setTextFilter] = useState('');
  
  function handleRegionChange(region){
    console.log(region);
  }

  useEffect(()=>{    
    async function loadStates(){
      const response = await api.get('/api/report/v1');   
      const {data} = response.data;
      data.map(es =>{
        cordinates.map(cd =>{
            if(cd.uf === es.uf){
                es.coordenadas = {latitude:cd.latitude,longitude:cd.longitude}
            }
        })
      })    
      setDataApi(data);
      setStates(data);
    }    
    loadStates();
  },[])

  const handleButtonFilter = () =>{    
    
    if(textFilter.trim() === ""){
      setStates(dataApi);
      return;
    }

    let statesFilter = textFilter.split(',');
    let statesFiltered = [];
    statesFilter.map((obj) =>{
      let dataApiFiltered = dataApi.filter((dado)=>{ 
        return obj == dado.uf;  
      })
      statesFiltered.push(...dataApiFiltered)
    })
    setStates(statesFiltered);  
  }

  return (
    <>       
        <MapView         
        style={styles.map}
        /*onRegionChangeComplete={handleRegionChange}*/
        initialRegion={currentPositionCountry}>          
          {states.map(state =>(
            <Marker key={`${state.uid}`} coordinate={state.coordenadas}>
            <Image style={styles.marker} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}} />
            <Callout onPress={() =>{
              navigation.navigate('Single',{state:state.uf})
            }}>                          
              <View style={styles.callout}>
                  <Text style={styles.stateName}>{state.state}</Text>
                  <Text style={styles.cases}><AntDesign name="frowno" size={15} color="#9fb5c8" /> {state.cases} Casos confirmados</Text>
                  <Text style={styles.cases}><MaterialCommunityIcons name="skull" size={15} color="#9fb5c8" /> {state.deaths} Óbitos confirmados</Text>
                  <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <Text style={styles.cases}>Clique para ver mais</Text>
                    <FontAwesome name="arrow-right" size={15} color="red" />
                  </View>
              </View>
            </Callout>
          </Marker>
          ))}      
        </MapView>

        <View style={styles.containerFilter}>
          <TextInput 
          placeholder="Filtrar Ex: SP,BA,AL..."
          placeholderTextColor="#FFB0B5"
          autoCapitalize="characters"
          autoCorrect={false}          
          onChangeText={(valor) => setTextFilter(valor)}
          style={styles.inputFilter}
          returnKeyType="search"
          onSubmitEditing={handleButtonFilter} />  
        
          <TouchableOpacity style={styles.buttonFilter} onPress={handleButtonFilter}>
              <FontAwesome color="red" size={20} name="filter" />
          </TouchableOpacity>           
        </View>  
    </>        
  );
}

export default Home;
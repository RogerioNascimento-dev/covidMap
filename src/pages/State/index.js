import React,{useState,useEffect} from 'react';
import { View,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import ItemList from '../../components/ItemList';

const State = () => {

  const [loading,setLoading]  = useState(true);
  const [dados,setDados]      = useState([]);
  const navigation            = useNavigation();

  useEffect(() =>{
    async function loadStates(){
      const response  = await api.get(`/api/report/v1`);
      const { data }    = response.data;      
      setDados(data);
      setLoading(false);
    }
    loadStates()
  },[]);

  if(loading){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
  return (
    <FlatList 
      data={dados}
      keyExtractor={es =>  `${es.uid}`}
      renderItem={({item}) =>{
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Single',{state:item.uf})}>
          <ItemList state={item} />  
        </TouchableOpacity>
        )        
      }}
    />
  );
}

export default State;
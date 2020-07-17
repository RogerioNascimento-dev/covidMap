import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/Home';
import Single from '../pages/Single';
import { Image } from 'react-native';
import logo from '../assets/logoApp.png';
const Stack = createStackNavigator();

const MapStack = () =>{
    const screenOptions = {
        headerTintColor:'white',
        headerTitleAlign:'center',
        headerTitleStyle:{height:45},
        headerStyle:{backgroundColor:'#FF101F'},        
    }
    return(    
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home}  options={{headerTitle:(<Image source={logo}/>)}} />
            <Stack.Screen name="Single" component={Single} options={{headerTitle:(<Image source={logo}/>)}} />
        </Stack.Navigator>    
    )
}

export default MapStack;
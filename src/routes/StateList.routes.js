import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import logo from '../assets/logoApp.png';
import State from '../pages/State';
import Single from '../pages/Single';

const Stack = createStackNavigator();

const StateList = () =>{
    const screenOptions = {
        headerTintColor:'white',
        headerTitleAlign:'center',
        headerTitleStyle:{height:45},
        headerStyle:{backgroundColor:'#FF101F'},        
    }

    return(    
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="State" component={State} options={{headerTitle:(<Image source={logo}/>)}} />
            <Stack.Screen name="Single" component={Single} options={{headerTitle:(<Image source={logo}/>)}} />
        </Stack.Navigator>    
    )
}

export default StateList;
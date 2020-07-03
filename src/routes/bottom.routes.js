import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import AppStack from './stake.routes'
import State from '../pages/State';
import Word from '../pages/Word'; 

const Bottom = createBottomTabNavigator();

const AppBottom = () =>{    
    return(    
        <Bottom.Navigator
        screenOptions={({route}) =>({
            tabBarIcon:({focused,color,size}) => {
                let iconRoute;
                if(route.name === 'Home'){
                    iconRoute = focused ? <MaterialCommunityIcons name="map-marker-check" size={24} color={color} />:<MaterialCommunityIcons name="map-marker-outline" size={24} color={color} />
                }else if(route.name === 'Word'){
                    iconRoute = focused ? <Fontisto name="world" size={24} color={color} />:<Fontisto name="world-o" size={24} color={color} />
                }else if(route.name === 'State'){
                    iconRoute = focused ? <FontAwesome name="flag" size={24} color={color} /> : <FontAwesome name="flag-o" size={24} color={color} />
                }
                return iconRoute;
            }            
        })}
        tabBarOptions={{
            activeTintColor:'#FF101F',
            inactiveTintColor:'#F77B83'
        }}
        >
            <Bottom.Screen name="Home" component={AppStack} />     
            <Bottom.Screen name="State" component={State} />       
            <Bottom.Screen name="Word" component={Word} />
        </Bottom.Navigator>    
    )
}

export default AppBottom;
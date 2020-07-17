import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import MapStack from './Map.routes'
import StateList from './StateList.routes';

const Bottom = createBottomTabNavigator();

const AppBottom = () =>{    
    return(    
        <Bottom.Navigator
        screenOptions={({route}) =>({
            tabBarIcon:({focused,color,size}) => {
                let iconRoute;
                if(route.name === 'Home'){
                    iconRoute = focused ? <MaterialCommunityIcons name="map-marker-check" size={24} color={color} />:<MaterialCommunityIcons name="map-marker-outline" size={24} color={color} />
                }else if(route.name === 'World'){
                    iconRoute = focused ? <Fontisto name="world" size={24} color={color} />:<Fontisto name="world-o" size={24} color={color} />
                }else if(route.name === 'State'){
                    iconRoute = focused ? <FontAwesome name="flag" size={24} color={color} /> : <FontAwesome name="flag-o" size={24} color={color} />
                }
                return iconRoute;
            }            
        })}
        tabBarOptions={{
            activeTintColor:'#FF101F',
            inactiveTintColor:'#FFB0B5'
        }}
        >
            <Bottom.Screen name="Home" options={{title:"Mapa"}} component={MapStack} />     
            <Bottom.Screen name="State" options={{title:"Lista por Estados"}} component={StateList} />                   
        </Bottom.Navigator>    
    )
}

export default AppBottom;
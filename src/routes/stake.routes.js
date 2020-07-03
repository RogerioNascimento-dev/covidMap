import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Single from '../pages/Single';

const Stack = createStackNavigator();

const AppStack = () =>{
    return(    
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Single" component={Single} options={{title:"Dados por estado"}} />
        </Stack.Navigator>    
    )
}

export default AppStack;
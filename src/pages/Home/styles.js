import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    marker:{
        width:45,
        height:30,        
    },
    callout:{
        width:230,
    },
    stateName:{
        color:'#FF101F',
        fontWeight:'bold',
        fontSize:18
    },
    cases:{
        fontSize:15,
        color:'#9fb5c8'
    },    
});

export default styles;
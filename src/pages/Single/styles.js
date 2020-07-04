import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',        

    },
    containerData:{      
        width: 250,  
        borderWidth:1,
        borderColor:'#CCC',
        borderRadius:10,
        padding:20,                
    },
    containerInfoDetail:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    containerInfo:{
        marginTop:10,
    },
    flag:{
        width:45,
        height:30,
    },
    stateText:{
        fontWeight:'bold',
        color:'#FF101F',
    },
    containerFlag:{
        alignItems:'center',
        justifyContent:'center',
    }
});

export default styles;